<script setup lang="ts">
  import type { ICountryFlag } from '@/types/component.types';

  const props = defineProps<ICountryFlag['props']>();
</script>

<template>
  <div :class="`country-flag | ${props.code}`"></div>
</template>

<style scoped>
  .country-flag {
    height: 2rem;
    width: 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.25rem;
    border: 0.0125rem solid var(--separator-border-color);
  }
</style>
