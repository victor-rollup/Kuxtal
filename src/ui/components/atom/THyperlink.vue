<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import type { IHyperlink } from '@/types/component.types';

  const props = defineProps<IHyperlink['props']>();
</script>

<template>
  <router-link
    v-if="props.route"
    v-bind="props"
    :to="{ name: props.route, params: props.params }"
    class="hyperlink | text-truncate"
  >
    <slot />
  </router-link>
  <a v-else v-bind="props" href="#" class="hyperlink | text-truncate">
    <slot />
  </a>
</template>

<style scoped>
  .hyperlink {
    display: flex;
    width: fit-content;
    cursor: pointer;
    text-decoration: underline;
    color: var(--hyperlink-text-color);
  }

  .hyperlink:active {
    color: var(--hyperlink-text-active-color);
  }
</style>
