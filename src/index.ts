// ------------------------------------------------------------------------------------------------
import('./ui/stylesheet/index.css');
// ------------------------------------------------------------------------------------------------
export * as Schema from './types/schema.types';
export * as Component from './types/component.types';
export * as DOMType from './types/dom.types';
export {
  createRouter,
  createWebHistory,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  type Router,
  type RouterOptions,
  type RouteParamsRaw,
  type RouteRecordRaw
} from 'vue-router';
// ------------------------------------------------------------------------------------------------
export { Icon, Theme, UI } from '@/ui';
// ------------------------------------------------------------------------------------------------
