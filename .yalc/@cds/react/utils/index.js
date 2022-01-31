/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export function logReactVersion(react) {
    if (window && window.CDS && !window.CDS._react.version) {
        window.CDS._react.version = react.version;
    }
}
//# sourceMappingURL=index.js.map