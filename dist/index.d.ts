import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ButtonHTMLAttributes } from 'vue';
import { Component as Component_2 } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import { DateMethods } from 'helper';
import { DefineComponent } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { Helper } from 'helper';
import { InputTypeHTMLAttribute } from 'vue';
import { PublicProps } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { RouteParamsRawGeneric } from 'vue-router';
import { RouterViewProps } from 'vue-router';
import { Use } from 'helper';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

export declare namespace Component {
    export {
        ILabel,
        IEdit,
        IComboBox,
        IHyperlink,
        IMemo,
        IMenu,
        IForm,
        ILayout,
        IButton,
        ISidebar,
        ISidebarItem,
        IFormDialog,
        IAccordion,
        IBreadcrumb
    }
}

export { DateMethods }

export { Helper }

declare interface IAccordion {
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

declare interface IBreadcrumb {
    props: {
        current: string;
        routes: IRoute[];
        divider?: string;
    };
}

declare interface IButton {
    props: {
        type?: ButtonHTMLAttributes['type'];
        mode?: 'filled' | 'secondary' | 'outlined' | 'text' | 'icon';
        caption?: string;
        icon?: Component_2;
        disabled?: boolean;
        form?: string;
    };
    emits: {
        (event: 'click', payload: PointerEvent): void;
    };
}

declare interface IComboBox {
    props: {
        caption?: string;
        allowNull?: boolean;
        options: IComboBoxOption[];
    };
}

declare interface IComboBoxOption {
    label: string;
    value: null | string | number;
}

export declare const Icon: {
    Clock: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    ListSearch: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    ListCheck: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Scale: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    RuleMeasure: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Home: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Currency: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Numbers: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Scan: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Abc: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Email: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Phone: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    X: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    LogOut: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Calendar: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Trash: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Cancel: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Menu: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Dots: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Meat: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Cash: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    CashReceipt: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    CashRegister: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    CashCalendar: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Computer: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Eye: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    EyeOff: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Search: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Tag: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Report: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    ShoppingCart: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    UserCircle: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    UserGroup: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Configuration: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Plus: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Pencil: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Reload: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    ArrowRight: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    ArrowLeft: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    ArrowUp: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    ArrowDown: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Receipt: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    CreditCard: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Lock: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Bell: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Help: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Connection: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Apps: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Chevron: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Bank: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Check: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    List: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
};

declare interface IEdit {
    props: {
        type: InputTypeHTMLAttribute;
        caption?: string;
        icon?: Component_2;
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

declare interface IForm {
    emits: {
        (event: 'submit', payload: SubmitEvent): void;
        (event: 'reset', payload: Event): void;
    };
}

declare interface IFormDialog {
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

declare interface IHyperlink {
    props: {
        route?: string;
        params?: RouteParamsRawGeneric;
    };
    emits: {
        (event: 'click', payload: PointerEvent): void;
    };
}

declare interface IItem extends IOption {
    submenu?: IItem[];
    useSeparator?: boolean;
    onClick?: (event: PointerEvent) => void;
}

declare interface ILabel {
    props: {
        caption?: string;
    };
}

declare interface ILayout {
    props: {
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
    };
}

declare interface IMemo {
    props: {
        caption?: string;
        maxLength?: number;
    };
}

declare interface IMenu {
    props: {
        items: IItem[];
        orientation?: 'vertical' | 'horizontal';
    };
}

declare interface IOption {
    caption?: string;
    icon?: Component_2;
    route?: string;
}

declare interface IRoute {
    caption: string;
    icon?: Component_2;
    route: string;
}

declare interface ISidebar {
    props: {
        items: ISidebarItem['props'][];
    };
}

declare interface ISidebarItem {
    props: {
        caption?: string;
        options: IOption[];
    };
}

declare interface ITab {
    title: string;
    content: Component_2;
}

export declare const Kuxtal: {
    install(application: App): void;
};

export declare const Router: {
    create: typeof createRouter;
    createWebHistory: typeof createWebHistory;
};

export declare namespace Schema {
    export {
        IOption,
        ITab,
        IComboBoxOption,
        IItem,
        IRoute
    }
}

declare function setTheme(theme: theme_type): void;

export declare namespace Theme {
    export {
        setTheme,
        toggleDarkMode,
        Type
    }
}

declare type theme_type = 'dark' | 'light' | 'midnight';

declare function toggleDarkMode(): void;

declare enum Type {
    DARK = "dark",
    LIGHT = "light",
    MIDNIGHT = "midnight"
}

export declare const UI: {
    Page: new () => {
        $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & RouterViewProps;
        $slots: {
            default?: ({ Component, route }: {
                Component: VNode;
                route: RouteLocationNormalizedLoaded;
            }) => VNode[];
        };
    };
    Hyperlink: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        route?: string;
        params?: RouteParamsRawGeneric;
        }> & Readonly<{
        onClick?: ((payload: PointerEvent) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
        click: (payload: PointerEvent) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        route?: string;
        params?: RouteParamsRawGeneric;
        }> & Readonly<{
        onClick?: ((payload: PointerEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    route?: string;
    params?: RouteParamsRawGeneric;
    }> & Readonly<{
    onClick?: ((payload: PointerEvent) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: (payload: PointerEvent) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            default?(_: {}): any;
        };
    });
    Accordion: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        title: string;
        open?: boolean;
        }> & Readonly<{
        onToggle?: ((payload: ToggleEvent) => any) | undefined;
        }>, {
        open: () => void;
        close: () => void;
        }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
        toggle: (payload: ToggleEvent) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
        accordion: HTMLDetailsElement;
        }, HTMLDetailsElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        title: string;
        open?: boolean;
        }> & Readonly<{
        onToggle?: ((payload: ToggleEvent) => any) | undefined;
        }>, {
        open: () => void;
        close: () => void;
        }, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    title: string;
    open?: boolean;
    }> & Readonly<{
    onToggle?: ((payload: ToggleEvent) => any) | undefined;
    }>, {
    open: () => void;
    close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    toggle: (payload: ToggleEvent) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Button: DefineComponent<    {
    type?: ButtonHTMLAttributes["type"];
    mode?: "filled" | "secondary" | "outlined" | "text" | "icon";
    caption?: string;
    icon?: Component_2;
    disabled?: boolean;
    form?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: (payload: PointerEvent) => any;
    }, string, PublicProps, Readonly<{
    type?: ButtonHTMLAttributes["type"];
    mode?: "filled" | "secondary" | "outlined" | "text" | "icon";
    caption?: string;
    icon?: Component_2;
    disabled?: boolean;
    form?: string;
    }> & Readonly<{
    onClick?: ((payload: PointerEvent) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;
    Form: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
        onReset?: ((payload: Event) => any) | undefined;
        onSubmit?: ((payload: SubmitEvent) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
        reset: (payload: Event) => any;
        submit: (payload: SubmitEvent) => any;
        }, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLFormElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{}> & Readonly<{
        onReset?: ((payload: Event) => any) | undefined;
        onSubmit?: ((payload: SubmitEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{
    onReset?: ((payload: Event) => any) | undefined;
    onSubmit?: ((payload: SubmitEvent) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    reset: (payload: Event) => any;
    submit: (payload: SubmitEvent) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Label: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        caption?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLLabelElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        caption?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    caption?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Layout: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    showHeader?: boolean;
    showFooter?: boolean;
    showPrimarySidebar?: boolean;
    showSecondarySidebar?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            TLayoutHeader?(_: {}): any;
            TLayoutPrimarySidebar?(_: {}): any;
            default?(_: {}): any;
            TLayoutSecondarySidebar?(_: {}): any;
            TLayoutFooter?(_: {}): any;
        };
    });
    Panel: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    showHeader?: boolean;
    showFooter?: boolean;
    showPrimarySidebar?: boolean;
    showSecondarySidebar?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            TPanelHeader?(_: {}): any;
            TPanelPrimarySidebar?(_: {}): any;
            default?(_: {}): any;
            TPanelSecondarySidebar?(_: {}): any;
            TPanelFooter?(_: {}): any;
        };
    });
    Separator: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
    BreadCrumb: DefineComponent<    {
    current: string;
    routes: IRoute[];
    divider?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    current: string;
    routes: IRoute[];
    divider?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLElement>;
    ComboBox: DefineComponent<    {
    modelValue?: null | string | number;
    } & {
    caption?: string;
    allowNull?: boolean;
    options: IComboBoxOption[];
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: null | string | number;
    } & {
    caption?: string;
    allowNull?: boolean;
    options: IComboBoxOption[];
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Edit: DefineComponent<    {
    modelValue?: string | number;
    } & {
    type: InputTypeHTMLAttribute;
    caption?: string;
    icon?: Component_2;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
    minlength?: number;
    maxlength?: number;
    pattern?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    } & {
    input: (payload: InputEvent) => any;
    beforeinput: (payload: InputEvent) => any;
    blur: (payload: FocusEvent) => any;
    change: (payload: Event) => any;
    focus: (payload: FocusEvent) => any;
    click: (payload: PointerEvent) => any;
    paste: (payload: ClipboardEvent) => any;
    keypress: (payload: KeyboardEvent) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: string | number;
    } & {
    type: InputTypeHTMLAttribute;
    caption?: string;
    icon?: Component_2;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
    minlength?: number;
    maxlength?: number;
    pattern?: string;
    }> & Readonly<{
    onInput?: ((payload: InputEvent) => any) | undefined;
    onBeforeinput?: ((payload: InputEvent) => any) | undefined;
    onBlur?: ((payload: FocusEvent) => any) | undefined;
    onChange?: ((payload: Event) => any) | undefined;
    onFocus?: ((payload: FocusEvent) => any) | undefined;
    onClick?: ((payload: PointerEvent) => any) | undefined;
    onPaste?: ((payload: ClipboardEvent) => any) | undefined;
    onKeypress?: ((payload: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    FormDialog: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        title: string;
        description?: string;
        }> & Readonly<{
        onReset?: ((payload: Event) => any) | undefined;
        onSubmit?: ((payload: SubmitEvent) => any) | undefined;
        onCancel?: (() => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
        reset: (payload: Event) => any;
        submit: (payload: SubmitEvent) => any;
        cancel: () => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLFormElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        title: string;
        description?: string;
        }> & Readonly<{
        onReset?: ((payload: Event) => any) | undefined;
        onSubmit?: ((payload: SubmitEvent) => any) | undefined;
        onCancel?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    title: string;
    description?: string;
    }> & Readonly<{
    onReset?: ((payload: Event) => any) | undefined;
    onSubmit?: ((payload: SubmitEvent) => any) | undefined;
    onCancel?: (() => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    reset: (payload: Event) => any;
    submit: (payload: SubmitEvent) => any;
    cancel: () => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Memo: DefineComponent<    {
    modelValue?: string;
    } & {
    caption?: string;
    maxLength?: number;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: string;
    } & {
    caption?: string;
    maxLength?: number;
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    SidebarItem: DefineComponent<    {
    caption?: string;
    options: IOption[];
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    caption?: string;
    options: IOption[];
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLIElement>;
    Menu: DefineComponent<    {
    items: IItem[];
    orientation?: "vertical" | "horizontal";
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    items: IItem[];
    orientation?: "vertical" | "horizontal";
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
    Sidebar: DefineComponent<    {
    items: ISidebarItem["props"][];
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    items: ISidebarItem["props"][];
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
};

export { Use }

export { }
