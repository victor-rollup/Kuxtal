<script setup lang="ts">
  import type { IMenu } from '@/types/component.types';
  import TMenu from '../molecule/TMenu.vue';

  const props = defineProps<IMenu['props']>();
</script>

<template>
  <nav class="menu-bar">
    <TMenu v-bind="props" class="menu-bar__list" orientation="horizontal" />
  </nav>
</template>

<style scoped>
  .menu-bar {
    padding: 0.125rem;
    background: var(--menu-background-color);
    border-bottom: 0.0125rem solid var(--menu-border-color);
  }
  .menu-bar__list {
    border: none;
  }
</style>
