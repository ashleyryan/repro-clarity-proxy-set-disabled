import{__decorate as t}from"tslib";import{html as e}from"lit";import{property as s,event as o}from"@cds/core/internal";import{CdsButtonAction as r}from"@cds/core/button-action";import{sortOrder as i}from"./utils.js";import n from"./button-sort.element.scss.js";class c extends r{constructor(){super(...arguments),this.sort="none"}static get styles(){return[super.styles,n]}render(){return e`<div class="private-host"><div cds-layout="vertical align:center"><slot><cds-icon shape="angle" direction="up" inner-offset="2" size="12"></cds-icon><cds-icon shape="angle" direction="down" inner-offset="2" size="12"></cds-icon></slot></div></div>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.sortChange.emit(i(this.sort),{bubbles:!0}))),this.ariaLabel||(this.ariaLabel=this.i18n.sort)}}t([s({type:String,reflect:!0})],c.prototype,"sort",void 0),t([o()],c.prototype,"sortChange",void 0);export{c as CdsButtonSort};
//# sourceMappingURL=button-sort.element.js.map
