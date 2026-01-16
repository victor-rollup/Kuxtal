<script setup lang="ts">
  import type { ISidebar } from '@/types/component.types';
  import TSidebarItem from '../molecule/TSidebarItem.vue';

  const props = defineProps<ISidebar['props']>();
</script>

<template>
  <ul class="sidebar">
    <TSidebarItem v-for="item in props.items" v-bind="item" />
  </ul>
</template>

<style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 1 auto;
    min-width: fit-content;
    padding: 1rem;
    background: var(--sidebar-background-color);
    border-right: 0.0125rem solid var(--sidebar-border-color);
  }
</style>
