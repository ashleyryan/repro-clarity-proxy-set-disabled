import { CdsDropdown as Dropdown } from '@cds/core/dropdown';
import '@cds/core/dropdown/register';
import * as React from 'react';
export declare const CdsDropdown: React.ForwardRefExoticComponent<Partial<Omit<Dropdown, "children">> & {
    onCloseChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
