import { getWindow } from 'ssr-window'
import { KnownSDK, UserModule } from '~/types'
import createInitializer from '~/lib/initialize'
import createAPI from '~/lib/api'
import { SDK } from '~/utils'

export const install: UserModule = ({ app }) => {
  const apis = ref<{ api: KnownSDK; customApi: any }>()
  app.provide(SDK, apis)
  const init = createInitializer(getWindow(), createAPI)
  const { onReady } = init({ supressIframeWarning: true })
  onReady(val => apis.value = val)
}
