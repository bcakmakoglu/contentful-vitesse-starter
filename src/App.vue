<template>
  <main>
    <component :is="view" v-if="view && sdk" :sdk="sdk.api" />
    <Loading v-else />
  </main>
</template>

<script setup lang="ts">
import { useLocation, useSdk } from '~/utils'

const view = useLocation()
const sdk = useSdk()
</script>
