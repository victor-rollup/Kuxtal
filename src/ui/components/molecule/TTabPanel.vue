<script setup lang="ts">
  import useState from '@/utils/use-state';
  import TPanel from '../atom/TPanel.vue';
  import Helper from '@/helper';
  import type { ITab } from '@/types/schema.types';

  const props = defineProps<{
    tabs: ITab[];
  }>();

  const [currentTab, setCurrentTab] = useState(Helper.Use.ZERO);
</script>

<template>
  <TPanel class="tab-panel" show-header>
    <template #TPanelHeader>
      <nav class="tab-panel__navigation">
        <ul class="tab-panel__list">
          <li
            v-for="(tab, index) in props.tabs"
            :key="index"
            @click="setCurrentTab(index)"
            class="tab-panel__list-item"
          >
            <!-- <TSidebarOption
              :active-tab="index === currentTab"
              :option="{ caption: tab.title }"
              class="truncate-text | tab-panel__tab"
            /> -->
            <span :active-tab="index === currentTab" class="tab-panel__tab">{{
              tab.title
            }}</span>
          </li>
        </ul>
      </nav>
    </template>
    <div class="tab-panel__content">
      <component :is="props.tabs[currentTab]?.content" />
    </div>
  </TPanel>
</template>

<style scoped>
  .tab-panel__content {
    /* padding: 1rem; */
    border-radius: 0.5rem;
    border-top-left-radius: 0rem;
    flex: 1 1 auto;
    background: var(--tab-border-color);
    border: 0.125rem solid var(--tab-border-color);
  }

  .tab-panel__list {
    display: flex;
    gap: 0.125rem;
  }

  .tab-panel__tab {
    display: flex;
    min-width: 8rem;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background: var(--tab-background-color);
    /* border: 0.125rem solid var(--tab-border-color); */
  }

  .tab-panel__tab:hover {
    background: var(--tab-background-hover-color);
  }
  .tab-panel__tab[active-tab='true'] {
    background: var(--tab-background-active-color);
    border-bottom: 0.125rem solid var(--tab-border-active-color);
  }
  .tab-panel__navigation {
    overflow: auto;
    scrollbar-width: none;
  }
</style>
