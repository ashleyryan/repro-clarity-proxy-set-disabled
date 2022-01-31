import { LitElement, PropertyValues } from 'lit';
import { EventEmitter } from '@cds/core/internal';
import { FocusableElement } from './utils/utils.js';
import { CdsNavigationGroup } from './navigation-group.element.js';
import { CdsNavigationStart } from './navigation-start.element.js';
import { CdsNavigationItem } from './navigation-item.element.js';
import { CdsDivider } from '@cds/core/divider/index.js';
export declare const CdsNavigationTagName = "cds-navigation";
/**
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 *  <cds-navigation>
 *    <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 *    <cds-navigation-item><a href="/account">Account</cds-navigation-item>
 *  </cds-navigation>
 * ```
 *
 * @beta
 * @element cds-navigation
 * @event expandedChange - notify when the user has clicked the navigation expand/collapse button
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 * @cssprop --background
 * @cssprop --collapsed-width
 * @cssprop --expanded-width
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --line-height
 * @cssprop --nested-padding
 * @cssprop --padding
 * @slot
 * @slot cds-navigation-substart - project content below the navigation toggle button
 * @slot cds-navigation-end - project content below the scrollable section
 */
export declare class CdsNavigation extends LitElement {
    expandedRoot: boolean;
    cdsMotion: string;
    protected expandedChange: EventEmitter<boolean>;
    cdsMotionChange: EventEmitter<string>;
    /**
     * This is used to sync down the information to this.navigationGroupItems
     *
     * @type { boolean }
     * @protected
     */
    protected groupItem: boolean;
    /**
     *
     * Vertical navigation elements can be either wide or narrow. Expanded indicates it should be wide.
     * When navigation is wide cds-navigation-start button elements and cds-navigation-item a elements display
     * text. When it is narrow they do not (consumer should provide an icon that stays visible).
  
     * @type {boolean}
     */
    expanded: boolean;
    i18n: {
        [key: string]: string | undefined;
    };
    /**
     * The end slot that items can be projected into with slot="cds-navigation-end"
     */
    protected navigationEnd: HTMLElement;
    /**
     * This slot query is used to identify and manage all focusable elements needed for arrow key navigation
     * TODO: How to add in forms selector attribute and other things that are not FocusableElements like I use here
     * tbd - I don;'t have an answer yet.
     */
    protected allNavigationElements: NodeListOf<FocusableElement>;
    /**
     * Get references to all of the start elements so they can be passed state when updates are made.
     */
    protected navigationStartRefs: NodeListOf<CdsNavigationStart>;
    /** make navigation-body default and eliminate extra assigns **?
    /**
     * query for cds-divider  and project into navigation-body slot.
     */
    protected rootDividers: NodeListOf<CdsDivider>;
    /**
     * query for root level groups and project them into the navigation-body slot.
     */
    protected rootNavigationGroups: NodeListOf<CdsNavigationGroup>;
    /**
     * query for root level items and project them into the navigation-body slot.
     */
    protected rootNavigationItems: NodeListOf<CdsNavigationItem>;
    /**
     * query for the root level start items and project them into the navigation-start slot.
     */
    protected rootNavigationStart: CdsNavigationStart;
    /**
     * query for items inside a cds-navigation-group, used to pass state down
     */
    protected navigationGroupItems: NodeListOf<CdsNavigationGroup>;
    /**
     * query for all cds-navigation elements, used to pass state down
     */
    protected navigationItemRefs: NodeListOf<CdsNavigationItem>;
    /**
     * query for all groups (including any nested groups), used ot pass state down
     */
    protected navigationGroupRefs: NodeListOf<CdsNavigationGroup>;
    private toggle;
    private get currentActiveItem();
    protected get endTemplate(): "" | import("lit-html").TemplateResult<1>;
    protected get startTemplate(): string | import("lit-html").TemplateResult<1>;
    protected get visibleChildren(): FocusableElement[];
    addStartEventListener(): void;
    firstUpdated(props: PropertyValues): void;
    private blurItemKeys;
    private focusRootStart;
    private blurRootStart;
    private initItemKeys;
    private get focusableElements();
    private handleItemKeys;
    private handleRootStartKeys;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(props: PropertyValues<this>): void;
    updateChildrenProps(): void;
    static get styles(): import("lit").CSSResultGroup[];
}
