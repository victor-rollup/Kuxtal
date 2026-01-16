<script setup lang="ts">
  import type { IComboBox } from '@/types/component.types';
  import TLabel from '../atom/TLabel.vue';

  const model = defineModel<null | string | number>({ default: null });
  const props = defineProps<IComboBox['props']>();
</script>

<template>
  <TLabel :caption="props.caption">
    <select v-model="model" class="combo-box">
      <option disabled class="combo-box__option" :value="null">
        Selecciona un elemento
      </option>
      <option v-if="props.allowNull" class="combo-box__option" :value="null">
        Ninguno/a
      </option>
      <option
        v-for="(option, index) in props.options"
        :key="index"
        :value="option.value"
        class="combo-box__option"
      >
        {{ option.label }}
      </option>
    </select>
  </TLabel>
</template>

<style scoped>
  .combo-box {
    padding: 0.25rem;
    border-radius: 0.125rem;
    outline: none;
    color: var(--edit-text-color);
    background: var(--edit-background-color);
    border: 0.125rem solid transparent;
  }

  .combo-box:focus {
    color: var(--edit-text-focus-color);
    border-color: var(--edit-border-focus-color);
    background: var(--edit-background-focus-color);
  }
</style>
