<script setup lang="ts">
  import type { ILabel } from '@/types/component.types';

  const props = defineProps<ILabel['props']>();
</script>

<template>
  <label class="label" v-bind="props">
    <span v-if="props.caption" class="label__caption">{{ props.caption }}</span>
    <slot />
  </label>
</template>

<style scoped>
  .label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .label__caption {
    font-size: 0.85rem;
    opacity: 0.5;
  }

  .label:has(:focus) .label__caption {
    opacity: 1;
  }

  .label:has([required]:not([disabled])) .label__caption::after {
    content: ' (requerido)';
  }
</style>
