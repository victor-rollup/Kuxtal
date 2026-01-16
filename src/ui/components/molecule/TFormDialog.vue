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
        <p
          class="form-dialog__description | text-truncate-multiline"
          v-if="props.description"
        >
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
  :global(:root) {
    --form-dialog-border-color: skyblue;
    --form-dialog-background-color: transparent;

    --form-dialog-header-text-color: #000000;
    --form-dialog-header-border-color: skyblue;
    --form-dialog-header-background-color: transparent;

    --form-dialog-icon-text-color: #999999;
    --form-dialog-icon-text-hover-color: #000000;
  }

  html[data-theme='dark'] .form-dialog {
    --form-dialog-border-color: #232f48;
    --form-dialog-background-color: #161e2d;

    --form-dialog-header-text-color: #92a4c9;
    --form-dialog-header-border-color: #232f48;
    --form-dialog-header-background-color: #161e2d;

    --form-dialog-icon-text-color: #92a4c9;
    --form-dialog-icon-text-hover-color: #ffffff;
  }

  .form-dialog {
    background: var(--form-dialog-background-color);
    border: 0.0125rem solid var(--form-dialog-border-color);
    border-radius: 0.5rem;
    height: fit-content;
  }

  .form-dialog__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 1rem;
    color: var(--form-dialog-header-text-color);
    background: var(--form-dialog-header-background-color);
    border-bottom: 0.0125rem solid var(--form-dialog-header-border-color);
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

  .form-dialog__icon {
    color: var(--form-dialog-icon-text-color);
  }

  .form-dialog__icon:hover {
    color: var(--form-dialog-icon-text-hover-color);
  }
</style>
