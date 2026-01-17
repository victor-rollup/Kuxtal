// ------------------------------------------------------------------------------------------------
import type {
  Component,
  ButtonHTMLAttributes,
  InputTypeHTMLAttribute,
} from 'vue';
import type { RouteParamsRawGeneric } from 'vue-router';
import type { IComboBoxOption, IItem, IOption, IRoute } from './schema.types';
// ------------------------------------------------------------------------------------------------
export interface ILabel {
  props: {
    caption?: string;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IEdit {
  props: {
    type: InputTypeHTMLAttribute;
    caption?: string;
    icon?: Component;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
    minlength?: number;
    maxlength?: number;
    pattern?: string;
  };
  emits: {
    (event: 'input', payload: InputEvent): void;
    (event: 'beforeinput', payload: InputEvent): void;
    (event: 'blur', payload: FocusEvent): void;
    (event: 'change', payload: Event): void;
    (event: 'focus', payload: FocusEvent): void;
    (event: 'click', payload: PointerEvent): void;
    (event: 'paste', payload: ClipboardEvent): void;
    (event: 'keypress', payload: KeyboardEvent): void;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IComboBox {
  props: {
    caption?: string;
    allowNull?: boolean;
    options: IComboBoxOption[];
  };
}
// ------------------------------------------------------------------------------------------------
export interface IHyperlink {
  props: {
    route?: string;
    params?: RouteParamsRawGeneric;
  };
  emits: {
    (event: 'click', payload: PointerEvent): void;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IMemo {
  props: {
    caption?: string;
    maxLength?: number;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IMenu {
  props: {
    items: IItem[];
    orientation?: 'vertical' | 'horizontal';
  };
}
// ------------------------------------------------------------------------------------------------
export interface IForm {
  emits: {
    (event: 'submit', payload: SubmitEvent): void;
    (event: 'reset', payload: Event): void;
  };
}
// ------------------------------------------------------------------------------------------------
export interface ILayout {
  props: {
    showHeader?: boolean;
    showFooter?: boolean;
    showPrimarySidebar?: boolean;
    showSecondarySidebar?: boolean;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IButton {
  props: {
    type?: ButtonHTMLAttributes['type'];
    mode?: 'filled' | 'secondary' | 'outlined' | 'text' | 'icon';
    caption?: string;
    icon?: Component;
    disabled?: boolean;
    form?: string;
  };
  emits: {
    (event: 'click', payload: PointerEvent): void;
  };
}
// ------------------------------------------------------------------------------------------------
export interface ISidebar {
  props: {
    items: ISidebarItem['props'][];
  };
}
// ------------------------------------------------------------------------------------------------
export interface ISidebarItem {
  props: {
    caption?: string;
    options: IOption[];
  };
}
// ------------------------------------------------------------------------------------------------
export interface IFormDialog {
  props: {
    title: string;
    description?: string;
  };
  emits: {
    (event: 'submit', payload: SubmitEvent): void;
    (event: 'cancel'): void;
    (event: 'reset', payload: Event): void;
  };
}
// ------------------------------------------------------------------------------------------------
export interface IAccordion {
  props: {
    title: string;
    open?: boolean;
  };
  emits: {
    (event: 'toggle', payload: ToggleEvent): void;
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
    routes: IRoute[];
    divider?: string;
  };
}
// ------------------------------------------------------------------------------------------------
