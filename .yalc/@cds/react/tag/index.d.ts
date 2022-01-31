import * as React from 'react';
import { CdsTag as Tag } from '@cds/core/tag';
import '@cds/core/tag/register';
export declare const CdsTag: React.ForwardRefExoticComponent<Partial<Omit<Tag, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
