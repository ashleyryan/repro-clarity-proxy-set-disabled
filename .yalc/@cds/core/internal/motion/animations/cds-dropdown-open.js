import{fadeInKeyframes as a}from"./keyframes/fade-in.js";const i="cds-responsive-popup-enter",o=[{target:".overlay-backdrop",onlyIf:"isLayered:false responsive:true",animation:a,options:{duration:"--animation-duration",easing:"--animation-easing",fill:"forwards"}},{target:".private-host",onlyIf:"responsive:true",animation:[{opacity:0},{opacity:0,marginBottom:"-100%",offset:.001},{opacity:1,marginBottom:"0"}],options:{duration:"--animation-duration",easing:"--animation-easing",fill:"forwards"}},{target:".private-host",onlyIf:"responsive:false",animation:[{opacity:0},{opacity:1}],options:{duration:0,easing:"--animation-easing",fill:"forwards"}}];export{o as AnimationResponsivePopupEnterConfig,i as AnimationResponsivePopupEnterName};
//# sourceMappingURL=cds-dropdown-open.js.map
