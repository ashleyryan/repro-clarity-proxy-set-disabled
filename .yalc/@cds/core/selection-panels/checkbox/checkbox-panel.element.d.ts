import { CdsCheckbox } from '@cds/core/checkbox';
import { SelectionPanelSizes } from '../shared/selection-panel.interfaces.js';
/**
 * Checkbox Panel
 *
 * ```typescript
 * import '@cds/core/selection-panels/checkbox/register.js';
 * ```
 *
 * ```html
 * <cds-checkbox-panel>
 *   <label cds-layout="vertical gap:md align:center">
 *     <span cds-text="section">VM One</span>
 *     <span cds-text="subsection center">Orchestrate & Automate</p>
 *   </label>
 *   <input type="radio" value="0" />
 * </cds-checkbox-panel>
 * ```
 *
 * @beta
 * @element cds-checkbox-panel
 * @slot - For projecting checkbox and it's complex label
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --box-shadow
 */
export declare class CdsCheckboxPanel extends CdsCheckbox {
    size: SelectionPanelSizes;
    protected get internalLabelTemplate(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}
