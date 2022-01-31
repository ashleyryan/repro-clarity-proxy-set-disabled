in node_modules, update @cds/core/src/internal/utils/events.ts to include the `isNode()` check to test CdsSelect


```js
import { listenForAttributeChange as t } from "./dom.js";


function e(t) { t.preventDefault(), t.stopPropagation() }

function isNode() {
    return (globalThis)?.process?.env?.JEST_WORKER_ID !== undefined; // Jest and JSDom breaks on property reflection
}

const r = (e, r, o) => {
    e.hasAttribute(r) ? o(e.getAttribute(r)) : void 0 !== e[r] && o(e[r]),
        !e._valueTracker || "checked" !== r && "value" !== r || (e._valueTracker = null);
    const c = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), r);
    return c && !isNode() && Object.defineProperty(e, r, { get: c.get, set: t => { o(t), c.set.call(e, t) } }), t(e, r, (t => o(t)))
};

export { r as getElementUpdates, e as stopEvent };
//# sourceMappingURL=events.js.map
```
