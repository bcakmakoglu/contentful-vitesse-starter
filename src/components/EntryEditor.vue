<template>
  <div class="p-4">
    Entry Editor works!
  </div>
</template>
<script setup lang="ts">
import { EditorExtensionSDK } from '~/types'

interface EntryProps {
  sdk: EditorExtensionSDK
}

const props = defineProps<EntryProps>()
</script>
