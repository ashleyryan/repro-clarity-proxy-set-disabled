import{setAttributes as t,createId as e,baseStyles as o}from"@cds/core/internal";import{LitElement as r,html as s}from"lit";import c from"./accordion-content.element.scss.js";class n extends r{connectedCallback(){super.connectedCallback(),t(this,["role","region"],["slot","accordion-content"]),this.id||(this.id=e())}render(){return s`<div class="private-host"><slot></slot></div>`}static get styles(){return[o,c]}}export{n as CdsAccordionContent};
//# sourceMappingURL=accordion-content.element.js.map
