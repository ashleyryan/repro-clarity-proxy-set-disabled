import { LitElement } from 'lit';
/**
 * ```typescript
 * import '@cds/core/breadcrumb/register.js';
 * ```
 *
 * ```html
 * <cds-breadcrumb aria-label="breadcrumb">
 *   <a href="/home" cds-text="link">Home</a>
 *   <a href="/parent" cds-text="link">Parent page</a>
 *   <span aria-current="page">Current page</span>
 * </cds-breadcrumb>
 * ```
 *
 * @beta
 * @element cds-breadcrumb
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --color
 */
export declare class CdsBreadcrumb extends LitElement {
    private navItems;
    private customSeparator;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private get separator();
    private assignSlots;
    private get slotNames();
    static get styles(): import("lit").CSSResultGroup[];
}
