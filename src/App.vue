<template>
  <component :is="view" />
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'

const view = ref<string>()
if (typeof window !== 'undefined') {
  const sdkImport = () => import('@contentful/app-sdk')
  if (!import.meta.env.SSR) {
    sdkImport().then((sdk: typeof import('@contentful/app-sdk')) => {
      sdk.init((sdkCb) => {
        const routes = [
          {
            location: sdk.locations.LOCATION_ENTRY_EDITOR,
            component: Footer,
          },
        ]

        routes.forEach((route) => {
          if (sdkCb.location.is(route.location)) view.value = route.component
        })
      })
    })
  }
}
</script>
