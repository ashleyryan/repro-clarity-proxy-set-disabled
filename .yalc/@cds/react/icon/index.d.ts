import { CdsIcon as Icon } from '@cds/core/icon';
import '@cds/core/icon/register';
import * as React from 'react';
/**
 * If using JSX or TSX, import the icon name from `@cds/core/icon` and include it in the `shape` prop to improve type safety:
 *
 * ```tsx
 * import { ClarityIcons, userIcon, userIconName } from '@cds/core/icon';
 * import { CdsIcon } from '@cds/react/icon';
 *
 * ClarityIcons.addIcons(userIcon);
 *
 * <CdsIcon shape={userIconName} />
 * ```
 */
export declare const CdsIcon: React.ForwardRefExoticComponent<Partial<Omit<Icon, "children">> & {} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
