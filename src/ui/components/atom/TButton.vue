<script setup lang="ts">
  import type { IButton } from '@/types/component.types';
  import { computed } from 'vue';

  const props = defineProps<IButton['props']>();
  const attributes = computed(function () {
    const { icon, theme, caption, mode, ...more } = props;
    return more;
  });
</script>

<template>
  <button
    v-bind="attributes"
    class="button"
    :type="props.type ?? 'button'"
    :data-mode="props.mode ?? 'filled'"
  >
    <component :is="props.icon" class="button__icon" />
    <span v-if="props.caption" class="button__caption">{{
      props.caption
    }}</span>
  </button>
</template>

<style>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    border-radius: 0.5rem;
    padding-block: 0.75rem;
    padding-inline: 1rem;

    font-size: 1.25rem;
    cursor: pointer;
    border: 0.125rem solid transparent;
  }

  .button:not([disabled]):hover {
    filter: brightness(115%);
  }

  .button:not([disabled]):active {
    transform: scale(0.98);
  }

  .button[data-mode='icon'],
  .button[data-mode='filled'] {
    color: var(--filled-button-text-color);
    background: var(--filled-button-background-color);
  }

  .button[data-mode='icon'] {
    padding: 0.5rem;
    min-width: 2.5rem;
    max-width: fit-content;
  }

  .button[data-mode='icon'] .button__caption {
    display: none;
  }

  .button[data-mode='secondary'] {
    color: var(--secondary-button-text-color);
    background: var(--secondary-button-background-color);
  }

  .button[data-mode='text'],
  .button[data-mode='outlined'] {
    background: transparent;
    color: var(--outlined-button-text-color);
  }

  .button[data-mode='outlined'] {
    font-weight: 500;
    border-color: var(--outlined-button-text-color);
  }

  .button[data-mode='text'] {
    padding: 0rem;
    width: fit-content;
  }

  .button__icon {
    --icon-dimension: 1rem;
  }
</style>
