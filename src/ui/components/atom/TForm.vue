<script setup lang="ts">
  import type { IForm } from '@/types/component.types';

  const props = defineProps<IForm['props']>();
</script>

<template>
  <form class="form" v-bind="props" @submit.prevent>
    <slot />
  </form>
</template>

<style scoped></style>
