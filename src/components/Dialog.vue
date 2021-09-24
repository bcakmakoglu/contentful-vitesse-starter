<template>
  <div class="p-4">
    Dialog works!
  </div>
</template>
<script setup lang="ts">
import { DialogExtensionSDK } from '~/types'

interface DialogProps {
  sdk: DialogExtensionSDK
}

const props = defineProps<DialogProps>()
</script>
