import { CdsToggleGroup as ToggleGroup, CdsToggle as Toggle } from '@cds/core/toggle';
import '@cds/core/toggle/register';
import * as React from 'react';
export declare const CdsToggleGroup: React.ForwardRefExoticComponent<Partial<Omit<ToggleGroup, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsToggle: React.ForwardRefExoticComponent<Partial<Omit<Toggle, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
