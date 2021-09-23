import { getWindow } from 'ssr-window'
import createInitializer from './initialize'
import createAPI from './api'
import { KnownSDK } from '~/types'

export { default as locations } from './locations'

type Init = <T extends KnownSDK = KnownSDK>(
  initCallback: (sdk: T) => void,
  options?: { supressIframeWarning?: boolean }
) => void

export const init = createInitializer(getWindow(), createAPI) as Init
