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
  IDOMImage,
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
export interface IEditPassword {
  props: Omit<IDOMInput, 'type'> & {
    icon?: Component;
    caption?: string;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IComboBox {
  props: IDOMSelect & {
    caption?: string;
    allowNull?: boolean;
    items: IDOMSelectOption[];
  };
}
// ------------------------------------------------------------------------------------------------
export interface IMemo {
  props: IDOMTextarea & {
    caption?: string;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IToggleSwitch {
  props: Omit<IDOMInput, 'type' | 'checked'>;
}
// ------------------------------------------------------------------------------------------------
export interface IRadioButton {
  props: Omit<IDOMInput, 'type'> & {
    name: string;
    value: string | number;
  };
}
// ------------------------------------------------------------------------------------------------
export interface ICheckbox {
  props: Omit<IDOMInput, 'type'>;
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
    collapse?: boolean;
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
export interface IImage {
  props: IDOMImage;
}
// ------------------------------------------------------------------------------------------------
export interface ICountryFlag {
  props: {
    code:
      | string
      | 'AR'
      | 'BR'
      | 'CA'
      | 'CL'
      | 'CO'
      | 'CU'
      | 'DE'
      | 'ES'
      | 'FR'
      | 'IT'
      | 'JP'
      | 'MX'
      | 'PE'
      | 'US'
      | 'VE';
  };
}
// ------------------------------------------------------------------------------------------------
export interface IPasswordIndicator {
  props: {
    caption?: string;
  };
}
// ------------------------------------------------------------------------------------------------
