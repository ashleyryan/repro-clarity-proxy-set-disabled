import{baseStyles as t}from"@cds/core/internal";import{LitElement as s,html as o}from"lit";class e extends s{static get shadowRootOptions(){return{...super.shadowRootOptions,delegatesFocus:!0}}render(){return this.hasAttribute("cds-layout")?o`<slot></slot>`:o`<div cds-layout="vertical gap:lg p-y:xs"><slot></slot></div>`}static get styles(){return[t]}}export{e as CdsModalContent};
//# sourceMappingURL=modal-content.element.js.map
