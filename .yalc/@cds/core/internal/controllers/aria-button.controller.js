function t(){return t=>t.addInitializer((t=>new s(t)))}class s{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){this.host.tabIndex=0}hostUpdated(){this.host.role=this.host.readonly?null:"button",this.host.tabIndex=this.host.readonly||this.host.disabled?-1:0}}export{s as AriaButtonController,t as ariaButton};
//# sourceMappingURL=aria-button.controller.js.map
