import { LitElement } from 'lit';
import { FormLayout, ControlWidth } from '../utils/interfaces.js';
/**
 * Form
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-form-group layout="horizontal">
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 *
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 * </cds-form-group>
 * ```
 *
 * @element cds-form-group
 * @slot - For projecting input controls
 * @cssprop --label-width
 */
export declare class CdsFormGroup extends LitElement {
    /**
     * Set to adjust the default control layout for all controls within form group.
     * When `responsive` is true this will be the largest size to scale to.
     * @type {horizontal | horizontal-inline | vertical | vertical-inline | compact}
     */
    layout: FormLayout;
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
    /**
     * Set the validate attribute to sync with HTML5 native validation
     * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
     */
    validate: boolean;
    private controls;
    private groups;
    protected observers: (MutationObserver | ResizeObserver)[];
    private get controlsAndGroups();
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    private overflowElement;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    disconnectedCallback(): void;
    private setControlLabelWidths;
    private syncLayouts;
    private collapseForm;
    private expandForm;
}
