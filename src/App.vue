<template>
  <main>
    <template v-if="sdk && sdk.api">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <suspense>
            <component :is="view" :sdk="sdk.api" />
            <template #fallback>
              <Loading />
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </template>
    <Loading v-else />
  </main>
</template>

<script setup lang="ts">
import { useLocation, useSdk } from '~/utils'

const view = useLocation()
const sdk = useSdk()
</script>
