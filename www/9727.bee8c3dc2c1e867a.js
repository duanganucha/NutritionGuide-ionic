"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9727],{9727:(v,s,g)=>{g.r(s),g.d(s,{IngredientPageModule:()=>w});var c=g(177),u=g(4341),n=g(4742),d=g(9522),h=g(467),e=g(4438),y=g(7282);function l(i,a){if(1&i&&e.nrm(0,"img",15),2&i){const o=e.XpG().$implicit;e.Y8G("src","assets/ingredients/"+o.name+".png",e.B4B)("alt",o.name)}}function _(i,a){if(1&i&&e.nrm(0,"img",16),2&i){const o=e.XpG().$implicit;e.Y8G("src","assets/ingredients/"+o.name+".png",e.B4B)("alt",o.name)}}function b(i,a){if(1&i&&(e.j41(0,"ion-label"),e.EFF(1),e.k0s()),2&i){const o=e.XpG().$implicit;e.R7$(),e.JRh(o.detail)}}function j(i,a){if(1&i&&(e.j41(0,"ion-label"),e.EFF(1),e.k0s()),2&i){const o=e.XpG().$implicit;e.R7$(),e.SpI("\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01 ",o.weight,"g")}}function x(i,a){if(1&i){const o=e.RV6();e.j41(0,"ion-col",5)(1,"ion-card"),e.DNE(2,l,1,2,"img",6)(3,_,1,2,"img",7),e.j41(4,"ion-card-title",8),e.EFF(5),e.k0s(),e.j41(6,"ion-list",9)(7,"ion-item"),e.nrm(8,"ion-icon",10),e.DNE(9,b,2,1,"ion-label",11)(10,j,2,1,"ion-label",11),e.k0s(),e.j41(11,"ion-item"),e.nrm(12,"ion-icon",12),e.j41(13,"ion-label"),e.EFF(14),e.k0s()()(),e.j41(15,"ion-button",13),e.bIt("click",function(){const p=e.eBV(o).$implicit,m=e.XpG();return e.Njj(m.addToCart(p))}),e.nrm(16,"ion-icon",14),e.EFF(17," \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a "),e.k0s()()()}if(2&i){const o=a.$implicit,t=e.XpG();e.R7$(2),e.Y8G("ngIf","cooked"==t.type),e.R7$(),e.Y8G("ngIf","cooked"!=t.type),e.R7$(2),e.JRh(o.name),e.R7$(3),e.xc7("color",t.getIconColor(o.iconType)),e.R7$(),e.Y8G("ngIf","cooked"==t.type),e.R7$(),e.Y8G("ngIf","cooked"!=t.type),e.R7$(4),e.SpI("\u0e1b\u0e23\u0e34\u0e21\u0e32\u0e13\u0e42\u0e0b\u0e40\u0e14\u0e35\u0e22\u0e21 ",o.sodium," mg")}}const T=[{path:"",component:(()=>{var i;class a{ngOnInit(){const t=this.route.snapshot.paramMap.get("type");if(t){this.type=t,console.log(this.type);var p=this.getType(this.type);this.categories=this.categories_all.filter(m=>m.category==p)}}getIconColor(t){switch(t){case"vegetable":return"#4CAF50";case"processed":return"#FF9800";default:return"#9E9E9E"}}getType(t){return"raw"==t?"\u0e1c\u0e31\u0e01":"processed"==t?"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b":"cooked"==t?"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07":"animal"==t?"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2a\u0e31\u0e15\u0e27\u0e4c":"\u0e44\u0e21\u0e48\u0e1e\u0e1a"}constructor(t,p,m,r){this.toastController=t,this.route=p,this.cartService=m,this.router=r,this.type="",this.categories=[],this.categories_all=[{id:1,category:"\u0e1c\u0e31\u0e01",name:"\u0e41\u0e15\u0e07\u0e01\u0e27\u0e32",weight:100,sodium:5,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/cucumber-1238493_960_720.jpg",iconType:"vegetable"},{id:2,category:"\u0e1c\u0e31\u0e01",name:"\u0e21\u0e30\u0e40\u0e02\u0e37\u0e2d\u0e40\u0e17\u0e28",weight:100,sodium:10,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238255_960_720.jpg",iconType:"vegetable"},{id:3,category:"\u0e1c\u0e31\u0e01",name:"\u0e16\u0e31\u0e48\u0e27\u0e07\u0e2d\u0e01",weight:60,sodium:11,unit:"mg",image:"https://cdn.pixabay.com/photo/2017/01/30/13/50/sprouts-2024433_960_720.jpg",iconType:"vegetable"},{id:4,category:"\u0e1c\u0e31\u0e01",name:"\u0e16\u0e31\u0e48\u0e27\u0e1d\u0e31\u0e01\u0e22\u0e32\u0e27",weight:60,sodium:19,unit:"mg",image:"https://cdn.pixabay.com/photo/2018/07/15/10/27/long-beans-3532510_960_720.jpg",iconType:"vegetable"},{id:5,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e30\u0e2b\u0e25\u0e48\u0e33\u0e1b\u0e25\u0e35",weight:60,sodium:24,unit:"mg",image:"https://cdn.pixabay.com/photo/2014/12/15/13/40/cabbage-569067_960_720.jpg",iconType:"vegetable"},{id:6,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e01\u0e32\u0e14\u0e02\u0e32\u0e27",weight:60,sodium:46,unit:"mg",image:"https://cdn.pixabay.com/photo/2018/05/29/21/22/chinese-cabbage-3449606_960_720.jpg",iconType:"vegetable"},{id:7,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e04\u0e30\u0e19\u0e49\u0e32",weight:50,sodium:86,unit:"mg",image:"https://cdn.pixabay.com/photo/2018/05/29/21/22/kale-3449607_960_720.jpg",iconType:"vegetable"},{id:8,category:"\u0e1c\u0e31\u0e01",name:"\u0e40\u0e2b\u0e47\u0e14\u0e1f\u0e32\u0e07",weight:60,sodium:21,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/mushrooms-1238254_960_720.jpg",iconType:"vegetable"},{id:9,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e27\u0e32\u0e07\u0e15\u0e38\u0e49\u0e07",weight:50,sodium:32,unit:"mg",image:"https://cdn.pixabay.com/photo/2018/05/29/21/22/pak-choi-3449608_960_720.jpg",iconType:"vegetable"},{id:10,category:"\u0e1c\u0e31\u0e01",name:"\u0e1f\u0e31\u0e01\u0e17\u0e2d\u0e07",weight:200,sodium:2,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:11,category:"\u0e1c\u0e31\u0e01",name:"\u0e41\u0e04\u0e23\u0e2d\u0e17",weight:100,sodium:50,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:12,category:"\u0e1c\u0e31\u0e01",name:"\u0e2a\u0e30\u0e40\u0e14\u0e32",weight:100,sodium:10,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:13,category:"\u0e04\u0e31\u0e19\u0e08\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e1c\u0e31\u0e01\u0e01\u0e49\u0e32\u0e19\u0e08\u0e2d\u0e07",name:"\u0e41\u0e04\u0e23\u0e2d\u0e17",weight:100,sodium:25,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:14,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e1e\u0e25\u0e39",weight:100,sodium:6,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:15,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e2b\u0e27\u0e32\u0e19",weight:100,sodium:10,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:16,category:"\u0e1c\u0e31\u0e01",name:"\u0e21\u0e30\u0e25\u0e30\u0e01\u0e2d",weight:100,sodium:3,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:17,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e0a\u0e35",weight:100,sodium:46,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:18,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e2a\u0e25\u0e31\u0e14",weight:100,sodium:17,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:19,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e30\u0e40\u0e1e\u0e23\u0e32",weight:100,sodium:146,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:20,category:"\u0e1c\u0e31\u0e01",name:"\u0e42\u0e2b\u0e23\u0e30\u0e1e\u0e32",weight:100,sodium:4,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:21,category:"\u0e1c\u0e31\u0e01",name:"\u0e43\u0e1a\u0e41\u0e21\u0e07\u0e25\u0e31\u0e01",weight:100,sodium:9,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:22,category:"\u0e1c\u0e31\u0e01",name:"\u0e15\u0e49\u0e19\u0e2b\u0e2d\u0e21",weight:100,sodium:16,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:23,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e1a\u0e38\u0e49\u0e07",weight:100,sodium:118,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:24,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e41\u0e02\u0e22\u0e07",weight:100,sodium:7,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:25,category:"\u0e1c\u0e31\u0e01",name:"\u0e1b\u0e25\u0e35\u0e01\u0e25\u0e49\u0e27\u0e22",weight:100,sodium:326,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:26,category:"\u0e1c\u0e31\u0e01",name:"\u0e43\u0e1a\u0e0a\u0e30\u0e1e\u0e25\u0e39",weight:100,sodium:50,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:27,category:"\u0e1c\u0e31\u0e01",name:"\u0e15\u0e33\u0e25\u0e36\u0e07",weight:100,sodium:3,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:28,category:"\u0e1c\u0e31\u0e01",name:"\u0e02\u0e34\u0e07",weight:100,sodium:13,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:29,category:"\u0e1c\u0e31\u0e01",name:"\u0e43\u0e1a\u0e22\u0e48\u0e32\u0e19\u0e32\u0e07",weight:100,sodium:5,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:30,category:"\u0e1c\u0e31\u0e01",name:"\u0e15\u0e30\u0e44\u0e04\u0e23\u0e49",weight:100,sodium:5,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:31,category:"\u0e1c\u0e31\u0e01",name:"\u0e0a\u0e30\u0e2d\u0e21",weight:100,sodium:42,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:32,category:"\u0e1c\u0e31\u0e01",name:"\u0e1c\u0e31\u0e01\u0e15\u0e34\u0e49\u0e27",weight:100,sodium:4,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:33,category:"\u0e1c\u0e31\u0e01",name:"\u0e15\u0e30\u0e44\u0e04\u0e23\u0e49",weight:100,sodium:6,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:34,category:"\u0e1c\u0e31\u0e01",name:"\u0e43\u0e1a\u0e21\u0e30\u0e01\u0e23\u0e39\u0e14",weight:100,sodium:5,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:35,category:"\u0e1c\u0e31\u0e01",name:"\u0e1a\u0e27\u0e1a",weight:100,sodium:4,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:36,category:"\u0e1c\u0e31\u0e01",name:"\u0e1f\u0e31\u0e01",weight:100,sodium:4,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:37,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e30\u0e2b\u0e25\u0e48\u0e33\u0e14\u0e2d\u0e01",weight:100,sodium:20,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:38,category:"\u0e1c\u0e31\u0e01",name:"\u0e1e\u0e23\u0e34\u0e01\u0e2b\u0e22\u0e27\u0e01",weight:100,sodium:5,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:39,category:"\u0e1c\u0e31\u0e01",name:"\u0e2b\u0e2d\u0e21\u0e2b\u0e31\u0e27\u0e43\u0e2b\u0e0d\u0e48",weight:100,sodium:6,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:40,category:"\u0e1c\u0e31\u0e01",name:"\u0e2b\u0e2d\u0e21\u0e41\u0e14\u0e07",weight:100,sodium:7,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:41,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e23\u0e30\u0e40\u0e17\u0e35\u0e22\u0e21",weight:100,sodium:17,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:42,category:"\u0e1c\u0e31\u0e01",name:"\u0e21\u0e30\u0e23\u0e30",weight:100,sodium:8,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:43,category:"\u0e1c\u0e31\u0e01",name:"\u0e2b\u0e19\u0e48\u0e2d\u0e44\u0e21\u0e49",weight:100,sodium:3,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:44,category:"\u0e1c\u0e31\u0e01",name:"\u0e2a\u0e30\u0e23\u0e30\u0e41\u0e2b\u0e19\u0e48",weight:100,sodium:2,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:45,category:"\u0e1c\u0e31\u0e01",name:"\u0e02\u0e48\u0e32",weight:100,sodium:50,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:46,category:"\u0e1c\u0e31\u0e01",name:"\u0e01\u0e30\u0e2b\u0e25\u0e48\u0e33\u0e1b\u0e25\u0e35",weight:100,sodium:20,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:47,category:"\u0e1c\u0e31\u0e01",name:"\u0e40\u0e2b\u0e47\u0e14\u0e19\u0e32\u0e07\u0e1f\u0e49\u0e32",weight:100,sodium:20,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:48,category:"\u0e1c\u0e31\u0e01",name:"\u0e40\u0e2b\u0e47\u0e14\u0e2b\u0e39\u0e2b\u0e19\u0e39",weight:100,sodium:13,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:49,category:"\u0e1c\u0e31\u0e01",name:"\u0e21\u0e30\u0e23\u0e38\u0e21",weight:100,sodium:2,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:50,category:"\u0e1c\u0e31\u0e01",name:"\u0e40\u0e1e\u0e01\u0e32",weight:100,sodium:5,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:51,category:"\u0e1c\u0e31\u0e01",name:"\u0e14\u0e2d\u0e01\u0e41\u0e04",weight:100,sodium:3,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:52,category:"\u0e1c\u0e31\u0e01",name:"\u0e14\u0e2d\u0e01\u0e02\u0e08\u0e23",weight:100,sodium:2,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:53,category:"\u0e1c\u0e31\u0e01",name:"\u0e2b\u0e19\u0e48\u0e2d\u0e44\u0e21\u0e49\u0e1d\u0e23\u0e31\u0e48\u0e07",weight:100,sodium:4,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg",iconType:"vegetable"},{id:61,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e41\u0e14\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27",weight:100,sodium:1514,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg",iconType:"processed"},{id:61,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e41\u0e2b\u0e19\u0e21",weight:100,sodium:990,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg",iconType:"processed"},{id:62,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e41\u0e14\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27",weight:100,sodium:1514,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg",iconType:"processed"},{id:63,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1b\u0e25\u0e32\u0e2a\u0e25\u0e34\u0e14\u0e41\u0e14\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27",weight:100,sodium:1694,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-catfish-1238247_960_720.jpg",iconType:"processed"},{id:64,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e21\u0e39\u0e41\u0e1c\u0e48\u0e19",weight:100,sodium:1592,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-sheet-1238246_960_720.jpg",iconType:"processed"},{id:65,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e01\u0e38\u0e19\u0e40\u0e0a\u0e35\u0e22\u0e07",weight:100,sodium:1303,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/chinese-sausage-1238245_960_720.jpg",iconType:"processed"},{id:66,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e44\u0e2a\u0e49\u0e01\u0e23\u0e2d\u0e01",weight:100,sodium:680,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/sausage-1238244_960_720.jpg",iconType:"processed"},{id:67,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1c\u0e31\u0e01\u0e01\u0e32\u0e14\u0e14\u0e2d\u0e07",weight:100,sodium:1498,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mustard-1238243_960_720.jpg",iconType:"processed"},{id:68,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e21\u0e30\u0e21\u0e48\u0e27\u0e07\u0e41\u0e0a\u0e48\u0e2d\u0e34\u0e48\u0e21",weight:100,sodium:504,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mango-1238242_960_720.jpg",iconType:"processed"},{id:69,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1b\u0e25\u0e32\u0e01\u0e23\u0e30\u0e1b\u0e4b\u0e2d\u0e07",weight:100,sodium:600,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/canned-fish-1238241_960_720.jpg",iconType:"processed"},{id:70,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e21\u0e32\u0e21\u0e48\u0e32",weight:100,sodium:1500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/instant-noodles-1238240_960_720.jpg",iconType:"processed"},{id:71,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e21\u0e39\u0e22\u0e2d",weight:100,sodium:800,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:72,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e19\u0e48\u0e2d\u0e44\u0e21\u0e49\u0e14\u0e2d\u0e07",weight:100,sodium:1200,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:73,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e40\u0e15\u0e49\u0e32\u0e2b\u0e39\u0e49\u0e44\u0e02\u0e48",weight:100,sodium:10,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:74,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1b\u0e25\u0e32\u0e2b\u0e21\u0e36\u0e01\u0e41\u0e2b\u0e49\u0e07",weight:100,sodium:2500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:75,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e41\u0e04\u0e1a\u0e2b\u0e21\u0e39",weight:100,sodium:1200,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:76,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e42\u0e1a\u0e42\u0e25\u0e19\u0e48\u0e32\u0e2b\u0e21\u0e39",weight:100,sodium:15,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:77,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e1b\u0e25\u0e32\u0e41\u0e14\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27",weight:100,sodium:0,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:78,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e41\u0e04\u0e1a\u0e2b\u0e21\u0e39",weight:100,sodium:1200,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:79,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e44\u0e02\u0e48\u0e41\u0e14\u0e07\u0e40\u0e04\u0e47\u0e21",weight:1,sodium:600,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:80,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e21\u0e36\u0e01\u0e41\u0e14\u0e14",weight:100,sodium:1500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:81,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e21\u0e39\u0e2a\u0e27\u0e23\u0e23\u0e04\u0e4c\u0e40\u0e21\u0e47\u0e14\u0e1c\u0e31\u0e01\u0e0a\u0e35",weight:100,sodium:1500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:82,category:"\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e1b\u0e23\u0e23\u0e39\u0e1b",name:"\u0e2b\u0e21\u0e39\u0e1d\u0e2d\u0e22",weight:100,sodium:1500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:89,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e40\u0e01\u0e25\u0e37\u0e2d",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:2e3,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:90,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e1b\u0e25\u0e32\u0e23\u0e49\u0e32",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:91,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e19\u0e49\u0e33\u0e1b\u0e25\u0e32",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:92,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e1c\u0e07\u0e1b\u0e23\u0e38\u0e07\u0e23\u0e2a",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:93,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e01\u0e30\u0e1b\u0e34",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:94,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e0b\u0e35\u0e2d\u0e34\u0e4a\u0e27\u0e02\u0e32\u0e27",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:453,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:95,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e0b\u0e38\u0e1b\u0e01\u0e49\u0e2d\u0e19",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:2e3,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:96,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e0b\u0e2d\u0e2a\u0e2b\u0e2d\u0e22\u0e19\u0e32\u0e07\u0e23\u0e21",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:165,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:97,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e40\u0e15\u0e49\u0e32\u0e40\u0e08\u0e35\u0e49\u0e22\u0e27",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:410,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:98,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e19\u0e49\u0e33\u0e08\u0e34\u0e49\u0e21\u0e44\u0e01\u0e48",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:227,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:99,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e0b\u0e2d\u0e2a\u0e1e\u0e23\u0e34\u0e01",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:220,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:100,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e19\u0e49\u0e33\u0e2a\u0e49\u0e21\u0e2a\u0e32\u0e22\u0e0a\u0e39",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:0,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:101,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:0,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:102,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e1e\u0e23\u0e34\u0e01\u0e44\u0e17\u0e22",detail:"1 \u0e0a\u0e49\u0e2d\u0e19\u0e0a\u0e32",weight:100,sodium:5,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:103,category:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e38\u0e07",name:"\u0e0b\u0e38\u0e1b\u0e01\u0e49\u0e2d\u0e19",detail:"(\u0e01\u0e49\u0e2d\u0e19)",weight:100,sodium:300,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"processed"},{id:121,category:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2a\u0e31\u0e15\u0e27\u0e4c",name:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e44\u0e01\u0e48",weight:1e3,sodium:500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"animal"},{id:122,category:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2a\u0e31\u0e15\u0e27\u0e4c",name:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e27",weight:1e3,sodium:400,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"animal"},{id:123,category:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2a\u0e31\u0e15\u0e27\u0e4c",name:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e21\u0e39",weight:1e3,sodium:500,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"animal"},{id:124,category:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2a\u0e31\u0e15\u0e27\u0e4c",name:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e1b\u0e25\u0e32",weight:1e3,sodium:300,unit:"mg",image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg",iconType:"animal"}]}addToCart(t){var p=this;return(0,h.A)(function*(){try{console.log(t),yield p.cartService.addItem(t),yield(yield p.toastController.create({message:`\u0e40\u0e1e\u0e34\u0e48\u0e21 ${t.name} \u0e25\u0e07\u0e15\u0e30\u0e01\u0e23\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27`,duration:2e3,position:"bottom",color:"success",buttons:[{text:"\u0e15\u0e01\u0e25\u0e07",role:"cancel"}]})).present()}catch{yield(yield p.toastController.create({message:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",duration:2e3,position:"bottom",color:"danger"})).present()}})()}goCartPage(){this.router.navigate(["cart"])}}return(i=a).\u0275fac=function(t){return new(t||i)(e.rXU(n.K_),e.rXU(d.nX),e.rXU(y.m),e.rXU(d.Ix))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-ingredient"]],decls:13,vars:2,consts:[["slot","start"],["defaultHref","/sodium-menu"],["slot","end",3,"click"],["name","cart","slot","icon-only","color","danger"],["size","6","size-sm","6","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["size","6","size-sm","6","size-md","4","size-lg","3"],["class","ingredient-image","style","object-fit: contain",3,"src","alt",4,"ngIf"],["class","ingredient-image",3,"src","alt",4,"ngIf"],[1,"ion-text-center"],["lines","none"],["name","leaf","slot","start"],[4,"ngIf"],["name","flame","slot","start","color","danger"],["expand","block",1,"ion-margin-top",3,"click"],["name","cart","slot","start"],[1,"ingredient-image",2,"object-fit","contain",3,"src","alt"],[1,"ingredient-image",3,"src","alt"]],template:function(t,p){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s(),e.j41(6,"ion-buttons",2),e.bIt("click",function(){return p.goCartPage()}),e.j41(7,"ion-button"),e.nrm(8,"ion-icon",3),e.k0s()()()(),e.j41(9,"ion-content")(10,"ion-grid")(11,"ion-row"),e.DNE(12,x,18,8,"ion-col",4),e.k0s()()()),2&t&&(e.R7$(5),e.JRh(p.getType(p.type)),e.R7$(7),e.Y8G("ngForOf",p.categories))},dependencies:[n.bv,n.Jm,n.QW,n.b_,n.tN,n.hU,n.W9,n.lO,n.eU,n.iq,n.uz,n.he,n.nf,n.ln,n.BC,n.ai,n.el,c.MD,c.Sq,c.bT],styles:["ion-card[_ngcontent-%COMP%]{margin:8px;box-shadow:0 2px 4px #0000001a}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:120px;object-fit:cover}ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:14px;line-height:1.4;min-height:40px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:8px}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 0;--inner-padding-end: 0;--min-height: 32px}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px;margin:8px 0}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:8px}"]}),a})()}];let k=(()=>{var i;class a{}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[d.iI.forChild(T),d.iI]}),a})(),w=(()=>{var i;class a{}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[c.MD,u.YN,n.bv,k]}),a})()}}]);