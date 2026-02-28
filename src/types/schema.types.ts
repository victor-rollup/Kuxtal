// ------------------------------------------------------------------------------------------------
import type { Component } from 'vue';
// ------------------------------------------------------------------------------------------------
export interface IStep {
  id: number;
  label: string;
  isCompleted: boolean;
}
// ------------------------------------------------------------------------------------------------
export interface ISidebarOption {
  caption?: string;
  icon?: Component;
  route?: string;
  onClick?: (event: PointerEvent) => void;
}
// ------------------------------------------------------------------------------------------------
export interface ISidebarSection {
  caption?: string;
  options: ISidebarOption[];
}
// ------------------------------------------------------------------------------------------------
export interface IMenuItem extends ISidebarOption {
  submenu?: IMenuItem[];
  useSeparator?: boolean;
  onClick?: (event: PointerEvent) => void;
}
// ------------------------------------------------------------------------------------------------
export interface IBreadcrumbRoute {
  route: string;
  caption: string;
  icon?: Component;
}
// ------------------------------------------------------------------------------------------------
