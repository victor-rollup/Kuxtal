<script lang="ts" setup>
  import { computed } from 'vue';
  import TLabel from '../atom/TLabel.vue';
  import type { IMemo } from '@/types/component.types';

  const model = defineModel<string>({ default: String() });
  const props = defineProps<IMemo['props']>();
  const charCount = computed(() => model.value.length);
</script>

<template>
  <TLabel :caption="props.caption" class="memo">
    <textarea
      v-model="model"
      :maxlength="maxLength"
      class="memo__field"
    ></textarea>
    <small class="memo__counter">
      <span>{{ charCount }}</span
      ><span v-if="maxLength"> / {{ maxLength }}</span>
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
    border: 0.125rem solid transparent;
    background: var(--theme-neutral-color-200);
    border-radius: 0.125rem;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    resize: vertical;
    min-height: 4rem;
    max-height: 8rem;
  }

  .memo__field:focus {
    color: var(--theme-primary-color-500);
    border-color: var(--theme-primary-color-500);
  }
</style>
