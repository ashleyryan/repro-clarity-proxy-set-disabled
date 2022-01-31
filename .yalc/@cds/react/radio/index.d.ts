import { CdsRadio as Radio, CdsRadioGroup as RadioGroup } from '@cds/core/radio';
import '@cds/core/radio/register';
import * as React from 'react';
export declare const CdsRadio: React.ForwardRefExoticComponent<Partial<Omit<Radio, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsRadioGroup: React.ForwardRefExoticComponent<Partial<Omit<RadioGroup, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
