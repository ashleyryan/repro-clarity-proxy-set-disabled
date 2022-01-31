import { LitElement } from 'lit';
import { EventEmitter } from '@cds/core/internal';
import { CdsControl } from '../control/control.element.js';
import { ControlStatus, FormLayout, ControlWidth } from '../utils/interfaces.js';
import { CdsControlMessage } from '../control-message/control-message.element.js';
import { CdsInternalControlInline } from './../control-inline/control-inline.element.js';
import { CdsInternalControlLabel } from '../control-label/control-label.element.js';
/**
 * Internal Control Group
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-group>
 *   <label>...</label>
 *   <cds-control>
 *     <label></label>
 *     <input ... />
 *   </cds-control>
 *   <cds-control>
 *     <label></label>
 *     <input ... />
 *   </cds-control>
 * </cds-internal-control-group>
 * ```
 *
 * @element cds-internal-control-group
 * @slot - For projecting control group
 */
export declare class CdsInternalControlGroup extends LitElement {
    /**
     * Set the status of control group validation
     * @type {neutral | error | success}
     */
    status: ControlStatus;
    /** @type {horizontal | horizontal-inline | vertical | vertical-inline | compact} */
    layout: FormLayout;
    /** Align the labels of controls within group left or right */
    controlAlign: 'left' | 'right';
    /** Disable all controls within a control group or omit and disable controls individually */
    disabled: boolean;
    /**
     * Adjust the control from the default full width or the browser default width
     * @type {stretch | shrink}
     */
    controlWidth: ControlWidth;
    /**
     * By default forms will collapse to layout that prevents overflow.
     * If disabled control layout may break or overflow in unexpected ways.
     */
    responsive: boolean;
    protected label: HTMLLabelElement;
    protected controls: NodeListOf<CdsControl | CdsInternalControlInline>;
    protected messages: NodeListOf<CdsControlMessage>;
    /** @private */
    controlLabel: CdsInternalControlLabel;
    private controlSlot;
    private groupLabelId;
    protected layoutChange: EventEmitter<FormLayout>;
    protected isInlineControlGroup: boolean;
    protected isControlGroup: boolean;
    protected observers: (MutationObserver | ResizeObserver)[];
    static styles: import("lit").CSSResultGroup[];
    protected get messagesTemplate(): import("lit-html").TemplateResult<1>;
    protected get controlsTemplate(): import("lit-html").TemplateResult<1>;
    private get inlineControlLayout();
    private get primaryLabelLayout();
    private get controlMessageLayout();
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    disconnectedCallback(): void;
    /** @private */
    get layoutStable(): boolean;
    private associateLabelAndGroup;
    private updateControlMessages;
    private setupResponsive;
}
