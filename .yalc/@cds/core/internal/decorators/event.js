class e{constructor(e,t){this.target=e,this.eventName=t}emit(e,t){this.target.dispatchEvent(new CustomEvent(this.eventName,{detail:e,...t}))}}function t(){return(t,n)=>{const r={get(){return new e(this,void 0!==n?n:t.key)},enumerable:!0,configurable:!0};return void 0!==n?function(e,t,n){Object.defineProperty(t,n,e)}(r,t,n):function(e,t){return{kind:"method",placement:"prototype",key:t.key,descriptor:e}}(r,t)}}export{e as EventEmitter,t as event};
//# sourceMappingURL=event.js.map
