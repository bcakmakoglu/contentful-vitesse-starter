<template>
  <div class="p-4">
    Page works!
  </div>
</template>
<script setup lang="ts">
import { PageExtensionSDK } from '~/types'

interface PageProps {
  sdk: PageExtensionSDK
}

const props = defineProps<PageProps>()
</script>
