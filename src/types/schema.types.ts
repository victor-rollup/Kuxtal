// ------------------------------------------------------------------------------------------------
import type { Component } from 'vue';
// ------------------------------------------------------------------------------------------------
export interface IOption {
  caption?: string;
  icon?: Component;
  route?: string;
}
// ------------------------------------------------------------------------------------------------
export interface ITab {
  title: string;
  content: Component;
}
// ------------------------------------------------------------------------------------------------
export interface IComboBoxOption {
  label: string;
  value: null | string | number;
}
// ------------------------------------------------------------------------------------------------
export interface IItem extends IOption {
  submenu?: IItem[];
  useSeparator?: boolean;
  onClick?: (event: PointerEvent) => void;
}
// ------------------------------------------------------------------------------------------------
export interface IRoute {
  caption: string;
  icon?: Component;
  route: string;
}
// ------------------------------------------------------------------------------------------------
