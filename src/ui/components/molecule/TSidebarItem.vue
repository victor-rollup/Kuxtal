<script setup lang="ts">
  import type { ISidebarItem } from '@/types/component.types';
  import THyperlink from '../atom/THyperlink.vue';
  
  const props = defineProps<ISidebarItem['props']>();
</script>

<template>
  <li class="sidebar-item">
    <h6 v-if="props.caption" class="sidebar-item__caption">
      {{ props.caption }}
    </h6>
    <div class="sidebar-item__content">
      <THyperlink
        v-for="option in props.options"
        :route="option.route"
        class="sidebar-item__option"
      >
        <component :is="option.icon" />
        <span class="sidebar-item__option-caption">{{ option.caption }}</span>
      </THyperlink>
    </div>
  </li>
</template>

<style scoped>
  .sidebar-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: fit-content;
  }

  .sidebar-item__option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    min-width: 12rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: var(--sidebar-option-text-color);
    text-decoration: none;
    border: 0.0125rem solid transparent;
  }

  .sidebar-item__option:hover,
  .sidebar-item__option.router-link-exact-active {
    background: var(--sidebar-option-background-hover-color);
  }

  .sidebar-item__option.router-link-exact-active {
    background: var(--sidebar-option-background-active-color);
  }

  .sidebar-item__caption {
    text-transform: uppercase;
    opacity: 0.5;
  }
</style>
