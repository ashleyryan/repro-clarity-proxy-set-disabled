import{__decorate as t}from"tslib";import{baseStyles as e,I18nService as o,event as s,property as n}from"@cds/core/internal";import{LitElement as i,html as p}from"lit";import r from"./test-dropdown.element.scss.js";class l extends i{constructor(){super(...arguments),this._open=!1,this.title="dropdown"}get open(){return this._open}set open(t){if(t!==this._open){const e=this._open;this._open=t,this.requestUpdate("open",e),this.openChange.emit(this.open)}}static get styles(){return[e,r]}render(){return p`<div class="dropdown"><button @click="${()=>this.toggle()}" class="btn">${this.title}</button> ${this.open?p`<div>${o.keys.dropdown.open}<slot></slot></div>`:""}</div>`}toggle(){this.open=!this.open}}t([s()],l.prototype,"openChange",void 0),t([n({type:Boolean})],l.prototype,"open",null),t([n({type:String})],l.prototype,"title",void 0);export{l as CdsTestDropdown};
//# sourceMappingURL=test-dropdown.element.js.map
