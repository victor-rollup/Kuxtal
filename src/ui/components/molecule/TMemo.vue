<script lang="ts" setup>
  import { computed } from 'vue';
  import TLabel from '../atom/TLabel.vue';
  import type { IMemo } from '@/types/component.types';

  const model = defineModel<string | null>({ default: String() });
  const props = defineProps<IMemo['props']>();
  const charCount = computed(() => model.value?.length);
</script>

<template>
  <TLabel :caption="props.caption" class="memo">
    <textarea v-model="model" v-bind="props" class="memo__field"></textarea>
    <small v-if="!model?.length" class="memo__counter">
      <span>{{ charCount }}</span
      ><span v-if="props.maxlength"> / {{ props.maxlength }}</span>
    </small>
  </TLabel>
</template>

<style scoped>
  .memo {
    display: flex;
  }

  .memo__counter {
    opacity: 0.5;
    font-size: 0.85rem;
    align-self: self-end;
  }

  .memo__field {
    border: 0.125rem solid var(--edit-border-color);
    color: var(--edit-text-color);
    background: var(--edit-background-color);
    border-radius: 0.25rem;
    padding: 0.75rem;
    font-size: 1rem;
    outline: none;
    resize: vertical;
    min-height: 4rem;
    max-height: 8rem;
  }

  .memo__field:focus {
    color: var(--edit-text-focus-color);
    border-color: var(--edit-border-focus-color);
    background: var(--edit-background-focus-color);
  }
</style>
