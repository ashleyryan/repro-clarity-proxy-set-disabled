import { PropertyValues } from 'lit';
import { CdsButtonAction } from '@cds/core/button-action';
/**
 * Control Action Button
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control-action>
 *
 * </cds-control-action>
 * ```
 *
 * @element cds-control-action
 * @slot - For projecting text content or cds-icon
 */
export declare class CdsControlAction extends CdsButtonAction {
    action: 'label' | 'prefix' | 'suffix';
    updated(props: PropertyValues): void;
}
