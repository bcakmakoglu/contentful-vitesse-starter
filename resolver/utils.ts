import { lstatSync, readdirSync } from 'fs'
import { resolve } from 'path'

export function scan(path: string, validCb: (file: string) => boolean = () => true): string[] {
  let arr: string[] = []
  const scanDir = (dir: string) => {
    try {
      const files = readdirSync(dir)
      if (files) {
        for (const file of files) {
          const item = resolve(dir, file)
          const stats = lstatSync(item)
          if (stats && stats.isDirectory()) {
            scanDir(item)
          } else if ((!stats || stats.isFile()) && validCb(file)) {
            const fileName = file.split('.')
            arr = [...arr, fileName[0]]
          }
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  scanDir(path)
  return arr
}
