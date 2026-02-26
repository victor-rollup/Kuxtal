// ------------------------------------------------------------------------------------------------
import('./ui/stylesheet/index.css');
// ------------------------------------------------------------------------------------------------
export * as Schema from './types/schema.types';
export * as Component from './types/component.types';
export * as DOMType from './types/dom.types';
export {
  createRouter as create,
  createWebHistory,
  type Router as Instance,
  type RouterOptions as Options,
} from 'vue-router';
// ------------------------------------------------------------------------------------------------
export { Icon, Theme, UI } from '@/ui';
// ------------------------------------------------------------------------------------------------
