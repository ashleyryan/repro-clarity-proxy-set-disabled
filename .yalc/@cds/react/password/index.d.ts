import { CdsPassword as Password } from '@cds/core/password';
import '@cds/core/password/register';
import * as React from 'react';
export declare const CdsPassword: React.ForwardRefExoticComponent<Partial<Omit<Password, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
