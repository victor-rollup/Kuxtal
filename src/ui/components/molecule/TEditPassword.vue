<script setup lang="ts">
  import type { IEditPassword } from '@/types/component.types';
  import TLabel from '../atom/TLabel.vue';
  import { computed, ref } from 'vue';
  import TIconEye from '../atom/icon/TIconEye.vue';
  import TIconEyeOff from '../atom/icon/TIconEyeOff.vue';

  const DEFAULT_TYPE = 'password';
  const TEXT_TYPE = 'text';
  const props = defineProps<IEditPassword['props']>();
  const model = defineModel<string | null>();
  const type = ref<string>(DEFAULT_TYPE);
  const show = computed(() => type.value === DEFAULT_TYPE);
  const showPassword = () => (type.value = TEXT_TYPE);
  const hidePassword = () => (type.value = DEFAULT_TYPE);
</script>

<template>
  <TLabel :caption="props.caption" class="edit">
    <div class="edit__container">
      <component :is="props.icon" class="edit__icon" />
      <input
        v-model="model"
        v-bind="props"
        :icon="undefined"
        :type="type"
        class="edit__field"
      />
      <TIconEyeOff v-if="show" @click="showPassword" />
      <TIconEye v-else @click="hidePassword" />
    </div>
  </TLabel>
</template>

<style scoped>
  .edit__container {
    height: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: var(--edit-text-color);
    background: var(--edit-background-color);
    border: 0.125rem solid var(--edit-border-color);
  }

  .edit__container:focus-within {
    color: var(--edit-text-focus-color);
    background: var(--edit-background-focus-color);
    border-color: var(--edit-border-focus-color);
    /* box-shadow: 0 0 0.125rem 0.0125rem var(--theme-primary-color-500); */
  }

  .edit__field {
    width: 100%;
    color: inherit;
    font-size: 1rem;
    background: transparent;
    border-radius: 0.25rem;
    padding-inline: 0.25rem;
    outline: none;
  }

  .edit__icon {
    --icon-dimension: 1rem;
    min-height: var(--icon-dimension);
    min-width: var(--icon-dimension);
    height: var(--icon-dimension);
    width: var(--icon-dimension);
  }
</style>
