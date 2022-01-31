import { CdsPagination as Pagination, CdsPaginationButton as PaginationButton } from '@cds/core/pagination';
import '@cds/core/pagination/register';
import * as React from 'react';
export declare const CdsPagination: React.ForwardRefExoticComponent<Partial<Omit<Pagination, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsPaginationButton: React.ForwardRefExoticComponent<Partial<Omit<PaginationButton, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
