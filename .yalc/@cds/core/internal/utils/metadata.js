import{arrayToObject as e}from"./array.js";import{setPropStyles as n}from"./string.js";function o(n,o){const r=e(o.tags,"name")[n];return{...(i=r,null===(u=i.properties)||void 0===u?void 0:u.filter((e=>{var n;return null===(n=null==e?void 0:e.type)||void 0===n?void 0:n.includes(" | ")})).reduce(((e,n)=>{const o=n.type.split("|").map((e=>e.replace(/"/g,"").replace(/\s/g,"")));return{...e,[n.name]:{control:{type:"select",options:o},defaultValue:o[0]}}}),{})),...t(r),...l(r)};var i,u}function r(e){return{...e,style:n(e)}}function t(e){var n;return null===(n=e.cssProperties)||void 0===n?void 0:n.reduce(((e,n)=>{var o,r;const t=(null===(o=null==n?void 0:n.name)||void 0===o?void 0:o.includes("color"))||(null===(r=null==n?void 0:n.name)||void 0===r?void 0:r.endsWith("background"))?"color":"text";return{...e,[n.name]:{control:{type:t}}}}),{})}function l(e){var n;return null===(n=e.slots)||void 0===n?void 0:n.reduce(((e,n)=>({...e,[n.name]:{control:{type:"text"},defaultValue:""+n.name}})),{})}export{o as getElementStorybookArgTypes,r as getElementStorybookArgs};
//# sourceMappingURL=metadata.js.map
