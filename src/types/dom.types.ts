// ------------------------------------------------------------------------------------------------
import type { AriaAttributes, StyleValue } from 'vue';
// ------------------------------------------------------------------------------------------------
type IDOMInputAutocomplete =
  | 'on'
  | 'off'
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-family-name'
  | 'cc-given-name'
  | 'cc-name'
  | 'cc-number'
  | 'cc-type'
  | 'country'
  | 'country-name'
  | 'current-password'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'name'
  | 'new-password'
  | 'one-time-code'
  | 'organization'
  | 'postal-code'
  | 'street-address'
  | 'transaction-amount'
  | 'transaction-currency'
  | 'username'
  | 'email'
  | 'tel'
  | 'tel-area-code'
  | 'tel-country-code'
  | 'tel-extension'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-national';
// ------------------------------------------------------------------------------------------------
type IDOMInputType =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
// ------------------------------------------------------------------------------------------------
export interface IDOMEvents {
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
// ------------------------------------------------------------------------------------------------
export interface IGlobalAttributes extends AriaAttributes {
  accesskey?: string;
  contenteditable?: boolean | 'inherit' | 'plaintext-only';
  contextmenu?: string;
  dir?: string;
  draggable?: boolean;
  enterkeyhint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
  hidden?: boolean | 'hidden' | 'until-found';
  id?: string;
  inert?: boolean;
  lang?: string;
  spellcheck?: boolean;
  tabindex?: number;
  title?: string;
  translate?: 'yes' | 'no';
  role?: string;
  inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
  is?: string;
  exportparts?: string;
  // part?: string;
}
// ------------------------------------------------------------------------------------------------
export interface IMicrodataAttributes {
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
// ------------------------------------------------------------------------------------------------
export interface IFormAttributes {
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
}
// ------------------------------------------------------------------------------------------------
export interface IDOMElement
  extends IGlobalAttributes, IMicrodataAttributes, IDOMEvents {
  placeholder?: string;
  autocapitalize?: string;
  autocorrect?: string;
  autosave?: string;
  results?: number;
  security?: string;
  unselectable?: 'on' | 'off';
}
// ------------------------------------------------------------------------------------------------
export interface IDOMAnchor extends IDOMElement {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  rel?: string;
  target?: string;
  type?: string;
}
// ------------------------------------------------------------------------------------------------
export interface IDOMLabel extends IDOMElement {
  for?: string;
  form?: string;
}
// ------------------------------------------------------------------------------------------------
export interface IDOMImage extends IDOMElement {
  alt?: string;
  crossorigin?: string;
  decoding?: 'sync' | 'async' | 'auto';
  height?: number;
  ismap?: boolean;
  loading?: 'eager' | 'lazy';
  referrerpolicy?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  width?: number;
  usemap?: string;
}
// ------------------------------------------------------------------------------------------------
export interface IDOMAudio extends IDOMElement {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  src?: string;
}
// ------------------------------------------------------------------------------------------------
export interface IDOMVideo extends IDOMElement {
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
// ------------------------------------------------------------------------------------------------
export interface IDOMInput extends IDOMElement, IFormAttributes {
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
// ------------------------------------------------------------------------------------------------
export interface IDOMButton extends IDOMElement, IFormAttributes {
  autofocus?: boolean;
  disabled?: boolean;
  name?: string;
  type?: 'submit' | 'reset' | 'button';
}
// ------------------------------------------------------------------------------------------------
export interface IDOMSelect extends IDOMElement, IFormAttributes {
  autocomplete?: string;
  autofocus?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}
// ------------------------------------------------------------------------------------------------
export interface IDOMSelectOption {
  label: string;
  value: null | string | number;
  selected?: boolean;
  disabled?: boolean;
}
// ------------------------------------------------------------------------------------------------
export interface IDOMTextarea extends IDOMElement, IFormAttributes {
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
// ------------------------------------------------------------------------------------------------
export interface IDOMForm extends IDOMElement {
  acceptcharset?: string;
  action?: string;
  autocomplete?: string;
  enctype?: string;
  method?: string;
  name?: string;
  novalidate?: boolean;
  target?: string;
}
// ------------------------------------------------------------------------------------------------
