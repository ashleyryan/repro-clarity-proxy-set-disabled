function e(e,t){const n=new ResizeObserver((()=>{window.requestAnimationFrame((()=>t()))}));return n.observe(e),n.__testTrigger=t,n}function t(e,t){const n=new IntersectionObserver((e=>{!0===e[0].isIntersecting&&t()}),{threshold:[0]});return n.observe(e),n}function n(t,n,o){return e(t,(()=>{t.responsive&&function(e,t){return e.updateComplete.then((()=>{const n=e.layout;return e.layout=t.layouts[0],t.layouts.reduce(((n,o)=>n.then((()=>{if(e.layout===t.initialLayout)return o;{const t=e.layout;return e.layout=o,e.updateComplete.then((()=>(e.layout=e.layoutStable?e.layout:t,o)))}}))),Promise.resolve(t.layouts[0])).then((()=>n!==e.layout))}))}(t,n).then((e=>{e&&o()}))}))}export{e as elementResize,t as elementVisible,n as updateComponentLayout};
//# sourceMappingURL=responsive.js.map
