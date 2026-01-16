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
  :global(:root) {
    --sidebar-background-color: #ffffff;
    --sidebar-border-color: #2b2b2b;
  }

  html[data-theme='dark'] .sidebar {
    --sidebar-background-color: #101622;
    --sidebar-border-color: #232f48;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 1 auto;
    min-width: fit-content;
    /* max-width: fit-content; */
    padding: 1rem;
    background: var(--sidebar-background-color);
    border-right: 0.0125rem solid var(--sidebar-border-color);
  }
</style>
