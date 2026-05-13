import{c as en,d as an,e as nn,f as on,g as cn,h as mn}from"./chunk-RFXO2ROV.js";import{b as rn,c as sn,g as ln,l as dn}from"./chunk-6CO3ME7J.js";import{A as qa,B as $e,C as Qa,E as $a,F as Ze,J as Ee,L as Yt,N as At,P as Rt,Q as Je,R as Z,S as O,T as ta,U as ea,V as Za,W as Ja,X as tn,a as ke,b as Ge,c as Ha,e as Ue,f as Se,g as zt,h as ja,i as Mt,j as Dt,k as qe,n as Me,o as Wa,p as Qe,q as Xa,t as Ka,u as Ga,v as Ae,w as rt,x as Ua,z as ht}from"./chunk-HBGB23JW.js";import{a as ot,b as Nt,e as pt,f as j}from"./chunk-X3ONOG3R.js";import{b as Ya}from"./chunk-J7QPCGMZ.js";import{$ as s,$b as vt,A as Vt,Ab as h,Bb as P,Cb as Y,Da as Va,Db as X,Eb as kt,F as je,Ib as ct,Jb as St,Mb as v,Nb as ge,O as It,Ob as u,P as We,Pb as mt,Q as U,Qb as K,R as Ra,Rb as be,Sa as d,Sb as Q,Tb as A,Ub as E,W as N,X as V,Xa as xt,Ya as Xe,Yb as ve,Z as S,Za as Ft,Zb as ye,_ as Pa,_a as dt,_b as M,a as Ct,ab as Fa,ac as x,b as Ea,bb as ee,bc as $,ca as Ta,cc as it,d as at,dc as Ke,ea as I,ec as De,fa as R,fb as C,fc as Ce,ga as nt,gb as F,gc as we,h as D,ha as te,hb as bt,hc as ie,ia as W,j as Oa,ja as lt,jb as ae,kb as ne,ma as _,na as z,nb as La,o as _e,qb as Ba,ra as k,rb as Na,rc as xe,s as He,sb as w,tb as L,ub as B,va as wt,vb as za,vc as H,w as Ia,wa as fe,wb as Lt,xa as T,xb as Bt,yb as b,yc as y,z as Ot,zb as m,zc as yt}from"./chunk-ORGKYTVA.js";var Jn={capture:!0},ti=["focus","mousedown","mouseenter","touchstart"],aa="mat-ripple-loader-uninitialized",na="mat-ripple-loader-class-name",pn="mat-ripple-loader-centered",Oe="mat-ripple-loader-disabled",hn=(()=>{class i{_document=s(lt);_animationsDisabled=Z();_globalRippleOptions=s(Ja,{optional:!0});_platform=s(Dt);_ngZone=s(z);_injector=s(W);_eventCleanups;_hosts=new Map;constructor(){let t=s(Ft).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ti.map(e=>t.listen(this._document,e,this._onInteraction,Jn)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(aa,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(na))&&t.setAttribute(na,e.className||""),e.centered&&t.setAttribute(pn,""),e.disabled&&t.setAttribute(Oe,"")}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(Oe,""):t.removeAttribute(Oe)}_onInteraction=t=>{let e=Mt(t);if(e instanceof HTMLElement){let a=e.closest(`[${aa}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(na)),t.append(e);let a=this._globalRippleOptions,o=this._animationsDisabled?0:a?.animation?.enterDuration??ea.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??ea.exitDuration,l={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(Oe),rippleConfig:{centered:t.hasAttribute(pn),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},c=new Za(l,this._ngZone,e,this._platform,this._injector),f=!l.rippleDisabled;f&&c.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:c,hasSetUpEvents:f}),t.removeAttribute(aa)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ei=["mat-icon-button",""],ai=["*"],ni=new S("MAT_BUTTON_CONFIG");function un(i){return i==null?void 0:yt(i)}var ia=(()=>{class i{_elementRef=s(T);_ngZone=s(z);_animationsDisabled=Z();_config=s(ni,{optional:!0});_focusMonitor=s(Me);_cleanupClick;_renderer=s(dt);_rippleLoader=s(hn);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(ot).load(zt);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=bt({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,a){e&2&&(w("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),vt(a.color?"mat-"+a.color:""),M("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",y],disabled:[2,"disabled","disabled",y],ariaDisabled:[2,"aria-disabled","ariaDisabled",y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",y],tabIndex:[2,"tabIndex","tabIndex",un],_tabindex:[2,"tabindex","_tabindex",un]}})}return i})(),Ht=(()=>{class i extends ia{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ae],attrs:ei,ngContentSelectors:ai,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(mt(),kt(0,"span",0),K(1),kt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ie=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({imports:[j]})}return i})();var ii=["matButton",""],oi=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ri=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var _n=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),oa=(()=>{class i extends ia{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=si(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?_n.get(this._appearance):null,o=_n.get(t);a&&e.remove(...a),e.add(...o),this._appearance=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ae],attrs:ii,ngContentSelectors:ri,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(mt(oi),kt(0,"span",0),K(1),Y(2,"span",1),K(3,1),X(),K(4,2),kt(5,"span",2)(6,"span",3)),e&2&&M("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function si(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Re=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({imports:[Ie,j]})}return i})();var fn=$a();function la(i){return new Pe(i.get(At),i.get(lt))}var Pe=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=O(-this._previousScrollPosition.left),n.style.top=O(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,a=t.style,o=e.scrollBehavior||"",r=a.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),fn&&(e.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fn&&(e.scrollBehavior=o,a.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function wn(i,n){return new Te(i.get(Yt),i.get(z),i.get(At),n)}var Te=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,a){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Vt(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var oe=class{enable(){}disable(){}attach(){}};function ra(i,n){return n.some(t=>{let e=i.bottom<t.top,a=i.top>t.bottom,o=i.right<t.left,r=i.left>t.right;return e||a||o||r})}function gn(i,n){return n.some(t=>{let e=i.top<t.top,a=i.bottom>t.bottom,o=i.left<t.left,r=i.right>t.right;return e||a||o||r})}function Et(i,n){return new Ve(i.get(Yt),i.get(At),i.get(z),n)}var Ve=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,a){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:a}=this._viewportRuler.getViewportSize();ra(t,[{width:e,height:a,bottom:a,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xn=(()=>{class i{_injector=s(W);constructor(){}noop=()=>new oe;close=t=>wn(this._injector,t);block=()=>la(this._injector);reposition=t=>Et(this._injector,t);static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),jt=class{positionStrategy;scrollStrategy=new oe;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var Fe=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var kn=(()=>{class i{_attachedOverlays=[];_document=s(lt);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,a){return a.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Sn=(()=>{class i extends kn{_ngZone=s(z);_renderer=s(Ft).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let a=e.length-1;a>-1;a--){let o=e[a];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(a){return(t||(t=fe(i)))(a||i)}})();static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mn=(()=>{class i extends kn{_platform=s(Dt);_ngZone=s(z);_renderer=s(Ft).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,a={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,"pointerdown",this._pointerDownListener,a),o.listen(e,"click",this._clickListener,a),o.listen(e,"auxclick",this._clickListener,a),o.listen(e,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Mt(t)};_clickListener=t=>{let e=Mt(t),a=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let l=o[r],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,c))){if(bn(l.overlayElement,e)||bn(l.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(a){return(t||(t=fe(i)))(a||i)}})();static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function bn(i,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var An=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),En=(()=>{class i{_platform=s(Dt);_containerElement;_document=s(lt);_styleLoader=s(ot);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Ze()){let a=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<a.length;o++)a[o].remove()}let e=this._document.createElement("div");e.classList.add(t),Ze()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(An)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),sa=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,a){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function da(i){return i&&i.nodeType===1}var Le=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=at.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(n,t,e,a,o,r,l,c,f,p=!1,g,G){this._portalOutlet=n,this._host=t,this._pane=e,this._config=a,this._ngZone=o,this._keyboardDispatcher=r,this._document=l,this._location=c,this._outsideClickDispatcher=f,this._animationsDisabled=p,this._injector=g,this._renderer=G,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=xt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=Ct(Ct({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Ea(Ct({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=O(this._config.width),n.height=O(this._config.height),n.minWidth=O(this._config.minWidth),n.minHeight=O(this._config.minHeight),n.maxWidth=O(this._config.maxWidth),n.maxHeight=O(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;da(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new sa(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let a=Qe(t||[]).filter(o=>!!o);a.length&&(e?n.classList.add(...a):n.classList.remove(...a))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=xt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},vn="cdk-overlay-connected-position-bounding-box",li=/([A-Za-z%]+)$/;function Kt(i,n){return new re(n,i.get(At),i.get(lt),i.get(Dt),i.get(En))}var re=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=at.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,a,o){this._viewportRuler=t,this._document=e,this._platform=a,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(vn),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,a=this._containerRect,o=[],r;for(let l of this._preferredPositions){let c=this._getOriginPoint(n,a,l),f=this._getOverlayPoint(c,t,l),p=this._getOverlayFit(f,t,e,l);if(p.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(p,f,e)){o.push({position:l,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!r||r.overlayFit.visibleArea<p.visibleArea)&&(r={overlayFit:p,overlayPoint:f,originPoint:c,position:l,overlayRect:t})}if(o.length){let l=null,c=-1;for(let f of o){let p=f.boundingBoxRect.width*f.boundingBoxRect.height*(f.position.weight||1);p>c&&(c=p,l=f)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Pt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(vn),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof T?this._origin.nativeElement:da(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let a;if(e.originX=="center")a=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;a=e.originX=="start"?r:l}t.left<0&&(a-=t.left);let o;return e.originY=="center"?o=n.top+n.height/2:o=e.originY=="top"?n.top:n.bottom,t.top<0&&(o-=t.top),{x:a,y:o}}_getOverlayPoint(n,t,e){let a;e.overlayX=="center"?a=-t.width/2:e.overlayX==="start"?a=this._isRtl()?-t.width:0:a=this._isRtl()?0:-t.width;let o;return e.overlayY=="center"?o=-t.height/2:o=e.overlayY=="top"?0:-t.height,{x:n.x+a,y:n.y+o}}_getOverlayFit(n,t,e,a){let o=Dn(t),{x:r,y:l}=n,c=this._getOffset(a,"x"),f=this._getOffset(a,"y");c&&(r+=c),f&&(l+=f);let p=0-r,g=r+o.width-e.width,G=0-l,et=l+o.height-e.height,q=this._subtractOverflows(o.width,p,g),gt=this._subtractOverflows(o.height,G,et),Aa=q*gt;return{visibleArea:Aa,isCompletelyWithinViewport:o.width*o.height===Aa,fitsInViewportVertically:gt===o.height,fitsInViewportHorizontally:q==o.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let a=e.bottom-t.y,o=e.right-t.x,r=yn(this._overlayRef.getConfig().minHeight),l=yn(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||r!=null&&r<=a,f=n.fitsInViewportHorizontally||l!=null&&l<=o;return c&&f}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let a=Dn(t),o=this._viewportRect,r=Math.max(n.x+a.width-o.width,0),l=Math.max(n.y+a.height-o.height,0),c=Math.max(o.top-e.top-n.y,0),f=Math.max(o.left-e.left-n.x,0),p=0,g=0;return a.width<=o.width?p=f||-r:p=n.x<this._getViewportMarginStart()?o.left-e.left-n.x:0,a.height<=o.height?g=c||-l:g=n.y<this._getViewportMarginTop()?o.top-e.top-n.y:0,this._previousPushAmount={x:p,y:g},{x:n.x+p,y:n.y+g}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!di(this._lastScrollVisibility,e)){let a=new Fe(n,e);this._positionChanges.next(a)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,a=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${a}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,a=this._isRtl(),o,r,l;if(t.overlayY==="top")r=n.y,o=e.height-r+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-l+this._getViewportMarginTop();else{let et=Math.min(e.bottom-n.y+e.top,n.y),q=this._lastBoundingBoxSize.height;o=et*2,r=n.y-et,o>q&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-q/2)}let c=t.overlayX==="start"&&!a||t.overlayX==="end"&&a,f=t.overlayX==="end"&&!a||t.overlayX==="start"&&a,p,g,G;if(f)G=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),p=n.x-this._getViewportMarginStart();else if(c)g=n.x,p=e.right-n.x-this._getViewportMarginEnd();else{let et=Math.min(e.right-n.x+e.left,n.x),q=this._lastBoundingBoxSize.width;p=et*2,g=n.x-et,p>q&&!this._isInitialRender&&!this._growAfterOpen&&(g=n.x-q/2)}return{top:r,left:g,bottom:l,right:G,width:p,height:o}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;a.width=O(e.width),a.height=O(e.height),a.top=O(e.top)||"auto",a.bottom=O(e.bottom)||"auto",a.left=O(e.left)||"auto",a.right=O(e.right)||"auto",t.overlayX==="center"?a.alignItems="center":a.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?a.justifyContent="center":a.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",o&&(a.maxHeight=O(o)),r&&(a.maxWidth=O(r))}this._lastBoundingBoxSize=e,Pt(this._boundingBox.style,a)}_resetBoundingBoxStyles(){Pt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Pt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},a=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(a){let p=this._viewportRuler.getViewportScrollPosition();Pt(e,this._getExactOverlayY(t,n,p)),Pt(e,this._getExactOverlayX(t,n,p))}else e.position="static";let l="",c=this._getOffset(t,"x"),f=this._getOffset(t,"y");c&&(l+=`translateX(${c}px) `),f&&(l+=`translateY(${f}px)`),e.transform=l.trim(),r.maxHeight&&(a?e.maxHeight=O(r.maxHeight):o&&(e.maxHeight="")),r.maxWidth&&(a?e.maxWidth=O(r.maxWidth):o&&(e.maxWidth="")),Pt(this._pane.style,e)}_getExactOverlayY(n,t,e){let a={top:"",bottom:""},o=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),n.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;a.bottom=`${r-(o.y+this._overlayRect.height)}px`}else a.top=O(o.y);return a}_getExactOverlayX(n,t,e){let a={left:"",right:""},o=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let r;if(this._isRtl()?r=n.overlayX==="end"?"left":"right":r=n.overlayX==="end"?"right":"left",r==="right"){let l=this._document.documentElement.clientWidth;a.right=`${l-(o.x+this._overlayRect.width)}px`}else a.left=O(o.x);return a}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:gn(n,e),isOriginOutsideView:ra(n,e),isOverlayClipped:gn(t,e),isOverlayOutsideView:ra(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,a)=>e-Math.max(a,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Qe(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof T)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function Pt(i,n){for(let t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i}function yn(i){if(typeof i!="number"&&i!=null){let[n,t]=i.split(li);return!t||t==="px"?parseFloat(n):null}return i||null}function Dn(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function di(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Cn="cdk-global-overlay-wrapper";function ca(i){return new Be}var Be=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Cn),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:a,height:o,maxWidth:r,maxHeight:l}=e,c=(a==="100%"||a==="100vw")&&(!r||r==="100%"||r==="100vw"),f=(o==="100%"||o==="100vh")&&(!l||l==="100%"||l==="100vh"),p=this._xPosition,g=this._xOffset,G=this._overlayRef.getConfig().direction==="rtl",et="",q="",gt="";c?gt="flex-start":p==="center"?(gt="center",G?q=g:et=g):G?p==="left"||p==="end"?(gt="flex-end",et=g):(p==="right"||p==="start")&&(gt="flex-start",q=g):p==="left"||p==="start"?(gt="flex-start",et=g):(p==="right"||p==="end")&&(gt="flex-end",q=g),n.position=this._cssPosition,n.marginLeft=c?"0":et,n.marginTop=f?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":q,t.justifyContent=gt,t.alignItems=f?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(Cn),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},On=(()=>{class i{_injector=s(W);constructor(){}global(){return ca()}flexibleConnectedTo(t){return Kt(this._injector,t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),se=new S("OVERLAY_DEFAULT_CONFIG");function Gt(i,n){i.get(ot).load(An);let t=i.get(En),e=i.get(lt),a=i.get(ht),o=i.get(Ba),r=i.get(pt),l=i.get(dt,null,{optional:!0})||i.get(Ft).createRenderer(null,null),c=new jt(n),f=i.get(se,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,"showPopover"in e.body?c.usePopover=n?.usePopover??f:c.usePopover=!1;let p=e.createElement("div"),g=e.createElement("div");p.id=a.getId("cdk-overlay-"),p.classList.add("cdk-overlay-pane"),g.appendChild(p),c.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let G=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return da(G)?G.after(g):G?.type==="parent"?G.element.appendChild(g):t.getContainerElement().appendChild(g),new Le(new Ha(p,o,i),g,p,c,i.get(z),i.get(Sn),e,i.get(Ya),i.get(Mn),n?.disableAnimations??i.get(Va,null,{optional:!0})==="NoopAnimations",i.get(Ta),l)}var In=(()=>{class i{scrollStrategies=s(xn);_positionBuilder=s(On);_injector=s(W);constructor(){}create(t){return Gt(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ci=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],mi=new S("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(W);return()=>Et(i)}}),Wt=(()=>{class i{elementRef=s(T);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=bt({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Rn=new S("cdk-connected-overlay-default-config"),Ne=(()=>{class i{_dir=s(pt,{optional:!0});_injector=s(W);_overlayRef;_templatePortal;_backdropSubscription=at.EMPTY;_attachSubscription=at.EMPTY;_detachSubscription=at.EMPTY;_positionSubscription=at.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(mi);_ngZone=s(z);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new _;positionChange=new _;attach=new _;detach=new _;overlayKeydown=new _;overlayOutsideClick=new _;constructor(){let t=s(Xe),e=s(ee),a=s(Rn,{optional:!0}),o=s(se,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ge(t,e),this.scrollStrategy=this._scrollStrategyFactory(),a&&this._assignConfig(a)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ci);let t=this._overlayRef=Gt(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!rt(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let a=this._getOriginElement(),o=Mt(e);(!a||a!==o&&!a.contains(o))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new jt({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(a=>({originX:a.originX,originY:a.originY,overlayX:a.overlayX,overlayY:a.overlayY,offsetX:a.offsetX||this.offsetX,offsetY:a.offsetY||this.offsetY,panelClass:a.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=Kt(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Wt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Wt?this.origin.elementRef.nativeElement:this.origin instanceof T?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ra(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(e){return new(e||i)};static \u0275dir=bt({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",y],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",y],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",y],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",y],push:[2,"cdkConnectedOverlayPush","push",y],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",y],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",y],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[wt]})}return i})(),Tt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({providers:[In],imports:[j,Se,Je,Je]})}return i})();var pi=["tooltip"],hi=20;var ui=new S("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(W);return()=>Et(i,{scrollThrottle:hi})}}),_i=new S("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Pn="tooltip-panel",fi={passive:!0},gi=8,bi=8,vi=24,yi=200,le=(()=>{class i{_elementRef=s(T);_ngZone=s(z);_platform=s(Dt);_ariaDescriber=s(Qa);_focusMonitor=s(Me);_dir=s(pt);_injector=s(W);_viewContainerRef=s(ee);_mediaMatcher=s(Xa);_document=s(lt);_renderer=s(dt);_animationsDisabled=Z();_defaultOptions=s(_i,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Tn;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=ta(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=ta(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=qe(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=qe(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new D;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=gi}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(U(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(e);this._detach(),this._portal=this._portal||new ke(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=a.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(U(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof T)return this._overlayRef;this._detach()}let e=this._injector.get(Yt).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${Pn}`,o=Kt(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return o.positionChanges.pipe(U(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Gt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(ui)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(U(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(U(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(U(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(U(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,a=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(Ct(Ct({},a.main),o.main)),this._addOffset(Ct(Ct({},a.fallback),o.fallback))])}_addOffset(t){let e=bi,a=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=a?-e:e:t.originX==="end"&&(t.offsetX=a?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,a;e=="above"||e=="below"?a={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?a={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(a={originX:"end",originY:"center"});let{x:o,y:r}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,a;e=="above"?a={overlayX:"center",overlayY:"bottom"}:e=="below"?a={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?a={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(a={overlayX:"start",overlayY:"center"});let{x:o,y:r}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),xt(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:a,originY:o}=t,r;if(e==="center"?this._dir&&this._dir.value==="rtl"?r=a==="end"?"left":"right":r=a==="start"?"left":"right":r=e==="bottom"&&o==="top"?"above":"below",r!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${Pn}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],a=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),a=this._elementRef.nativeElement;e!==a&&!a.contains(e)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,fi))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,a=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(t==="on"||!e.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||xt({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!rt(t):!0;static \u0275fac=function(e){return new(e||i)};static \u0275dir=bt({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,a){e&2&&M("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Tn=(()=>{class i{_changeDetectorRef=s(H);_elementRef=s(T);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Z();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new D;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>vi&&t.width>=yi}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,a=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:a),e.classList.add(t?a:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(e);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(e,a){if(e&1&&Q(pi,7),e&2){let o;A(o=E())&&(a._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,a){e&1&&v("mouseleave",function(r){return a._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,a){e&1&&(Y(0,"div",1,0),ge("animationend",function(r){return a._handleAnimationEnd(r)}),Y(2,"div",2),x(3),X()()),e&2&&(vt(a.tooltipClass),M("mdc-tooltip--multiline",a._isMultiline),d(3),$(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ut="Method not implemented",ut=class{locale;_localeChanges=new D;localeChanges=this._localeChanges;setTime(n,t,e,a){throw new Error(Ut)}getHours(n){throw new Error(Ut)}getMinutes(n){throw new Error(Ut)}getSeconds(n){throw new Error(Ut)}parseTime(n,t){throw new Error(Ut)}addSeconds(n,t){throw new Error(Ut)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,t){return this.getYear(n)-this.getYear(t)||this.getMonth(n)-this.getMonth(t)||this.getDate(n)-this.getDate(t)}compareTime(n,t){return this.getHours(n)-this.getHours(t)||this.getMinutes(n)-this.getMinutes(t)||this.getSeconds(n)-this.getSeconds(t)}sameDate(n,t){if(n&&t){let e=this.isValid(n),a=this.isValid(t);return e&&a?!this.compareDate(n,t):e==a}return n==t}sameTime(n,t){if(n&&t){let e=this.isValid(n),a=this.isValid(t);return e&&a?!this.compareTime(n,t):e==a}return n==t}clampDate(n,t,e){return t&&this.compareDate(n,t)<0?t:e&&this.compareDate(n,e)>0?e:n}},de=new S("mat-date-formats");var Di=["mat-calendar-body",""];function Ci(i,n){return this._trackRow(n)}var zn=(i,n)=>n.id;function wi(i,n){if(i&1&&(Y(0,"tr",0)(1,"td",3),x(2),X()()),i&2){let t=u();d(),ye("padding-top",t._cellPadding)("padding-bottom",t._cellPadding),w("colspan",t.numCols),d(),it(" ",t.label," ")}}function xi(i,n){if(i&1&&(Y(0,"td",3),x(1),X()),i&2){let t=u(2);ye("padding-top",t._cellPadding)("padding-bottom",t._cellPadding),w("colspan",t._firstRowOffset),d(),it(" ",t._firstRowOffset>=t.labelMinRequiredCells?t.label:""," ")}}function ki(i,n){if(i&1){let t=ct();Y(0,"td",6)(1,"button",7),ge("click",function(a){let o=I(t).$implicit,r=u(2);return R(r._cellClicked(o,a))})("focus",function(a){let o=I(t).$implicit,r=u(2);return R(r._emitActiveDateChange(o,a))}),Y(2,"span",8),x(3),X(),kt(4,"span",9),X()()}if(i&2){let t=n.$implicit,e=n.$index,a=u().$index,o=u();ye("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),w("data-mat-row",a)("data-mat-col",e),d(),vt(t.cssClasses),M("mat-calendar-body-disabled",!t.enabled)("mat-calendar-body-active",o._isActiveCell(a,e))("mat-calendar-body-range-start",o._isRangeStart(t.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(t.compareValue))("mat-calendar-body-in-range",o._isInRange(t.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(t.compareValue,a,e))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(t.compareValue,a,e))("mat-calendar-body-comparison-start",o._isComparisonStart(t.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(t.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(t.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(t.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(t.compareValue))("mat-calendar-body-in-preview",o._isInPreview(t.compareValue)),St("tabIndex",o._isActiveCell(a,e)?0:-1),w("aria-label",t.ariaLabel)("aria-disabled",!t.enabled||null)("aria-pressed",o._isSelected(t.compareValue))("aria-current",o.todayValue===t.compareValue?"date":null)("aria-describedby",o._getDescribedby(t.compareValue)),d(),M("mat-calendar-body-selected",o._isSelected(t.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(t.compareValue))("mat-calendar-body-today",o.todayValue===t.compareValue),d(),it(" ",t.displayValue," ")}}function Si(i,n){if(i&1&&(Y(0,"tr",1),L(1,xi,2,6,"td",4),Lt(2,ki,5,49,"td",5,zn),X()),i&2){let t=n.$implicit,e=n.$index,a=u();d(),B(e===0&&a._firstRowOffset?1:-1),d(),Bt(t)}}function Mi(i,n){if(i&1&&(m(0,"th",2)(1,"span",6),x(2),h(),m(3,"span",3),x(4),h()()),i&2){let t=n.$implicit;d(2),$(t.long),d(2),$(t.narrow)}}var Ai=["*"];function Ei(i,n){}function Oi(i,n){if(i&1){let t=ct();m(0,"mat-month-view",4),we("activeDateChange",function(a){I(t);let o=u();return Ce(o.activeDate,a)||(o.activeDate=a),R(a)}),v("_userSelection",function(a){I(t);let o=u();return R(o._dateSelected(a))})("dragStarted",function(a){I(t);let o=u();return R(o._dragStarted(a))})("dragEnded",function(a){I(t);let o=u();return R(o._dragEnded(a))}),h()}if(i&2){let t=u();De("activeDate",t.activeDate),b("selected",t.selected)("dateFilter",t.dateFilter)("maxDate",t.maxDate)("minDate",t.minDate)("dateClass",t.dateClass)("comparisonStart",t.comparisonStart)("comparisonEnd",t.comparisonEnd)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName)("activeDrag",t._activeDrag)}}function Ii(i,n){if(i&1){let t=ct();m(0,"mat-year-view",5),we("activeDateChange",function(a){I(t);let o=u();return Ce(o.activeDate,a)||(o.activeDate=a),R(a)}),v("monthSelected",function(a){I(t);let o=u();return R(o._monthSelectedInYearView(a))})("selectedChange",function(a){I(t);let o=u();return R(o._goToDateInView(a,"month"))}),h()}if(i&2){let t=u();De("activeDate",t.activeDate),b("selected",t.selected)("dateFilter",t.dateFilter)("maxDate",t.maxDate)("minDate",t.minDate)("dateClass",t.dateClass)}}function Ri(i,n){if(i&1){let t=ct();m(0,"mat-multi-year-view",6),we("activeDateChange",function(a){I(t);let o=u();return Ce(o.activeDate,a)||(o.activeDate=a),R(a)}),v("yearSelected",function(a){I(t);let o=u();return R(o._yearSelectedInMultiYearView(a))})("selectedChange",function(a){I(t);let o=u();return R(o._goToDateInView(a,"year"))}),h()}if(i&2){let t=u();De("activeDate",t.activeDate),b("selected",t.selected)("dateFilter",t.dateFilter)("maxDate",t.maxDate)("minDate",t.minDate)("dateClass",t.dateClass)}}function Pi(i,n){}var Ti=["button"],Vi=[[["","matDatepickerToggleIcon",""]]],Fi=["[matDatepickerToggleIcon]"];function Li(i,n){i&1&&(nt(),m(0,"svg",2),P(1,"path",3),h())}var Zt=(()=>{class i{changes=new D;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(t,e){return`${t} \u2013 ${e}`}formatYearRangeLabel(t,e){return`${t} to ${e}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Bi=0,me=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Bi++;cssClasses;constructor(n,t,e,a,o,r=n,l){this.value=n,this.displayValue=t,this.ariaLabel=e,this.enabled=a,this.compareValue=r,this.rawValue=l,this.cssClasses=o instanceof Set?Array.from(o):o}},Ni={passive:!1,capture:!0},ze={passive:!0,capture:!0},Vn={passive:!0},qt=(()=>{class i{_elementRef=s(T);_ngZone=s(z);_platform=s(Dt);_intl=s(Zt);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new _;previewChange=new _;activeDateChange=new _;dragStarted=new _;dragEnded=new _;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(W);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=t=>t;constructor(){let t=s(dt),e=s(ht);this._startDateLabelId=e.getId("mat-calendar-body-start-"),this._endDateLabelId=e.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=e.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=e.getId("mat-calendar-body-comparison-end-"),s(ot).load(zt),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,o=[t.listen(a,"touchmove",this._touchmoveHandler,Ni),t.listen(a,"mouseenter",this._enterHandler,ze),t.listen(a,"focus",this._enterHandler,ze),t.listen(a,"mouseleave",this._leaveHandler,ze),t.listen(a,"blur",this._leaveHandler,ze),t.listen(a,"mousedown",this._mousedownHandler,Vn),t.listen(a,"touchstart",this._mousedownHandler,Vn)];this._platform.isBrowser&&o.push(t.listen("window","mouseup",this._mouseupHandler),t.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(t,e){this._didDragSinceMouseDown||t.enabled&&this.selectedValueChange.emit({value:t.value,event:e})}_emitActiveDateChange(t,e){t.enabled&&this.activeDateChange.emit({value:t.value,event:e})}_isSelected(t){return this.startValue===t||this.endValue===t}ngOnChanges(t){let e=t.numCols,{rows:a,numCols:o}=this;(t.rows||e)&&(this._firstRowOffset=a&&a.length&&a[0].length?o-a[0].length:0),(t.cellAspectRatio||e||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(e||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(t=>t())}_isActiveCell(t,e){let a=t*this.numCols+e;return t&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(t=!0){xt(()=>{setTimeout(()=>{let e=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");e&&(t||(this._skipNextFocus=!0),e.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(t){return ha(t,this.startValue,this.endValue)}_isRangeEnd(t){return ua(t,this.startValue,this.endValue)}_isInRange(t){return _a(t,this.startValue,this.endValue,this.isRange)}_isComparisonStart(t){return ha(t,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(t,e,a){if(!this._isComparisonStart(t)||this._isRangeStart(t)||!this._isInRange(t))return!1;let o=this.rows[e][a-1];if(!o){let r=this.rows[e-1];o=r&&r[r.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(t,e,a){if(!this._isComparisonEnd(t)||this._isRangeEnd(t)||!this._isInRange(t))return!1;let o=this.rows[e][a+1];if(!o){let r=this.rows[e+1];o=r&&r[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(t){return ua(t,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(t){return _a(t,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(t){return this.comparisonStart===this.comparisonEnd&&t===this.comparisonStart}_isPreviewStart(t){return ha(t,this.previewStart,this.previewEnd)}_isPreviewEnd(t){return ua(t,this.previewStart,this.previewEnd)}_isInPreview(t){return _a(t,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(t){if(!this.isRange)return null;if(this.startValue===t&&this.endValue===t)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===t)return this._startDateLabelId;if(this.endValue===t)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(t===this.comparisonStart&&t===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(t===this.comparisonStart)return this._comparisonStartDateLabelId;if(t===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=t=>{if(this._skipNextFocus&&t.type==="focus"){this._skipNextFocus=!1;return}if(t.target&&this.isRange){let e=this._getCellFromElement(t.target);e&&this._ngZone.run(()=>this.previewChange.emit({value:e.enabled?e:null,event:t}))}};_touchmoveHandler=t=>{if(!this.isRange)return;let e=Fn(t),a=e?this._getCellFromElement(e):null;e!==t.target&&(this._didDragSinceMouseDown=!0),pa(t.target)&&t.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:t}))};_leaveHandler=t=>{this.previewEnd!==null&&this.isRange&&(t.type!=="blur"&&(this._didDragSinceMouseDown=!0),t.target&&this._getCellFromElement(t.target)&&!(t.relatedTarget&&this._getCellFromElement(t.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:t})))};_mousedownHandler=t=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let e=t.target&&this._getCellFromElement(t.target);!e||!this._isInRange(e.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:e.rawValue,event:t})})};_mouseupHandler=t=>{if(!this.isRange)return;let e=pa(t.target);if(!e){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:t})});return}e.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(e);this.dragEnded.emit({value:a?.rawValue??null,event:t})})};_touchendHandler=t=>{let e=Fn(t);e&&this._mouseupHandler({target:e})};_getCellFromElement(t){let e=pa(t);if(e){let a=e.getAttribute("data-mat-row"),o=e.getAttribute("data-mat-col");if(a&&o)return this.rows[parseInt(a)]?.[parseInt(o)]||null}return null}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[wt],attrs:Di,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(e,a){e&1&&(L(0,wi,3,6,"tr",0),Lt(1,Si,4,1,"tr",1,Ci,!0),Y(3,"span",2),x(4),X(),Y(5,"span",2),x(6),X(),Y(7,"span",2),x(8),X(),Y(9,"span",2),x(10),X()),e&2&&(B(a._firstRowOffset<a.labelMinRequiredCells?0:-1),d(),Bt(a.rows),d(2),St("id",a._startDateLabelId),d(),it(" ",a.startDateAccessibleName,`
`),d(),St("id",a._endDateLabelId),d(),it(" ",a.endDateAccessibleName,`
`),d(),St("id",a._comparisonStartDateLabelId),d(),Ke(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),d(),St("id",a._comparisonEndDateLabelId),d(),Ke(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function ma(i){return i?.nodeName==="TD"}function pa(i){let n;return ma(i)?n=i:ma(i.parentNode)?n=i.parentNode:ma(i.parentNode?.parentNode)&&(n=i.parentNode.parentNode),n?.getAttribute("data-mat-row")!=null?n:null}function ha(i,n,t){return t!==null&&n!==t&&i<t&&i===n}function ua(i,n,t){return n!==null&&n!==t&&i>=n&&i===t}function _a(i,n,t,e){return e&&n!==null&&t!==null&&n!==t&&i>=n&&i<=t}function Fn(i){let n=i.changedTouches[0];return document.elementFromPoint(n.clientX,n.clientY)}var st=class{start;end;_disableStructuralEquivalency;constructor(n,t){this.start=n,this.end=t}},Ye=(()=>{class i{selection;_adapter;_selectionChanged=new D;selectionChanged=this._selectionChanged;constructor(t,e){this.selection=t,this._adapter=e,this.selection=t}updateSelection(t,e){let a=this.selection;this.selection=t,this._selectionChanged.next({selection:t,source:e,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(t){return this._adapter.isDateInstance(t)&&this._adapter.isValid(t)}static \u0275fac=function(e){Fa()};static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})(),zi=(()=>{class i extends Ye{constructor(t){super(null,t)}add(t){super.updateSelection(t,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let t=new i(this._adapter);return t.updateSelection(this.selection,this),t}static \u0275fac=function(e){return new(e||i)(Pa(ut))};static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})();var Yi={provide:Ye,useFactory:()=>s(Ye,{optional:!0,skipSelf:!0})||new zi(s(ut))};var Yn=new S("MAT_DATE_RANGE_SELECTION_STRATEGY");var fa=7,Hi=0,Ln=(()=>{class i{_changeDetectorRef=s(H);_dateFormats=s(de,{optional:!0});_dateAdapter=s(ut,{optional:!0});_dir=s(pt,{optional:!0});_rangeStrategy=s(Yn,{optional:!0});_rerenderSubscription=at.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(t){let e=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(e,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(t){t instanceof st?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new _;_userSelection=new _;dragStarted=new _;dragEnded=new _;activeDateChange=new _;_matCalendarBody;_monthLabel=k("");_weeks=k([]);_firstWeekOffset=k(0);_rangeStart=k(null);_rangeEnd=k(null);_comparisonRangeStart=k(null);_comparisonRangeEnd=k(null);_previewStart=k(null);_previewEnd=k(null);_isRange=k(!1);_todayDate=k(null);_weekdays=k([]);constructor(){s(ot).load(Nt),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(It(null)).subscribe(()=>this._init())}ngOnChanges(t){let e=t.comparisonStart||t.comparisonEnd;e&&!e.firstChange&&this._setRanges(this.selected),t.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(t){let e=t.value,a=this._getDateFromDayOfMonth(e),o,r;this._selected instanceof st?(o=this._getDateInCurrentMonth(this._selected.start),r=this._getDateInCurrentMonth(this._selected.end)):o=r=this._getDateInCurrentMonth(this._selected),(o!==e||r!==e)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:t.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(t){let e=t.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(e),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(t){let e=this._activeDate,a=this._isRtl();switch(t.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=t.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=t.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&t.preventDefault();return;case 27:this._previewEnd()!=null&&!rt(t)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:t}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:t})),t.preventDefault(),t.stopPropagation());return;default:return}this._dateAdapter.compareDate(e,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),t.preventDefault()}_handleCalendarBodyKeyup(t){(t.keyCode===32||t.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:t}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((fa+this._dateAdapter.getDayOfWeek(t)-this._dateAdapter.getFirstDayOfWeek())%fa),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(t){this._matCalendarBody._focusActiveCell(t)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:t,value:e}){if(this._rangeStrategy){let a=e?e.rawValue:null,o=this._rangeStrategy.createPreview(a,this.selected,t);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&a){let r=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,t);r&&(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)))}}}_dragEnded(t){if(this.activeDrag)if(t.value){let e=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,t.value,t.event);this.dragEnded.emit({value:e??null,event:t.event})}else this.dragEnded.emit({value:null,event:t.event})}_getDateFromDayOfMonth(t){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),t)}_initWeekdays(){let t=this._dateAdapter.getFirstDayOfWeek(),e=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((r,l)=>({long:r,narrow:e[l],id:Hi++}));this._weekdays.set(o.slice(t).concat(o.slice(0,t)))}_createWeekCells(){let t=this._dateAdapter.getNumDaysInMonth(this.activeDate),e=this._dateAdapter.getDateNames(),a=[[]];for(let o=0,r=this._firstWeekOffset();o<t;o++,r++){r==fa&&(a.push([]),r=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),c=this._shouldEnableDate(l),f=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),p=this.dateClass?this.dateClass(l,"month"):void 0;a[a.length-1].push(new me(o+1,e[o],f,c,p,this._getCellCompareValue(l),l))}this._weeks.set(a)}_shouldEnableDate(t){return!!t&&(!this.minDate||this._dateAdapter.compareDate(t,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(t,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(t))}_getDateInCurrentMonth(t){return t&&this._hasSameMonthAndYear(t,this.activeDate)?this._dateAdapter.getDate(t):null}_hasSameMonthAndYear(t,e){return!!(t&&e&&this._dateAdapter.getMonth(t)==this._dateAdapter.getMonth(e)&&this._dateAdapter.getYear(t)==this._dateAdapter.getYear(e))}_getCellCompareValue(t){if(t){let e=this._dateAdapter.getYear(t),a=this._dateAdapter.getMonth(t),o=this._dateAdapter.getDate(t);return new Date(e,a,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(t){t instanceof st?(this._rangeStart.set(this._getCellCompareValue(t.start)),this._rangeEnd.set(this._getCellCompareValue(t.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(t)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(t){return!this.dateFilter||this.dateFilter(t)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-month-view"]],viewQuery:function(e,a){if(e&1&&Q(qt,5),e&2){let o;A(o=E())&&(a._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[wt],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(e,a){e&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),Lt(3,Mi,5,2,"th",2,zn),h(),m(5,"tr",3),P(6,"th",4),h()(),m(7,"tbody",5),v("selectedValueChange",function(r){return a._dateSelected(r)})("activeDateChange",function(r){return a._updateActiveDate(r)})("previewChange",function(r){return a._previewChanged(r)})("dragStarted",function(r){return a.dragStarted.emit(r)})("dragEnded",function(r){return a._dragEnded(r)})("keyup",function(r){return a._handleCalendarBodyKeyup(r)})("keydown",function(r){return a._handleCalendarBodyKeydown(r)}),h()()),e&2&&(d(3),Bt(a._weekdays()),d(4),b("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[qt],encapsulation:2,changeDetection:0})}return i})(),tt=24,ga=4,Bn=(()=>{class i{_changeDetectorRef=s(H);_dateAdapter=s(ut,{optional:!0});_dir=s(pt,{optional:!0});_rerenderSubscription=at.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(t){let e=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),Hn(this._dateAdapter,e,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(t){t instanceof st?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t)),this._setSelectedYear(t)}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;selectedChange=new _;yearSelected=new _;activeDateChange=new _;_matCalendarBody;_years=k([]);_todayYear=k(0);_selectedYear=k(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(It(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let e=this._dateAdapter.getYear(this._activeDate)-ce(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let o=0,r=[];o<tt;o++)r.push(e+o),r.length==ga&&(a.push(r.map(l=>this._createCellForYear(l))),r=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(t){let e=t.value,a=this._dateAdapter.createDate(e,0,1),o=this._getDateFromYear(e);this.yearSelected.emit(a),this.selectedChange.emit(o)}_updateActiveDate(t){let e=t.value,a=this._activeDate;this.activeDate=this._getDateFromYear(e),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(t){let e=this._activeDate,a=this._isRtl();switch(t.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ga);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,ga);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ce(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,tt-ce(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?-tt*10:-tt);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?tt*10:tt);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(e,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),t.preventDefault()}_handleCalendarBodyKeyup(t){(t.keyCode===32||t.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:t}),this._selectionKeyPressed=!1)}_getActiveCell(){return ce(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(t){let e=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(t,e,1));return this._dateAdapter.createDate(t,e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(t){let e=this._dateAdapter.createDate(t,0,1),a=this._dateAdapter.getYearName(e),o=this.dateClass?this.dateClass(e,"multi-year"):void 0;return new me(t,a,a,this._shouldEnableYear(t),o)}_shouldEnableYear(t){if(t==null||this.maxDate&&t>this._dateAdapter.getYear(this.maxDate)||this.minDate&&t<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let e=this._dateAdapter.createDate(t,0,1);for(let a=e;this._dateAdapter.getYear(a)==t;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(t){if(this._selectedYear.set(null),t instanceof st){let e=t.start||t.end;e&&this._selectedYear.set(this._dateAdapter.getYear(e))}else t&&this._selectedYear.set(this._dateAdapter.getYear(t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(e,a){if(e&1&&Q(qt,5),e&2){let o;A(o=E())&&(a._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(e,a){e&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),P(3,"th",2),h()(),m(4,"tbody",3),v("selectedValueChange",function(r){return a._yearSelected(r)})("activeDateChange",function(r){return a._updateActiveDate(r)})("keyup",function(r){return a._handleCalendarBodyKeyup(r)})("keydown",function(r){return a._handleCalendarBodyKeydown(r)}),h()()),e&2&&(d(4),b("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[qt],encapsulation:2,changeDetection:0})}return i})();function Hn(i,n,t,e,a){let o=i.getYear(n),r=i.getYear(t),l=jn(i,e,a);return Math.floor((o-l)/tt)===Math.floor((r-l)/tt)}function ce(i,n,t,e){let a=i.getYear(n);return ji(a-jn(i,t,e),tt)}function jn(i,n,t){let e=0;return t?e=i.getYear(t)-tt+1:n&&(e=i.getYear(n)),e}function ji(i,n){return(i%n+n)%n}var Nn=(()=>{class i{_changeDetectorRef=s(H);_dateFormats=s(de,{optional:!0});_dateAdapter=s(ut,{optional:!0});_dir=s(pt,{optional:!0});_rerenderSubscription=at.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(t){let e=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(e)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(t){t instanceof st?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t)),this._setSelectedMonth(t)}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;selectedChange=new _;monthSelected=new _;activeDateChange=new _;_matCalendarBody;_months=k([]);_yearLabel=k("");_todayMonth=k(null);_selectedMonth=k(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(It(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(t){let e=t.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1);this.monthSelected.emit(a);let o=this._getDateFromMonth(e);this.selectedChange.emit(o)}_updateActiveDate(t){let e=t.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(e),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(t){let e=this._activeDate,a=this._isRtl();switch(t.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(e,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),t.preventDefault()}_handleCalendarBodyKeyup(t){(t.keyCode===32||t.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:t}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let t=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(e=>e.map(a=>this._createCellForMonth(a,t[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(t){return t&&this._dateAdapter.getYear(t)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(t):null}_getDateFromMonth(t){let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1),a=this._dateAdapter.getNumDaysInMonth(e);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(t,e){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1),o=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),r=this.dateClass?this.dateClass(a,"year"):void 0;return new me(t,e.toLocaleUpperCase(),o,this._shouldEnableMonth(t),r)}_shouldEnableMonth(t){let e=this._dateAdapter.getYear(this.activeDate);if(t==null||this._isYearAndMonthAfterMaxDate(e,t)||this._isYearAndMonthBeforeMinDate(e,t))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(e,t,1);for(let o=a;this._dateAdapter.getMonth(o)==t;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(t,e){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return t>a||t===a&&e>o}return!1}_isYearAndMonthBeforeMinDate(t,e){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return t<a||t===a&&e<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(t){t instanceof st?this._selectedMonth.set(this._getMonthInCurrentYear(t.start)||this._getMonthInCurrentYear(t.end)):this._selectedMonth.set(this._getMonthInCurrentYear(t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-year-view"]],viewQuery:function(e,a){if(e&1&&Q(qt,5),e&2){let o;A(o=E())&&(a._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(e,a){e&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),P(3,"th",2),h()(),m(4,"tbody",3),v("selectedValueChange",function(r){return a._monthSelected(r)})("activeDateChange",function(r){return a._updateActiveDate(r)})("keyup",function(r){return a._handleCalendarBodyKeyup(r)})("keydown",function(r){return a._handleCalendarBodyKeydown(r)}),h()()),e&2&&(d(4),b("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[qt],encapsulation:2,changeDetection:0})}return i})(),Wn=(()=>{class i{_intl=s(Zt);calendar=s(ba);_dateAdapter=s(ut,{optional:!0});_dateFormats=s(de,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(ot).load(Nt);let t=s(H);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),t.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-tt))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:tt))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let t=this.calendar,e=this._intl,a=this._dateAdapter;t.currentView==="month"?(this._periodButtonText=a.format(t.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(t.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=e.switchToMultiYearViewLabel,this._prevButtonLabel=e.prevMonthLabel,this._nextButtonLabel=e.nextMonthLabel):t.currentView==="year"?(this._periodButtonText=a.getYearName(t.activeDate),this._periodButtonDescription=a.getYearName(t.activeDate),this._periodButtonLabel=e.switchToMonthViewLabel,this._prevButtonLabel=e.prevYearLabel,this._nextButtonLabel=e.nextYearLabel):(this._periodButtonText=e.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=e.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=e.switchToMonthViewLabel,this._prevButtonLabel=e.prevMultiYearLabel,this._nextButtonLabel=e.nextMultiYearLabel)}_isSameView(t,e){return this.calendar.currentView=="month"?this._dateAdapter.getYear(t)==this._dateAdapter.getYear(e)&&this._dateAdapter.getMonth(t)==this._dateAdapter.getMonth(e):this.calendar.currentView=="year"?this._dateAdapter.getYear(t)==this._dateAdapter.getYear(e):Hn(this._dateAdapter,t,e,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let e=this._dateAdapter.getYear(this.calendar.activeDate)-ce(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=e+tt-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(e,0,1)),r=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[o,r]}_periodButtonLabelId=s(ht).getId("mat-calendar-period-label-");static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Ai,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(e,a){e&1&&(mt(),m(0,"div",0)(1,"div",1)(2,"span",2),x(3),h(),m(4,"button",3),v("click",function(){return a.currentPeriodClicked()}),m(5,"span",4),x(6),h(),nt(),m(7,"svg",5),P(8,"polygon",6),h()(),te(),P(9,"div",7),K(10),m(11,"button",8),v("click",function(){return a.previousClicked()}),nt(),m(12,"svg",9),P(13,"path",10),h()(),te(),m(14,"button",11),v("click",function(){return a.nextClicked()}),nt(),m(15,"svg",9),P(16,"path",12),h()()()()),e&2&&(d(2),b("id",a._periodButtonLabelId),d(),$(a.periodButtonDescription),d(),w("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),d(2),$(a.periodButtonText),d(),M("mat-calendar-invert",a.calendar.currentView!=="month"),d(4),b("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),w("aria-label",a.prevButtonLabel),d(3),b("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),w("aria-label",a.nextButtonLabel))},dependencies:[oa,Ht,le],encapsulation:2,changeDetection:0})}return i})(),ba=(()=>{class i{_dateAdapter=s(ut,{optional:!0});_dateFormats=s(de,{optional:!0});_changeDetectorRef=s(H);_elementRef=s(T);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(t){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_startAt=null;startView="month";get selected(){return this._selected}set selected(t){t instanceof st?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new _;yearSelected=new _;monthSelected=new _;viewChanged=new _(!0);_userSelection=new _;_userDragDrop=new _;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(t){this._clampedActiveDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(t){let e=this._currentView!==t?t:null;this._currentView=t,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),e&&(this.stateChanges.next(),this.viewChanged.emit(e))}_currentView;_activeDrag=null;stateChanges=new D;constructor(){this._intlChanges=s(Zt).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new ke(this.headerComponent||Wn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(t){let e=t.minDate&&!this._dateAdapter.sameDate(t.minDate.previousValue,t.minDate.currentValue)?t.minDate:void 0,a=t.maxDate&&!this._dateAdapter.sameDate(t.maxDate.previousValue,t.maxDate.currentValue)?t.maxDate:void 0,o=e||a||t.dateFilter;if(o&&!o.firstChange){let r=this._getCurrentViewComponent();r&&(this._elementRef.nativeElement.contains(ja())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),r._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(t){let e=t.value;(this.selected instanceof st||e&&!this._dateAdapter.sameDate(e,this.selected))&&this.selectedChange.emit(e),this._userSelection.emit(t)}_yearSelectedInMultiYearView(t){this.yearSelected.emit(t)}_monthSelectedInYearView(t){this.monthSelected.emit(t)}_goToDateInView(t,e){this.activeDate=t,this.currentView=e}_dragStarted(t){this._activeDrag=t}_dragEnded(t){this._activeDrag&&(t.value&&this._userDragDrop.emit(t),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-calendar"]],viewQuery:function(e,a){if(e&1&&Q(Ln,5)(Nn,5)(Bn,5),e&2){let o;A(o=E())&&(a.monthView=o.first),A(o=E())&&(a.yearView=o.first),A(o=E())&&(a.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[ie([Yi]),wt],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(e,a){if(e&1&&(ne(0,Ei,0,0,"ng-template",0),m(1,"div",1),L(2,Oi,1,11,"mat-month-view",2)(3,Ii,1,6,"mat-year-view",3)(4,Ri,1,6,"mat-multi-year-view",3),h()),e&2){let o;b("cdkPortalOutlet",a._calendarHeaderPortal),d(2),B((o=a.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[Ue,Wa,Ln,Nn,Bn],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();var Wi=(()=>{class i{_elementRef=s(T);_animationsDisabled=Z();_changeDetectorRef=s(H);_globalModel=s(Ye);_dateAdapter=s(ut);_ngZone=s(z);_rangeSelectionStrategy=s(Yn,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new D;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(ot).load(Nt),this._closeButtonText=s(Zt).closeCalendarLabel,!this._animationsDisabled){let t=this._elementRef.nativeElement,e=s(dt);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[e.listen(t,"animationstart",this._handleAnimationEvent),e.listen(t,"animationend",this._handleAnimationEvent),e.listen(t,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(t=>t()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(t){let e=this._model.selection,a=t.value,o=e instanceof st;if(o&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(a,e,t.event);this._model.updateSelection(r,this)}else a&&(o||!this._dateAdapter.sameDate(a,e))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(t){this._model.updateSelection(t.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=t=>{let e=this._elementRef.nativeElement;t.target!==e||!t.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=t.type==="animationstart",e.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(t,e){this._model=t?this._globalModel.clone():this._globalModel,this._actionsPortal=t,e&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(e,a){if(e&1&&Q(ba,5),e&2){let o;A(o=E())&&(a._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(e,a){e&2&&(vt(a.color?"mat-"+a.color:""),M("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(e,a){e&1&&(m(0,"div",0)(1,"mat-calendar",1),v("yearSelected",function(r){return a.datepicker._selectYear(r)})("monthSelected",function(r){return a.datepicker._selectMonth(r)})("viewChanged",function(r){return a.datepicker._viewChanged(r)})("_userSelection",function(r){return a._handleUserSelection(r)})("_userDragDrop",function(r){return a._handleUserDragDrop(r)}),h(),ne(2,Pi,0,0,"ng-template",2),m(3,"button",3),v("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),x(4),h()()),e&2&&(M("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),w("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),d(),vt(a.datepicker.panelClass),b("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),d(),b("cdkPortalOutlet",a._actionsPortal),d(),M("cdk-visually-hidden",!a._closeButtonFocused),b("color",a.color||"primary"),d(),$(a._closeButtonText))},dependencies:[Ka,ba,Ue,oa],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Xi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=bt({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Ki=(()=>{class i{_intl=s(Zt);_changeDetectorRef=s(H);_stateChanges=at.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(t){this._disabled=t}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let t=s(new xe("tabindex"),{optional:!0}),e=Number(t);this.tabIndex=e||e===0?e:null}ngOnChanges(t){t.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(t){this.datepicker&&!this.disabled&&(this.datepicker.open(),t.stopPropagation())}_watchStateChanges(){let t=this.datepicker?this.datepicker.stateChanges:_e(),e=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:_e(),a=this.datepicker?Ot(this.datepicker.openedStream,this.datepicker.closedStream):_e();this._stateChanges.unsubscribe(),this._stateChanges=Ot(this._intl.changes,t,e,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(e,a,o){if(e&1&&be(o,Xi,5),e&2){let r;A(r=E())&&(a._customIcon=r.first)}},viewQuery:function(e,a){if(e&1&&Q(Ti,5),e&2){let o;A(o=E())&&(a._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(e,a){e&1&&v("click",function(r){return a._open(r)}),e&2&&(w("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),M("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",y],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[wt],ngContentSelectors:Fi,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(e,a){e&1&&(mt(Vi),m(0,"button",1,0),L(2,Li,2,0,":svg:svg",2),K(3),h()),e&2&&(b("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),w("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),d(2),B(a._customIcon?-1:2))},dependencies:[Ht],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Fs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({providers:[Zt],imports:[Re,Tt,Ae,Se,Wi,Ki,Wn,j,Rt]})}return i})();var Xn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({imports:[Ae,Tt,j,Rt]})}return i})();var ue=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;constructor(n=!1,t,e=!0,a){this._multiple=n,this._emitChanges=e,this.compareWith=a,t&&t.length&&(n?t.forEach(o=>this._markSelected(o)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...n){this._verifyValueAssignment(n),n.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...n){this._verifyValueAssignment(n);let t=this.selected,e=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),t.filter(o=>!e.has(this._getConcreteValue(o,e))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let t=this._hasQueuedChanges();return n&&this._emitChangeEvent(),t}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(n,e))return e;return n}else return n}};var Kn=class{applyChanges(n,t,e,a,o){n.forEachOperation((r,l,c)=>{let f,p;if(r.previousIndex==null){let g=e(r,l,c);f=t.createEmbeddedView(g.templateRef,g.context,g.index),p=Ee.INSERTED}else c==null?(t.remove(l),p=Ee.REMOVED):(f=t.get(l),t.move(f,c),p=Ee.MOVED);o&&o({context:f?.context,operation:p,record:r})})}detach(){}};var Gn=(()=>{class i{_animationsDisabled=Z();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,a){e&2&&M("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Gi=["text"],Ui=[[["mat-icon"]],"*"],qi=["mat-icon","*"];function Qi(i,n){if(i&1&&P(0,"mat-pseudo-checkbox",1),i&2){let t=u();b("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function $i(i,n){if(i&1&&P(0,"mat-pseudo-checkbox",3),i&2){let t=u();b("disabled",t.disabled)}}function Zi(i,n){if(i&1&&(m(0,"span",4),x(1),h()),i&2){let t=u();d(),it("(",t.group.label,")")}}var xa=new S("MAT_OPTION_PARENT_COMPONENT"),ka=new S("MatOptgroup");var wa=class{source;isUserInput;constructor(n,t=!1){this.source=n,this.isUserInput=t}},Jt=(()=>{class i{_element=s(T);_changeDetectorRef=s(H);_parent=s(xa,{optional:!0});group=s(ka,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(ht).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=k(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new _;_text;_stateChanges=new D;constructor(){let t=s(ot);t.load(zt),t.load(Nt),this._signalDisableRipple=!!this._parent&&La(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!rt(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new wa(this,t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-option"]],viewQuery:function(e,a){if(e&1&&Q(Gi,7),e&2){let o;A(o=E())&&(a._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,a){e&1&&v("click",function(){return a._selectViaInteraction()})("keydown",function(r){return a._handleKeydown(r)}),e&2&&(St("id",a.id),w("aria-selected",a.selected)("aria-disabled",a.disabled.toString()),M("mdc-list-item--selected",a.selected)("mat-mdc-option-multiple",a.multiple)("mat-mdc-option-active",a.active)("mdc-list-item--disabled",a.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",y]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:qi,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,a){e&1&&(mt(Ui),L(0,Qi,1,2,"mat-pseudo-checkbox",1),K(1),m(2,"span",2,0),K(4,1),h(),L(5,$i,1,1,"mat-pseudo-checkbox",3),L(6,Zi,2,1,"span",4),P(7,"div",5)),e&2&&(B(a.multiple?0:-1),d(5),B(!a.multiple&&a.selected&&!a.hideSingleSelectionIndicator?5:-1),d(),B(a.group&&a.group._inert?6:-1),d(),b("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disabled||a.disableRipple))},dependencies:[Gn,tn],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function Un(i,n,t){if(t.length){let e=n.toArray(),a=t.toArray(),o=0;for(let r=0;r<i+1;r++)e[r].group&&e[r].group===a[o]&&o++;return o}return 0}function qn(i,n,t,e){return i<t?i:i+n>t+e?Math.max(0,i-e+n):t}var Qn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({imports:[j]})}return i})();var Sa=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({imports:[Ie,Qn,Jt,j]})}return i})();var to=["trigger"],eo=["panel"],ao=[[["mat-select-trigger"]],"*"],no=["mat-select-trigger","*"];function io(i,n){if(i&1&&(m(0,"span",4),x(1),h()),i&2){let t=u();d(),$(t.placeholder)}}function oo(i,n){i&1&&K(0)}function ro(i,n){if(i&1&&(m(0,"span",11),x(1),h()),i&2){let t=u(2);d(),$(t.triggerValue)}}function so(i,n){if(i&1&&(m(0,"span",5),L(1,oo,1,0)(2,ro,2,1,"span",11),h()),i&2){let t=u();d(),B(t.customTrigger?1:2)}}function lo(i,n){if(i&1){let t=ct();m(0,"div",12,1),v("keydown",function(a){I(t);let o=u();return R(o._handleKeydown(a))}),K(2,1),h()}if(i&2){let t=u();vt(t.panelClass),M("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",(t._parentFormField==null?null:t._parentFormField.color)==="primary")("mat-accent",(t._parentFormField==null?null:t._parentFormField.color)==="accent")("mat-warn",(t._parentFormField==null?null:t._parentFormField.color)==="warn")("mat-undefined",!(t._parentFormField!=null&&t._parentFormField.color)),w("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var co=new S("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(W);return()=>Et(i)}}),mo=new S("MAT_SELECT_CONFIG"),po=new S("MatSelectTrigger"),Ma=class{source;value;constructor(n,t){this.source=n,this.value=t}},$n=(()=>{class i{_viewportRuler=s(At);_changeDetectorRef=s(H);_elementRef=s(T);_dir=s(pt,{optional:!0});_idGenerator=s(ht);_renderer=s(dt);_parentFormField=s(an,{optional:!0});ngControl=s(sn,{self:!0,optional:!0});_liveAnnouncer=s(Ga);_defaultOptions=s(mo,{optional:!0});_animationsDisabled=Z();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let a=this.panel.nativeElement,o=Un(t,this.options,this.optionGroups),r=e._getHostElement();t===0&&o===1?a.scrollTop=0:a.scrollTop=qn(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Ma(this,t)}_scrollStrategyFactory=s(co);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=k(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(rn.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ia(()=>{let t=this.options;return t?t.changes.pipe(It(t),We(()=>Ot(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(We(()=>this.optionSelectionChanges))});openedChange=new _;_openedStream=this.openedChange.pipe(Vt(t=>t),He(()=>{}));_closedStream=this.openedChange.pipe(Vt(t=>!t),He(()=>{}));selectionChange=new _;valueChange=new _;constructor(){let t=s(cn),e=s(ln,{optional:!0}),a=s(dn,{optional:!0}),o=s(new xe("tabindex"),{optional:!0}),r=s(se,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new mn(t,this.ngControl,a,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ue(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(U(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(U(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(It(null),U(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?a.setAttribute("aria-labelledby",t):a.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(je(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let t=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=`${this.id}-panel`;this._trackedModal&&$e(this._trackedModal,"aria-owns",e),qa(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(!this._trackedModal)return;let t=`${this.id}-panel`;$e(this._trackedModal,"aria-owns",t),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(a),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,a=e===40||e===38||e===37||e===39,o=e===13||e===32,r=this._keyManager;if(!r.isTyping()&&o&&!rt(t)||(this.multiple||t.altKey)&&a)t.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(t);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,a=t.keyCode,o=a===40||a===38,r=e.isTyping();if(o&&t.altKey)t.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&e.activeItem&&!rt(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&t.ctrlKey){t.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=e.activeItemIndex;e.onKeydown(t),this._multiple&&o&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==l&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!rt(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,t)}catch{return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Wt?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ua(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=Ot(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(U(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ot(...this.options.map(e=>e._stateChanges)).pipe(U(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let a=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(a!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),a!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,a)=>this.sortComparator?this.sortComparator(e,a,t):t.indexOf(e)-t.indexOf(a)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(a=>a.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=Mt(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-select"]],contentQueries:function(e,a,o){if(e&1&&be(o,po,5)(o,Jt,5)(o,ka,5),e&2){let r;A(r=E())&&(a.customTrigger=r.first),A(r=E())&&(a.options=r),A(r=E())&&(a.optionGroups=r)}},viewQuery:function(e,a){if(e&1&&Q(to,5)(eo,5)(Ne,5),e&2){let o;A(o=E())&&(a.trigger=o.first),A(o=E())&&(a.panel=o.first),A(o=E())&&(a._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,a){e&1&&v("keydown",function(r){return a._handleKeydown(r)})("focus",function(){return a._onFocus()})("blur",function(){return a._onBlur()}),e&2&&(w("id",a.id)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a.panelOpen?a.id+"-panel":null)("aria-expanded",a.panelOpen)("aria-label",a.ariaLabel||null)("aria-required",a.required.toString())("aria-disabled",a.disabled.toString())("aria-invalid",a.errorState)("aria-activedescendant",a._getAriaActiveDescendant()),M("mat-mdc-select-disabled",a.disabled)("mat-mdc-select-invalid",a.errorState)("mat-mdc-select-required",a.required)("mat-mdc-select-empty",a.empty)("mat-mdc-select-multiple",a.multiple)("mat-select-open",a.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",y],disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:yt(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",y],placeholder:"placeholder",required:[2,"required","required",y],multiple:[2,"multiple","multiple",y],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",y],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",yt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",y]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ie([{provide:en,useExisting:i},{provide:xa,useExisting:i}]),wt],ngContentSelectors:no,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,a){if(e&1&&(mt(ao),m(0,"div",2,0),v("click",function(){return a.open()}),m(3,"div",3),L(4,io,2,1,"span",4)(5,so,3,1,"span",5),h(),m(6,"div",6)(7,"div",7),nt(),m(8,"svg",8),P(9,"path",9),h()()()(),ne(10,lo,3,16,"ng-template",10),v("detach",function(){return a.close()})("backdropClick",function(){return a.close()})("overlayKeydown",function(r){return a._handleOverlayKeydown(r)})),e&2){let o=ve(1);d(3),w("id",a._valueId),d(),B(a.empty?4:5),d(6),b("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",a._scrollStrategy)("cdkConnectedOverlayOrigin",a._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayWidth",a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",a._popoverLocation)}},dependencies:[Wt,Ne],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var Zn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({imports:[Tt,Sa,j,Rt,on,Sa]})}return i})();function ho(i,n){if(i&1&&(m(0,"mat-option",17),x(1),h()),i&2){let t=n.$implicit;b("value",t),d(),it(" ",t," ")}}function uo(i,n){if(i&1){let t=ct();m(0,"mat-form-field",14)(1,"mat-select",16,0),v("selectionChange",function(a){I(t);let o=u(2);return R(o._changePageSize(a.value))}),Lt(3,ho,2,2,"mat-option",17,za),h(),m(5,"div",18),v("click",function(){I(t);let a=ve(2);return R(a.open())}),h()()}if(i&2){let t=u(2);b("appearance",t._formFieldAppearance)("color",t.color),d(),b("value",t.pageSize)("disabled",t.disabled),Na("aria-labelledby",t._pageSizeLabelId),b("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),d(2),Bt(t._displayedPageSizeOptions)}}function _o(i,n){if(i&1&&(m(0,"div",15),x(1),h()),i&2){let t=u(2);d(),$(t.pageSize)}}function fo(i,n){if(i&1&&(m(0,"div",3)(1,"div",13),x(2),h(),L(3,uo,6,7,"mat-form-field",14),L(4,_o,2,1,"div",15),h()),i&2){let t=u();d(),w("id",t._pageSizeLabelId),d(),it(" ",t._intl.itemsPerPageLabel," "),d(),B(t._displayedPageSizeOptions.length>1?3:-1),d(),B(t._displayedPageSizeOptions.length<=1?4:-1)}}function go(i,n){if(i&1){let t=ct();m(0,"button",19),v("click",function(){I(t);let a=u();return R(a._buttonClicked(0,a._previousButtonsDisabled()))}),nt(),m(1,"svg",8),P(2,"path",20),h()()}if(i&2){let t=u();b("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),w("aria-label",t._intl.firstPageLabel)}}function bo(i,n){if(i&1){let t=ct();m(0,"button",21),v("click",function(){I(t);let a=u();return R(a._buttonClicked(a.getNumberOfPages()-1,a._nextButtonsDisabled()))}),nt(),m(1,"svg",8),P(2,"path",22),h()()}if(i&2){let t=u();b("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),w("aria-label",t._intl.lastPageLabel)}}var vo=(()=>{class i{changes=new D;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,e,a)=>{if(a==0||e==0)return`0 of ${a}`;a=Math.max(a,0);let o=t*e,r=o<a?Math.min(o+e,a):o+e;return`${o+1} \u2013 ${r} of ${a}`};static \u0275fac=function(e){return new(e||i)};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),yo=50;var Do=new S("MAT_PAGINATOR_DEFAULT_OPTIONS"),Co=(()=>{class i{_intl=s(vo);_changeDetectorRef=s(H);_formFieldAppearance;_pageSizeLabelId=s(ht).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Oa(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(e=>yt(e,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new _;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,e=s(Do,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),e){let{pageSize:a,pageSizeOptions:o,hidePageSize:r,showFirstLastButtons:l}=e;a!=null&&(this._pageSize=a),o!=null&&(this._pageSizeOptions=o),r!=null&&(this.hidePageSize=r),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=e?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let e=this.pageIndex*this.pageSize,a=this.pageIndex;this.pageIndex=Math.floor(e/t)||0,this.pageSize=t,this._emitPageEvent(a)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:yo),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,e)=>t-e),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let e=this.pageIndex;t!==e&&(this.pageIndex=t,this._emitPageEvent(e))}_buttonClicked(t,e){e||this._navigate(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",yt],length:[2,"length","length",yt],pageSize:[2,"pageSize","pageSize",yt],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",y],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",y],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",y]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(e,a){e&1&&(m(0,"div",1)(1,"div",2),L(2,fo,5,4,"div",3),m(3,"div",4)(4,"div",5),x(5),h(),L(6,go,3,5,"button",6),m(7,"button",7),v("click",function(){return a._buttonClicked(a.pageIndex-1,a._previousButtonsDisabled())}),nt(),m(8,"svg",8),P(9,"path",9),h()(),te(),m(10,"button",10),v("click",function(){return a._buttonClicked(a.pageIndex+1,a._nextButtonsDisabled())}),nt(),m(11,"svg",8),P(12,"path",11),h()(),L(13,bo,3,5,"button",12),h()()()),e&2&&(d(2),B(a.hidePageSize?-1:2),d(3),it(" ",a._intl.getRangeLabel(a.pageIndex,a.pageSize,a.length)," "),d(),B(a.showFirstLastButtons?6:-1),d(),b("matTooltip",a._intl.previousPageLabel)("matTooltipDisabled",a._previousButtonsDisabled())("disabled",a._previousButtonsDisabled())("tabindex",a._previousButtonsDisabled()?-1:null),w("aria-label",a._intl.previousPageLabel),d(3),b("matTooltip",a._intl.nextPageLabel)("matTooltipDisabled",a._nextButtonsDisabled())("disabled",a._nextButtonsDisabled())("tabindex",a._nextButtonsDisabled()?-1:null),w("aria-label",a._intl.nextPageLabel),d(3),B(a.showFirstLastButtons?13:-1))},dependencies:[nn,$n,Jt,Ht,le],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return i})(),gd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=V({imports:[Re,Zn,Xn,Co]})}return i})();export{Ht as a,Re as b,le as c,Fs as d,Kn as e,Xn as f,Co as g,gd as h};
