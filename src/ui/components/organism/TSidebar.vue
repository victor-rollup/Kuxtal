<script setup lang="ts">
  import type { ISidebar } from '@/types/component.types';
  import THyperlink from '../atom/THyperlink.vue';
  import { computed, onMounted, onUnmounted, ref } from 'vue';

  const props = defineProps<ISidebar['props']>();
  const width = ref<number>(window.innerWidth * 0.16);
  const widthAsPx = computed(() => `${width.value}px`);
  const updateWidth = () => (width.value = window.innerWidth * 0.16);

  onMounted(() => window.addEventListener('resize', updateWidth));
  onUnmounted(() => window.removeEventListener('resize', updateWidth));
</script>

<template>
  <ul
    class="sidebar"
    v-bind="props"
    :data-collapse="props.collapse"
    :sections="undefined"
    :collapse="undefined"
    :style="{ width: widthAsPx }"
  >
    <li class="sidebar-item" v-for="item in props.sections">
      <h6 v-if="item.caption" class="sidebar-item__caption">
        {{ item.caption }}
      </h6>
      <div class="sidebar-item__content">
        <THyperlink
          v-for="option in item.options"
          :route="option.route"
          class="sidebar-item__option"
          :title="option.caption"
          @click="option.onClick"
        >
          <component :is="option.icon" />
          <span class="sidebar-item__option-caption | text-truncate">{{
            option.caption
          }}</span>
        </THyperlink>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 18rem;
    gap: 2rem;
    padding: 2rem;
    background: var(--sidebar-background-color);
    border-right: 0.0125rem solid var(--sidebar-border-color);
    transition: width 0.5s ease-in-out;
  }

  .sidebar[data-collapse='true'] {
    gap: 0.5rem;
    padding: 0.5rem;
    width: 4rem !important;
  }

  .sidebar-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sidebar[data-collapse='true'] .sidebar-item {
    gap: 0.5rem;
  }

  .sidebar-item__option,
  .sidebar-item__option:active {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    color: var(--sidebar-item-text-color);
    text-decoration: none;
    border: 0.125rem solid transparent;
  }

  .sidebar[data-collapse='true'] .sidebar-item__option {
    padding: 0.5rem;
    justify-content: center;
  }

  .sidebar[data-collapse='true'] .sidebar-item__option-caption {
    display: none;
  }

  .sidebar-item__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .sidebar[data-collapse='true'] .sidebar-item__content {
    gap: 0.5rem;
  }

  .sidebar-item__option:hover {
    border-color: var(--sidebar-item-background-active-color);
  }

  .sidebar-item__option.router-link-exact-active {
    color: var(--sidebar-item-text-active-color);
    background: var(--sidebar-item-background-active-color);
    border-color: transparent !important;
  }

  .sidebar-item__caption {
    text-transform: uppercase;
    color: var(--sidebar-item-caption-text-color);
  }

  .sidebar[data-collapse='true'] .sidebar-item__caption {
    display: none;
  }
</style>
