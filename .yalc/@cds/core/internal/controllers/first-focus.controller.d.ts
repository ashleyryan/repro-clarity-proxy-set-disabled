import { LitElement } from 'lit';
/**
 * Provides a focus first behavior to any component via the cds-first-focus attribute
 */
export declare class FirstFocusController {
    private host;
    private observer;
    constructor(host: LitElement);
    private get focusableItems();
    hostConnected(): Promise<void>;
    hostDisconnected(): void;
    private cdsFocusFirst;
}
