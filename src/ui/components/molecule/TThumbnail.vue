<script setup lang="ts">
  import { UI } from '@/ui';
  import type { IImage } from '@/types/component.types';

  const props = defineProps<IImage['props']>();
</script>

<template>
  <UI.Image v-bind="props" class="thumbnail" />
</template>

<style scoped>
  .thumbnail {
    height: 4rem;
    width: 4rem;
  }
</style>
