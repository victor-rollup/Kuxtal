<script setup lang="ts">
  import type { IImage } from '@/types/component.types';

  const props = defineProps<IImage['props']>();
</script>

<template>
  <img v-bind="props" class="image" />
</template>

<style scoped>
  .image {
    display: block;
    max-width: 100%;
    object-fit: contain;
  }
</style>