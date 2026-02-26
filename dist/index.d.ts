import { AllowedComponentProps } from 'vue';
import { AriaAttributes } from 'vue';
import { Component as Component_2 } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import { DefineComponent } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { IfAny } from '@vue/shared';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { RouteParamsRawGeneric } from 'vue-router';
import { Router } from 'vue-router';
import { RouterOptions } from 'vue-router';
import { RouterViewProps } from 'vue-router';
import { UnwrapRef } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

export declare namespace Component {
    export {
        ILabel,
        IEdit,
        IComboBox,
        IMemo,
        IToggleSwitch,
        IRadioButton,
        ICheckbox,
        IHyperlink,
        IMenu,
        IForm,
        ILayout,
        IButton,
        ISidebar,
        IAccordion,
        IBreadcrumb,
        IImage,
        ICountryFlag
    }
}

declare function createDialog({ message, onCancel, onConfirm, title, cancelCaption, confirmCaption, }: IDialogOptions): void;

declare function createNotification({ duration, message, type, description, }: INotificationOptions): void;

export { createRouter }

export { createWebHistory }

export declare namespace DOMType {
    export {
        IDOMEvents,
        IGlobalAttributes,
        IMicrodataAttributes,
        IFormAttributes,
        IDOMElement,
        IDOMAnchor,
        IDOMLabel,
        IDOMImage,
        IDOMAudio,
        IDOMVideo,
        IDOMInput,
        IDOMButton,
        IDOMSelect,
        IDOMSelectOption,
        IDOMTextarea,
        IDOMForm
    }
}

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
    icon?: Component_2;
}

declare interface IButton {
    props: IDOMButton & {
        mode?: 'filled' | 'secondary' | 'outlined' | 'text' | 'icon';
        caption?: string;
        icon?: Component_2;
    };
}

declare interface ICheckbox {
    props: Omit<IDOMInput, 'type'>;
}

