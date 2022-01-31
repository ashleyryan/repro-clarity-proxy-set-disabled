import { PropertyValues } from 'lit';
import { CdsButtonAction } from '@cds/core/button-action';
/**
 * Web component pagination button to be used inside pagination.
 *
 * ```typescript
 * import '@cds/core/pagination/register.js';
 * ```
 *
 * ```html
 * <cds-pagination>
 *   <cds-pagination-button action="first" disabled></cds-pagination-button>
 *   <cds-pagination-button action="prev" disabled></cds-pagination-button>
 *   <span aria-label="current page">1 / 3</span>
 *   <cds-pagination-button action="next"></cds-pagination-button>
 *   <cds-pagination-button action="last"></cds-pagination-button>
 * </cds-pagination>
 * ```
 *
 * @beta
 * @element cds-pagination-button
 * @slot
 * @slot cds-icon
 * @cssprop --background
 * @cssprop --padding
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 * @cssprop --box-shadow
 * @cssprop --min-height
 * @cssprop --min-width
 * @property disabled
 */
export declare class CdsPaginationButton extends CdsButtonAction {
    /**
     * Sets the action from a predefined list of actions
     */
    action: 'first' | 'prev' | 'next' | 'last';
    private direction;
    private cdsIcon;
    updated(props: PropertyValues): void;
}
