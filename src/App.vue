<template>
  <suspense>
    <template #default>
      <component :is="view" :sdk="sdk.api" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </suspense>
</template>

<script setup lang="ts">
import { useLocation, useSdk } from '~/utils'

const view = useLocation()
const sdk = useSdk()
</script>
