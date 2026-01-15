<script setup lang="ts">
  import type { IAccordion } from '@/types/component.types';
  import TIconChevron from './icon/TIconChevron.vue';
  import { ref } from 'vue';
  import Helper from '@/helper';

  const accordion = ref<HTMLDetailsElement | null>(Helper.Use.NULL);
  const props = defineProps<IAccordion['props']>();
  const emit = defineEmits<IAccordion['emits']>();

  defineExpose<IAccordion['expose']>({
    open() {
      if (!accordion.value) {
        return;
      }
      accordion.value.open = Helper.Use.TRUE;
    },
    close() {
      if (!accordion.value) {
        return;
      }
      accordion.value.open = Helper.Use.FALSE;
    },
  });
</script>

<template>
  <details
    ref="accordion"
    :open="props.open"
    class="accordion"
    @toggle="emit('toggle', $event)"
  >
    <summary class="accordion__header">
      <h4 class="accordion__title | text-truncate">{{ props.title }}</h4>
      <TIconChevron class="accordion__chevron" />
    </summary>
    <div class="accordion__content">
      <slot />
    </div>
  </details>
</template>

<style scoped>
  .accordion {
    border-radius: 0.5rem;
    border: 0.0125rem solid var(--accordion-border-color);
  }

  .accordion__header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    color: var(--accordion-header-text-color);
    background: var(--accordion-header-background-color);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    cursor: pointer;
    border: 0.0125rem solid var(--accordion-header-border-color);
  }

  .accordion:not([open]) .accordion__header {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  .accordion__chevron {
    transform: rotate(90deg);
    transition: all 0.3s ease;
  }

  .accordion[open] .accordion__chevron {
    transform: rotate(-90deg);
  }

  .accordion__content {
    padding: 1rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: var(--accordion-content-background-color);
  }
</style>
