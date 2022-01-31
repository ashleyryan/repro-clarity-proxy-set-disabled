import { CdsBadge as Badge } from '@cds/core/badge';
import '@cds/core/badge/register';
import * as React from 'react';
export declare const CdsBadge: React.ForwardRefExoticComponent<Partial<Omit<Badge, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
