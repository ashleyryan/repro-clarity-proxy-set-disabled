import { AriaPopupController, AxisAligns, EventEmitter, PositionableElement } from '@cds/core/internal';
import { CdsInternalStaticOverlay } from '@cds/core/internal-components/overlay';
import { CdsInternalPointer } from './pointer.element.js';
/**
 * ```typescript
 * import '@cds/core/internal-components/popup/register.js';
 * ```
 *
 * ```html
 * <cds-internal-popup>
 *  <section cds-layout="vertical align:horizontal-stretch">
 *    <div cds-layout="vertical pad:md gap:md">
 *      <h2 cds-text="display">A Title</h2>
 *      <div>
 *        <p cds-text="body">
 *          Content inside a generic popup.
 *        </p>
 *      </div>
 *    </div>
 *  </section>
 * </cds-internal-popup>
 * ```
 *
 * @beta
 * @element cds-internal-popup
 * @slot - Content slot for the content inside the popup's panel
 * @event closeChange - Notify user when close event has occurred
 * @cssprop --active-corner-border-radius
 * @cssprop --background
 * @cssprop --backdrop-background
 * @cssprop --layered-backdrop-background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow
 * @cssprop --close-button-offset
 * @cssprop --color
 * @cssprop --min-height
 * @cssprop --min-width
 * @cssprop --max-height
 * @cssprop --max-width
 * @cssprop --mobile-max-height
 * @cssprop --overflow - sets overflow x and y values respectively
 * @cssprop --height
 * @cssprop --width
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 *
 * KNOWN ISSUE: Safari jumps through the exit animation but only when the ESC key is pressed.
 *
 */
export declare class CdsInternalPopup extends CdsInternalStaticOverlay implements PositionableElement {
    protected ariaPopupController: AriaPopupController;
    i18n: {
        closeButtonAriaLabel: string;
        contentStart: string;
        contentEnd: string;
    };
    cdsMotion: string;
    /**
     * force responsive by setting orientation to 'none'.
     * do not manipulate the responsive property because the
     * positioning logic may override your changes.
     */
    /** @private */
    responsive: boolean;
    cdsMotionChange: EventEmitter<string>;
    /**
     *
     * @type {HTMLElement}
     * @memberof CdsInternalPopup
     * Used to perform lookups for anchors. If unset, it assumes that the document is the container
     * and will then only check for anchors in the light DOM. If set to something other than the
     * document, it will perform checks in both the light and shadow DOM of the given container.
     * This is useful in the situation where an anchor is wrapped up with the dropdown in a parent
     * wrapper element.
     *
     */
    container: HTMLElement;
    /**
     * Accepts both an HTMLElement and a string
     */
    anchor: HTMLElement | string;
    /** @private */
    get anchorElement(): HTMLElement | null;
    anchorAlign: AxisAligns;
    /** @private */
    get anchorRect(): DOMRect;
    mainAxisOffset: number;
    crossAxisOffset: number;
    orientation: string;
    /**
     * If false, the dropdown will not show a close button ever.
     * If true, it will always show a close button.
     * If undefined, it will only show a close button when responsive. a11y expects a close button when responsive.
     *
     */
    closable: boolean;
    pointerAlign: AxisAligns;
    pointer: CdsInternalPointer;
    /** @private */
    pointerWrapper: HTMLElement;
    /** @private */
    hostWrapper: HTMLElement;
    /** @private */
    popupWrapper: HTMLElement;
    /** @private */
    contentWrapper: HTMLElement;
    protected observers: (MutationObserver | ResizeObserver)[];
    private setUpPositioningObserver;
    disconnectedCallback(): void;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}
