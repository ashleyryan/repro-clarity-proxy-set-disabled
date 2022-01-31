import { LitElement } from 'lit';
export declare class AriaPopupController {
    private host;
    private observer;
    constructor(host: LitElement);
    private get closableController();
    hostConnected(): Promise<void>;
    hostDisconnected(): void;
    private onExpand;
}
