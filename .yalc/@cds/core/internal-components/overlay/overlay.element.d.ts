import { CdsBaseFocusTrap, EventEmitter, FocusTrapTrackerService, HTMLAttributeTuple } from '@cds/core/internal';
export declare function isNestedOverlay(myId: string, overlayPrefix: string, trapIds: string[], previousValue?: boolean): boolean;
export declare function overlayIsActive(overlayId: string, focusTrapService?: typeof FocusTrapTrackerService): boolean;
export declare type CloseChangeSources = 'backdrop-click' | 'escape-keypress' | 'close-button-click' | 'custom';
/** @private */
export declare class CdsInternalStaticOverlay extends CdsBaseFocusTrap {
    closable: boolean;
    ignoreFocusTrap: boolean;
    protected get customBumpers(): [HTMLElement, HTMLElement] | [];
    i18n: {
        closeButtonAriaLabel: string;
        contentStart: string;
        contentEnd: string;
    };
    /** @private */
    static get shadowRootOptions(): any;
    private overlayIdPrefix;
    protected closeChange: EventEmitter<CloseChangeSources>;
    protected isLayered: boolean;
    protected focusTrapId: string;
    getFocusTrapId(): string;
    protected backdrop: HTMLElement;
    connectedCallback(): void;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    disconnectedCallback(): void;
    private setAriaRole;
    protected get closeButtonAttrs(): HTMLAttributeTuple[];
    constructor();
    closeOverlay(trigger?: CloseChangeSources): void;
    protected get closeButtonTemplate(): import("lit-html").TemplateResult<1>;
    protected get backdropTemplate(): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
    protected fireEventOnBackdropClick: () => void;
    static get styles(): import("lit").CSSResultGroup[];
}
/**
 *
 * ```typescript
 * import '@cds/core/internal-components/overlay/register.js';
 * ```
 *
 * ```html
 * <cds-internal-overlay>
 *  <section cds-layout="vertical align:horizontal-stretch">
 *    <div cds-layout="vertical pad:md gap:md">
 *      <h2 cds-text="display">A Title</h2>
 *      <div>
 *        <p cds-text="body">
 *          Content inside a generic overlay.
 *        </p>
 *      </div>
 *    </div>
 *  </section>
 * </cds-internal-overlay>
 * ```
 *
 * @beta
 * @element cds-internal-overlay
 * @slot - Content slot for the content inside the overlay's panel
 * @event closeChange - Notify user when close event has occurred
 * @cssprop --backdrop-background
 * @cssprop --layered-backdrop-background
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 *
 * KNOWN ISSUE: Safari jumps through the exit animation but only when the ESC key is pressed.
 *
 */
export declare class CdsInternalOverlay extends CdsInternalStaticOverlay {
    cdsMotion: string;
    cdsMotionChange: EventEmitter<string>;
}
