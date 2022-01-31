import { CdsModal as Modal, CdsModalActions as ModalActions, CdsModalContent as ModalContent, CdsModalHeader as ModalHeader, CdsModalHeaderActions as ModalHeaderActions } from '@cds/core/modal';
import '@cds/core/modal/register';
import * as React from 'react';
export declare const CdsModal: React.ForwardRefExoticComponent<Partial<Omit<Modal, "children">> & {
    onCloseChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsModalActions: React.ForwardRefExoticComponent<Partial<Omit<ModalActions, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsModalContent: React.ForwardRefExoticComponent<Partial<Omit<ModalContent, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsModalHeader: React.ForwardRefExoticComponent<Partial<Omit<ModalHeader, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsModalHeaderActions: React.ForwardRefExoticComponent<Partial<Omit<ModalHeaderActions, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
