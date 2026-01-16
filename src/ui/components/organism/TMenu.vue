<script setup lang="ts">
  import type { IMenu } from '@/types/component.types';
  import THyperlink from '../atom/THyperlink.vue';
  import TIconChevron from '../atom/icon/TIconChevron.vue';
  import { onMounted } from 'vue';

  const props = defineProps<IMenu['props']>();

  onMounted(() => {
    if (props.orientation === 'vertical') {
      return;
    }

    const selector = '.menu[data-orientation="horizontal"] .menu-item';
    const items = document.querySelectorAll(selector)!;

    items.forEach((item) => {
      const isSubmenu = item.parentElement?.classList.contains('submenu');
      if (isSubmenu) {
        return;
      }
      const icon = item.querySelector<HTMLElement>('.menu-item__chevron')!;
      icon.style.display = 'none';
    });
  });
</script>

<template>
  <ul class="menu |" :data-orientation="props.orientation ?? 'vertical'">
    <li
      class="menu-item"
      v-for="(item, index) in props.items"
      @click="item.onClick"
    >
      <THyperlink
        :route="item.route"
        :data-use-separator="item.useSeparator"
        :title="item.caption"
        class="menu-item__hyperlink | text-truncate"
      >
        <div class="menu-item__hyperlink-container">
          <component :is="item.icon" class="menu-item__icon" />
          <span class="menu-item__caption | text-truncate">
            {{ item.caption }}
          </span>
        </div>
        <TIconChevron class="menu-item__icon | menu-item__chevron" />
      </THyperlink>
      <TMenu
        v-if="item.submenu && item.submenu.length"
        :key="index"
        :items="item.submenu"
        class="submenu"
      />
    </li>
  </ul>
</template>

<style scoped>
  .menu {
    width: 100%;
    border: 0.0125rem solid var(--theme-neutral-color-500);
    background: var(--theme-neutral-color-100);
  }

  .menu-item {
    position: relative;
  }

  .menu-item__icon {
    min-height: 0.85rem;
    min-width: 0.85rem;
    height: 0.85rem;
    width: 0.85rem;
  }

  .menu-item__caption {
    font-size: 0.85rem;
  }

  .menu-item__chevron {
    opacity: 0.5;
  }

  .menu-item:not(:hover) .submenu,
  .menu-item:not(:has(.submenu)) .menu-item__chevron {
    display: none;
  }

  .submenu {
    position: absolute;
    z-index: 3;
  }

  .menu-item__hyperlink,
  .menu-item__hyperlink-container,
  .menu[data-orientation='horizontal'],
  .menu[data-orientation='vertical'] .menu-item {
    display: flex;
  }

  .menu-item__hyperlink[data-use-separator='true'] {
    border-top: 0.0125rem solid var(--theme-neutral-color-500);
    border-bottom: 0.0125rem solid var(--theme-neutral-color-500);
  }

  .menu-item__hyperlink,
  .menu-item__hyperlink-container {
    align-items: center;
    width: 100%;
    gap: 0.25rem;
    padding-block: 0.125rem;
    padding-inline: 0.25rem;
    text-decoration: none;
  }

  .menu-item__hyperlink {
    border-radius: 0.25rem;
    justify-content: space-between;
    color: var(--theme-secondary-color-700);
  }

  .menu-item__hyperlink:hover {
    background: var(--theme-neutral-color-200);
  }

  .menu[data-orientation='vertical'] {
    min-width: 12rem;
    max-width: 16rem;
  }

  .menu[data-orientation='vertical'] .submenu {
    transform: translateX(99%);
  }
</style>
