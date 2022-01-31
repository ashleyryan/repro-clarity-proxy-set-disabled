import { CdsRange as RangeInput } from '@cds/core/range';
import '@cds/core/range/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';
export const CdsRange = createComponent(React, 'cds-range', RangeInput, {}, 'CdsRange');
logReactVersion(React);
//# sourceMappingURL=index.js.map