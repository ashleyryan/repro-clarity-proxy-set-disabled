import { CdsFile as File } from '@cds/core/file';
import '@cds/core/file/register';
import * as React from 'react';
export declare const CdsFile: React.ForwardRefExoticComponent<Partial<Omit<File, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
