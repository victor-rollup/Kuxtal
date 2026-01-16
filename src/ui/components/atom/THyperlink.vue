<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import type { IHyperlink } from '@/types/component.types';

  const props = defineProps<IHyperlink['props']>();
  const emit = defineEmits<IHyperlink['emits']>();
</script>

<template>
  <router-link
    v-if="props.route"
    :to="{ name: route, params }"
    class="hyperlink | text-truncate"
    draggable="false"
    @click="emit('click', $event)"
  >
    <slot />
  </router-link>
  <a
    v-else
    href="#"
    class="hyperlink | text-truncate"
    draggable="false"
    @click="emit('click', $event)"
  >
    <slot />
  </a>
</template>

<style scoped>
  .hyperlink {
    width: fit-content;
    cursor: pointer;
    color: var(--theme-primary-color-500);
  }

  .hyperlink:active {
    color: var(--theme-primary-color-900);
  }
</style>
