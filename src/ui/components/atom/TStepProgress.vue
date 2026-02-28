<script setup lang="ts">
  import type { IStepProgress } from '@/types/component.types';

  const props = defineProps<IStepProgress['props']>();
  const currentStep = defineModel<number>({ default: 1 });

  function goToStep(id: number) {
    const previousStep = id - 1;
    if (
      id === 1 ||
      props.steps.find((step) => step.id === previousStep)?.isCompleted
    ) {
      currentStep.value = id;
    }
  }
</script>

<template>
  <div class="step-progress">
    <div
      v-for="(step, index) in props.steps"
      :key="step.id"
      class="step-progress__step"
      @click="goToStep(step.id)"
    >
      <div
        class="step-progress__circle"
        :is-active="step.id === currentStep"
        :is-completed="step.isCompleted"
      >
        {{ step.id }}
      </div>
      <span class="step-progress__label | text-truncate">{{ step.label }}</span>
      <div
        v-if="index < props.steps.length - 1"
        class="step-progress__line"
        :is-completed="step.isCompleted"
      ></div>
    </div>
  </div>
</template>

<style scoped>
  .step-progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .step-progress__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    flex: 1;
    position: relative;
  }

  .step-progress__circle {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    color: var(--theme-neutral-color-900);
    background: var(--theme-neutral-color-100);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.125rem solid var(--separator-border-color);
  }

  .step-progress__circle[is-active='true'] {
    background: var(--theme-neutral-color-200);
  }

  .step-progress__circle[is-completed='true'] {
    background: var(--notification-success-color);
    border-color: transparent;
    color: white;
  }

  .step-progress__label {
    font-size: small;
  }

  .step-progress__line {
    position: absolute;
    top: 1rem;
    left: 50%;
    width: 100%;
    height: 0.25rem;
    background: var(--theme-neutral-color-300);
    z-index: -1;
  }

  .step-progress__line[is-completed='true'] {
    background: var(--notification-success-color);
  }
</style>
