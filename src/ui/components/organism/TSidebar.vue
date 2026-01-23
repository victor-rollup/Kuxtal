<script setup lang="ts">
  import type { ISidebar } from '@/types/component.types';

  const props = defineProps<ISidebar['props']>();
</script>

<template>
  <ul class="sidebar">
    <li class="sidebar-item" v-for="item in props.sections">
      <h6 v-if="item.caption" class="sidebar-item__caption">
        {{ item.caption }}
      </h6>
      <div class="sidebar-item__content">
        <THyperlink
          v-for="option in item.options"
          :route="option.route"
          class="sidebar-item__option"
        >
          <component :is="option.icon" />
          <span class="sidebar-item__option-caption">{{ option.caption }}</span>
        </THyperlink>
      </div>
    </li>
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
