import { ReactiveControllerHost } from 'lit';
/**
 * Focus Trap that given a DOM element creates a flattened tree traversal
 * between both Shadow DOM and Light DOM
 */
export declare class InlineFocusTrapController {
    private host;
    private config;
    constructor(host: ReactiveControllerHost & HTMLElement, config?: {
        start: string;
        end: string;
    });
    private get focusableItems();
    private get root();
    hostConnected(): Promise<void>;
}
