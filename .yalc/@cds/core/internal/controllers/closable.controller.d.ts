import { ReactiveControllerHost } from 'lit';
interface ClosableConfig {
    escape?: boolean;
    lastFocus?: boolean;
    closable?: () => boolean;
}
/**
 * Given a closable component provides the following
 * - close on escape
 * - focus to trigger
 * - close method for component specific events
 */
export declare class ClosableController {
    private host;
    private config;
    private observer;
    priorActiveElement: HTMLElement;
    private get isFocusTrapper();
    constructor(host: ReactiveControllerHost & HTMLElement, config?: ClosableConfig);
    hostConnected(): void;
    hostDisconnected(): void;
    close(detail?: any): void;
    private setFocusTrap;
    private removeFocusTrap;
    private togglePriorActiveElement;
    private setPriorActiveElement;
    private keyEvent;
}
export {};
