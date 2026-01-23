// ------------------------------------------------------------------------------------------------
import type {
  IDOMButton,
  IDOMElement,
  IDOMForm,
  IDOMLabel,
  IDOMInput,
  IDOMTextarea,
  IDOMSelect,
  IDOMSelectOption,
  IDOMAnchor,
} from './dom.types';
import type { Component } from 'vue';
import type {
  IMenuItem,
  ISidebarSection,
  IBreadcrumbRoute,
} from './schema.types';
import type { RouteParamsRawGeneric } from 'vue-router';
// ------------------------------------------------------------------------------------------------
export interface ILabel {
  props: IDOMLabel & {
    caption?: string;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IEdit {
  props: IDOMInput & {
    icon?: Component;
    caption?: string;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IComboBox {
  props: IDOMSelect & {
    caption?: string;
    allowNull?: boolean;
    options: IDOMSelectOption[];
  };
}
// ------------------------------------------------------------------------------------------------
export interface IMemo {
  props: IDOMTextarea & {
    caption?: string;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IHyperlink {
  props: IDOMAnchor & {
      route?: string;
      params?: RouteParamsRawGeneric;
    };
}
// ------------------------------------------------------------------------------------------------
export interface IMenu {
  props: IDOMElement & {
    items: IMenuItem[];
    orientation?: 'vertical' | 'horizontal';
  };
}
// ------------------------------------------------------------------------------------------------
export interface IForm {
  props: IDOMForm;
}
// ------------------------------------------------------------------------------------------------
export interface ILayout {
  props: IDOMElement & {
    showHeader?: boolean;
    showFooter?: boolean;
    showPrimarySidebar?: boolean;
    showSecondarySidebar?: boolean;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IButton {
  props: IDOMButton & {
    mode?: 'filled' | 'secondary' | 'outlined' | 'text' | 'icon';
    caption?: string;
    icon?: Component;
  };
}
// ------------------------------------------------------------------------------------------------
export interface ISidebar {
  props: IDOMElement & {
    sections: ISidebarSection[];
  };
}
// ------------------------------------------------------------------------------------------------
export interface IAccordion {
  props: IDOMElement & {
    title: string;
    open?: boolean;
  };
  expose: {
    open: () => void;
    close: () => void;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IBreadcrumb {
  props: {
    current: string;
    routes: IBreadcrumbRoute[];
    divider?: string;
  };
}
// ------------------------------------------------------------------------------------------------
