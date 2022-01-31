import { CdsInternalControlInline } from '@cds/core/forms';
/**
 * Radio
 *
 * ```typescript
 * import '@cds/core/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio>
 *   <label>Test</label>
 *   <input type="radio" />
 * </cds-radio>
 * ```
 *
 * @element cds-radio
 * @slot - For projecting radio input
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --fill-box-shadow
 */
export declare class CdsRadio extends CdsInternalControlInline {
    static get styles(): import("lit").CSSResultGroup[];
    firstUpdated(props: Map<string, any>): void;
    /**
     * Native radio inputs have no concept of an un-checked event. This means for
     * our radios to update/rerender we need to listen for the other radios in the
     * group when the are checked. If the Radio is within a cds-control-group or
     * cds-radio-group then the group handles this. Radios can be used outside of
     * groups in cases of using aria-labelledby like a selectable grid row/cell.
     */
    private associateNonGroupRadios;
}
