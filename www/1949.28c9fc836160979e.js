"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1949],{1949:(M,s,a)=>{a.r(s),a.d(s,{VideoPageModule:()=>P});var u=a(177),g=a(4341),i=a(4742),d=a(9522),t=a(4438),l=a(345);function p(n,r){if(1&n){const e=t.RV6();t.j41(0,"ion-button",15),t.bIt("click",function(){t.eBV(e);const c=t.XpG(2);return t.Njj(c.goNext())}),t.nrm(1,"ion-icon",16),t.EFF(2," \u0e16\u0e31\u0e14\u0e44\u0e1b "),t.k0s()}}function f(n,r){if(1&n){const e=t.RV6();t.j41(0,"ion-button",15),t.bIt("click",function(){t.eBV(e);const c=t.XpG(2);return t.Njj(c.goMain())}),t.nrm(1,"ion-icon",3),t.EFF(2," \u0e01\u0e25\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01 "),t.k0s()}}function b(n,r){if(1&n&&(t.j41(0,"div",9)(1,"ion-card",10)(2,"div",11),t.nrm(3,"iframe",12),t.k0s(),t.j41(4,"ion-card-header")(5,"ion-card-title",13),t.EFF(6),t.k0s()()(),t.DNE(7,p,3,0,"ion-button",14)(8,f,3,0,"ion-button",14),t.k0s()),2&n){const e=t.XpG();t.R7$(3),t.Y8G("src",e.video.safeUrl,t.f$h),t.R7$(3),t.SpI(" ",e.video.title," "),t.R7$(),t.Y8G("ngIf","1"==e.type),t.R7$(),t.Y8G("ngIf","2"==e.type)}}const v=[{path:"",component:(()=>{var n;class r{ngOnInit(){const o=this.route.snapshot.paramMap.get("type");o&&(this.type=o,console.log(this.type),this.video="1"==this.type?this.videos[0]:this.videos[1])}constructor(o,c,h){this.sanitizer=o,this.route=c,this.router=h,this.type="",this.videos=[{title:"\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e42\u0e23\u0e04\u0e04\u0e27\u0e32\u0e21\u0e14\u0e31\u0e19\u0e42\u0e25\u0e2b\u0e34\u0e15",safeUrl:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zMbYH1SBHtc?si=3wrp2ZsGP5qM4Lty")},{title:"\u0e27\u0e34\u0e18\u0e35\u0e2d\u0e48\u0e32\u0e19\u0e09\u0e25\u0e32\u0e01\u0e42\u0e20\u0e0a\u0e19\u0e32\u0e01\u0e32\u0e23",safeUrl:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/EGvLA3Qte60?si=gvfAO1XfeiQQPpnP")}]}goNext(){this.router.navigate(["/video/2"])}goMain(){this.router.navigate(["/main-menu"])}}return(n=r).\u0275fac=function(o){return new(o||n)(t.rXU(l.up),t.rXU(d.nX),t.rXU(d.Ix))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-video"]],decls:13,vars:3,consts:[[3,"translucent"],["slot","start"],["defaultHref","/video-list","text","\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"],["slot","start","name","arrow-back-outline"],[1,"ion-text-center"],[1,"ion-padding",3,"fullscreen"],["collapse","condense"],["size","large",1,"ion-text-center"],["class","video-container",4,"ngIf"],[1,"video-container"],[1,"video-card"],[1,"video-wrapper"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],[1,"ion-text-wrap"],["expand","block","fill","clear","class","back-button",3,"click",4,"ngIf"],["expand","block","fill","clear",1,"back-button",3,"click"],["slot","start","name","arrow-forward-outline"]],template:function(o,c){1&o&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-back-button",2),t.nrm(4,"ion-icon",3),t.k0s()(),t.j41(5,"ion-title",4),t.EFF(6,"\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e43\u0e2b\u0e49\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49"),t.k0s()()(),t.j41(7,"ion-content",5)(8,"ion-header",6)(9,"ion-toolbar")(10,"ion-title",7),t.EFF(11,"\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e43\u0e2b\u0e49\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49"),t.k0s()()(),t.DNE(12,b,9,4,"div",8),t.k0s()),2&o&&(t.Y8G("translucent",!0),t.R7$(7),t.Y8G("fullscreen",!0),t.R7$(5),t.Y8G("ngIf",c.video))},dependencies:[u.MD,u.bT,i.bv,i.Jm,i.QW,i.b_,i.ME,i.tN,i.W9,i.eU,i.iq,i.BC,i.ai,i.el],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: transparent}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-weight:600}.video-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:16px}.video-card[_ngcontent-%COMP%]{background:#fff;border-radius:16px;overflow:hidden;margin:16px 0;box-shadow:0 4px 12px #00000014;transition:transform .2s ease}.video-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.video-card[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;background:#f5f5f5}.video-card[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.video-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:16px}.video-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600;color:#333;margin:0;line-height:1.4}.video-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0 16px 16px}.video-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.5;color:#666}@media (max-width: 768px){.video-container[_ngcontent-%COMP%]{padding:8px}.video-card[_ngcontent-%COMP%]{margin:8px 0;border-radius:12px}.video-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:12px}.video-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1.1rem}.video-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0 12px 12px}}@media (prefers-color-scheme: dark){.video-card[_ngcontent-%COMP%]{background:#1e1e1e;box-shadow:0 4px 12px #0003}.video-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{color:#fff}.video-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#b0b0b0}}.back-button[_ngcontent-%COMP%]{margin-top:20px;--color: #ffffff;--background: #1e77ab;--background-hover: rgba(0, 0, 0, .04);--background-activated: rgba(0, 0, 0, .08);font-weight:500}.back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px}.back-button[_ngcontent-%COMP%]:hover{--color: #333333}@media (prefers-color-scheme: dark){.back-button[_ngcontent-%COMP%]{--color: #b0b0b0;--background-hover: rgba(255, 255, 255, .04);--background-activated: rgba(255, 255, 255, .08)}.back-button[_ngcontent-%COMP%]:hover{--color: #ffffff}}"]}),r})()}];let E=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[d.iI.forChild(v),d.iI]}),r})(),P=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[u.MD,g.YN,i.bv,E]}),r})()}}]);