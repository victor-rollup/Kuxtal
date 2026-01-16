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

  .edit:has(.edit__field[type='file']) .edit__icon {
    display: none;
  }

  .edit:has(.edit__field[type='range']) .edit__container {
    border-color: transparent;
  }

  .edit:has(.edit__field[type='file']) .edit__container {
    padding: 0rem;
    border-color: transparent;
  }

  .edit:has(.edit__field[type='file']) .edit__field::file-selector-button {
    background: var(--theme-primary-color-500);
    color: var(--theme-neutral-color-100);
    border: none;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    font-size: 0.85rem;
    cursor: pointer;
    border-radius: 0.25rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }

  .edit:has(.edit__field[type='color']) {
    max-width: 2.5rem;
  }

  .edit:has(.edit__field[type='color']) .edit__icon {
    display: none;
  }

  .edit:has(.edit__field[type='color']) .edit__field {
    border-radius: 1rem;
  }

  .edit:has(.edit__field[type='submit']),
  .edit:has(.edit__field[type='reset']),
  .edit:has(.edit__field[type='image']),
  .edit:has(.edit__field[type='button']),
  .edit:has(.edit__field[type='radio']),
  .edit:has(.edit__field[type='checkbox']) {
    display: none;
  }

  .edit__field::placeholder {
    font-size: 0.85rem;
  }

  .edit__container {
    display: flex;
    align-items: center;
    border-radius: 0.125rem;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    gap: 0.5rem;
    text-align: inherit;
    color: var(--theme-neutral-color-900);
    background: var(--theme-neutral-color-200);
    border-bottom: 0.125rem solid var(--theme-neutral-color-500);
  }

  .edit__container:focus-within {
    border-color: var(--theme-primary-color-500);
  }
</style>
