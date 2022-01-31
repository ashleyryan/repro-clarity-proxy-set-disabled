import { CdsControl } from '@cds/core/forms';
/**
 * Range
 *
 * ```typescript
 * import '@cds/core/range/register.js';
 * ```
 *
 * ```html
 * <cds-range>
 *   <label>range</label>
 *   <input type="range" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-range>
 * ```
 *
 * @element cds-range
 * @slot - For projecting range input
 * @cssprop --background
 * @cssprop --border-radius
 * @cssprop --track-background
 * @cssprop --track-fill-background
 * @cssprop --track-height
 * @cssprop --thumb-background
 * @cssprop --thumb-width
 * @cssprop --thumb-height
 */
export declare class CdsRange extends CdsControl {
    static get styles(): import("lit").CSSResultGroup[];
    protected globalStyles: import("lit").CSSResultGroup;
    protected get inputTemplate(): import("lit-html").TemplateResult<1>;
    firstUpdated(props: Map<string, any>): void;
    private setTrackWidth;
}
