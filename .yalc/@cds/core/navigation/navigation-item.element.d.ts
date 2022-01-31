import { LitElement, PropertyValues } from 'lit';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { FocusableItem, NavigationFocusState } from './interfaces/navigation.interfaces.js';
export declare const CdsNavigationItemTagName = "cds-navigation-item";
/**
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 *  <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 * ```
 *
 * @beta
 * @element cds-navigation-item
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --padding
 * @slot
 */
export declare class CdsNavigationItem extends LitElement implements FocusableItem {
    i18n: {
        [key: string]: string | undefined;
    };
    active: boolean;
    disabled: boolean;
    expanded: boolean;
    protected expandedGroup: boolean;
    groupItem: boolean;
    hasFocus: NavigationFocusState;
    focusElement: HTMLElement;
    protected itemIcon: CdsIcon;
    itemText: NodeListOf<HTMLSpanElement>;
    connectedCallback(): void;
    firstUpdated(props: PropertyValues): void;
    private handleItemAnchorText;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
    protected updated(props: PropertyValues): void;
}
