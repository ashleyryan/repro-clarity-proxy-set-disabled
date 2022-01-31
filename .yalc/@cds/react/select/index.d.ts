import { CdsSelect as SelectInput } from '@cds/core/select';
import '@cds/core/select/register';
import * as React from 'react';
export declare const CdsSelect: React.ForwardRefExoticComponent<Partial<Omit<SelectInput, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
