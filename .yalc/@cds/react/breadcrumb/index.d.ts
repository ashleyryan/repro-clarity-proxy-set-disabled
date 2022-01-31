import { CdsBreadcrumb as Breadcrumb } from '@cds/core/breadcrumb';
import '@cds/core/breadcrumb/register';
import * as React from 'react';
export declare const CdsBreadcrumb: React.ForwardRefExoticComponent<Partial<Omit<Breadcrumb, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
