<script setup lang="ts">
  import type { ILayout } from '@/types/component.types';

  const props = defineProps<ILayout['props']>();
</script>

<template>
  <div class="layout">
    <header v-if="props.showHeader" class="layout__header">
      <slot name="TLayoutHeader" />
    </header>
    <main class="layout__content">
      <aside v-if="props.showPrimarySidebar" class="layout__sidebar">
        <slot name="TLayoutPrimarySidebar" />
      </aside>
      <div class="layout__section">
        <slot />
      </div>
      <aside v-if="props.showSecondarySidebar" class="layout__sidebar">
        <slot name="TLayoutSecondarySidebar" />
      </aside>
    </main>
    <footer v-if="props.showFooter" class="layout__footer">
      <slot name="TLayoutFooter" />
    </footer>
  </div>
</template>

<style scoped>
  .layout {
    width: 100%;
  }

  .layout,
  .layout__sidebar,
  .layout__section {
    display: flex;
    flex-direction: column;
  }

  .layout,
  .layout__sidebar {
    height: 100%;
  }

  .layout__content,
  .layout__section {
    flex: 1 1 auto;
  }

  .layout__content {
    overflow: hidden;
    display: flex;
  }

  .layout__section {
    overflow: auto;
  }

  .layout__sidebar {
    overflow-y: auto;
    overflow-x: hidden;
    min-width: fit-content;
    display: flex;
    flex-direction: column;
  }
</style>
