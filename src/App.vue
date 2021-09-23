<template>
  <component :is="view" :sdk="sdk" />
</template>

<script setup lang="ts">
import EntryEditor from './components/EntryEditor.vue'
import Sidebar from './components/Sidebar.vue'
import ConfigScreen from './components/ConfigScreen.vue'
import Field from './components/Field.vue'
import Dialog from './components/Dialog.vue'
import Page from './components/Page.vue'
import { locations } from '~/lib'
import { SDK } from '~/modules/sdk'

const view = ref()
const sdk = inject(SDK)

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
  if (sdk?.value?.location.is(route.location)) view.value = route.component
})
</script>
