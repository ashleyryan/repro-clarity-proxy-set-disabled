import { CdsTime as TimeInput } from '@cds/core/time';
import '@cds/core/time/register';
import * as React from 'react';
export declare const CdsTime: React.ForwardRefExoticComponent<Partial<Omit<TimeInput, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
