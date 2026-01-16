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
  :global(:root) {
    --breadcrumb-current-text-color: #000000;
    --breadcrumb-route-text-color: #1878b8;
    --breadcrumb-route-text-hover-color: #07193d;
    --breadcrumb-divider-text-color: var(--breadcrumb-route-text-color);
  }

  html[data-theme='dark'] .breadcrumb {
    --breadcrumb-current-text-color: #ffffff;
    --breadcrumb-route-text-color: #92a4c9;
    --breadcrumb-route-text-hover-color: #ffffff;
    --breadcrumb-divider-text-color: #92a4c9;
  }

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
    color: var(--breadcrumb-current-text-color);
    opacity: 0.65;
  }

  .breadcrumb__route-hyperlink {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: var(--breadcrumb-route-text-color) !important;
  }

  .breadcrumb__route-hyperlink:hover {
    color: var(--breadcrumb-route-text-hover-color) !important;
  }

  .breadcrumb__route::after {
    content: attr(data-divider);
    color: var(--breadcrumb-divider-text-color);
  }
</style>
