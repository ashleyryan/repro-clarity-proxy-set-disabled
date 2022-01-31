import { CdsDatalist as Datalist } from '@cds/core/datalist';
import '@cds/core/datalist/register';
import * as React from 'react';
export declare const CdsDatalist: React.ForwardRefExoticComponent<Partial<Omit<Datalist, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
