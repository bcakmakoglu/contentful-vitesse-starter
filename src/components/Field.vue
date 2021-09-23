<template>
  <div class="p-4">
    Field works!
  </div>
</template>
<script setup lang="ts">
import { FieldExtensionSDK } from '~/types'

interface FieldProps {
  sdk: FieldExtensionSDK
}

const props = defineProps<FieldProps>()
</script>
