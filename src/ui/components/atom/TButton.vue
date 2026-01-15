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
    <span v-if="props.caption">{{ props.caption }}</span>
  </button>
</template>

<style scoped>
  .button {
    border: 0.125rem solid transparent;
    border-radius: 0.5rem;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .button:not([disabled]):hover {
    filter: brightness(115%);
  }

  .button:not([disabled]):active {
    transform: scale(0.98);
  }

  .button[data-mode='filled'] {
    color: var(--button-text-color);
    background: var(--button-background-color);
  }

  .button[data-mode='secondary'] {
    color: var(--button-text-color);
    background: var(--button-secondary-background-color);
  }

  .button[data-mode='outlined'] {
    color: var(--button-background-color);
    background: transparent;
    border-color: var(--button-background-color);
  }

  .button[data-mode='text'] {
    color: var(--button-background-color);
    background: transparent;
    width: fit-content;
    padding: 0rem;
    /* text-decoration: underline; */
  }

  .button[data-mode='icon'] {
    color: var(--button-text-color);
    background: var(--button-secondary-background-color);
    padding: 0.5rem;
    min-width: 2.5rem;
    max-width: fit-content;
  }

  .button__icon {
    min-height: 1rem;
    min-width: 1rem;
    height: 1rem;
    width: 1rem;
  }
</style>
