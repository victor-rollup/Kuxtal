// ------------------------------------------------------------------------------------------------
import { createRouter, createWebHistory } from 'vue-router';
export * as Schema from './types/schema.types';
export * as Component from './types/component.types';
// ------------------------------------------------------------------------------------------------
export { Icon, Theme, UI } from '@/ui';
export { Use, Helper, DateMethods } from 'helper';
// ------------------------------------------------------------------------------------------------
export const Router = {
  create: createRouter,
  createWebHistory,
};
// ------------------------------------------------------------------------------------------------
