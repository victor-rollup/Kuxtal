<script setup lang="ts">
  import { ref, computed } from 'vue';

  // Modelos para min y max con defineModel
  const minValue = defineModel<number>('minimum', { default: 0 });
  const maxValue = defineModel<number>('maximun', { default: 100 });
  const props = withDefaults(
    defineProps<{
      min?: number;
      max?: number;
    }>(),
    {
      max: 100,
      min: 0,
    },
  );

  const slider = ref<HTMLElement | null>(null);

  // Porcentajes para posicionar los thumbs
  const minPercent = computed(
    () => ((minValue.value - props.min) / (props.max - props.min)) * 100,
  );
  const maxPercent = computed(
    () => ((maxValue.value - props.min) / (props.max - props.min)) * 100,
  );

  // Función para actualizar valores según posición
  function updateValueFromEvent(e: MouseEvent, type: 'min' | 'max') {
    if (!slider.value) return;
    const rect = slider.value.getBoundingClientRect();
    const pos = e.clientX - rect.left;
    const newPercent = Math.min(Math.max(pos / rect.width, 0), 1);
    const newValue = Math.round(
      props.min + newPercent * (props.max - props.min),
    );

    if (type === 'min') {
      minValue.value = Math.min(newValue, maxValue.value - 1);
    } else {
      maxValue.value = Math.max(newValue, minValue.value + 1);
    }
  }

  // Drag handler
  function startDrag(e: MouseEvent, type: 'min' | 'max') {
    const move = (ev: MouseEvent) => updateValueFromEvent(ev, type);
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }
</script>

<template>
  <div class="slider" ref="slider">
    <!-- Track -->
    <div class="slider-track"></div>
    <!-- Fill -->
    <div
      class="slider-fill"
      :style="{ left: minPercent + '%', width: maxPercent - minPercent + '%' }"
    ></div>
    <!-- Min thumb -->
    <div
      class="slider-thumb"
      :style="{ left: minPercent + '%' }"
      @mousedown="(e) => startDrag(e, 'min')"
    ></div>
    <!-- Max thumb -->
    <div
      class="slider-thumb"
      :style="{ left: maxPercent + '%' }"
      @mousedown="(e) => startDrag(e, 'max')"
    ></div>
  </div>
</template>

<style scoped>
  .slider {
    position: relative;
    background: var(--slider-background-color);
    height: 0.375rem;
    border-radius: 0.25rem;
    margin-block: 1rem;
  }

  .slider-track {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
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
    background: var(--slider-thumb-background-color);
    box-shadow: 0 0 0.125rem 0.125rem rgb(0 0 0 / 0.25);
    border-radius: 50%;
    cursor: grab;
  }
</style>
