import { CdsSearch as SearchInput } from '@cds/core/search';
import '@cds/core/search/register';
import * as React from 'react';
export declare const CdsSearch: React.ForwardRefExoticComponent<Partial<Omit<SearchInput, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
