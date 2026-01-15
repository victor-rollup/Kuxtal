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
    class="hyperlink"
    draggable="false"
    @click="emit('click', $event)"
  >
    <slot />
  </router-link>
  <a
    v-else
    href="#"
    class="hyperlink"
    draggable="false"
    @click="emit('click', $event)"
  >
    <slot />
  </a>
</template>

<style scoped>
  
</style>
