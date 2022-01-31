import{__decorate as t}from"tslib";import{LitElement as e,html as s}from"lit";import{query as i}from"lit/decorators/query.js";import{getElementLanguageDirection as o,baseStyles as a,hasAriaLabelTypeAttr as l,syncProps as r,describeElementByElements as n,getElementUpdates as d,childrenUpdateComplete as u,pxToRem as p,updateComponentLayout as h,property as c,state as y,querySlot as f,querySlotAll as v,event as g}from"@cds/core/internal";import b from"./control.element.scss.js";import{syncHTML5Validation as m}from"../utils/validate.js";import{defaultControlWidth as x,defaultFormLayout as L,getStatusIcon as C,associateInputAndLabel as A,associateInputToDatalist as T,getCurrentMessageStatus as $,controlIsWrapped as S,formLayouts as I}from"../utils/utils.js";var k;!function(t){t.default="default",t.ariaLabel="aria-label",t.inputGroup="input-group",t.hiddenLabel="hidden-label"}(k||(k={}));class w extends e{constructor(){super(...arguments),this.status="neutral",this.controlWidth=x,this.validate=!1,this.responsive=!0,this._layout=L,this.focused=!1,this.disabled=!1,this.readonly=!1,this.fixedControlWidth=!1,this.supportsPrefixSuffixActions=!0,this.labelLayout=k.default,this.observers=[]}get layout(){return this._layout}set layout(t){const e=this._layout;this._layout=t?t.replace("-inline",""):L,this.requestUpdate("layout",e)}get isRTL(){return"rtl"===o(this)}static get styles(){return[a,b]}get hasAriaLabelTypeAttr(){return l(this.inputControl)}get hasStatusIcon(){return this.labelLayout!==k.inputGroup&&("error"===this.status||"success"===this.status)}render(){var t;return s`${this.labelLayout===k.hiddenLabel||this.labelLayout===k.inputGroup?s`<span cds-layout="display:screen-reader-only"><slot name="label" @slotchange="${()=>this.associateInputAndLabel()}"></slot></span>`:""}<div cds-layout="${"vertical"===this.layout?"vertical gap:xs":"horizontal gap:lg"} align:stretch" class="private-host ${this.isRTL?"rtl":""}">${this.primaryLabelTemplate}<div class="input-message-container" cds-layout="
          wrap:none
          ${"compact"===this.layout?"horizontal":"vertical"}
          ${"stretch"!==this.controlWidth||this.fixedControlWidth?"":"align:horizontal-stretch"}
          ${(null===(t=this.messages)||void 0===t?void 0:t.length)?"gap:xs":""}"><div cds-layout="horizontal gap:xs wrap:none"><div cds-layout="horizontal align:top wrap:none ${"shrink"===this.controlWidth||this.fixedControlWidth?"align:shrink":"align:horizontal-stretch"}" class="${this.hasStatusIcon?"input-container with-status-icon":"input-container"}">${this.inputTemplate} ${this.prefixTemplate}<slot name="input"></slot>${this.suffixTemplate}</div>${this.hasStatusIcon?C(this.status):""}</div>${this.messagesTemplate}<slot name="datalist" @slotchange="${()=>this.associateInputToDatalist()}"></slot></div></div>`}get inputTemplate(){return s``}get prefixDefaultTemplate(){return null}get suffixDefaultTemplate(){return null}get isGenericControl(){return"cds-control"===this.tagName.toLowerCase()}get hasControlActions(){return this.controlActions.length>0||this.prefixDefaultTemplate||this.suffixDefaultTemplate}get primaryLabelTemplate(){return s`${this.labelLayout===k.default?s`<cds-internal-control-label .disabled="${this.disabled}" cds-layout="align:shrink align:top" action="primary"><slot name="label" @slotchange="${()=>this.associateInputAndLabel()}"></slot></cds-internal-control-label>`:""}`}get messagesTemplate(){return s`<div cds-layout="${"compact"===this.layout?"align:shrink":""}" class="messages"><slot name="message"></slot></div>`}get prefixTemplate(){return s`<div cds-layout="align:shrink align:vertical-center" class="prefix"><div cds-layout="horizontal gap:xxs">${this.prefixDefaultTemplate}<slot name="prefix"></slot></div></div>`}get suffixTemplate(){return s`<div cds-layout="align:shrink align:vertical-center" class="suffix"><div cds-layout="horizontal gap:xxs"><slot name="suffix"></slot>${this.suffixDefaultTemplate}</div></div>`}connectedCallback(){super.connectedCallback(),this.setAttribute("cds-control","")}firstUpdated(t){super.firstUpdated(t),this.setupHostAttributes(),this.setupHTML5Validation(),this.setActionOffsetPadding(),this.setupResponsive(),this.setupDescribedByUpdates(),this.setupLabelLayout(),this.assignSlotIfInControlGroup()}updated(t){super.updated(t),this.messages.forEach((e=>r(e,this,{disabled:t.has("disabled")}))),r(this.inputControl,this,{disabled:t.has("disabled")})}disconnectedCallback(){super.disconnectedCallback(),this.observers.forEach((t=>t.disconnect()))}associateInputAndLabel(){A(this.inputControl,this.label)}associateInputToDatalist(){T(this.inputControl,this.datalistControl)}setupDescribedByUpdates(){var t;null===(t=this.messageSlot)||void 0===t||t.addEventListener("slotchange",(async()=>{n(this.inputControl,Array.from(this.messages)),$(Array.from(this.messages)).then((t=>this.status=t))}))}setupHostAttributes(){this.inputControl.addEventListener("focusin",(()=>this.focused=!0)),this.inputControl.addEventListener("focusout",(()=>this.focused=!1)),this.observers.push(d(this.inputControl,"disabled",(t=>this.disabled=""===t||t)),d(this.inputControl,"aria-disabled",(t=>this.disabled="true"===t)),d(this.inputControl,"readonly",(t=>this.readonly=""===t||t)))}setupHTML5Validation(){var t,e;!(null===(e=null===(t=this.inputControl)||void 0===t?void 0:t.form)||void 0===e?void 0:e.noValidate)&&this.validate&&m(this,Array.from(this.messages))}async setActionOffsetPadding(){var t,e;const s=null===(t=this.prefixAction)||void 0===t?void 0:t.updateComplete,i=null===(e=this.suffixAction)||void 0===e?void 0:e.updateComplete;if(await s||Promise.resolve(!0),await i||Promise.resolve(!0),await u(this.controlActions),!this.isGenericControl&&this.supportsPrefixSuffixActions&&this.hasControlActions){const t=p(this.prefixAction.getBoundingClientRect().width+6),e=p(this.suffixAction.getBoundingClientRect().width+6);this.inputControl.style.setProperty("padding-left",this.isRTL?e:t,"important"),this.inputControl.style.setProperty("padding-right",this.isRTL?t:e,"important")}}get layoutStable(){return this.labelLayout!==k.default||!S(this.inputControl,this.controlLabel,this.layout)}setupResponsive(){if(this.responsive&&this.labelLayout===k.default&&this.controlLabel){const t={layouts:I,initialLayout:this.layout},e=h(this,t,(()=>this.layoutChange.emit(this.layout,{bubbles:!0})));this.observers.push(e)}}setupLabelLayout(){var t,e;(null===(e=null===(t=this.label)||void 0===t?void 0:t.getAttribute("cds-layout"))||void 0===e?void 0:e.includes("display:screen-reader-only"))&&(this.labelLayout=k.hiddenLabel),this.hasAriaLabelTypeAttr&&(this.labelLayout=k.ariaLabel)}assignSlotIfInControlGroup(){var t;(null===(t=this.parentElement)||void 0===t?void 0:t.hasAttribute("cds-control-group"))&&this.setAttribute("slot","controls")}}t([c({type:String})],w.prototype,"status",void 0),t([c({type:String})],w.prototype,"controlWidth",void 0),t([c({type:Boolean})],w.prototype,"validate",void 0),t([c({type:Boolean})],w.prototype,"responsive",void 0),t([c({type:String})],w.prototype,"layout",null),t([y({type:Boolean,reflect:!0})],w.prototype,"focused",void 0),t([y({type:Boolean,reflect:!0})],w.prototype,"disabled",void 0),t([y({type:Boolean,reflect:!0})],w.prototype,"readonly",void 0),t([y()],w.prototype,"fixedControlWidth",void 0),t([y()],w.prototype,"supportsPrefixSuffixActions",void 0),t([y()],w.prototype,"isRTL",null),t([y()],w.prototype,"labelLayout",void 0),t([f("input, select, textarea, [cds-control]",{required:"error",requiredMessage:"input element is missing",assign:"input"})],w.prototype,"inputControl",void 0),t([f("label",{required:"error",requiredMessage:"To meet a11y standards either a <label> or input[aria-label] should be provided.",assign:"label",exemptOn:t=>t.hasAriaLabelTypeAttr})],w.prototype,"label",void 0),t([i("cds-internal-control-label[action=primary]")],w.prototype,"controlLabel",void 0),t([f("datalist",{assign:"datalist"})],w.prototype,"datalistControl",void 0),t([v("cds-control-message")],w.prototype,"messages",void 0),t([v("[cds-button-action]")],w.prototype,"controlActions",void 0),t([i(".prefix")],w.prototype,"prefixAction",void 0),t([i(".suffix")],w.prototype,"suffixAction",void 0),t([i(".messages")],w.prototype,"messageSlot",void 0),t([g()],w.prototype,"layoutChange",void 0);export{w as CdsControl,k as ControlLabelLayout};
//# sourceMappingURL=control.element.js.map
