import { CdsControlMessage as ControlMessage, CdsControlAction as ControlAction, CdsInternalControlGroup as ControlGroup, CdsControl as Control, CdsFormGroup as FormGroup } from '@cds/core/forms';
import '@cds/core/forms/register';
import * as React from 'react';
export declare const CdsControlMessage: React.ForwardRefExoticComponent<Partial<Omit<ControlMessage, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsControlAction: React.ForwardRefExoticComponent<Partial<Omit<ControlAction, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsControlGroup: React.ForwardRefExoticComponent<Partial<Omit<ControlGroup, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsControl: React.ForwardRefExoticComponent<Partial<Omit<Control, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsFormGroup: React.ForwardRefExoticComponent<Partial<Omit<FormGroup, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
