import{camelCaseToKebabCase as t}from"./string.js";const e=new class{constructor(){if(this.supports={js:!0,flexGap:s()},!document.body.hasAttribute("cds-supports")||"no-js"===document.body.getAttribute("cds-supports")){const e=t(Object.keys(this.supports).reduce(((t,e)=>`${t} ${this.supports[e]?e:"no-"+e}`),"")).trim();document.body.setAttribute("cds-supports",e)}}};function s(){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);const e=1===t.scrollHeight;return t.parentNode.removeChild(t),e}export{e as browserFeatures};
//# sourceMappingURL=supports.js.map
