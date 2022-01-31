import { CdsProgressCircle as ProgressCircle } from '@cds/core/progress-circle';
import '@cds/core/progress-circle/register';
import * as React from 'react';
export declare const CdsProgressCircle: React.ForwardRefExoticComponent<Partial<Omit<ProgressCircle, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
