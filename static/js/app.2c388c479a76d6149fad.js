webpackJsonp([1],{"4qIi":function(t,s){},Agpc:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e={props:["score","size"],computed:{calcRating:function(){for(var t=Math.floor(this.score),s=this.score-t>=.5,a=[],i=0;i<(t>5?5:t);i++)a.push("on");for(s&&a.push("half");a.length<5;)a.push("off");return a}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:"star-"+this.size},this._l(this.calcRating,function(t,a){return s("span",{key:a,staticClass:"star-item",class:t})}))},staticRenderFns:[]};var c=a("VU/8")(e,n,!1,function(t){a("ydIz")},null,null).exports,o={icons:["decrease","discount","special","invoice","guarantee"]},l={props:["seller"],data:function(){return{icon:o.icons,show:!1}},components:{"rating-star":c}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{},[a("div",{staticClass:"header"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.seller.avatar,alt:"",height:"64",width:"64"}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",{staticClass:"brand"}),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),a("div",{staticClass:"description"},[t._v("\n\t\t\t\t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"supports"},[a("div",{staticClass:"supports_desc"},[a("span",{staticClass:"icon decrease"}),t._v(" "),a("span",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.seller.supports[0].description)+"\n\t\t\t\t\t\t")])])]),t._v(" "),a("div",{staticClass:"support-count",on:{click:function(s){t.show=!t.show}}},[a("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),a("i",{staticClass:"icon-keyboard_arrow_right"})])])]),t._v(" "),a("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.show=!t.show}}},[a("span",{staticClass:"bulletin-title"}),t._v(" "),a("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),a("div",{staticClass:"background"},[a("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"detail"},[a("div",{staticClass:"detail-wrapper clearfix"},[a("div",{staticClass:"detail-main"},[a("h1",{staticClass:"name"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.seller.name)+"\n\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"star-wrapper"},[a("rating-star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),a("div",{staticClass:"title"},[a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return a("li",{key:s.type,staticClass:"support-item"},[a("span",{staticClass:"icon",class:t.icon[s.type]}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(s.description))])])})),t._v(" "),a("div",{staticClass:"title"},[a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"bulletin"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.seller.bulletin)+"\n\t\t\t\t\t\t")])])]),t._v(" "),a("div",{staticClass:"detail-close"},[a("i",{staticClass:"icon-close",on:{click:function(s){t.show=!t.show}}})])])])],1)])},staticRenderFns:[]};var v=a("VU/8")(l,r,!1,function(t){a("d3IL")},null,null).exports,d=a("aozt"),u=a.n(d),_={name:"App",mounted:function(){var t=this;u.a.get("/static/data.json").then(function(s){t.datas.seller=s.data.seller,t.datas.goods=s.data.goods,t.datas.ratings=s.data.ratings,t.flag=!0,t.$nextTick(function(){void 0!==t.$refs.abc.scroll&&t.$refs.abc.scroll()})})},data:function(){return{datas:{seller:{},goods:[],ratings:[]},flag:!1}},components:{"v-header":v}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[t.flag?a("v-header",{attrs:{seller:t.datas.seller}}):t._e(),t._v(" "),a("div",{staticClass:"tab"},[a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),t._v(" "),a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),a("keep-alive",[t.flag?a("router-view",{ref:"abc",attrs:{datas:t.datas}}):t._e()],1)],1)},staticRenderFns:[]};var p=a("VU/8")(_,f,!1,function(t){a("4qIi")},null,null).exports,h=a("/ocq"),C=a("Z83e"),m=a("Dd8w"),g=a.n(m),w=a("9rMa"),y={props:["food"],data:function(){return{}},methods:g()({},Object(w.b)(["vxAddCart","vxMinusCart"]),{addCart:function(t){console.log(t),void 0===this.food.count&&(i.a.set(this.food,"count",0),i.a.set(this.food,"active",!0)),console.log(this.food),this.food.count++,this.food.active&&(this.vxAddCart(this.food),this.food.active=!1)},minusCart:function(){this.food.count--,0===this.food.count&&this.vxMinusCart(this.food)}}),compouted:g()({},Object(w.c)(["vxfood"]))},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cartcontrol"},[a("transition",{attrs:{name:"fadeRotate"}},[a("div",{staticClass:"cart-decrease"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"icon-remove_circle_outline inner",on:{click:function(s){return s.stopPropagation(),t.minusCart(s)}}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),a("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),t.addCart(s)}}},[a("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]};var x=a("VU/8")(y,k,!1,function(t){a("O3th")},null,null).exports,P={props:["deliveryPrice","minPrice","food"],data:function(){return{show:!1}},methods:{clear:function(){return this.food.forEach(function(t){t.count=0}),this.show=!1,null},showShopCart:function(){var t=this;this.show=!this.show,this.$nextTick(function(){t.scrollPlugin?t.scrollPlugin.refresh():t.scrollPlugin=new C.a(t.$refs.listContent,{click:!0})})}},computed:{totalPrice:function(){var t=0;return this.food.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.food.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"&yen;"+this.minPrice:this.totalPrice<this.minPrice?"还差"+(this.minPrice-this.totalPrice):"去结算"}},filters:{unescapeHtml:function(t){var s=document.createElement("span");return s.innerHTML=t,0===s.childNodes.length?"":s.childNodes[0].nodeValue}},components:{"cart-control":x}},b={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shopCart"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-left"},[a("div",{staticClass:"logo-wrapper"},[a("div",{staticClass:"logo active",on:{click:t.showShopCart}},[a("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"badge"},[t._v(t._s(t.totalCount))])]),t._v(" "),a("div",{staticClass:"price",class:{active:t.totalPrice}},[t._v("¥"+t._s(t.totalPrice||0))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.totalPrice<100,expression:"totalPrice < 100"}],staticClass:"desc"},[t._v("另需配送费¥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),a("div",{staticClass:"content-right"},[a("div",{staticClass:"pay",class:{enough:t.totalPrice>=t.minPrice}},[t._v(t._s(t._f("unescapeHtml")(t.payDesc)))])])]),t._v(" "),a("transition",{attrs:{name:"transHeight"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0&&t.show,expression:"totalCount > 0 && show"}],staticClass:"shopcart-list"},[a("div",{staticClass:"list-header"},[a("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),a("span",{staticClass:"empty",on:{click:t.clear}},[t._v("清空")])]),t._v(" "),a("div",{ref:"listContent",staticClass:"list-content"},[a("ul",t._l(t.food,function(s){return a("li",{key:s.name,staticClass:"food"},[a("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"price"},[a("span",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.price)+"\n\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"cartcontrol-wrapper"},[a("cart-control",{attrs:{food:s}})],1)])}))])])])],1)},staticRenderFns:[]};var $={props:["foodDetails"],data:function(){return{show:!1,classify:[{name:"全部",count:0,commont:[],active:!0},{name:"推荐",count:0,commont:[],active:!1},{name:"吐槽",count:0,commont:[],active:!1}],commonts:[],flag:!0}},methods:{add:function(t){this.$refs.cartControl.addCart(t)},foodShow:function(){var t=this;this.show=!0,this.$nextTick(function(){t.commonts=t.foodDetails.ratings,t.foodDetails.ratings.forEach(function(s){t.classify[0].count++,t.classify[0].commont.push(s),s.rateType?(t.classify[2].count++,t.classify[2].commont.push(s)):(t.classify[1].count++,t.classify[1].commont.push(s))})}),this.scrollPlugin?this.scrollPlugin.refresh():this.$nextTick(function(){t.scrollPlugin=new C.a(t.$refs.detailWrapper,{click:!0})})},classifyClick:function(t){this.commonts=t.commont,this.classify.forEach(function(t){t.active=!1}),t.active=!0},refreshScrollPlugin:function(){var t=this;this.$nextTick(function(){void 0!==t.scrollPlugin&&t.scrollPlugin.refresh()})}},computed:{getCommonts:function(){var t=[];return this.refreshScrollPlugin(),this.flag?this.commonts.forEach(function(s){s.text.length>0&&t.push(s)}):t=this.commonts,t}},components:{"cart-control":x}},D={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"move"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"detailWrapper",staticClass:"detailWrapper"},[a("div",{staticClass:"foodDetail"},[a("div",{staticClass:"back",on:{click:function(s){t.show=!t.show}}},[a("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),a("img",{attrs:{src:t.foodDetails.image,height:"425",width:"100%",alt:""}}),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t._v(t._s(t.foodDetails.name))]),t._v(" "),a("div",{staticClass:"desc"},[a("span",{},[t._v("月售"+t._s(t.foodDetails.sellCount))]),t._v(" "),a("span",{},[t._v("好评率"+t._s(t.foodDetails.rating)+"%")])]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(t.foodDetails.price))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.foodDetails.count||void 0==t.foodDetails.count,expression:"foodDetails.count === 0 || foodDetails.count == undefined"}],staticClass:"shopCart",on:{click:function(s){t.add(s)}}},[a("div",{staticClass:"text"},[t._v("加入购物车")])]),t._v(" "),a("cart-control",{ref:"cartControl",attrs:{food:t.foodDetails}})],1),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"desc"},[a("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.foodDetails.info))])]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"evaluation"},[a("div",{staticClass:"title"},[t._v("商品评论")]),t._v(" "),a("div",{staticClass:"classify"},t._l(t.classify,function(s,i){return a("span",{key:s.name,staticClass:"item",class:{active:s.active,bad:2===i,badActive:2===i&&s.active},on:{click:function(a){t.classifyClick(s)}}},[t._v("\n\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t\t"),a("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),a("div",{staticClass:"switch"},[a("span",{staticClass:"icon-check_circle",class:{on:t.flag},on:{click:function(s){t.flag=!t.flag}}}),t._v(" "),a("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),a("div",{staticClass:"evel-list"},[a("ul",t._l(t.getCommonts,function(s){return a("li",{key:s.rateTime,staticClass:"evel"},[a("div",{staticClass:"userInfo"},[a("div",{staticClass:"time"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(s.rateTime)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"user"},[a("span",[t._v(t._s(s.username))]),t._v(" "),a("img",{attrs:{src:s.avatar,alt:"",width:"12"}})])]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(s.text))])])])}))])])])])])},staticRenderFns:[]};var E={props:["datas"],data:function(){return{icon:o.icons,foodDetails:{}}},mounted:function(){this.$nextTick(function(){})},methods:{scroll:function(){new C.a(this.$refs.foodsWrapper,{click:!0}),new C.a(this.$refs.menuWrapper,{clisk:!0})},showDetail:function(t){this.$refs.foodDetail.foodShow(),this.foodDetails=t}},computed:{food:function(){var t=[];return this.datas.goods.forEach(function(s){s.foods.forEach(function(s){void 0!==s.count&&s.count>0&&t.push(s)})}),t}},components:{"shop-cart":a("VU/8")(P,b,!1,function(t){a("Agpc")},null,null).exports,"cart-control":x,"food-detail":a("VU/8")($,D,!1,function(t){a("VYQd")},null,null).exports}},T={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"goods"},[a("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[a("ul",t._l(t.datas.goods,function(s){return a("li",{key:s.name,staticClass:"menu-item"},[a("span",{staticClass:"text"},[a("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"iconMap",class:t.icon[s.type]}),t._v("\n\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t")])])}))]),t._v(" "),a("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[a("ul",t._l(t.datas.goods,function(s){return a("li",{key:s.name,staticClass:"food-list food-list-hook"},[a("h1",{staticClass:"title"},[t._v("\n\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t")]),t._v(" "),a("ul",t._l(s.foods,function(s){return a("li",{key:s.name,staticClass:"food-item",on:{click:function(a){t.showDetail(s)}}},[a("div",{staticClass:"icon"},[a("img",{attrs:{width:"57",height:"57",src:s.icon,alt:""}})]),t._v(" "),a("div",{staticClass:"content"},[a("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),a("div",{staticClass:"sell-info"},[a("span",{staticClass:"sellCount"},[t._v("\n\t\t\t\t\t\t\t\t\t月售"+t._s(s.sellCount)+"份\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")]),t._v(" "),a("div",{staticClass:"price"},[a("span",{staticClass:"newPrice"},[t._v("\n\t\t\t\t\t\t\t\t\t\t¥"+t._s(s.price)+"\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"cartcontrol-wrapper"},[a("cart-control",{attrs:{food:s}})],1)])])])}))])}))]),t._v(" "),a("shop-cart",{attrs:{food:t.food,deliveryPrice:t.datas.seller.deliveryPrice,minPrice:t.datas.seller.minPrice}}),t._v(" "),a("food-detail",{ref:"foodDetail",attrs:{foodDetails:t.foodDetails}})],1)},staticRenderFns:[]};var W=a("VU/8")(E,T,!1,function(t){a("oyyy")},null,null).exports,N={props:["datas"],data:function(){return{ratings:[],classify:[{name:"全部",active:!0,count:0,comment:[]},{name:"推荐",active:!1,count:0,comment:[]},{name:"吐槽",active:!1,count:0,comment:[]}],show:!0,comments:[]}},mounted:function(){var t=this;u.a.get("/static/data.json").then(function(s){t.ratings=s.data.ratings,t.comments=s.data.ratings,t.ratings.forEach(function(s){t.classify[0].count++,t.classify[0].comment.push(s),s.rateType?(t.classify[2].count++,t.classify[2].comment.push(s)):(t.classify[1].count++,t.classify[1].comment.push(s))}),t.$nextTick(function(){t.scrollPlugin=new C.a(t.$refs.ratingsWrapper,{click:!0})})})},activated:function(){console.log("activated")},methods:{evel:function(t){this.classify.forEach(function(t){t.active=!1}),this.comments=t.comment,t.active=!0}},computed:{getComment:function(){var t=[];return this.show?this.comments.forEach(function(s){s.text.length>0&&t.push(s)}):t=this.comments,t}},components:{"rating-star":c}},R={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[a("div",{staticClass:"ratings-content"},[a("div",{staticClass:"info"},[a("div",{staticClass:"mark"},[a("div",{staticClass:"num"},[t._v("\n\t\t\t\t\t"+t._s(t.datas.seller.score)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"text"},[t._v("\n\t\t\t\t\t综合评分\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"contrast"},[t._v("\n\t\t\t\t\t高于周边商家"+t._s(t.datas.seller.rankRate)+"%\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"stars"},[a("div",{staticClass:"serviceScore"},[a("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),a("rating-star",{attrs:{size:36,score:t.datas.seller.serviceScore}}),t._v(" "),a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.serviceScore))])],1),t._v(" "),a("div",{staticClass:"serviceScore"},[a("span",{staticClass:"text"},[t._v("商品评分")]),t._v(" "),a("rating-star",{attrs:{size:36,score:t.datas.seller.serviceScore}}),t._v(" "),a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.serviceScore))])],1)])]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"evaluation"},[a("div",{staticClass:"classify"},t._l(t.classify,function(s,i){return a("span",{key:i,staticClass:"item",class:{active:s.active,bad:2==i,badActive:2==i&&s.active},on:{click:function(a){t.evel(s)}}},[t._v("\n\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t"),a("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),a("div",{staticClass:"switch"},[a("span",{staticClass:"icon-check_circle",class:{on:t.show},on:{click:function(s){t.show=!t.show}}}),t._v(" "),a("span",{staticClass:"span text"},[t._v("只看有内容评价")])]),t._v(" "),a("div",{staticClass:"evel-list"},[a("ul",t._l(t.getComment,function(s,i){return a("li",{key:i,staticClass:"evel"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:s.avatar,alt:"",width:"28",height:"28"}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"user"},[a("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),a("span",{staticClass:"rateTime"},[t._v(t._s(s.rateTime))])]),t._v(" "),a("div",{staticClass:"star-wrapper"},[a("rating-star",{attrs:{size:24,score:s.score}}),t._v(" "),a("span",{staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+" 分钟送达")])],1),t._v(" "),a("div",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.text)+"\n\t\t\t\t\t\t\t")]),t._v(" "),s.recommend.length?a("div",{staticClass:"recommend"},[a("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return a("span",{key:s,staticClass:"dish"},[t._v(t._s(s))])})],2):t._e()])])}))])])])])},staticRenderFns:[]};var S=a("VU/8")(N,R,!1,function(t){a("f5Uu")},null,null).exports,V={props:["datas"],data:function(){return{show:!1,icon:o.icons}},mounted:function(){new C.a(this.$refs.sellerWrapper,{click:!0});var t=this.$refs.pics.getElementsByTagName("img"),s=t.length,a=t[0],i=parseInt(window.getComputedStyle(a,null).getPropertyValue("margin-right"),10),e=parseInt(a.getBoundingClientRect().width*s+i*s,10);console.log(e),this.$refs.pics.style.width=e+"px",this.scrollPlugin||(this.scrollPluginPlugin=new C.a(this.$refs.picsWrapper,{startX:0,click:!0,scrollX:!0,scrollY:!1,eventPassthrough:"vertical"}))},components:{"rating-star":c}},A={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[a("div",{staticClass:"seller-content"},[a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("div",{staticClass:"text"},[t._v("\n\t\t\t\t\t"+t._s(t.datas.seller.name)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"star-wrapper"},[a("rating-star",{attrs:{size:36,score:t.datas.seller.score}}),t._v(" "),a("div",{staticClass:"rate-count"},[t._v("("+t._s(t.datas.seller.ratingCount)+")")]),t._v(" "),a("div",{staticClass:"sell-count"},[t._v("月售"+t._s(t.datas.seller.sellCount)+"单")])],1),t._v(" "),a("div",{staticClass:"collect",on:{click:function(s){t.show=!t.show}}},[a("span",{staticClass:"icon-favorite",class:{active:t.show}}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.show?"已收藏":"收藏"))])])]),t._v(" "),a("div",{staticClass:"remark"},[a("div",{staticClass:"block"},[a("h2",[t._v("起送价")]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.minPrice))])])]),t._v(" "),a("div",{staticClass:"block"},[a("h2",[t._v("商家配送")]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.deliveryPrice))])])]),t._v(" "),a("div",{staticClass:"block"},[a("h2",[t._v("平均配送时间")]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.deliveryPrice))])])])]),t._v(" "),a("div",{staticClass:"activities"},[a("div",{staticClass:"bulletin"},[a("h1",[t._v("公告与活动")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.datas.seller.bulletin))])])]),t._v(" "),a("div",{staticClass:"supports"},[a("ul",t._l(t.datas.seller.supports,function(s){return a("li",{key:s.description,staticClass:"item"},[a("span",{staticClass:"iconMap",class:t.icon[s.type]}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(s.description))])])}))]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"seller-imgs"},[a("h1",[t._v("商家实景")]),t._v(" "),a("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[a("div",{ref:"pics",staticClass:"picList"},t._l(t.datas.seller.pics,function(t){return a("img",{key:t,attrs:{src:t,alt:"",width:"120",height:"90"}})}))])]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"seller-info"},[a("h1",[t._v("商家信息")]),t._v(" "),a("ul",{staticClass:"info-list"},t._l(t.datas.seller.infos,function(s){return a("li",{key:s,staticClass:"info"},[t._v("\n\t\t\t\t\t\t"+t._s(s)+"\n\t\t\t\t\t")])}))])])])])},staticRenderFns:[]};var U=a("VU/8")(V,A,!1,function(t){a("esdA")},null,null).exports;i.a.use(h.a);var z=new h.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:W},{path:"/ratings",component:S},{path:"/seller",component:U}]}),F={vxAddCart:function(t,s){t.vxfood.push(s)},vxMinusCart:function(t,s){console.log(arguments),t.vxfood.forEach(function(a,i){a.name===s.name&&t.vxfood.splice(i,1)})}};i.a.use(w.a);var I=new w.a.Store({state:{vxfood:[]},mutations:F});i.a.config.productionTip=!1,new i.a({el:"#app",router:z,store:I,components:{App:p},template:"<App/>"})},O3th:function(t,s){},VYQd:function(t,s){},d3IL:function(t,s){},esdA:function(t,s){},f5Uu:function(t,s){},oyyy:function(t,s){},ydIz:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.2c388c479a76d6149fad.js.map