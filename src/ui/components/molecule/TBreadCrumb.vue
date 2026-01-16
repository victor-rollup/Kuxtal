<script setup lang="ts">
  import type { Component } from 'vue';
  import THyperlink from '../atom/THyperlink.vue';

  const props = defineProps<{
    current: string;
    routes: {
      caption: string;
      icon?: Component;
      route: string;
    }[];
    divider?: string;
  }>();
</script>

<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li
        v-for="(breadcrumb, index) in props.routes"
        :key="index"
        :data-divider="props.divider ?? '/'"
        class="breadcrumb__route"
      >
        <THyperlink
          :route="breadcrumb.route"
          class="breadcrumb__route-hyperlink"
        >
          <component :is="breadcrumb.icon" class="breadcrumb__route-caption" />
          <span class="breadcrumb__route-caption | text-truncate">{{
            breadcrumb.caption
          }}</span>
        </THyperlink>
      </li>
      <li class="breadcrumb__current | text-truncate">{{ props.current }}</li>
    </ul>
  </nav>
</template>

<style scoped>
  .breadcrumb {
    max-width: fit-content;
  }

  .breadcrumb__list {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .breadcrumb__route {
    display: flex;
    gap: 0.25rem;
  }

  .breadcrumb__current {
    color: var(--theme-neutral-color-darker);
    opacity: 0.65;
    font-weight: 500;
  }

  .breadcrumb__route-hyperlink {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .breadcrumb__route-hyperlink:hover {
    text-decoration: underline;
  }

  .breadcrumb__route::after {
    content: attr(data-divider);
    color: var(--theme-primary-color-normal);
  }
</style>
