import { LitElement } from 'lit';
import { FirstFocusController } from '../controllers/first-focus.controller.js';
import { ClosableController } from '../controllers/closable.controller.js';
import { InlineFocusTrapController } from '../controllers/inline-focus-trap.controller.js';
export declare class CdsBaseFocusTrap extends LitElement {
    firstFocusController: FirstFocusController;
    closableController: ClosableController;
    protected inlineFocusTrapController: InlineFocusTrapController;
    protected demoMode: boolean;
    protected focusTrapId: string;
    constructor();
    /**
     * Its recommended to remove or add a focus trap element from the DOM
     * some SSR systems can have technical constraints where the item can
     * only be removed via CSS/hidden.
     */
    hidden: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
