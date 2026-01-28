<script setup lang="ts">
  import { ref, computed } from 'vue';

  const modelValue = defineModel<number>({ default: 50 });
  const min = defineModel<number>('min', { default: 0 });
  const max = defineModel<number>('max', { default: 100 });
  const slider = ref<HTMLElement | null>(null);
  const percentage = computed(() => {
    const range = max.value - min.value;
    return ((modelValue.value - min.value) / range) * 100;
  });

  function updateValueFromEvent(event: MouseEvent) {
    if (!slider.value) return;
    const rect = slider.value.getBoundingClientRect();
    const pos = event.clientX - rect.left;
    const newPercent = Math.min(Math.max(pos / rect.width, 0), 1);
    modelValue.value = Math.round(
      min.value + newPercent * (max.value - min.value),
    );
  }

  function onClick(e: MouseEvent) {
    updateValueFromEvent(e);
  }

  function onDrag(event: MouseEvent) {
    updateValueFromEvent(event);
  }

  function onMouseDown() {
    const move = (event: MouseEvent) => onDrag(event);
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }
</script>

<template>
  <div class="slider" ref="slider" @click="onClick">
    <div class="slider-fill" :style="{ width: percentage + '%' }"></div>
    <div
      class="slider-thumb"
      :style="{ left: percentage + '%' }"
      @mousedown="onMouseDown"
    ></div>
  </div>
</template>

<style scoped>
  .slider {
    position: relative;
    height: 0.375rem;
    background: var(--slider-background-color);
    border-radius: 0.25rem;
    cursor: pointer;
    margin-block: 1rem;
  }

  .slider-fill {
    position: absolute;
    height: 100%;
    background: var(--slider-fill-background-color);
    border-radius: 0.25rem;
  }

  .slider-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--slider-thumb-background-color);
    box-shadow: 0 0 0.125rem 0.125rem rgb(0 0 0 / 0.125);
    cursor: grab;
  }
</style>
