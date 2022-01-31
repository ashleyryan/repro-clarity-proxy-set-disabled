import { CdsCheckbox as Checkbox, CdsCheckboxGroup as CheckboxGroup } from '@cds/core/checkbox';
import '@cds/core/checkbox/register';
import * as React from 'react';
export declare const CdsCheckbox: React.ForwardRefExoticComponent<Partial<Omit<Checkbox, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsCheckboxGroup: React.ForwardRefExoticComponent<Partial<Omit<CheckboxGroup, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
