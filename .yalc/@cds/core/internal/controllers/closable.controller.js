import{listenForAttributeChange as t}from"../utils/events.js";import{ignoreFocusTrap as s}from"./utils/first-focus.controller.utils.js";import{FocusTrapTrackerService as e}from"../services/focus-trap-tracker.service.js";class o{constructor(t,s){this.host=t,this.config={escape:!0,lastFocus:!0,closable:()=>!0,...s},this.host.addController(this)}get isFocusTrapper(){return this.host.focusTrapId&&!s(this.host)}hostConnected(){this.togglePriorActiveElement(),this.host.addEventListener("keyup",(t=>this.keyEvent(t))),this.observer=t(this.host,"hidden",(()=>this.togglePriorActiveElement()))}hostDisconnected(){var t;null===(t=this.priorActiveElement)||void 0===t||t.focus(),this.removeFocusTrap(),this.observer.disconnect()}close(t){this.config&&this.config.closable&&this.config.closable()&&(this.host.closeChange?this.host.closeChange.emit(t):this.host.dispatchEvent(new CustomEvent("closeChange",{detail:t})))}setFocusTrap(){this.isFocusTrapper&&e.setCurrent({focusTrapId:this.host.focusTrapId})}removeFocusTrap(){this.isFocusTrapper&&e.removeTrapElement({focusTrapId:this.host.focusTrapId})}togglePriorActiveElement(){var t;this.host.hidden&&this.config.lastFocus?(this.removeFocusTrap(),null===(t=this.priorActiveElement)||void 0===t||t.focus()):(this.setFocusTrap(),this.setPriorActiveElement())}setPriorActiveElement(){this.priorActiveElement=this.host.getRootNode().activeElement}keyEvent(t){this.config.escape&&"Escape"===t.code&&(t.preventDefault(),t.stopPropagation(),this.close("escape-keypress"))}}export{o as ClosableController};
//# sourceMappingURL=closable.controller.js.map
