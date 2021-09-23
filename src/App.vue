<template>
  <component :is="view" :sdk="knownSdk" />
</template>

<script setup lang="ts">
import { KnownSDK } from '@contentful/app-sdk'
import EntryEditor from './components/EntryEditor.vue'
import Sidebar from './components/Sidebar.vue'
import ConfigScreen from './components/ConfigScreen.vue'
import Field from './components/Field.vue'
import Dialog from './components/Dialog.vue'
import Page from './components/Page.vue'

const view = ref<string>()
const knownSdk = ref<KnownSDK>()
if (!import.meta.env.SSR) {
  const sdkImport = () => import('@contentful/app-sdk')
  sdkImport().then((sdk: typeof import('@contentful/app-sdk')) => {
    knownSdk.value = sdk as KnownSDK
    sdk.init((sdkCb) => {
      const routes = [
        {
          location: sdk.locations.LOCATION_ENTRY_EDITOR,
          component: EntryEditor,
        },
        {
          location: sdk.locations.LOCATION_APP_CONFIG,
          component: ConfigScreen,
        },
        {
          location: sdk.locations.LOCATION_ENTRY_FIELD,
          component: Field,
        },
        {
          location: sdk.locations.LOCATION_DIALOG,
          component: Dialog,
        },
        {
          location: sdk.locations.LOCATION_ENTRY_SIDEBAR,
          component: Sidebar,
        },
        {
          location: sdk.locations.LOCATION_PAGE,
          component: Page,
        },
      ]

      routes.forEach((route) => {
        if (sdkCb.location.is(route.location)) view.value = route.component
      })
    })
  })
}
</script>
