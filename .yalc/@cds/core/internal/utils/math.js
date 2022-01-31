import r from"ramda/es/isNil.js";import m from"ramda/es/sum.js";import o from"ramda/es/curryN.js";function s(m){return r(m)?0:1e3*Number(m)}const e=o(3,((r,o,s)=>(r||0)+m(o||[])-m(s||[]))),t=o(4,((r,m,o,s)=>!!s&&s(e(r,m,o))));export{t as compareSumTo,s as getMillisecondsFromSeconds,e as sumAndSubtract};
//# sourceMappingURL=math.js.map
