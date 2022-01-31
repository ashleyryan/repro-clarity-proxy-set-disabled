import { CdsInternalPopup as Popup, CdsInternalPointer as Pointer } from '@cds/core/internal-components/popup';
import '@cds/core/internal-components/popup/register';
import * as React from 'react';
export declare const CdsInternalPopup: React.ForwardRefExoticComponent<Partial<Omit<Popup, "children">> & {
    onCloseChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsInternalPointer: React.ForwardRefExoticComponent<Partial<Omit<Pointer, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
