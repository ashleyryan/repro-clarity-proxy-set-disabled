import { CdsNavigation as Navigation, CdsNavigationGroup as NavigationGroup, CdsNavigationStart as NavigationStart, CdsNavigationItem as NavigationItem } from '@cds/core/navigation';
import '@cds/core/navigation/register';
import * as React from 'react';
export declare const CdsNavigation: React.ForwardRefExoticComponent<Partial<Omit<Navigation, "children">> & {
    onExpandedChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsNavigationGroup: React.ForwardRefExoticComponent<Partial<Omit<NavigationGroup, "children">> & {
    onExpandedChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsNavigationStart: React.ForwardRefExoticComponent<Partial<Omit<NavigationStart, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsNavigationItem: React.ForwardRefExoticComponent<Partial<Omit<NavigationItem, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
