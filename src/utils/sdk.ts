import { InjectionKey } from 'vue-demi'
import { Ref } from 'vue'
import { Apis } from '~/types'

type SDKInjection = Apis
export const SDK: InjectionKey<Ref<SDKInjection>> = Symbol('SDK')
export const useSdk = () => inject(SDK) as unknown as Ref<SDKInjection>
