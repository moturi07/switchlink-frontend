(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"019f":function(t,e,a){"use strict";a("517e")},"02ce":function(t,e,a){},"2fe3":function(t,e,a){"use strict";a("02ce")},"517e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nav"),a("div",{staticClass:" container auth-wrapper"},[a("div",{staticClass:"auth-inner"},[a("router-view")],1)])],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"mb-1 navbar navbar-expand-lg navbar-dark default-color"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Atm Simulation")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent-3"}},[t.loggedIn?a("ul",{staticClass:"navbar-nav mr-auto"},[t._m(1),t._m(2)]):t._e(),t.loggedIn?t._e():a("ul",{staticClass:"navbar-nav mr-auto"},[t._m(3),t._m(4)]),t.loggedIn?a("ul",{staticClass:"navbar-nav ml-auto nav-flex-icons"},[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle waves-effect waves-light",attrs:{id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-user"},[t._v(" "+t._s(t.name))])]),a("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-unique",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item waves-effect waves-light",attrs:{href:"dashboard"}},[t._v("Dashboard")]),a("a",{staticClass:"dropdown-item waves-effect waves-light",on:{click:t.signout}},[t._v("Logout")])])])]):t._e()])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent-3","aria-controls":"navbarSupportedContent-3","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link waves-effect waves-light",attrs:{href:"#"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link waves-effect waves-light",attrs:{href:"dashboard"}},[t._v("Dashboard")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link waves-effect waves-light",attrs:{href:"#"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link waves-effect waves-light",attrs:{href:"login"}},[t._v("Login")])])}],c=a("1da1"),l=(a("96cf"),a("b0c0"),a("260b")),u=(a("ea7b"),a("66ce"),{data:function(){return{uid:null,name:null,loggedIn:!1}},created:function(){var t=this;l["a"].auth().onAuthStateChanged((function(e){t.loggedIn=!!e}));var e=l["a"].auth().currentUser;null!=e&&(this.uid=e.uid,this.name=e.email)},methods:{signout:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].auth().signOut();case 3:t.$router.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),d=u,m=a("2877"),p=Object(m["a"])(d,o,i,!1,null,null,null),v=p.exports,f={name:"App",components:{Nav:v}},h=f,_=Object(m["a"])(h,r,s,!1,null,null,null),b=_.exports,g=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loggedIn?a("div",{staticClass:"text-center p-5 m-auto"},[a("h2",[t._v("Welcome Back "+t._s(t.user.email))]),a("a",{staticClass:"btn p-3 btn-primary",attrs:{href:"dashboard"}},[t._v("View Dashboard")])]):t._e(),t.loggedIn?t._e():a("div",{staticClass:"text-center p-5 m-auto"},[a("h3",[t._v("You are not logged in")]),t._m(0)])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{staticClass:"btn p-3 btn-primary",attrs:{href:"login"}},[t._v("Login ")]),t._v(" to continue")])}],x={data:function(){return{loggedIn:!1,user:null}},created:function(){var t=this;l["a"].auth().onAuthStateChanged((function(e){t.loggedIn=!!e}));var e=l["a"].auth().currentUser;this.user=e}},y=x,k=Object(m["a"])(y,w,C,!1,null,null,null),P=k.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.loading?a("p",{staticClass:"post--empty"},[t._v("Loading....")]):a("div",{},t._l(t.accounts,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"col-12 card"},[a("div",{staticClass:"twt-feed blue-bg"},[a("div",{staticClass:"media"},[a("img",{staticClass:"align-self-center rounded-circle mr-3",staticStyle:{width:"85px",height:"85px"},attrs:{alt:"",src:"https://directemployers.org/wp-content/uploads/2018/08/avatar-JohnDoe-300x300.jpg"}}),a("div",{staticClass:"media-body"},[a("h2",{staticClass:" display-6"},[t._v(t._s(e.first_name))]),a("p",[t._v(" Account No: "+t._s(e.account_number))]),a("p",{staticClass:"text-dark"},[t._v("Balance: "+t._s(e.balance))])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-5"},[a("div",{staticClass:"col-12 card my-3"},[a("div",{staticClass:"card-body"},[a("button",{staticClass:"btn btn-small btn-primary",on:{click:function(e){t.deposit_container=!t.deposit_container}}},[t._v("Deposit Funds")]),t.deposit_container?a("form",{on:{submit:function(e){return e.preventDefault(),t.handleDeposit.apply(null,arguments)}}},[a("div",{staticClass:"mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],staticClass:"form-control",attrs:{type:"hidden"},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account_number,expression:"account_number"}],staticClass:"form-control",attrs:{type:"hidden"},domProps:{value:t.account_number},on:{input:function(e){e.target.composing||(t.account_number=e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"deposit_amount"}},[t._v("Amount to Deposit")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.deposit_amount,expression:"deposit_amount"}],staticClass:"form-control",attrs:{type:"number",id:"deposit_amount"},domProps:{value:t.deposit_amount},on:{input:function(e){e.target.composing||(t.deposit_amount=e.target.value)}}})]),a("button",{staticClass:"btn btn-info"},[t._v("Deposit Funds")])]):t._e()])]),a("div",{staticClass:"col-12 card"},[a("div",{staticClass:"card-body"},[a("button",{staticClass:"btn btn-small btn-success",on:{click:function(e){t.withdraw_container=!t.withdraw_container}}},[t._v("Withdraw from Account")]),t.withdraw_container?a("form",{on:{submit:function(e){return e.preventDefault(),t.handleWithdrawal.apply(null,arguments)}}},[a("div",{staticClass:"mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],staticClass:"form-control",attrs:{type:"hidden"},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account_number,expression:"account_number"}],staticClass:"form-control",attrs:{type:"hidden"},domProps:{value:t.account_number},on:{input:function(e){e.target.composing||(t.account_number=e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"withdraw_amount"}},[t._v("Amount to Withdraw")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.withdraw_amount,expression:"withdraw_amount"}],staticClass:"form-control",attrs:{type:"number",id:"withdraw_amount"},domProps:{value:t.withdraw_amount},on:{input:function(e){e.target.composing||(t.withdraw_amount=e.target.value)}}})]),a("button",{staticClass:"btn btn-info"},[t._v("Withdraw Funds")])]):t._e()])]),a("div",{staticClass:"col-12 card my-3"},[a("div",{staticClass:"card-body"},[a("button",{staticClass:"btn btn-small btn btn-dark",on:{click:function(e){t.transfer_container=!t.transfer_container}}},[t._v("Transfer to Account")]),t.transfer_container?a("form",{on:{submit:function(e){return e.preventDefault(),t.handleTransfer.apply(null,arguments)}}},[a("div",{staticClass:"mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],staticClass:"form-control",attrs:{type:"hidden"},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account_number,expression:"account_number"}],staticClass:"form-control",attrs:{type:"hidden"},domProps:{value:t.account_number},on:{input:function(e){e.target.composing||(t.account_number=e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"transfer_amount"}},[t._v("Amount to Transfer")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transfer_amount,expression:"transfer_amount"}],staticClass:"form-control",attrs:{type:"number",id:"transfer_amount"},domProps:{value:t.transfer_amount},on:{input:function(e){e.target.composing||(t.transfer_amount=e.target.value)}}})]),a("div",{staticClass:"mb-3"},[t._m(0,!0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver_account,expression:"receiver_account"}],staticClass:"form-control",attrs:{type:"number",id:"receiver_account"},domProps:{value:t.receiver_account},on:{input:function(e){e.target.composing||(t.receiver_account=e.target.value)}}})]),a("button",{staticClass:"btn btn-info"},[t._v("Transfer Funds")])]):t._e()])])]),a("div",{staticClass:"col-12 col-md-7"},[a("h4",{staticClass:"text-center"},[t._v("Transactions")]),a("div",{staticClass:"table-wrapper-scroll-y my-custom-scrollbar"},[a("table",{staticClass:"table"},[t._m(1,!0),t._l(t.transactions,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.transaction_type))]),a("td",[t._v(t._s(e.amount))]),a("td",[t._v(t._s(e.date))])])}))],2)])])])])})),0)])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"form-label",attrs:{for:"receiver_account"}},[t._v("Receiver Account "),a("small",[t._v("i.e 2222")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Type")]),a("th",[t._v("Amount")]),a("th",[t._v("Date")])])])}],j=a("bc3a"),A=a.n(j),S={data:function(){return{user_id:null,account_number:null,deposit_amount:null,withdraw_amount:null,transfer_amount:null,receiver_account:null,userName:null,transactions:null,accounts:null,deposit_container:!1,withdraw_container:!1,transfer_container:!1,loading:!1}},mounted:function(){this.getPosts()},created:function(){this.getTransactions()},methods:{getPosts:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=l["a"].auth().currentUser,null==a){e.next=19;break}return t.loading=!0,e.prev=3,e.next=6,A()({url:"https://localhost:44325/api/Accounts/GetAccount/"+a.email+"/",method:"GET"});case 6:n=e.sent,r=JSON.parse(n.data),t.accounts=r,t.user_id=r[0].id,t.account_number=r[0].account_number,t.loading=!1,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](3),t.loading=!1;case 17:e.next=22;break;case 19:return e.next=21,l["a"].auth().signOut();case 21:t.$router.push("/login");case 22:case"end":return e.stop()}}),e,null,[[3,14]])})))()},getTransactions:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=l["a"].auth().currentUser,null==a){e.next=20;break}return e.prev=2,e.next=5,A()({url:"https://localhost:44325/api/Accounts/GetAccountNumber/"+a.email+"/",method:"GET"});case 5:return n=e.sent,r=JSON.parse(n.data),s=r[0].account_number,e.next=10,A()({url:"https://localhost:44325/api/values/Get/"+s,method:"GET"});case 10:o=e.sent,i=JSON.parse(o.data),t.transactions=i,e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](2),t.loading=!1;case 18:e.next=23;break;case 20:return e.next=22,l["a"].auth().signOut();case 22:t.$router.push("/login");case 23:case"end":return e.stop()}}),e,null,[[2,15]])})))()},handleDeposit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("Accounts/MakeDeposit/"+t.user_id,{account_number:t.account_number,deposit_amount:t.deposit_amount});case 3:a=e.sent,alert(a.data),window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},handleWithdrawal:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("Accounts/MakeWithdrawal/"+t.user_id,{account_number:t.account_number,withdraw_amount:t.withdraw_amount});case 3:a=e.sent,alert(a.data),window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},handleTransfer:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("Accounts/TransferFunds/"+t.user_id,{account_number:t.account_number,receiver_account:t.receiver_account,transfer_amount:t.transfer_amount});case 3:a=e.sent,alert(a.data),window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},N=S,$=(a("2fe3"),Object(m["a"])(N,E,O,!1,null,null,null)),I=$.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mb-5 mx-auto"},[a("div",{staticClass:"card mx-xl-5 mt-5"},[a("div",{staticClass:"card-body"},[t._m(0),a("div",{staticClass:"md-form font-weight-light"},[a("i",{staticClass:"fas fa-envelope prefix grey-text"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"materialFormEmailEx"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"materialFormEmailEx"}},[t._v("Your email")])]),a("div",{staticClass:"md-form font-weight-light"},[a("i",{staticClass:"fas fa-lock prefix grey-text"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"materialFormPasswordEx"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{attrs:{for:"materialFormPasswordEx"}},[t._v("Your password")])]),t._m(1)])])])])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-header deep-blue-gradient rounded"},[a("h3",{staticClass:"my-3"},[a("i",{staticClass:"fas fa-lock"}),t._v(" Login:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-4"},[a("button",{staticClass:"btn btn-light-blue waves-effect waves-light",attrs:{type:"submit"}},[t._v("Login")])])}],T={data:function(){return{email:"",password:""}},methods:{handleSubmit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].auth().signInWithEmailAndPassword(t.email,t.password);case 3:a=e.sent,console.log(a),t.$router.push("/dashboard"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},W=T,F=(a("019f"),Object(m["a"])(W,D,R,!1,null,"20fc9603",null)),L=F.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("h2",[t._v("Register")]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirm,expression:"password_confirm"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1"},domProps:{value:t.password_confirm},on:{input:function(e){e.target.composing||(t.password_confirm=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])},U=[],G={data:function(){return{email:"",password:"",password_confirm:""}},methods:{handleSubmit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].auth().createUserWithEmailAndPassword(t.email,t.password);case 3:a=e.sent,console.log(a),t.$router.push("/dashboard"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},J=G,B=Object(m["a"])(J,M,U,!1,null,null,null),H=B.exports;n["a"].use(g["a"]);var q=[{path:"/",name:"home",component:P},{path:"/dashboard",name:"dashboard",component:I,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:L},{path:"/register",name:"register",component:H}],z=new g["a"]({mode:"history",base:"/",routes:q});z.beforeEach((function(t,e,a){var n=t.matched.some((function(t){return t.meta.requiresAuth})),r=l["a"].auth().currentUser;n&&!r?a("/login"):a()}));var K=z;A.a.defaults.baseURL="https://localhost:44325/api/",A.a.defaults.headers.common["Authorization"]="Bearer"+localStorage.getItem("token");var Y=a("2f62");n["a"].use(Y["a"]),n["a"].config.productionTip=!1;var Q,Z={apiKey:"AIzaSyAa-3zcdaBM7rx6KTwisUZeKEQQHZ4uKq0",authDomain:"atm-project-fffd2.firebaseapp.com",projectId:"atm-project-fffd2",storageBucket:"atm-project-fffd2.appspot.com",messagingSenderId:"307547707197",appId:"1:307547707197:web:37142538e76bcfd18f1754"};l["a"].initializeApp(Z),l["a"].auth().onAuthStateChanged((function(t){console.log(t),Q||new n["a"]({router:K,render:function(t){return t(b)}}).$mount("#app")}))}});
//# sourceMappingURL=app.1736d250.js.map