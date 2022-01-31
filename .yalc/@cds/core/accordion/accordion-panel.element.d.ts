import { LitElement } from 'lit';
import { EventEmitter } from '@cds/core/internal';
/**
 * Web component accordion panel to be used inside an accordion
 *
 * ```typescript
 * import '@cds/core/accordion/register.js';
 * ```
 *
 * ```html
 * <cds-accordion>
 *   <cds-accordion-panel expanded>
 *     <cds-accordion-header>Item 1</cds-accordion-header>
 *     <cds-accordion-content>Content 1</cds-accordion-content>
 *   </cds-accordion-panel>
 *   <cds-accordion-panel>
 *     <cds-accordion-header>Item 2</cds-accordion-header>
 *     <cds-accordion-content>Content 2</cds-accordion-content>
 *   </cds-accordion-panel>
 *   <cds-accordion-panel disabled>
 *     <cds-accordion-header>Item 3</cds-accordion-header>
 *     <cds-accordion-content>Content 3</cds-accordion-content>
 *   </cds-accordion-panel>
 * </cds-accordion>
 * ```
 *
 * @element cds-accordion-panel
 * @slot
 * @slot cds-accordion-header
 * @slot cds-accordion-content
 * @event expandedChange - notify when the user has clicked the panel header
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 */
export declare class CdsAccordionPanel extends LitElement {
    cdsMotion: string;
    cdsMotionChange: EventEmitter<string>;
    disabled: boolean;
    expanded: boolean;
    private header;
    private content;
    protected expandedChange: EventEmitter<boolean>;
    private toggle;
    updated(props: Map<string, any>): void;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}
