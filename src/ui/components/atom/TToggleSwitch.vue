<script setup lang="ts">
import type { IToggleSwitch } from '@/types/component.types';

  const model = defineModel<boolean>()
  const props = defineProps<IToggleSwitch['props']>()
</script>

<template>
  <label class="toggle-switch">
    <input v-model="model" class="toggle-switch__thumb" v-bind="props" type="checkbox" />
  </label>
</template>

<style scoped>
  .toggle-switch {
    width: 3rem;
    height: fit-content;
    display: flex;
    align-items: center;
    padding: 0.125rem;
    border-radius: 1rem;
    background: var(--toggle-switch-background-color);
    cursor: pointer;
  }

  .toggle-switch:has(:checked) {
    justify-content: flex-end;
    background: var(--toggle-switch-background-checked-color);
  }

  .toggle-switch__thumb {
    appearance: unset;
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    background: var(--toggle-switch-thumb-background-color);
    cursor: pointer;
    box-shadow: 0 0 0.125rem 0.125rem rgb(0 0 0 / 0.125);
  }
</style>