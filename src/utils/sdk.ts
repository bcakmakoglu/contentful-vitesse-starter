import { InjectionKey } from 'vue-demi'
import { Ref } from 'vue'
import { KnownSDK } from '~/types'

type SDKInjection = { api: KnownSDK; customApi: any }
export const SDK: InjectionKey<Ref<SDKInjection>> = Symbol('SDK')
export const useSdk = () => inject(SDK) as unknown as Ref<SDKInjection>
