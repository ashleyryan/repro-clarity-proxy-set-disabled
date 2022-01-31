import { LitElement } from 'lit';
/**
 * Base class that provides all nessesary behavior for enabling a custom element to emulate a native button.
 */
export declare class CdsBaseButton extends LitElement {
    readonly: boolean;
    type: 'button' | 'submit';
    name: string;
    value: string;
    disabled: boolean;
    popup: string;
    pressed: boolean;
}
