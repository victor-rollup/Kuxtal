export namespace Helper {
  // ----------------------------------------------------------------------------------------------
  type collection = any[];
  type text = string | number | undefined;
  // ----------------------------------------------------------------------------------------------
  const LOCALE_TIME_ZONE = 'es-mx';
  const DEFAULT_RELATIVE_TIME_UNIT = 'day';

  const NUMERIC_EXPRESSION = /^[0-9]*$/;
  const EMPTY_SPACES_EXPRESSION = /\s/g;
  // ----------------------------------------------------------------------------------------------
  export namespace Use {
    export const DEFAULT_DATE = new Date();
    export const ZERO = Number();
    export const EMPTY_ARRAY = Array();
    export const EMPTY_STRING = String();
    export const EMPTY_OBJECT = Object();
    export const FALSE = Boolean();
    export const TRUE = !FALSE;
    export const NULL = null;
  }
  // ----------------------------------------------------------------------------------------------
  export function toRelativeTime(
    amount: number,
    timeUnit: string | any = DEFAULT_RELATIVE_TIME_UNIT
  ) {
    const relativeTime = new Intl.RelativeTimeFormat(LOCALE_TIME_ZONE, {
      style: 'long',
      numeric: 'auto',
    });
    return relativeTime.format(amount, timeUnit);
  }
  // ----------------------------------------------------------------------------------------------
  export function toCurrency(
    value: number = Use.ZERO,
    currency: 'MXN' | 'USD' | 'EUR' = 'MXN'
  ) {
    return Intl.NumberFormat('es-mx', {
      style: 'currency',
      currency,
    }).format(value);
  }
  // ----------------------------------------------------------------------------------------------
  export function trim(text: text): string {
    return String(text).replace(EMPTY_SPACES_EXPRESSION, Use.EMPTY_STRING);
  }
  // ----------------------------------------------------------------------------------------------// ----------------------------------------------------------------------------------------------
  export function compare(
    text: text = Use.EMPTY_STRING,
    target: text = Use.EMPTY_STRING
  ): boolean {
    return String(text) === String(target);
  }
  // ----------------------------------------------------------------------------------------------
  export function isEmpty(text: text): boolean {
    return compare(text);
  }
  // ----------------------------------------------------------------------------------------------
  export function notEmpty(text: text): boolean {
    return !isEmpty(text);
  }
  // ----------------------------------------------------------------------------------------------
  export function isNumber(value: text | number): boolean {
    return assertRegularExpression(value, NUMERIC_EXPRESSION);
  }
  // ----------------------------------------------------------------------------------------------
  export function isNegative(number: number): boolean {
    if (!isNumber(number)) throw Error('Value must be a number');
    return number < Use.ZERO;
  }
  // ----------------------------------------------------------------------------------------------
  export function isPositive(number: number): boolean {
    return !isNegative(number);
  }
  // ----------------------------------------------------------------------------------------------
  export function assertRegularExpression(
    text: text,
    expression: RegExp
  ): boolean {
    return new RegExp(expression).test(String(text));
  }
  // ----------------------------------------------------------------------------------------------
  export function isUnique(target: any, collection: collection): boolean {
    return !collection.includes(target);
  }
  // ----------------------------------------------------------------------------------------------
  export function addTargetToCollection(
    target: any,
    inCollection: collection
  ): void {
    if (!isUnique(target, inCollection)) {
      return;
    }
    inCollection.push(target);
  }
  // ----------------------------------------------------------------------------------------------
  export function removeTargetFromCollection(
    target: any,
    inCollection: collection
  ) {
    const GO_THROUGH_ONCE = 1;
    const fromTargetIndex = inCollection.indexOf(target);
    inCollection.splice(fromTargetIndex, GO_THROUGH_ONCE);
  }
  // ----------------------------------------------------------------------------------------------
  export function hasLength(
    collection: collection,
    length = Use.ZERO
  ): boolean {
    return collection.length === length;
  }
  // ----------------------------------------------------------------------------------------------
  export function hasElements(collection: collection): boolean {
    return !hasLength(collection);
  }
  // ----------------------------------------------------------------------------------------------
  export function selectFirstElement([element]: any[]) {
    return element;
  }
  // ----------------------------------------------------------------------------------------------
  function selectInput(id: string) {
    return document.querySelector<HTMLInputElement>(`#${id}`)!;
  }
  // ----------------------------------------------------------------------------------------------
  function selectDialog(id: string) {
    return document.querySelector<HTMLDialogElement>(`#${String(id)}`)!;
  }
  // ----------------------------------------------------------------------------------------------
  export function openDialog(id: string) {
    return selectDialog(id).show();
  }
  // ----------------------------------------------------------------------------------------------
  export function closeDialog(id: string) {
    return selectDialog(id).close();
  }
  // ----------------------------------------------------------------------------------------------
  export function inputSelect(id: string) {
    return selectInput(id).select();
  }
  // ----------------------------------------------------------------------------------------------
  export function inputFocus(id: string) {
    return selectInput(id).focus();
  }
  // ----------------------------------------------------------------------------------------------
  export function preventIfNumeric(event: KeyboardEvent) {
    if (!isNumber(event.key) && event.key != '.') {
      event.preventDefault();
    }
  }
  // ----------------------------------------------------------------------------------------------
  export function preventIfExclusiveNumeric(event: KeyboardEvent) {
    if (!isNumber(event.key)) {
      event.preventDefault();
    }
  }
  // ----------------------------------------------------------------------------------------------
}

export default Helper;
