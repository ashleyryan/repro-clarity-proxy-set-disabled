import { CdsTree as Tree, CdsTreeItem as TreeItem } from '@cds/core/tree-view';
import '@cds/core/tree-view/register';
import * as React from 'react';
export declare const CdsTree: React.ForwardRefExoticComponent<Partial<Omit<Tree, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsTreeItem: React.ForwardRefExoticComponent<Partial<Omit<TreeItem, "children">> & {
    onExpandedChange?: ((e: Event) => unknown) | undefined;
    onSelectedChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
