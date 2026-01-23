import { AllowedComponentProps } from 'vue';
import { AriaAttributes } from 'vue';
import { Component } from 'vue';
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
import { PublicProps } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { RouteParamsRawGeneric } from 'vue-router';
import { RouterViewProps } from 'vue-router';
import { StyleValue } from 'vue';
import { Use } from 'helper';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare namespace Component_2 {
    export {
        ILabel,
        IEdit,
        IComboBox,
        IMemo,
        IHyperlink,
        IMenu,
        IForm,
        ILayout,
        IButton,
        ISidebar,
        IAccordion,
        IBreadcrumb
    }
}

export { DateMethods }

export { Helper }

declare interface IAccordion {
    props: IDOMElement & {
        title: string;
        open?: boolean;
    };
    expose: {
        open: () => void;
        close: () => void;
    };
}

declare interface IBreadcrumb {
    props: {
        current: string;
        routes: IBreadcrumbRoute[];
        divider?: string;
    };
}

declare interface IBreadcrumbRoute {
    route: string;
    caption: string;
    icon?: Component;
}

declare interface IButton {
    props: IDOMButton & {
        mode?: 'filled' | 'secondary' | 'outlined' | 'text' | 'icon';
        caption?: string;
        icon?: Component;
    };
}

declare interface IComboBox {
    props: IDOMSelect & {
        caption?: string;
        allowNull?: boolean;
        options: IDOMSelectOption[];
    };
}

