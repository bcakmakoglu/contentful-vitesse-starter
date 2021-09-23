<template>
  <div class="p-4">
    Page works!
  </div>
</template>
<script setup lang="ts">
import { PageExtensionSDK } from '@contentful/app-sdk'

interface PageProps {
  sdk: PageExtensionSDK
}

const props = defineProps<PageProps>()
</script>
