(function(e){function t(t){for(var n,o,i=t[0],c=t[1],d=t[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Assignment-5/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("19b3"),s=a.n(n);s.a},"039a":function(e,t,a){"use strict";var n=a("d563"),s=a.n(n);s.a},"19b3":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Snackbar"),a("v-content",[a("transition",{attrs:{name:"component-fade",mode:"out-in",appear:""}},[a("router-view")],1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("Vuetify")]),a("span",{staticClass:"font-weight-light"},[e._v("MATERIAL DESIGN")])]),a("v-spacer"),a("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!0===e.isLoggedIn,expression:"isLoggedIn === true"}]},n),[e._v(" Sign Out ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v(" Notice! ")]),a("v-card-text",[e._v(" You are about to be logged out. ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.signOutHandler(),e.dialog=!1}}},[e._v(" Continue ")]),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)},r=[],o=a("59ca"),i=a.n(o),c=(a("66ce"),a("ea7b"),{apiKey:"AIzaSyCHmJRnJlEaf_dTWN2ltiDFrDPyGoK_Hrs",authDomain:"firstfirebase-4097f.firebaseapp.com",databaseURL:"https://firstfirebase-4097f.firebaseio.com",projectId:"firstfirebase-4097f",storageBucket:"firstfirebase-4097f.appspot.com",messagingSenderId:"89756648760",appId:"1:89756648760:web:17417a3cd9df87ab92adcd",measurementId:"G-SDMCQLT6TQ"});i.a.initializeApp(c);var d=i.a.database(),l=i.a.auth(),u={name:"App",components:{},data:function(){return{isLoggedIn:!1,dialog:!1}},methods:{signOutHandler:function(){var e=this;l.signOut().then((function(){e.$router.back()}))}},mounted:function(){var e=this;l.onAuthStateChanged((function(t){e.isLoggedIn=null!=t}))}},f=u,b=(a("034f"),a("2877")),p=a("6544"),m=a.n(p),v=a("7496"),j=a("40dc"),h=a("8336"),g=a("b0af"),y=a("99d9"),k=a("a75b"),x=a("169a"),_=a("ce7e"),w=a("2fa4"),E=a("2a7f"),O=Object(b["a"])(f,s,r,!1,null,null,null),S=O.exports;m()(O,{VApp:v["a"],VAppBar:j["a"],VBtn:h["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VContent:k["a"],VDialog:x["a"],VDivider:_["a"],VSpacer:w["a"],VToolbarTitle:E["a"]});var A=a("f309");n["a"].use(A["a"]);var D=new A["a"]({icons:{iconfont:"mdi"}}),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h2",[e._v("Austin DeBoer")]),a("v-row",{attrs:{align:"start",justify:"space-around"}},[a("v-col",[a("div",{attrs:{id:"input"}},[a("v-row",{attrs:{justify:"center"}},[a("v-date-picker",{model:{value:e.expenseDate,callback:function(t){e.expenseDate=t},expression:"expenseDate"}})],1),a("v-text-field",{attrs:{label:"Description",type:"text"},model:{value:e.expenseDesc,callback:function(t){e.expenseDesc=t},expression:"expenseDesc"}}),a("v-text-field",{attrs:{label:"Amount",type:"text"},model:{value:e.expenseAmt,callback:function(t){e.expenseAmt=t},expression:"expenseAmt"}}),a("v-select",{attrs:{items:e.categories,label:"Category"},model:{value:e.expenseCat,callback:function(t){e.expenseCat=t},expression:"expenseCat"}}),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"Secondary"},on:{click:e.yourButtonHandler}},n),[e._v("Add")])]}}])},[a("span",[e._v("This button adds entered feilds into the database")])])],1)]),a("v-col",[a("v-app",[[a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",{attrs:{id:"head"}},[a("th",[e._v("Date")]),a("th",[e._v("Description")]),a("th",[e._v("Amount")]),a("th",[e._v("Category")]),a("td",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"primary",id:"rem",disabled:0==e.userSelections.length},on:{click:e.removeHandler}},n),[e._v("Remove Items")])]}}])},[a("span",[e._v("This button removes selected rows")])])],1)])]),a("tbody",[e._l(e.myExpense,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.date))]),a("td",[e._v(e._s(t.description))]),a("td",[e._v(e._s(t.category))]),a("td",{staticClass:"rightAlign"},[e._v("$"+e._s(t.amount))]),a("td",[a("input",{attrs:{type:"checkbox",id:t.mykey},on:{change:e.selectionHandler}})])])})),a("tr",[a("td",{staticClass:"rightAlign",attrs:{colspan:"3"}},[a("b",[e._v("Total: ")])]),a("td",{staticClass:"rightAlign"},[e._v("$"+e._s(e.totalExpense.toFixed(2)))])])],2)]},proxy:!0}])})]],2)],1),a("v-col",[a("div",{attrs:{id:"chart"}},[a("pie-chart",{attrs:{data:[["Entertainment",e.amtEntertainment],["Gas",e.amtGas],["Food",e.amtFood],["Bill",e.amtBill],["Work",e.amtWork]]}})],1)])],1)],1)},V=[],P=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("acd8"),a("159b"),a("2fa7"));function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(P["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={data:function(){return{myExpense:[],userSelections:[],categories:["Entertainment","Gas","Food","Bill","Work"],totalExpense:0,expenseDate:"",expenseDesc:"",expenseAmt:0,expenseCat:"",amtEntertainment:0,amtGas:0,amtFood:0,amtBill:0,amtWork:0}},methods:{yourButtonHandler:function(){d.ref("budget").push().set({date:this.expenseDate,description:this.expenseDesc,amount:this.expenseAmt,category:this.expenseCat})},fbAddHandler:function(e){var t=e.val();this.myExpense.push(T({},t,{mykey:e.key})),this.totalExpense+=parseFloat(t.amount),"Entertainment"==t.category?this.amtEntertainment+=parseFloat(t.amount):"Gas"==t.category?this.amtGas+=parseFloat(t.amount):"Food"==t.category?this.amtFood+=parseFloat(t.amount):"Bill"==t.category?this.amtBill+=parseFloat(t.amount):"Work"==t.category&&(this.amtWork+=parseFloat(t.amount))},selectionHandler:function(e){var t=e.target.id;e.target.checked?this.userSelections.push(t):this.userSelections=this.userSelections.filter((function(e){return e!=t}))},removeHandler:function(){var e=this;this.userSelections.forEach((function(t){e.myExpense.forEach((function(a){a.mykey==t&&(e.totalExpense-=a.amount),a.mykey==t&&("Entertainment"==a.category?e.amtEntertainment-=a.amount:"Gas"==a.category?e.amtGas-=a.amount:"Food"==a.category?e.amtFood-=a.amount:"Bill"==a.category?e.amtBill-=a.amount:"Work"==a.category&&(e.amtWork-=a.amount))})),d.ref("budget").child(t).remove()})),this.userSelections=[]},fbRemoveListener:function(e){this.myExpense=this.myExpense.filter((function(t){return t.mykey!=e.key}))}},mounted:function(){d.ref("budget").on("child_added",this.fbAddHandler),d.ref("budget").on("child_removed",this.fbRemoveListener)},beforeDestroy:function(){d.ref("budget").off("child_added",this.fbAddHandler),d.ref("budget").off("child_removed",this.fbRemoveListener)}},B=I,F=a("62ad"),H=a("a523"),L=a("2e4b"),G=a("0fd9"),W=a("b974"),U=a("1f4f"),R=a("8654"),$=a("3a2f"),M=Object(b["a"])(B,C,V,!1,null,null,null),N=M.exports;m()(M,{VApp:v["a"],VBtn:h["a"],VCol:F["a"],VContainer:H["a"],VDatePicker:L["a"],VRow:G["a"],VSelect:W["a"],VSimpleTable:U["a"],VTextField:R["a"],VTooltip:$["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"youridfortheformgoeshere"}},[a("v-text-field",{attrs:{label:"Username/Email"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),a("v-text-field",{attrs:{type:"password",label:"Password"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}}),a("v-container",{directives:[{name:"show",rawName:"v-show",value:!1===e.isLoggedIn,expression:"isLoggedIn === false"}]},[a("v-row",{attrs:{justify:"end"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"secondary"},on:{click:e.signUpButtonHandler}},n),[e._v("SignUp")])]}}])},[a("span",[e._v("This button signs you up for an access account using the entered information above")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"secondary"},on:{click:e.signInButtonHandler}},n),[e._v("SignIn")])]}}])},[a("span",[e._v("This button signs you into your account using the entered information above")])])],1)],1),a("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v(" Close ")])],1)],1)},q=[],K={data:function(){return{userEmail:"",userPassword:"",isLoggedIn:!1,snackbar:!1,text:""}},methods:{signUpButtonHandler:function(){var e=this;l.createUserWithEmailAndPassword(this.userEmail,this.userPassword).then((function(t){e.text="User created with UID "+t.user.uid,e.snackbar=!0})).catch((function(t){e.text=t,e.snackbar=!0}))},signInButtonHandler:function(){var e=this;l.signInWithEmailAndPassword(this.userEmail,this.userPassword).then((function(t){e.text="You logged in as "+t.user.email,e.snackbar=!0,e.$router.push({path:"/budget"})})).catch((function(t){e.text=t,e.snackbar=!0}))}},mounted:function(){var e=this;l.onAuthStateChanged((function(t){e.isLoggedIn=null!=t}))}},Q=K,Y=(a("039a"),a("2db4")),X=Object(b["a"])(Q,J,q,!1,null,null,null),Z=X.exports;m()(X,{VBtn:h["a"],VContainer:H["a"],VRow:G["a"],VSnackbar:Y["a"],VTextField:R["a"],VTooltip:$["a"]});var ee=a("8c4f");n["a"].use(ee["a"]);var te=[{path:"/",component:Z},{path:"/budget",component:N}],ae=new ee["a"]({routes:te,mode:"history",base:"/Assignment-5/"}),ne=a("d842"),se=a("30ef"),re=a.n(se);n["a"].config.productionTip=!1,n["a"].use(ne["a"].use(re.a)),new n["a"]({vuetify:D,render:function(e){return e(S)},router:ae}).$mount("#app")},d563:function(e,t,a){}});
//# sourceMappingURL=app.491943ff.js.map