export declare const Icon: {
    Information: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Palette: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    DotsVertical: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    UserPlus: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    User: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
    Category: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;
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

declare interface IDOMAnchor extends IDOMElement {
    download?: string;
    href?: string;
    hreflang?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
}

declare interface IDOMButton extends IDOMElement, IFormAttributes {
    autofocus?: boolean;
    disabled?: boolean;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
}

declare interface IDOMElement extends IGlobalAttributes, IMicrodataAttributes, IDOMEvents {
    placeholder?: string;
    autocapitalize?: string;
    autocorrect?: string;
    autosave?: string;
    results?: number;
    security?: string;
    unselectable?: 'on' | 'off';
}

declare interface IDOMEvents {
    onCopy?: (event: ClipboardEvent) => void;
    onCut?: (event: ClipboardEvent) => void;
    onPaste?: (event: ClipboardEvent) => void;
    onCompositionend?: (event: CompositionEvent) => void;
    onCompositionstart?: (event: CompositionEvent) => void;
    onCompositionupdate?: (event: CompositionEvent) => void;
    onDrag?: (event: DragEvent) => void;
    onDragend?: (event: DragEvent) => void;
    onDragenter?: (event: DragEvent) => void;
    onDragexit?: (event: DragEvent) => void;
    onDragleave?: (event: DragEvent) => void;
    onDragover?: (event: DragEvent) => void;
    onDragstart?: (event: DragEvent) => void;
    onDrop?: (event: DragEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onFocusin?: (event: FocusEvent) => void;
    onFocusout?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onChange?: (event: Event) => void;
    onBeforeinput?: (event: InputEvent) => void;
    onFormdata?: (event: FormDataEvent) => void;
    onInput?: (event: InputEvent) => void;
    onReset?: (event: Event) => void;
    onSubmit?: (event: SubmitEvent) => void;
    onInvalid?: (event: Event) => void;
    onFullscreenchange?: (event: Event) => void;
    onFullscreenerror?: (event: Event) => void;
    onLoad?: (event: Event) => void;
    onError?: (event: Event) => void;
    onKeydown?: (event: KeyboardEvent) => void;
    onKeypress?: (event: KeyboardEvent) => void;
    onKeyup?: (event: KeyboardEvent) => void;
    onDblclick?: (event: MouseEvent) => void;
    onMousedown?: (event: MouseEvent) => void;
    onMouseenter?: (event: MouseEvent) => void;
    onMouseleave?: (event: MouseEvent) => void;
    onMousemove?: (event: MouseEvent) => void;
    onMouseout?: (event: MouseEvent) => void;
    onMouseover?: (event: MouseEvent) => void;
    onMouseup?: (event: MouseEvent) => void;
    onAbort?: (event: UIEvent) => void;
    onCanplay?: (event: Event) => void;
    onCanplaythrough?: (event: Event) => void;
    onDurationchange?: (event: Event) => void;
    onEmptied?: (event: Event) => void;
    onEncrypted?: (event: MediaEncryptedEvent) => void;
    onEnded?: (event: Event) => void;
    onLoadeddata?: (event: Event) => void;
    onLoadedmetadata?: (event: Event) => void;
    onLoadstart?: (event: Event) => void;
    onPause?: (event: Event) => void;
    onPlay?: (event: Event) => void;
    onPlaying?: (event: Event) => void;
    onProgress?: (event: ProgressEvent) => void;
    onRatechange?: (event: Event) => void;
    onSeeked?: (event: Event) => void;
    onSeeking?: (event: Event) => void;
    onStalled?: (event: Event) => void;
    onSuspend?: (event: Event) => void;
    onTimeupdate?: (event: Event) => void;
    onVolumechange?: (event: Event) => void;
    onWaiting?: (event: Event) => void;
    onSelect?: (event: Event) => void;
    onScroll?: (event: Event) => void;
    onScrollend?: (event: Event) => void;
    onTouchcancel?: (event: TouchEvent) => void;
    onTouchend?: (event: TouchEvent) => void;
    onTouchmove?: (event: TouchEvent) => void;
    onTouchstart?: (event: TouchEvent) => void;
    onAuxclick?: (event: PointerEvent) => void;
    onClick?: (event: PointerEvent) => void;
    onContextmenu?: (event: PointerEvent) => void;
    onGotpointercapture?: (event: PointerEvent) => void;
    onLostpointercapture?: (event: PointerEvent) => void;
    onPointerdown?: (event: PointerEvent) => void;
    onPointermove?: (event: PointerEvent) => void;
    onPointerup?: (event: PointerEvent) => void;
    onPointercancel?: (event: PointerEvent) => void;
    onPointerenter?: (event: PointerEvent) => void;
    onPointerleave?: (event: PointerEvent) => void;
    onPointerover?: (event: PointerEvent) => void;
    onPointerout?: (event: PointerEvent) => void;
    onBeforetoggle?: (event: ToggleEvent) => void;
    onToggle?: (event: ToggleEvent) => void;
    onWheel?: (event: WheelEvent) => void;
    onAnimationcancel?: (event: AnimationEvent) => void;
    onAnimationstart?: (event: AnimationEvent) => void;
    onAnimationend?: (event: AnimationEvent) => void;
    onAnimationiteration?: (event: AnimationEvent) => void;
    onSecuritypolicyviolation?: (event: SecurityPolicyViolationEvent) => void;
    onTransitioncancel?: (event: TransitionEvent) => void;
    onTransitionend?: (event: TransitionEvent) => void;
    onTransitionrun?: (event: TransitionEvent) => void;
    onTransitionstart?: (event: TransitionEvent) => void;
}

declare interface IDOMForm extends IDOMElement {
    acceptcharset?: string;
    action?: string;
    autocomplete?: string;
    enctype?: string;
    method?: string;
    name?: string;
    novalidate?: boolean;
    target?: string;
}

declare interface IDOMInput extends IDOMElement, IFormAttributes {
    accept?: string;
    alt?: string;
    autocomplete?: IDOMInputAutocomplete;
    autofocus?: boolean;
    capture?: boolean | 'user' | 'environment';
    checked?: boolean | any[] | Set<any>;
    crossorigin?: string;
    disabled?: boolean;
    height?: number;
    indeterminate?: boolean;
    list?: string;
    max?: number;
    maxlength?: number;
    min?: number;
    minlength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number;
    type: IDOMInputType;
    width?: number;
}

declare type IDOMInputAutocomplete = 'on' | 'off' | 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday-day' | 'bday-month' | 'bday-year' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'family-name' | 'given-name' | 'honorific-prefix' | 'honorific-suffix' | 'name' | 'new-password' | 'one-time-code' | 'organization' | 'postal-code' | 'street-address' | 'transaction-amount' | 'transaction-currency' | 'username' | 'email' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national';

declare type IDOMInputType = 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';

declare interface IDOMLabel extends IDOMElement {
    for?: string;
    form?: string;
}

declare interface IDOMSelect extends IDOMElement, IFormAttributes {
    autocomplete?: string;
    autofocus?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
}

declare interface IDOMSelectOption {
    label: string;
    value: null | string | number;
    selected?: boolean;
    disabled?: boolean;
}

declare interface IDOMTextarea extends IDOMElement, IFormAttributes {
    autocomplete?: string;
    autofocus?: boolean;
    cols?: number;
    dirname?: string;
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    wrap?: string;
}

declare interface IEdit {
    props: IDOMInput & {
        icon?: Component;
        caption?: string;
    };
}

declare interface IForm {
    props: IDOMForm;
}

declare interface IFormAttributes {
    form?: string;
    formaction?: string;
    formenctype?: string;
    formmethod?: string;
    formnovalidate?: boolean;
    formtarget?: string;
}

declare interface IGlobalAttributes extends AriaAttributes {
    class?: string;
    style?: StyleValue;
    accesskey?: string;
    contenteditable?: boolean | 'inherit' | 'plaintext-only';
    contextmenu?: string;
    dir?: string;
    draggable?: boolean;
    enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    hidden?: boolean | 'hidden' | 'until-found';
    id?: string;
    inert?: boolean;
    lang?: string;
    spellcheck?: boolean;
    tabindex?: number;
    title?: string;
    translate?: 'yes' | 'no';
    role?: string;
    inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    is?: string;
    exportparts?: string;
}

declare interface IHyperlink {
    props: IDOMAnchor & {
        route?: string;
        params?: RouteParamsRawGeneric;
    };
}

declare interface ILabel {
    props: IDOMLabel & {
        caption?: string;
    };
}

declare interface ILayout {
    props: IDOMElement & {
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
    };
}

declare interface IMemo {
    props: IDOMTextarea & {
        caption?: string;
    };
}

declare interface IMenu {
    props: IDOMElement & {
        items: IMenuItem[];
        orientation?: 'vertical' | 'horizontal';
    };
}

declare interface IMenuItem extends ISidebarOption {
    submenu?: IMenuItem[];
    useSeparator?: boolean;
    onClick?: (event: PointerEvent) => void;
}

declare interface IMicrodataAttributes {
    about?: string;
    datatype?: string;
    inlist?: any;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    itemprop?: string;
    itemscope?: boolean;
    itemtype?: string;
    itemid?: string;
    itemref?: string;
}

declare interface ISidebar {
    props: IDOMElement & {
        sections: ISidebarSection[];
    };
}

declare interface ISidebarOption {
    caption?: string;
    icon?: Component;
    route?: string;
}

declare interface ISidebarSection {
    caption?: string;
    options: ISidebarOption[];
}

export declare const Kuxtal: {
    Schema: typeof Schema;
    Component: typeof Component_2;
};

export declare const Router: {
    create: typeof createRouter;
    createWebHistory: typeof createWebHistory;
};

declare namespace Schema {
    export {
        ISidebarOption,
        ISidebarSection,
        IMenuItem,
        IBreadcrumbRoute
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
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<IDOMAnchor & {
        route?: string;
        params?: RouteParamsRawGeneric;
        }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<IDOMAnchor & {
        route?: string;
        params?: RouteParamsRawGeneric;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<IDOMAnchor & {
    route?: string;
    params?: RouteParamsRawGeneric;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            default?(_: {}): any;
        };
    });
    Accordion: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<IDOMElement & {
        title: string;
        open?: boolean;
        }> & Readonly<{}>, {
        open: () => void;
        close: () => void;
        }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
        accordion: HTMLDetailsElement;
        }, HTMLDetailsElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<IDOMElement & {
        title: string;
        open?: boolean;
        }> & Readonly<{}>, {
        open: () => void;
        close: () => void;
        }, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<IDOMElement & {
    title: string;
    open?: boolean;
    }> & Readonly<{}>, {
    open: () => void;
    close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Button: DefineComponent<IDOMButton & {
    mode?: "filled" | "secondary" | "outlined" | "text" | "icon";
    caption?: string;
    icon?: Component;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMButton & {
    mode?: "filled" | "secondary" | "outlined" | "text" | "icon";
    caption?: string;
    icon?: Component;
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;
    Form: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<IDOMForm> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLFormElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<IDOMForm> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<IDOMForm> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Label: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<IDOMLabel & {
        caption?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLLabelElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<IDOMLabel & {
        caption?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<IDOMLabel & {
    caption?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Layout: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<IDOMElement & {
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
        }, Readonly<IDOMElement & {
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<IDOMElement & {
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
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<IDOMElement & {
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
        }, Readonly<IDOMElement & {
        showHeader?: boolean;
        showFooter?: boolean;
        showPrimarySidebar?: boolean;
        showSecondarySidebar?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<IDOMElement & {
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
    routes: IBreadcrumbRoute[];
    divider?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    current: string;
    routes: IBreadcrumbRoute[];
    divider?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLElement>;
    ComboBox: DefineComponent<    {
    modelValue?: null | string | number;
    } & IDOMSelect & {
    caption?: string;
    allowNull?: boolean;
    options: IDOMSelectOption[];
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: null | string | number;
    } & IDOMSelect & {
    caption?: string;
    allowNull?: boolean;
    options: IDOMSelectOption[];
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Edit: DefineComponent<    {
    modelValue?: string | number;
    } & IDOMInput & {
    icon?: Component;
    caption?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: string | number;
    } & IDOMInput & {
    icon?: Component;
    caption?: string;
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Memo: DefineComponent<    {
    modelValue?: string;
    } & IDOMTextarea & {
    caption?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: string;
    } & IDOMTextarea & {
    caption?: string;
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Menu: DefineComponent<IDOMElement & {
    items: IMenuItem[];
    orientation?: "vertical" | "horizontal";
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMElement & {
    items: IMenuItem[];
    orientation?: "vertical" | "horizontal";
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
    Sidebar: DefineComponent<IDOMElement & {
    sections: ISidebarSection[];
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMElement & {
    sections: ISidebarSection[];
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
};

export { Use }

export { }
