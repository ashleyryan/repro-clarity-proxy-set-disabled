import { CdsAccordion as Accordion } from '@cds/core/accordion';
import { CdsAccordionContent as AccordionContent } from '@cds/core/accordion';
import { CdsAccordionHeader as AccordionHeader } from '@cds/core/accordion';
import { CdsAccordionPanel as AccordionPanel } from '@cds/core/accordion';
import '@cds/core/accordion/register';
import * as React from 'react';
export declare const CdsAccordion: React.ForwardRefExoticComponent<Partial<Omit<Accordion, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsAccordionPanel: React.ForwardRefExoticComponent<Partial<Omit<AccordionPanel, "children">> & {
    onExpandedChange?: ((e: Event) => unknown) | undefined;
    onCdsMotionChange?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsAccordionHeader: React.ForwardRefExoticComponent<Partial<Omit<AccordionHeader, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsAccordionContent: React.ForwardRefExoticComponent<Partial<Omit<AccordionContent, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
