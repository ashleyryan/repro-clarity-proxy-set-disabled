import { LitElement, PropertyValues } from 'lit';
import { EventEmitter } from '@cds/core/internal';
import { CdsNavigationItem } from './navigation-item.element';
import { CdsNavigationStart } from './navigation-start.element';
export declare const CdsNavigationGroupTagName = "cds-navigation-group";
/**
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-group>
 *   <cds-navigation-start></cds-navigation-start>
 *    <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 *    <cds-navigation-item><a href="/account">Account</cds-navigation-item>
 * </cds-navigation-group>
 * ```
 *
 * @beta
 * @element cds-navigation-group
 * @event expandedChange - notify when the user has clicked the navigation expand/collapse button
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 * @cssprop --background
 * @slot
 */
export declare class CdsNavigationGroup extends LitElement {
    cdsMotion: string;
    /** @private **/
    expandedChange: EventEmitter<boolean>;
    cdsMotionChange: EventEmitter<string>;
    /**
     * @desc
     * Associate the (projected) cds-navigation-button with group-items-wrapper (aria-labelledby)
     *
     * @private
     */
    navigationGroupId: string;
    i18n: {
        [key: string]: string | undefined;
    };
    /**
     * @description
     * Getter method for a reference to the selector cds-navigation-group > cds-navigation-start
     * This lets each group flag its cds-navigation-start element and sync that info down. This is
     * needed because cds-navigation-start elements can be used at the root level and inside
     * cds-navigation-group elements.
     *
     * @private
     */
    private get isGroupStart();
    expanded: boolean;
    active: boolean;
    /**
     * @desc
     * The value of this property is passed down to start and item children. It is used to query for visible items when
     * managing focus with key events in the root cds-navigation element.
     *
     * Note: eslint-disable  @typescript-eslint/no-unused-vars isn't ignoring the line
     // eslint error happens because the value is set but never read.
  
     * @private
     */
    expandedGroup: boolean;
    /**
     * @desc
     *
     * Used to coordinate css things and the keyboard navigation focus changes.
     */
    hasFocus: boolean;
    protected groupStart: CdsNavigationStart;
    protected groupItems: NodeListOf<CdsNavigationItem>;
    protected nestedGroups: NodeListOf<CdsNavigationItem>;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
    private toggle;
    disconnectedCallback(): void;
    protected firstUpdated(props: PropertyValues): void;
    updated(props: PropertyValues<this>): void;
}
