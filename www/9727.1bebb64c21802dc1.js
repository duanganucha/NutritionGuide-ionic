"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9727],{9727:(j,p,s)=>{s.r(p),s.d(p,{IngredientPageModule:()=>_});var d=s(177),m=s(4341),o=s(4742),g=s(9930),l=s(467),e=s(4438),h=s(7282);function E(t,c){if(1&t){const i=e.RV6();e.j41(0,"ion-col",5)(1,"ion-card"),e.nrm(2,"img",6),e.j41(3,"ion-card-header")(4,"ion-card-title",7),e.EFF(5),e.k0s()(),e.j41(6,"ion-card-content")(7,"ion-list",8)(8,"ion-item"),e.nrm(9,"ion-icon",9),e.j41(10,"ion-label"),e.EFF(11),e.k0s()(),e.j41(12,"ion-item"),e.nrm(13,"ion-icon",10),e.j41(14,"ion-label"),e.EFF(15),e.k0s()()(),e.j41(16,"ion-button",11),e.bIt("click",function(){const a=e.eBV(i).$implicit,r=e.XpG();return e.Njj(r.addToCart(a))}),e.nrm(17,"ion-icon",12),e.EFF(18," \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a "),e.k0s()()()()}if(2&t){const i=c.$implicit,n=e.XpG();e.R7$(2),e.Y8G("src","assets/ingredients/"+i.name+".png",e.B4B)("alt",i.name),e.R7$(3),e.JRh(i.name),e.R7$(4),e.xc7("color",n.getIconColor(i.iconType)),e.R7$(2),e.SpI("\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01 ",i.weight,"g"),e.R7$(4),e.SpI("\u0e1b\u0e23\u0e34\u0e21\u0e32\u0e13\u0e42\u0e0b\u0e40\u0e14\u0e35\u0e22\u0e21 ",i.sodium," mg")}}const y=[{path:"",component:(()=>{var t;class c{getIconColor(n){switch(n){case"vegetable":return"#4CAF50";case"processed":return"#FF9800";default:return"#9E9E9E"}}constructor(n,a,r,u){this.toastController=n,this.route=a,this.cartService=r,this.router=u,this.categories=[{id:1,category:"\u0e1c\u0e31\u0e01",name:"\u0e41\u0e15\u0e07\u0e01\u0e27\u0e32",weight:100,sodium:5,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/cucumber-1238493_960_720.jpg",iconType:"vegetable"},{id:2,category:"\u0e1c\u0e31\u0e01",name:"\u0e21\u0e30\u0e40\u0e02\u0e37\u0e2d\u0e40\u0e17\u0e28",weight:100,sodium:10,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238255_960_720.jpg",iconType:"vegetable"},{id:3,category:"\u0e1c\u0e31\u0e01",name:"\u0e16\u0e31\u0e48\u0e27\u0e07\u0e2d\u0e01",weight:60,sodium:11,image:"https://cdn.pixabay.com/photo/2017/01/30/13/50/sprouts-2024433_960_720.jpg",iconType:"vegetable"},{id:4,category:"\u0e1c\u0e31\u0e01",name:"\u0e16\u0e31\u0e48\u0e27\u0e1d\u0e31\u0e01\u0e22\u0e32\u0e27",weight:100,sodium:19,image:"https://cdn.pixabay.com/photo/2018/07/15/10/27/long-beans-3532510_960_720.jpg",iconType:"vegetable"},{id:5,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e30\u0e2b\u0e25\u0e48\u0e33\u0e1b\u0e25\u0e35",weight:60,sodium:24,image:"https://cdn.pixabay.com/photo/2014/12/15/13/40/cabbage-569067_960_720.jpg",iconType:"vegetable"},{id:6,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e01\u0e32\u0e14\u0e02\u0e32\u0e27",weight:60,sodium:46,image:"https://cdn.pixabay.com/photo/2018/05/29/21/22/chinese-cabbage-3449606_960_720.jpg",iconType:"vegetable"},{id:7,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e04\u0e30\u0e19\u0e49\u0e32",weight:50,sodium:86,image:"https://cdn.pixabay.com/photo/2018/05/29/21/22/kale-3449607_960_720.jpg",iconType:"vegetable"},{id:8,category:"\u0e1c\u0e31\u0e01",name:"\u0e40\u0e2b\u0e47\u0e14\u0e1f\u0e32\u0e07",weight:60,sodium:21,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/mushrooms-1238254_960_720.jpg",iconType:"vegetable"},{id:9,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e27\u0e32\u0e07\u0e15\u0e38\u0e49\u0e07",weight:50,sodium:32,image:"https://cdn.pixabay.com/photo/2018/05/29/21/22/pak-choi-3449608_960_720.jpg",iconType:"vegetable"},{id:10,category:"\u0e1c\u0e31\u0e01",name:"\u0e1f\u0e31\u0e01\u0e17\u0e2d\u0e07",weight:200,sodium:2,image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:11,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e41\u0e2b\u0e19\u0e21",weight:100,sodium:990,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/fermented-pork-1238249_960_720.jpg",iconType:"processed"},{id:12,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e41\u0e14\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27",weight:100,sodium:1514,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg",iconType:"processed"},{id:13,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1b\u0e25\u0e32\u0e2a\u0e25\u0e34\u0e14\u0e41\u0e14\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27",weight:100,sodium:1694,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-catfish-1238247_960_720.jpg",iconType:"processed"},{id:14,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e21\u0e39\u0e41\u0e1c\u0e48\u0e19",weight:100,sodium:1592,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-sheet-1238246_960_720.jpg",iconType:"processed"},{id:15,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e01\u0e38\u0e19\u0e40\u0e0a\u0e35\u0e22\u0e07",weight:100,sodium:1303,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/chinese-sausage-1238245_960_720.jpg",iconType:"processed"},{id:16,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e44\u0e2a\u0e49\u0e01\u0e23\u0e2d\u0e01",weight:100,sodium:680,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sausage-1238244_960_720.jpg",iconType:"processed"},{id:17,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1c\u0e31\u0e01\u0e01\u0e32\u0e14\u0e14\u0e2d\u0e07",weight:100,sodium:1498,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mustard-1238243_960_720.jpg",iconType:"processed"},{id:18,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e21\u0e30\u0e21\u0e48\u0e27\u0e07\u0e41\u0e0a\u0e48\u0e2d\u0e34\u0e48\u0e21",weight:100,sodium:504,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mango-1238242_960_720.jpg",iconType:"processed"},{id:19,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1b\u0e25\u0e32\u0e01\u0e23\u0e30\u0e1b\u0e4b\u0e2d\u0e07",weight:100,sodium:400,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/canned-fish-1238241_960_720.jpg",iconType:"processed"},{id:20,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e21\u0e32\u0e21\u0e48\u0e32",weight:100,sodium:1200,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/instant-noodles-1238240_960_720.jpg",iconType:"processed"},{id:21,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e21\u0e39\u0e22\u0e2d",weight:100,sodium:800,image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"}],this.type=""}addToCart(n){var a=this;return(0,l.A)(function*(){try{console.log(n),yield a.cartService.addItem(n),yield(yield a.toastController.create({message:`\u0e40\u0e1e\u0e34\u0e48\u0e21 ${n.name} \u0e25\u0e07\u0e15\u0e30\u0e01\u0e23\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27`,duration:2e3,position:"bottom",color:"success",buttons:[{text:"\u0e15\u0e01\u0e25\u0e07",role:"cancel"}]})).present()}catch{yield(yield a.toastController.create({message:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",duration:2e3,position:"bottom",color:"danger"})).present()}})()}goCartPage(){this.router.navigate(["cart"])}}return(t=c).\u0275fac=function(n){return new(n||t)(e.rXU(o.K_),e.rXU(g.nX),e.rXU(h.m),e.rXU(g.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-ingredient"]],decls:14,vars:2,consts:[["slot","start"],["defaultHref","/sodium-menu"],["slot","end",3,"click"],["name","cart","slot","icon-only","color","danger"],["size","6","size-sm","6","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["size","6","size-sm","6","size-md","4","size-lg","3"],[1,"ingredient-image",3,"src","alt"],[1,"ion-text-wrap"],["lines","none"],["name","leaf","slot","start"],["name","flame","slot","start","color","danger"],["expand","block",1,"ion-margin-top",3,"click"],["name","cart","slot","start"]],template:function(n,a){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s(),e.j41(6,"ion-buttons",2),e.bIt("click",function(){return a.goCartPage()}),e.EFF(7," \u0e41\u0e2a\u0e14\u0e07\u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e25\u0e37\u0e2d\u0e01 "),e.j41(8,"ion-button"),e.nrm(9,"ion-icon",3),e.k0s()()()(),e.j41(10,"ion-content")(11,"ion-grid")(12,"ion-row"),e.DNE(13,E,19,7,"ion-col",4),e.k0s()()()),2&n&&(e.R7$(5),e.JRh("raw"===a.type?"\u0e1c\u0e31\u0e01":"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b"),e.R7$(8),e.Y8G("ngForOf",a.categories))},dependencies:[o.bv,o.Jm,o.QW,o.b_,o.I9,o.ME,o.tN,o.hU,o.W9,o.lO,o.eU,o.iq,o.uz,o.he,o.nf,o.ln,o.BC,o.ai,o.el,d.MD,d.Sq],styles:["ion-card[_ngcontent-%COMP%]{margin:8px;box-shadow:0 2px 4px #0000001a}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:120px;object-fit:cover}ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:14px;line-height:1.4;min-height:40px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:8px}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 0;--inner-padding-end: 0;--min-height: 32px}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px;margin:8px 0}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:8px}"]}),c})()}];let b=(()=>{var t;class c{}return(t=c).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[g.iI.forChild(y),g.iI]}),c})(),_=(()=>{var t;class c{}return(t=c).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.MD,m.YN,o.bv,b]}),c})()}}]);