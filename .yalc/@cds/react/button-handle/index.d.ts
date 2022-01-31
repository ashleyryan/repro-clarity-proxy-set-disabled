import { CdsButtonHandle as ButtonHandle } from '@cds/core/button-handle';
import '@cds/core/button-handle/register';
import * as React from 'react';
export declare const CdsButtonHandle: React.ForwardRefExoticComponent<Partial<Omit<ButtonHandle, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
