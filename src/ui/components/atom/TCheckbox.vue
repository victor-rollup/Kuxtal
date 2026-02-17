<script setup lang="ts">
  import type { ICheckbox } from "@/types/component.types";

  const model = defineModel<boolean>();
  const props = defineProps<ICheckbox["props"]>();
</script>

<template>
  <input type="checkbox" v-model="model" v-bind="props" class="checkbox" />
</template>
