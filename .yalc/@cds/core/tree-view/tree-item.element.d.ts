import { EventEmitter } from '@cds/core/internal';
import { LitElement } from 'lit';
/**
 * Tree view is a hierarchical component that gives users access to a hierarchical set of objects displayed in a the parent-child relationship.
 *
 * ```typescript
 * import '@cds/core/tree-view/register.js';
 * ```
 *
 * ```html
 *  <cds-tree>
 *    <cds-tree-item>1</cds-tree-item>
 *    <cds-tree-item>2</cds-tree-item>
 *    <cds-tree-item>3</cds-tree-item>
 *  </cds-tree>
 * ```
 *
 * @beta
 * @element cds-tree-item
 * @slot - Content slot for inside the tree item
 * @slot expand-collapse-icon
 * @event expandedChange - notify when the user has clicked the expand / collapse button
 * @event selectedChange - notify when the user has clicked the tree item
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 * @cssprop --background
 * @cssprop --color
 * @cssprop --focus-width
 * @cssprop --font-size
 * @cssprop --font-weight
 */
export declare class CdsTreeItem extends LitElement {
    i18n: {
        loading: string;
    };
    cdsMotion: string;
    cdsMotionChange: EventEmitter<string>;
    multiSelect: boolean;
    disabled: boolean;
    expanded: boolean;
    /**
     * @description
     *
     * Expandable is used (see line 124) to automatically show the cds-button-expand element when a tree-item detects that
     * there are children. However, when doing investigation into why styles were not applied for tree-items controlled
     * via *ngIf (or any conditional DOM and code that will put tree-item elements there at some unknown point in the
     * future) it was re-discovered as a public property without a demo for manual usage.
     */
    expandable: boolean;
    indeterminate: boolean;
    loading: boolean;
    selected: boolean;
    private treeItemChildren;
    /** @private */
    anchorLink: HTMLAnchorElement;
    /** @private */
    expandedChange: EventEmitter<boolean>;
    /** @private */
    selectedChange: EventEmitter<boolean>;
    connectedCallback(): void;
    updated(props: Map<string, any>): void;
    toggleExpanded(): void;
    toggleSelected(): void;
    private onSlotChange;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * This container contains one of the following depending on the state of the tree item:
     *   - caret if the tree item is expandable
     *   - progress circle if the tree item is loading its children (via an async call, etc)
     *   - nothing if the tree item is an end node
     *
     * The container with a fixed width ensures the same alignment whether or not it contains
     * a child elemeent to render.
     */
    /** @private */
    get treeItemLeftHandSideTemplate(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}
