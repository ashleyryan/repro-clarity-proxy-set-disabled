import { LitElement, TemplateResult } from 'lit';
import { EventEmitter } from '@cds/core/internal';
import { CdsControlMessage } from './../control-message/control-message.element.js';
import { ControlStatus, ControlLayout, ControlWidth } from './../utils/interfaces.js';
import { CdsInternalControlLabel } from '../control-label/control-label.element.js';
import { CdsControlAction } from '../control-action/control-action.element.js';
export declare const enum ControlLabelLayout {
    default = "default",
    ariaLabel = "aria-label",
    inputGroup = "input-group",
    hiddenLabel = "hidden-label"
}
/**
 * Generic Control
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control>
 *   <label>control</label>
 *   <input type="text" />
 * </cds-control>
 * ```
 * @element cds-control
 * @slot - For projecting input and label
 * @cssprop --label-width
 */
export declare class CdsControl extends LitElement {
    /**
     * Set the status of form control validation
     * @type {neutral | error | success}
     */
    status: ControlStatus;
    /**
     * Adjust the control from the default full width or the browser default width
     * @type {stretch | shrink}
     */
    controlWidth: ControlWidth;
    /**
     * Set the validate attribute to sync with HTML5 native validation
     * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
     */
    validate: boolean;
    /**
     * By default forms will collapse to layout that prevents overflow.
     * If disabled control layout may break or overflow in unexpected ways.
     */
    responsive: boolean;
    /**
     * Set to adjust the default control layout. When `responsive` is true this will be the largest size to scale to.
     * @type {vertical | horizontal | compact}
     */
    get layout(): ControlLayout;
    set layout(value: ControlLayout);
    private _layout;
    protected focused: boolean;
    protected disabled: boolean;
    protected readonly: boolean;
    protected fixedControlWidth: boolean;
    protected supportsPrefixSuffixActions: boolean;
    protected get isRTL(): boolean;
    /** @private */
    labelLayout: ControlLabelLayout;
    /** @private Used for control/form groups */
    inputControl: HTMLInputElement;
    protected label: HTMLLabelElement;
    /** @private */
    controlLabel: CdsInternalControlLabel;
    protected datalistControl: HTMLDataListElement;
    protected messages: NodeListOf<CdsControlMessage>;
    protected controlActions: NodeListOf<CdsControlAction>;
    private prefixAction;
    private suffixAction;
    private messageSlot;
    layoutChange: EventEmitter<ControlLayout>;
    protected observers: (MutationObserver | ResizeObserver)[];
    static get styles(): import("lit").CSSResultGroup[];
    private get hasAriaLabelTypeAttr();
    private get hasStatusIcon();
    render(): TemplateResult<1>;
    protected get inputTemplate(): TemplateResult<1>;
    protected get prefixDefaultTemplate(): TemplateResult | null;
    protected get suffixDefaultTemplate(): TemplateResult | null;
    private get isGenericControl();
    private get hasControlActions();
    private get primaryLabelTemplate();
    protected get messagesTemplate(): TemplateResult<1>;
    private get prefixTemplate();
    private get suffixTemplate();
    connectedCallback(): void;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    disconnectedCallback(): void;
    protected associateInputAndLabel(): void;
    private associateInputToDatalist;
    private setupDescribedByUpdates;
    private setupHostAttributes;
    private setupHTML5Validation;
    private setActionOffsetPadding;
    /** @private */
    get layoutStable(): boolean;
    private setupResponsive;
    private setupLabelLayout;
    private assignSlotIfInControlGroup;
}
