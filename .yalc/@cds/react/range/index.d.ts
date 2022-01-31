import { CdsRange as RangeInput } from '@cds/core/range';
import '@cds/core/range/register';
import * as React from 'react';
export declare const CdsRange: React.ForwardRefExoticComponent<Partial<Omit<RangeInput, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
