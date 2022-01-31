import { StatusTypes } from '@cds/core/internal';
import { LitElement } from 'lit';
/**
 * Circular progress indicators provide a method to track how close long-running tasks are to
 * completion. Circular progress offer a compact way to track progress in a variety of situations.
 *
 * ```typescript
 * import '@cds/core/progress-circle/register.js';
 * ```
 *
 * ```html
 * <cds-progress-circle status="info" value="25"></cds-progress-circle>
 * ```
 *
 * @element cds-progress-circle
 * @cssprop --ring-color
 * @cssprop --ring-opacity
 * @cssprop --fill-color
 * @cssprop --fill-speed
 */
export declare class CdsProgressCircle extends LitElement {
    private _size;
    /**
     * Sets the color of the badge
     * @type {neutral | info | success | warning | danger}
     */
    status: StatusTypes;
    /**
     * Inverts color of circular progress bar if `true`.
     * Useful for displaying icons on a dark background.
     */
    inverse: boolean;
    /**
     * Represents the percent completed from 0 to 100.
     *
     * If undefined, the progress-circle will be represented as an indeterminate
     * progress indicator – a.k.a a "spinner".
     */
    value: number;
    /**
     * Represents the thickness of the stroke of the circular progress.
     *
     * If undefined, it defaults to 3.
     */
    line: number;
    private get radius();
    private get circumference();
    /** @private */
    get progress(): number;
    private get progressOffset();
    get size(): string;
    /**
     * Apply numerical width-height or a t-shirt-sized CSS classname
     * @type {string | sm | md | lg | xl | xxl}
     */
    set size(val: string);
    private _ariaLabel;
    /**
     * The aria-label attribute is added here as a convenience. It is not set
     * to a default value.
     *
     * If this attribute/property remains unset, it will default to an i18n string.
     * This means that the aria-label can be customized using the aria-label
     * attribute or by overriding the i18n value for the progress circle.
     */
    get ariaLabel(): string;
    /**
     * Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if
     * the specified icon cannot be found in the icon registry.
     */
    set ariaLabel(newAriaLabel: string);
    i18n: {
        loading: string;
        looping: string;
    };
    /** @private */
    setAriaAttributes(oldValueForAriaLabelCheck?: number): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected observers: MutationObserver[];
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}
