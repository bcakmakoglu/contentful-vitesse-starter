<template>
  <div class="p-4">
    Entry Editor works!
  </div>
</template>
<script setup lang="ts">
import { EditorExtensionSDK } from '@contentful/app-sdk'

interface EntryProps {
  sdk: EditorExtensionSDK
}

const props = defineProps<EntryProps>()
</script>
