<template>
  <div class="p-4">
    Config Screen works!
  </div>
</template>
<script setup lang="ts">
import { AppExtensionSDK } from '@contentful/app-sdk'

interface ConfigProps {
  sdk: AppExtensionSDK
}

const props = defineProps<ConfigProps>()
</script>
