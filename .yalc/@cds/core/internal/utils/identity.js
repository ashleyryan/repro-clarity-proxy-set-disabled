import n from"ramda/es/is.js";import t from"ramda/es/isEmpty.js";function r(n){return null==n}function e(n){return r(n)||t(n)}function u(t){return n(String,t)}function i(n){return u(n)&&!t(n.trim())&&+n==+n}function f(t){return n(String,t)||r(t)}function c(n){return u(n)&&!r(n)&&!t(n)}function o(t){return n(Object,t)}function s(t){return n(Map,t)}function a(n){return!e(n)&&o(n)}function l(n,t){return n!==t}function d(n,t){return f(n)&&l(n,t)}function h(n,t){return!e(n)&&l(n,t)}function m(n){return Object.values(n)}function p(n="_"){return`${n}${Math.random().toString(36).substr(2,9)}`}function g(n){const t=new Map;for(const[r,e]of n)s(e)?t.set(r,g(e)):t.set(r,e);return t}function b(n){return s(n)?g(n):JSON.parse(JSON.stringify(n))}function O(n){switch(!0){case"true"===n:return!0;case"false"===n:return!1;case"null"===n:return null;case"undefined"===n:return;case i(n):return+n;default:return n}}function S(n){return n.split(" ").map((n=>n.split(":"))).map((n=>{const[t,r]=n;return[t,O(r)]}))}function A(n,t,r){if(!t)return!0;const e=S(t);if(!n)return!1;if(e.length<1)return!0;{const t=e.filter((t=>{const[r,e]=t;return v(n,r,e)}));return"all"===r?t.length===e.length:t.length>0}}function j(n,t){return A(n,t,"all")}function w(n,t){return A(n,t,"any")}function v(n,t,r){if(t in n)return!1===r?!n[t]:n[t]===r;if(!n.hasAttribute||!n.hasAttribute(t))return!n.hasAttribute&&(!1===r||void 0===r)||!1;{const e=n.hasAttribute(t)&&n.getAttribute(t);if(["null","false","undefined"].indexOf(e)>-1)switch(r){case null:return"null"===e;case!1:return"false"===e;default:return!r}else switch(r){case!1:return!e||"false"===e;case!0:return""===e||"true"===e;default:return e===r.toString()}}}function x(n,...t){return t.map((t=>n(t))).indexOf(!1)<0}function y(...n){return x((n=>void 0!==n),...n)}export{x as allAre,y as allAreDefined,j as allPropertiesPass,A as anyOrAllPropertiesPass,w as anyPropertiesPass,O as convertAttributeStringValuesToValue,S as convertStringPropValuePairsToTuple,p as createId,b as deepClone,v as doesPropertyPass,m as getEnumValues,l as hasPropertyChanged,d as hasStringPropertyChanged,h as hasStringPropertyChangedAndNotNil,s as isMap,r as isNil,e as isNilOrEmpty,i as isNumericString,o as isObject,a as isObjectAndNotNilOrEmpty,u as isString,c as isStringAndNotNilOrEmpty,f as isStringOrNil};
//# sourceMappingURL=identity.js.map
