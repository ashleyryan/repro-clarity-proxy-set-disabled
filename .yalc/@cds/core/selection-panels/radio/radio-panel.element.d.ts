import { CdsRadio } from '@cds/core/radio';
import { SelectionPanelSizes } from '../shared/selection-panel.interfaces.js';
/**
 * Radio Panel
 *
 * ```typescript
 * import '@cds/core/selection-panels/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio-group>
 *   <cds-radio-panel>
 *     <label cds-layout="vertical gap:md align:center">
 *       <span cds-text="section">VM One</span>
 *       <span cds-text="subsection center">Orchestrate & Automate</p>
 *     </label>
 *     <input type="radio" value="0" />
 *   </cds-radio-panel>
 *   <cds-radio-panel>
 *     <label cds-layout="vertical gap:md align:center">
 *       <span cds-text="section">VM One</span>
 *       <span cds-text="subsection center">Orchestrate & Automate</p>
 *     </label>
 *     <input type="radio" value="1" />
 *   </cds-radio-panel>
 * </cds-radio-group>
 * ```
 * @beta
 * @element cds-radio-panel
 * @slot - For projecting radio and it's complex label
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --box-shadow
 */
export declare class CdsRadioPanel extends CdsRadio {
    size: SelectionPanelSizes;
    static get styles(): import("lit").CSSResultGroup[];
    protected get internalLabelTemplate(): import("lit-html").TemplateResult<1>;
}
