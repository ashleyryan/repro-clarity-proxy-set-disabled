import { CdsInput as Input, CdsInputGroup as InputGroup } from '@cds/core/input';
import '@cds/core/input/register';
import * as React from 'react';
export declare const CdsInput: React.ForwardRefExoticComponent<Partial<Omit<Input, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsInputGroup: React.ForwardRefExoticComponent<Partial<Omit<InputGroup, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
