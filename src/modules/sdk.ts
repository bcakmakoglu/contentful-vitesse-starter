import { InjectionKey } from 'vue-demi'
import { Ref } from 'vue'
import { KnownSDK, UserModule } from '~/types'
import { init } from '~/lib'

export const SDK: InjectionKey<Ref<KnownSDK>> = Symbol('SDK')

const useSdk = () => {
  const knownSdk = ref<KnownSDK>()
  init((sdk) => {
    knownSdk.value = sdk
  })

  return knownSdk
}

export const install: UserModule = ({ app }) => {
  app.provide(SDK, useSdk())
}
