import { CdsButton as Button, CdsIconButton as IconButton } from '@cds/core/button';
import '@cds/core/button/register';
import { CdsButtonInline as InlineButton } from '@cds/core/button-inline';
import * as React from 'react';
export declare const CdsButton: React.ForwardRefExoticComponent<Partial<Omit<Button, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const CdsIconButton: React.ForwardRefExoticComponent<Partial<Omit<IconButton, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
/**
 * @deprecated
 * renamed to `cds-button-inline` in 6.0 to align to rest of the `cds-button-*` APIs
 */
export declare const CdsInlineButton: React.ForwardRefExoticComponent<Partial<Omit<InlineButton, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
