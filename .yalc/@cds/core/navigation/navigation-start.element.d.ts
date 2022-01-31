import { LitElement, PropertyValues } from 'lit';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { FocusableItem, NavigationFocusState } from './interfaces/navigation.interfaces.js';
export declare const CdsNavigationStartTagName = "cds-navigation-start";
/**
 * Web component navigation.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-start>Start text</cds-navigation-start>
 * ```
 * @beta
 * @element cds-navigation-start
 * @cssprop --color: inherit
 * @cssprop --line-height: inherit
 * @cssprop --font-size: inherit
 * @cssprop --font-weight: inherit
 * @slot
 * @slot cds-navigation-start-icon - customize the default start toggle icon
 */
export declare class CdsNavigationStart extends LitElement implements FocusableItem {
    i18n: {
        [key: string]: string | undefined;
    };
    /**
     * @desc
     * Synced down from the root navigation element. Determines if the vertical navigation is wide or narrow.
     */
    expandedRoot: boolean;
    /**
     * @desc
     * Is set to true by the root cds-navigation element when the instance is focused.
     */
    hasFocus: NavigationFocusState;
    /**
     * @desc
     * The value is synced down from the root cds-navigation element.
     */
    isGroupStart: boolean;
    navigationGroupId: string;
    /**
     * @desc info synced down from group element and used in css to set proper bg color if a group has an active item and is not expanded
     *
     * @private
     */
    active: boolean;
    /**
     * @desc
     * Describes the groups expanded state
     *
     * @private
     */
    expanded: boolean;
    /**
     * @desc
     * Start element must find the button in firstUpdated. When the arrow keys navigation to the the util fn setFocus
     * calls the native focus method.
     *
     * @private
     */
    focusElement: HTMLButtonElement;
    protected startIcon: CdsIcon;
    itemText: NodeListOf<HTMLSpanElement>;
    connectedCallback(): void;
    firstUpdated(props: PropertyValues): void;
    private handleStartButtonText;
    private renderRootStart;
    private renderGroupStart;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
    private get toggleIconDirection();
    updated(props: PropertyValues): void;
}
