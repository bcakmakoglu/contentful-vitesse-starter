import { kebabCase, pascalCase } from 'scule'
import { ImportInfo } from 'unplugin-auto-import/dist/types'

import { scan } from './utils'

type Options = {
  path: string // path to where the resolver should look for files (i.e. your components dir, a node_modules dir etc.)
  resolve:
    | ((name: string, slice?: string) => { module: string; name?: string; from?: string } | undefined)
    | { module: string; name?: string; from?: string } // how to resolve the module, either provide a function or the info structure
  prefix?: string // set to '' for no prefix
  enabledCollections?: string[] // which collections to enable, i.e. accordion, asset etc.
}

function validFile(name: string) {
  return (
    !name.toLowerCase().startsWith('readme') &&
    !name.toLowerCase().startsWith('package') &&
    !name.toLowerCase().startsWith('component') &&
    !name.toLowerCase().startsWith('factory') &&
    !name.toLowerCase().startsWith('misc') &&
    !name.toLowerCase().startsWith('index')
  )
}

function inCollection(name: string, collections?: string[]) {
  return (
    (collections && collections.find((collection) => collection.toLowerCase().startsWith(name.toLowerCase()))) ||
    !collections ||
    !collections.length
  )
}

const Resolver: (options?: Options) => (name: string) => ImportInfo | undefined = (options) => {
  const { path, resolve = { module: '', name: '', from: undefined }, prefix: rawPrefix, enabledCollections } = options ?? {}
  if (!path || path === '') throw Error('No path specified in resolver! Check your vite.config.ts')

  let collection: string[] = scan(path, validFile)

  return (name: string) => {
    const prefix = rawPrefix ? `${kebabCase(rawPrefix)}-` : ''
    const kebab = kebabCase(name)
    if (!kebab.startsWith(prefix)) return

    const slice = kebab.slice(prefix.length)
    if (!inCollection(slice, enabledCollections)) return

    if (collection.some((item) => pascalCase(slice) === pascalCase(item))) {
      let importInfo: ImportInfo = {
        module: '',
        name: '',
        from: undefined,
      }
      if (typeof resolve === 'function') importInfo = { ...importInfo, ...resolve(name, slice) }
      else {
        importInfo = {
          ...importInfo,
          module: resolve.module,
          name: resolve.name ?? name,
          from: resolve.from,
        }
      }
      return importInfo
    }
  }
}

export default Resolver
