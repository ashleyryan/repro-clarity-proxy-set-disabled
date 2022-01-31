import { CdsDate as DateInput } from '@cds/core/date';
import '@cds/core/date/register';
import * as React from 'react';
export declare const CdsDate: React.ForwardRefExoticComponent<Partial<Omit<DateInput, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
