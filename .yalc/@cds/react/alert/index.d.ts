import { CdsAlert as Alert, CdsAlertActions as AlertActions, CdsAlertGroup as AlertGroup } from '@cds/core/alert';
import '@cds/core/alert/register';
import * as React from 'react';
export declare const CdsAlert: React.ForwardRefExoticComponent<Partial<Omit<Alert, "children">> & {
    onCloseChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsAlertActions: React.ForwardRefExoticComponent<Partial<Omit<AlertActions, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsAlertGroup: React.ForwardRefExoticComponent<Partial<Omit<AlertGroup, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
