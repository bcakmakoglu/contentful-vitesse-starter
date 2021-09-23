<template>
  <div class="p-4">
    Field works!
  </div>
</template>
<script setup lang="ts">
import { FieldExtensionSDK } from '@contentful/app-sdk'

interface FieldProps {
  sdk: FieldExtensionSDK
}

const props = defineProps<FieldProps>()
</script>
