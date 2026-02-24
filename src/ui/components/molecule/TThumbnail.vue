<script setup lang="ts">
  import type { IImage } from '@/types/component.types';
  import TImage from '../atom/TImage.vue';

  const props = defineProps<IImage['props']>();
</script>

<template>
  <TImage v-bind="props" class="thumbnail" />
</template>

<style scoped>
  .thumbnail {
    height: 4rem;
    width: 4rem;
  }
</style>
