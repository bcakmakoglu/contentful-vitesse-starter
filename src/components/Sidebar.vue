<template>
  <div class="p-4">
    Sidebar works!
  </div>
</template>
<script setup lang="ts">
import { SidebarExtensionSDK } from '@contentful/app-sdk'

interface SidebarProps {
  sdk: SidebarExtensionSDK
}

const props = defineProps<SidebarProps>()
</script>
