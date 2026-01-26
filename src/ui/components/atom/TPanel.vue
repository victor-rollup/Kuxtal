<script setup lang="ts">
  import type { ILayout } from '@/types/component.types';

  const props = defineProps<ILayout['props']>();
</script>

<template>
  <div class="panel" v-bind="props">
    <header v-if="props.showHeader" class="panel__header">
      <slot name="TPanelHeader" />
    </header>
    <div class="panel__content">
      <aside v-if="props.showPrimarySidebar" class="panel__sidebar">
        <slot name="TPanelPrimarySidebar" />
      </aside>
      <div class="panel__section">
        <slot />
      </div>
      <aside v-if="props.showSecondarySidebar" class="panel__sidebar">
        <slot name="TPanelSecondarySidebar" />
      </aside>
    </div>
    <footer v-if="props.showFooter" class="panel__footer">
      <slot name="TPanelFooter" />
    </footer>
  </div>
</template>

<style scoped>
  .panel {
    width: 100%;
  }
  
  .panel,
  .panel__sidebar,
  .panel__section {
    display: flex;
    flex-direction: column;
  }

  .panel,
  .panel__sidebar {
    height: 100%;
  }

  .panel__header {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .panel__content,
  .panel__section {
    flex: 1 1 auto;
  }

  .panel__content {
    overflow: hidden;
    display: flex;
    gap: inherit;
  }

  .panel__section {
    overflow: auto;
  }

  .panel__sidebar {
    overflow-y: auto;
    overflow-x: hidden;
    min-width: fit-content;
    display: flex;
    flex-direction: column;
  }
</style>
