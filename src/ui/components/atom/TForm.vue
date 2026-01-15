<script setup lang="ts">
  import type { IForm } from '@/types/component.types';

  const emit = defineEmits<IForm['emits']>();
</script>

<template>
  <form
    class="form"
    @submit.prevent="emit('submit', $event)"
    @reset="emit('reset', $event)"
  >
    <slot />
  </form>
</template>

<style scoped></style>
