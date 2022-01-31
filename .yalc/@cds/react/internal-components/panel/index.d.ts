import { CdsInternalPanel as Panel } from '@cds/core/internal-components/panel';
import '@cds/core/internal-components/panel/register';
import * as React from 'react';
export declare const CdsInternalPanel: React.ForwardRefExoticComponent<Partial<Omit<Panel, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
