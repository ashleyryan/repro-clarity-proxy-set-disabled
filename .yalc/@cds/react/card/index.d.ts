import { CdsCard as Card } from '@cds/core/card';
import '@cds/core/card/register';
import * as React from 'react';
export declare const CdsCard: React.ForwardRefExoticComponent<Partial<Omit<Card, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
