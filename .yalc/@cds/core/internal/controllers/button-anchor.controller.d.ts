import { ReactiveController, ReactiveElement } from 'lit';
export declare type ButtonAnchor = ReactiveElement & HTMLElement & {
    readonly: boolean;
};
/**
 * Shim for allowing custom element button types to be wrapped with anchors as Safari prevents use of extending native element types.
 * Will detect presence of anchor and set component to a readonly button state.
 *
 * Example:
 *
 * ```html
 * <a href="#">
 *  <cds-button></cds-button>
 * </a>
 * ```
 */
export declare function buttonAnchor<T extends ButtonAnchor>(): ClassDecorator;
export declare class ButtonAnchorController<T extends ButtonAnchor> implements ReactiveController {
    private host;
    constructor(host: T);
    hostUpdated(): void;
}
