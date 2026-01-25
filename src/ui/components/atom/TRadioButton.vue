<script setup lang="ts">
  import type { IRadioButton } from '@/types/component.types';

  const model = defineModel<string | number>();
  const props = defineProps<IRadioButton['props']>();
</script>

<template>
  <input type="radio" v-model="model" v-bind="props" class="radio-button" />
</template>
