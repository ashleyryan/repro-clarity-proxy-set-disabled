import { LitElement } from 'lit';
/**
 * Web component pagination.
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
 * @element cds-pagination
 * @slot
 * @slot cds-pagination-button
 * @cssprop --color
 * @cssprop --font-size
 */
export declare class CdsPagination extends LitElement {
    protected globalStyles: import("lit").CSSResultGroup;
    private numberInput;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
    firstUpdated(props: Map<string, any>): void;
    private setupNumberInput;
    private validateAriaLabel;
}