declare interface IComboBox {
    props: IDOMSelect & {
        caption?: string;
        allowNull?: boolean;
        items: IDOMSelectOption[];
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

declare interface ICountryFlag {
    props: {
        code: string | 'AR' | 'BR' | 'CA' | 'CL' | 'CO' | 'CU' | 'DE' | 'ES' | 'FR' | 'IT' | 'JP' | 'MX' | 'PE' | 'US' | 'VE';
    };
}

declare interface IDialogOptions {
    title?: string;
    message: string;
    confirmCaption?: string;
    cancelCaption?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

declare interface IDOMAnchor extends IDOMElement {
    download?: string;
    href?: string;
    hreflang?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
}

declare interface IDOMAudio extends IDOMElement {
    autoplay?: boolean;
    controls?: boolean;
    crossorigin?: string;
    loop?: boolean;
    muted?: boolean;
    preload?: 'none' | 'metadata' | 'auto';
    src?: string;
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

declare interface IDOMImage extends IDOMElement {
    alt?: string;
    crossorigin?: 'anonymous' | 'use-credentials';
    decoding?: 'sync' | 'async' | 'auto';
    height?: number;
    ismap?: boolean;
    loading?: 'eager' | 'lazy';
    referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
    sizes?: string;
    src?: string;
    srcset?: string;
    width?: number;
    usemap?: string;
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
    step?: number | 'any';
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

declare interface IDOMVideo extends IDOMElement {
    autoplay?: boolean;
    controls?: boolean;
    crossorigin?: string;
    height?: number;
    loop?: boolean;
    muted?: boolean;
    playsinline?: boolean;
    poster?: string;
    preload?: 'none' | 'metadata' | 'auto';
    src?: string;
    width?: number;
}

declare interface IEdit {
    props: IDOMInput & {
        icon?: Component_2;
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

declare interface IImage {
    props: IDOMImage;
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

declare interface INotificationOptions {
    message: string;
    description?: string;
    type?: 'success' | 'error' | 'information';
    duration?: number;
}

declare interface IRadioButton {
    props: Omit<IDOMInput, 'type'> & {
        name: string;
        value: string | number;
    };
}

declare interface ISidebar {
    props: IDOMElement & {
        sections: ISidebarSection[];
        collapse?: boolean;
    };
}

declare interface ISidebarOption {
    caption?: string;
    icon?: Component_2;
    route?: string;
    onClick?: (event: PointerEvent) => void;
}

declare interface ISidebarSection {
    caption?: string;
    options: ISidebarOption[];
}

declare interface IToggleSwitch {
    props: Omit<IDOMInput, 'type' | 'checked'>;
}

export { Router }

export { RouterOptions }

export declare namespace Schema {
    export {
        ISidebarOption,
        ISidebarSection,
        IMenuItem,
        IBreadcrumbRoute
    }
}

declare function setTheme(theme: Type): void;

export declare namespace Theme {
    export {
        setTheme,
        toggleDarkMode,
        Type
    }
}

declare function toggleDarkMode(): void;

declare enum Type {
    DARK = "dark",
    LIGHT = "light",
    MIDNIGHT = "midnight",
    GREEN_NIGHT = "green-night"
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
    icon?: Component_2;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMButton & {
    mode?: "filled" | "secondary" | "outlined" | "text" | "icon";
    caption?: string;
    icon?: Component_2;
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;
    Slider: DefineComponent<    {
    modelValue?: number;
    min?: number;
    max?: number;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    "update:min": (value: number) => any;
    "update:max": (value: number) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: number;
    min?: number;
    max?: number;
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    "onUpdate:min"?: ((value: number) => any) | undefined;
    "onUpdate:max"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
    slider: HTMLDivElement;
    }, HTMLDivElement>;
    RangeSlider: DefineComponent<    {
    minimum?: number;
    maximun?: number;
    } & {
    min?: number;
    max?: number;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:minimum": (value: number) => any;
    "update:maximun": (value: number) => any;
    }, string, PublicProps, Readonly<{
    minimum?: number;
    maximun?: number;
    } & {
    min?: number;
    max?: number;
    }> & Readonly<{
    "onUpdate:minimum"?: ((value: number) => any) | undefined;
    "onUpdate:maximun"?: ((value: number) => any) | undefined;
    }>, {
    max: number;
    min: number;
    }, {}, {}, {}, string, ComponentProvideOptions, false, {
    slider: HTMLDivElement;
    }, HTMLDivElement>;
    RadioButton: DefineComponent<    {
    modelValue?: string | number | null;
    } & Omit<IDOMInput, "type"> & {
    name: string;
    value: string | number;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: string | number | null;
    } & Omit<IDOMInput, "type"> & {
    name: string;
    value: string | number;
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLInputElement>;
    ToggleSwitch: DefineComponent<    {
    modelValue?: boolean;
    } & Omit<IDOMInput, "type" | "checked">, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: boolean;
    } & Omit<IDOMInput, "type" | "checked">> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Checkbox: DefineComponent<    {
    modelValue?: boolean | null;
    } & Omit<IDOMInput, "type">, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | null) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: boolean | null;
    } & Omit<IDOMInput, "type">> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | null) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLInputElement>;
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
    items: IDOMSelectOption[];
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: null | string | number;
    } & IDOMSelect & {
    caption?: string;
    allowNull?: boolean;
    items: IDOMSelectOption[];
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Edit: DefineComponent<    {
    modelValue?: string | number | null;
    } & IDOMInput & {
    icon?: Component_2;
    caption?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: string | number | null;
    } & IDOMInput & {
    icon?: Component_2;
    caption?: string;
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Memo: DefineComponent<    {
    modelValue?: string | null;
    } & IDOMTextarea & {
    caption?: string;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
    }, string, PublicProps, Readonly<{
    modelValue?: string | null;
    } & IDOMTextarea & {
    caption?: string;
    }> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
    Menu: DefineComponent<IDOMElement & {
    items: IMenuItem[];
    orientation?: "vertical" | "horizontal";
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMElement & {
    items: IMenuItem[];
    orientation?: "vertical" | "horizontal";
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
    MenuBar: DefineComponent<IDOMElement & {
    items: IMenuItem[];
    orientation?: "vertical" | "horizontal";
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMElement & {
    items: IMenuItem[];
    orientation?: "vertical" | "horizontal";
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLElement>;
    Sidebar: DefineComponent<IDOMElement & {
    sections: ISidebarSection[];
    collapse?: boolean;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMElement & {
    sections: ISidebarSection[];
    collapse?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
    Image: DefineComponent<IDOMImage, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMImage> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLImageElement>;
    Thumbnail: DefineComponent<IDOMImage, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IDOMImage> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLImageElement>;
    CountryFlag: DefineComponent<    {
    code: string | "AR" | "BR" | "CA" | "CL" | "CO" | "CU" | "DE" | "ES" | "FR" | "IT" | "JP" | "MX" | "PE" | "US" | "VE";
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    code: string | "AR" | "BR" | "CA" | "CL" | "CO" | "CU" | "DE" | "ES" | "FR" | "IT" | "JP" | "MX" | "PE" | "US" | "VE";
    }> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
    useState: typeof useState;
    createDialog: typeof createDialog;
    createNotification: typeof createNotification;
};

declare function useState<T>(initial: T): readonly [[T] extends [Ref<any, any>] ? IfAny<T, Ref<T, T>, T> : Ref<UnwrapRef<T>, T | UnwrapRef<T>>, (value: T) => void];

export { }
