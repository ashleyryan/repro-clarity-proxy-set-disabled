import { CdsButtonAction as ButtonAction } from '@cds/core/button-action';
import '@cds/core/button-action/register';
import * as React from 'react';
export declare const CdsButtonAction: React.ForwardRefExoticComponent<Partial<Omit<ButtonAction, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
