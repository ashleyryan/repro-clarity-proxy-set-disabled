import { LitElement } from 'lit';
import { AlertGroupTypes, AlertStatusTypes, AlertSizes } from './alert.interfaces.js';
/**
 * Alert groups are containers for a set of alerts. Alert groups can hold one or many alerts
 * inside of them with the expectation that all alerts will be of the same type. The exception
 * to this rule is the `loading` alert type, which will be displayed regardless of the type
 * of alert group containing it.
 *
 * ```typescript
 * import '@cds/core/alert/register.js';
 * ```
 *
 * ```html
 *   <cds-alert-group type="danger">
 *     <cds-alert closable="true">
 *       Single alert
 *       <cds-alert-actions>
 *         buttons, links
 *       </cds-alert-actions>
 *     </cds-alert>
 *     <cds-alert type="loading">
 *       Single Alert
 *     </cds-alert>
 *     <cds-alert closable="true">
 *       Another alert
 *       <cds-alert-actions>
 *         buttons, links
 *       </cds-alert-actions>
 *     </cds-alert>
 *   </cds-alert-group>
 * ```
 *
 * @element cds-alert-group
 * @slot - Content slot for the alerts
 * @cssprop --color
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --padding
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 */
export declare class CdsAlertGroup extends LitElement {
    /**
     * Sets the overall height and width of the alerts inside the alert group
     * @type {default | sm}
     */
    size: AlertSizes;
    /**
     * Passed down into the alerts inside the alert-group
     * @type {default | banner | light}
     */
    type: AlertGroupTypes;
    /**
     * Sets the status of the alerts inside the alert group
     * @type {neutral | info | success | warning | danger | alt | loading}
     */
    status: AlertStatusTypes;
    private alerts;
    /** @private */
    pager: HTMLElement;
    private alertSlot;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    firstUpdated(props: Map<string, any>): void;
    private setupAlertsUpdate;
    private syncAlerts;
    updated(props: Map<string, any>): void;
    static get styles(): import("lit").CSSResultGroup[];
}
