<template>
  <component :is="view" :sdk="knownSdk" />
</template>

<script setup lang="ts">
import { Component } from '@vue/runtime-core'
import EntryEditor from './components/EntryEditor.vue'
import Sidebar from './components/Sidebar.vue'
import ConfigScreen from './components/ConfigScreen.vue'
import Field from './components/Field.vue'
import Dialog from './components/Dialog.vue'
import Page from './components/Page.vue'
import { KnownSDK, init, locations } from '~/lib'

const view = ref<Component>()
const knownSdk = ref<KnownSDK>()

init((sdk) => {
  knownSdk.value = sdk as KnownSDK
  const routes = [
    {
      location: locations.LOCATION_ENTRY_EDITOR,
      component: EntryEditor,
    },
    {
      location: locations.LOCATION_APP_CONFIG,
      component: ConfigScreen,
    },
    {
      location: locations.LOCATION_ENTRY_FIELD,
      component: Field,
    },
    {
      location: locations.LOCATION_DIALOG,
      component: Dialog,
    },
    {
      location: locations.LOCATION_ENTRY_SIDEBAR,
      component: Sidebar,
    },
    {
      location: locations.LOCATION_PAGE,
      component: Page,
    },
  ]

  routes.forEach((route) => {
    if (sdk.location.is(route.location)) view.value = route.component
  })
})
</script>
