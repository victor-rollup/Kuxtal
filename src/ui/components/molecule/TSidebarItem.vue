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
    gap: 0.5rem;
  }

  .sidebar-item__option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    min-width: 12rem;
    width: 100%;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    color: var(--sidebar-item-text-color);
    text-decoration: none;
    border: 0.0125rem solid transparent;
  }

  .sidebar-item__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .sidebar-item__option:hover {
    color: var(--sidebar-item-text-hover-color);
    background: var(--sidebar-item-background-hover-color);
  }

  .sidebar-item__option.router-link-exact-active {
    color: var(--sidebar-item-text-active-color);
    background: var(--sidebar-item-background-active-color);
  }

  .sidebar-item__caption {
    text-transform: uppercase;
    color: var(--sidebar-item-caption-text-color);
  }
</style>
