<script setup lang="ts">
  import type { IButton } from '@/types/component.types';

  const props = defineProps<IButton['props']>();
  const emit = defineEmits<IButton['emits']>();
</script>

<template>
  <button
    class="button"
    :data-mode="props.mode ?? 'filled'"
    :type="props.type ?? 'button'"
    :form="props.form"
    :disabled="props.disabled"
    @click="emit('click', $event)"
  >
    <component :is="props.icon" class="button__icon" />
    <span v-if="props.caption" class="button__caption">{{
      props.caption
    }}</span>
  </button>
</template>

<style scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    border-radius: 0.5rem;
    padding-block: 0.5rem;
    padding-inline: 1rem;

    font-size: 1rem;
    cursor: pointer;
    border: 0.125rem solid transparent;
  }

  .button:not([disabled]):hover {
    filter: brightness(115%);
  }

  .button:not([disabled]):active {
    transform: scale(0.98);
  }

  .button[data-mode='filled'] {
    color: var(--theme-neutral-color-100);
    background: var(--theme-primary-color-900);
  }

  .button[data-mode='secondary'] {
    color: var(--theme-neutral-color-100);
    background: var(--theme-primary-color-500);
  }

  .button[data-mode='text'],
  .button[data-mode='outlined'] {
    background: transparent;
    color: var(--theme-primary-color-900);
  }

  .button[data-mode='outlined'] {
    font-weight: 500;
    border-color: var(--theme-primary-color-900);
  }

  .button[data-mode='outlined']:hover {
    background: var(--theme-primary-color-300);
  }

  .button[data-mode='text'] {
    padding: 0rem;
    width: fit-content;
  }

  .button[data-mode='icon'] {
    padding: 0.5rem;
    min-width: 2.5rem;
    max-width: fit-content;
    color: var(--theme-neutral-color-100);
    background: var(--theme-primary-color-500);
  }

  .button[data-mode='icon'] .button__caption {
    display: none;
  }

  .button__icon {
    min-height: 1rem;
    min-width: 1rem;
    height: 1rem;
    width: 1rem;
  }
</style>
