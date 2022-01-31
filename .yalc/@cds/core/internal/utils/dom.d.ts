/**
 * We are not going to be opinionated about the use of the disabled attribute here.
 * Browsers will manage that on their own. The focus of this is to determine whether
 * or not a tabindex should be set on an element to make it programmatically
 * focusable.
 *
 */
export declare function isFocusable(element: HTMLElement): boolean;
export declare function isScrollable(element: HTMLElement): boolean;
/**
 * Works only on light DOM because that is all we have needed it for thus far
 *
 */
export declare function queryAllFocusable(element: HTMLElement): NodeListOf<Element>;
export declare const focusableSelectors: string[];
export declare const tabFlowSelectors: string[];
export declare function getElementWidth(element: HTMLElement, unit?: string): string;
export declare function getElementWidthUnless(element: HTMLElement, unless: boolean): string;
export declare function isHTMLElement(el: any): boolean;
export declare type HTMLAttributeTuple = [string, string | boolean];
export declare function hasAttributeAndIsNotEmpty(element: HTMLElement | null, attribute: string): boolean;
export declare function setOrRemoveAttribute(element: HTMLElement, attrTuple: HTMLAttributeTuple, test: () => boolean): void;
export declare function setAttributes(element: HTMLElement, ...attributeTuples: HTMLAttributeTuple[]): void;
export declare function removeAttributes(element: HTMLElement, ...attrs: string[]): void;
export declare function addAttributeValue(element: HTMLElement, attr: string, value: string): void;
export declare function removeAttributeValue(element: HTMLElement, attr: string, value: string): void;
export declare function assignSlotNames(...slotTuples: [HTMLElement, string | boolean][]): void;
export declare function isVisible(element: HTMLElement): boolean;
export declare function spanWrapper(nodeList: NodeListOf<ChildNode>): void;
export declare function queryChildFromLightOrShadowDom(hostEl: HTMLElement, selector?: string): HTMLElement | null;
export declare function createFragment(tagString: string): DocumentFragment;
export declare function getWindowDimensions(win?: Window): {
    width: number;
    height: number;
};
export declare function windowIsAboveMobileBreakpoint(breakpointAsPixelValue?: string): boolean;
export declare function makeFocusable(element: HTMLElement, addToTabflow?: boolean): HTMLElement;
export declare function getShadowRootOrElse(hostEl: HTMLElement, fallbackEl?: HTMLElement): HTMLElement;
