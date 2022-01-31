import { PropertyValues } from 'lit';
import { CdsButtonAction } from '@cds/core/button-action';
/**
 * Action Expand Button
 *
 * ```typescript
 * import '@cds/core/button-expand/register.js';
 * ```
 *
 * ```html
 * <cds-button-expand pressed></cds-button-expand>
 * ```
 * @beta
 * @element cds-button-expand
 * @slot - For projecting custom cds-icon
 */
export declare class CdsButtonExpand extends CdsButtonAction {
    action: 'vertical' | 'horizontal' | 'detail';
    static get styles(): import("lit").CSSResultGroup[];
    private get iconDirection();
    private get iconShape();
    render(): import("lit-html").TemplateResult<1>;
    constructor();
    firstUpdated(props: PropertyValues): void;
}
