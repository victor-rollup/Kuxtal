// ------------------------------------------------------------------------------------------------
import './ui/stylesheets/index.css';
// ------------------------------------------------------------------------------------------------
import type { App } from 'vue';
import { RouterView as Page } from 'vue-router';
// ------------------------------------------------------------------------------------------------
import Button from './ui/components/atom/TButton.vue';
import Form from './ui/components/atom/TForm.vue';
import Hyperlink from './ui/components/atom/THyperlink.vue';
import Label from './ui/components/atom/TLabel.vue';
import Layout from './ui/components/atom/TLayout.vue';
import Panel from './ui/components/atom/TPanel.vue';
import Separator from './ui/components/atom/TSeparator.vue';
import Accordion from './ui/components/atom/TAccordion.vue';
// ------------------------------------------------------------------------------------------------
import BreadCrumb from './ui/components/molecule/TBreadCrumb.vue';
import ComboBox from './ui/components/molecule/TComboBox.vue';
import Edit from './ui/components/molecule/TEdit.vue';
import FormDialog from './ui/components/molecule/TFormDialog.vue';
import Memo from './ui/components/molecule/TMemo.vue';
import SidebarItem from './ui/components/molecule/TSidebarItem.vue';
// ------------------------------------------------------------------------------------------------
import Menu from './ui/components/organism/TMenu.vue';
import Sidebar from './ui/components/organism/TSidebar.vue';
import Icon from './ui/components/atom/icon';
// ------------------------------------------------------------------------------------------------
export * as Theme from './ui/theme'
export * as Schema from './types/schema.types';
export * as Component from './types/component.types';
// ------------------------------------------------------------------------------------------------
export { Icon };
export { createRouter, createWebHistory } from 'vue-router';
// ------------------------------------------------------------------------------------------------
export const UI = {
  Page,
  Hyperlink,
  Accordion,
  Button,
  Form,
  Label,
  Layout,
  Panel,
  Separator,
  BreadCrumb,
  ComboBox,
  Edit,
  FormDialog,
  Memo,
  SidebarItem,
  Menu,
  Sidebar,
};
// ------------------------------------------------------------------------------------------------
export const Kuxtal = {
  install(application: App) {
    application.component('ui-accordion', UI.Accordion);
    application.component('ui-breadcrumb', UI.BreadCrumb);
    application.component('ui-button', UI.Button);
    application.component('ui-combo-box', UI.ComboBox);
    application.component('ui-edit', UI.Edit);
    application.component('ui-form', UI.Form);
    application.component('ui-form-dialog', UI.FormDialog);
    application.component('ui-hyperlink', UI.Hyperlink);
    application.component('ui-label', UI.Label);
    application.component('ui-layout', UI.Layout);
    application.component('ui-memo', UI.Memo);
    application.component('ui-menu', UI.Menu);
    application.component('ui-page', UI.Page);
    application.component('ui-panel', UI.Panel);
    application.component('ui-separator', UI.Separator);
    application.component('ui-sidebar', UI.Sidebar);
    application.component('ui-sidebar-item', UI.SidebarItem);
  },
};
// ------------------------------------------------------------------------------------------------
