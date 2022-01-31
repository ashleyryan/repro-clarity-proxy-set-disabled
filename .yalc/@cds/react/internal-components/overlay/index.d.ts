import { CdsInternalOverlay as Overlay } from '@cds/core/internal-components/overlay';
import '@cds/core/internal-components/overlay/register';
import * as React from 'react';
export declare const CdsInternalOverlay: React.ForwardRefExoticComponent<Partial<Omit<Overlay, "children">> & {
    onCloseChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
