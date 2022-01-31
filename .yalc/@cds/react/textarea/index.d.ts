import { CdsTextarea as Textarea } from '@cds/core/textarea';
import '@cds/core/textarea/register';
import * as React from 'react';
export declare const CdsTextarea: React.ForwardRefExoticComponent<Partial<Omit<Textarea, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
