<script setup lang="ts">
  import type { IFormDialog } from '@/types/component.types';
  import TIconX from '@/ui/components/atom/icon/TIconX.vue';
  import TForm from '@/ui/components/atom/TForm.vue';

  const props = defineProps<IFormDialog['props']>();
  const emit = defineEmits<IFormDialog['emits']>();
</script>

<template>
  <TForm
    class="form-dialog"
    @submit="emit('submit', $event)"
    @reset="emit('reset', $event)"
  >
    <header class="form-dialog__header">
      <div class="form-dialog__container">
        <h4 class="form-dialog__title">{{ props.title }}</h4>
        <p class="form-dialog__description" v-if="props.description">
          {{ props.description }}
        </p>
      </div>
      <TIconX class="form-dialog__icon" @click="emit('cancel')" />
    </header>
    <div class="form-dialog__content">
      <slot />
    </div>
  </TForm>
</template>

<style scoped>
  .form-dialog {
    background: var(--common-background-color);
    border: 0.0125rem solid var(--common-border-color);
    width: 24rem;
    border-radius: 0.5rem;
    height: fit-content;
  }

  .form-dialog__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 0.0125rem solid var(--common-border-color);
  }

  .form-dialog__content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-dialog__icon {
    cursor: pointer;
  }
  .form-dialog__icon:hover {
    color: var(--common-focus-color);
  }
</style>
