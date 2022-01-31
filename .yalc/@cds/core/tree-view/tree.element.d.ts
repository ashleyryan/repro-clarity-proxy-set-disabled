import { LitElement, PropertyValues } from 'lit';
import { CdsTreeItem } from './tree-item.element.js';
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
 * @element cds-tree
 * @slot - Content slot for inside the tree
 */
export declare class CdsTree extends LitElement {
    multiSelect: boolean;
    private firstChildItem;
    private childrenItems;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(props: PropertyValues<this>): void;
    private clickHandler;
    private get currentActiveItem();
    /**
     * The reason why we wait till onfocus to initialize aria-activedescendant is to
     * account for lazy loaded children.
     * */
    private initAriaActiveDescendant;
    private setAriaActiveDescendant;
    /** @private */
    get visibleChildren(): CdsTreeItem[];
    private keyboardNavigationHandler;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}
