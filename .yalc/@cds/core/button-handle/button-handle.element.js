import{onKey as e}from"@cds/core/internal";import{CdsButtonAction as s}from"@cds/core/button-action";import t from"./button-handle.element.scss.js";class r extends s{static get styles(){return[super.styles,t]}connectedCallback(){super.connectedCallback(),this.pressed=!1,this.setAttribute("cds-draggable","handle"),this.shape||(this.shape="drag-handle"),this.addEventListener("keydown",(s=>{e("space",s,(()=>this.pressed=!this.pressed))}))}}export{r as CdsButtonHandle};
//# sourceMappingURL=button-handle.element.js.map
