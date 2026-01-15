<script setup lang="ts">
  import type { IEdit } from '@/types/component.types';
  import TLabel from '../atom/TLabel.vue';

  const props = defineProps<IEdit['props']>();
  const emit = defineEmits<IEdit['emits']>();
  const model = defineModel<string | number>();
</script>

<template>
  <TLabel :caption="props.caption" class="edit">
    <div class="edit__container">
      <component :is="props.icon" class="edit__icon" />
      <input
        class="edit__field"
        v-model="model"
        :type="props.type"
        :placeholder="props.placeholder"
        :required="props.required"
        :disabled="props.disabled"
        :min="props.min"
        :max="props.max"
        :minlength="props.minlength"
        :maxlength="props.maxlength"
        :pattern="props.pattern"
        @input="emit('input', $event)"
        @beforeinput="emit('beforeinput', $event)"
        @blur="emit('blur', $event)"
        @change="emit('change', $event)"
        @focus="emit('focus', $event)"
        @click="emit('click', $event)"
        @paste="emit('paste', $event)"
        @keypress="emit('keypress', $event)"
      />
    </div>
  </TLabel>
</template>

<style scoped>
  .edit__icon {
    min-height: 1rem;
    min-width: 1rem;
    height: 1rem;
    width: 1rem;
  }

  .edit__field {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    font-size: 1rem;
    text-align: inherit;
  }

  .edit__field::placeholder {
    font-size: 0.85rem;
  }

  .edit__container {
    display: flex;
    align-items: center;
    border-bottom: 0.125rem solid var(--edit-border-color);
    border-radius: 0.125rem;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    gap: 0.5rem;
    color: var(--edit-text-color);
    background: var(--edit-background-color);
    text-align: inherit;
  }

  .edit__container:focus-within {
    color: var(--edit-text-focus-color);
    background: var(--edit-background-focus-color);
    border-color: var(--edit-border-color-focus);
  }

  /* .edit__container:has(:invalid:not(:placeholder-shown)) {
    background: rgb(185, 108, 108);
    border-color: darkred;
  } */
</style>
