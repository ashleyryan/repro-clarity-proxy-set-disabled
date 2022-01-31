import { CdsInternalControlInline } from '@cds/core/forms';
/**
 * Toggle
 *
 * ```typescript
 * import '@cds/core/toggle/register.js';
 * ```
 *
 * ```html
 * <cds-toggle>
 *   <label>Toggle</label>
 *   <input type="checkbox" />
 * </cds-toggle>
 * ```
 *
 * @element cds-toggle
 * @slot - For projecting checkbox
 * @cssprop --background
 * @cssprop --border
 * @cssprop --border-radius
 * @cssprop --height
 * @cssprop --width
 * @cssprop --anchor-background
 * @cssprop --anchor-border-radius
 * @cssprop --anchor-width
 * @cssprop --anchor-height
 * @cssprop --toggle-speed
 */
export declare class CdsToggle extends CdsInternalControlInline {
    cdsMotion: string;
    updated(props: Map<string, any>): Promise<void>;
    static get styles(): import("lit").CSSResultGroup[];
}
