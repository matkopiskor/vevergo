(this.webpackJsonpvevergo=this.webpackJsonpvevergo||[]).push([[1],{103:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var c=n(8),r=n(9),a=n.n(r),u=n(12),i=n(15),o=n(33),s=function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)("GET","countries"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(17),b=n(18),j=Object(l.b)(b.a.COUNTRIES,{list:[]}),f=Object(i.b)("countries/fetch",function(){var e=Object(u.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:return c=e.sent,e.abrupt("return",c.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0)||"Somethink went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(i.c)({name:"countries",initialState:j,reducers:{},extraReducers:function(e){(0,e.addCase)(f.fulfilled,(function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{list:t.payload.items});return Object(l.c)(b.a.COUNTRIES,n),n}))}}).reducer;t.a=d},104:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var c=n(8),r=n(9),a=n.n(r),u=n(12),i=n(15),o=n(33),s=function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)("GET","listing_types"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(17),b=n(18),j=Object(l.b)(b.a.LISTING_TYPES,{list:[]}),f=Object(i.b)("listingTypes/fetch",function(){var e=Object(u.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:return c=e.sent,e.abrupt("return",c.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(i.c)({name:"listingTypes",initialState:j,reducers:{},extraReducers:function(e){(0,e.addCase)(f.fulfilled,(function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{list:t.payload.items});return Object(l.c)(b.a.LISTING_TYPES,n),n}))}}).reducer;t.a=d},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(){return{"Accept-Language":"en"}}},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var c=n(73),r=function(){return Object(c.b)()},a=c.c},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var c=function(e,t){var n,c=localStorage.getItem(e),r=null!==t&&void 0!==t?t:{};return c&&null!==(n=JSON.parse(c))&&void 0!==n?n:r},r=function(e,t){localStorage.setItem(e,JSON.stringify(t))},a=function(e){localStorage.removeItem(e)}},18:function(e,t,n){"use strict";var c;n.d(t,"a",(function(){return c})),function(e){e.CURRENCIES="vvg-currency",e.LANGUAGES="vvg-language",e.COUNTRIES="vvg-countries",e.CATEGORY_TREE="vvg-category-tree",e.LISTING_TYPES="vvg-listing-types",e.HOME_VIEW="vvg-hone-view",e.SIDEBAR="vvg-sidebar",e.USER="vvg-user"}(c||(c={}))},180:function(e,t,n){},181:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var c=n(24),r=n.n(c),a=n(0),u=n(109),i=n(10),o=n(79),s=n(16),l=n(92),b=n(50),j=(n(180),n(292)),f=n(304),d=(n(181),n(9)),O=n.n(d),p=n(12),v=n(20),m=n(305),g=n(33),h=n(151),x=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(h.a)(),!0,!0,c={include_categories:true,search_inside:true,search_text:t},e.abrupt("return",Object(g.a)("GET","view/autocomplete",c,null,n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=n(56),E=n(3),C=function(e){return Object(E.jsx)("span",{className:"autocomplete__dropdown-title",children:e})},S=function(e){var t=e.title,n=e.value,c=e.info,r=e.index;return{value:n,label:Object(E.jsxs)("div",{className:"autocomplete__dropdown-item",children:[t,c]},r)}},w=n(293),A=function(){var e=function(){var e=Object(s.a)(),t=Object(b.a)(),n=t.state,c=t.goTo,r=t.path,u=Object(a.useState)([]),i=Object(v.a)(u,2),o=i[0],l=i[1],j=Object(m.a)().t,f=Object(a.useMemo)((function(){if(0===o.length)return[];var e=o.reduce((function(e,t,n){var c=t.title,r=t.entity_type,a=t.category,u=1===r?"Items":"Categories",i=void 0;return"Items"!==u&&(i=a.toString()),"Items"===u?e[0].push(S({value:c,title:c,info:i,index:n.toString()})):e[1].push(S({value:a.toString(),title:c,info:i,index:n.toString()})),e}),[[],[]]),t=Object(v.a)(e,2),n=t[0],c=t[1];return[{label:C("Items"),options:n},{label:C("Categories"),options:c}]}),[o]),d=Object(a.useCallback)(function(){var t=Object(p.a)(O.a.mark((function t(n){var c,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==n.length){t.next=5;break}l([]),e(Object(N.a)()),t.next=16;break;case 5:return t.prev=5,t.next=8,x(n);case 8:c=t.sent,r=c.data.items,l(r),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),[e]),g=Object(a.useCallback)((function(e,t){c(r,!1,{searchText:e})}),[c,r]),h=Object(a.useCallback)((function(e){"Enter"===e.code&&c(r,!1,{searchText:e.target.value})}),[c,r]);return Object(a.useEffect)((function(){e(Object(N.c)(null===n||void 0===n?void 0:n.searchText))}),[e,n]),{t:j,options:f,onSearch:d,onSelect:g,onEnterPressed:h}}(),t=e.t,n=e.options,c=e.onSearch,r=e.onSelect,u=e.onEnterPressed;return Object(E.jsx)(j.a,{className:"autocomplete",options:n,allowClear:!0,onSearch:c,onSelect:r,onKeyDown:u,children:Object(E.jsx)(f.a,{className:"autocomplete__input",placeholder:t("lblSearch"),prefix:Object(E.jsx)(w.a,{className:"autocomplete__search-icon"})})})},y=n(83),k=(n(271),function(){var e=function(){var e=Object(b.a)().goTo,t=Object(s.a)();return{onClick:Object(a.useCallback)((function(){t(Object(y.a)()),t(Object(N.a)()),e("/",!0,{})}),[t])}}().onClick;return Object(E.jsx)("img",{src:"data:image/png;base64,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",className:"logo",alt:"logo",onClick:e})}),_=n(294),T=n(295),R=(n(272),function(e){var t=e.label,n=e.open,c=e.onClick;return Object(E.jsxs)("div",{className:"topbar-button",onClick:c,children:[t,n?Object(E.jsx)(I,{}):Object(E.jsx)(L,{})]})}),I=function(){return Object(E.jsx)(_.a,{className:"topbar-button__arrow"})},L=function(){return Object(E.jsx)(T.a,{className:"topbar-button__arrow"})},G=(n(273),n(64)),M=n(52),V=function(e){var t=function(e){var t=Object(s.a)(),n=Object(s.b)((function(e){return e.currencies})),c=n.list,r=n.active,u=Object(a.useState)(!1),i=Object(v.a)(u,2),o=i[0],l=i[1],b=Object(a.useRef)(null),j=Object(a.useCallback)((function(e){l(!e&&!o)}),[o]),f=Object(a.useMemo)((function(){return c.find((function(e){return e.id===r})).name}),[c,r]),d=Object(a.useCallback)((function(e){t(Object(G.c)(e)),j(!0)}),[t,j]);return Object(M.a)(b,e?void 0:function(){return j(!0)}),{list:c,activeCurrName:f,active:r,setActive:d,open:o,toggleOpen:j,currRef:b}}(e.isMobile),n=t.list,c=t.active,r=t.setActive,u=t.activeCurrName,i=t.open,o=t.toggleOpen,l=t.currRef;return Object(E.jsxs)("div",{ref:l,className:"currencies-selector",children:[Object(E.jsx)(R,{open:i,label:u,onClick:function(){return o()}}),i&&Object(E.jsx)("div",{className:"currencies-selector__list",children:n.map((function(e){var t=e.id,n=e.name;return Object(E.jsx)("div",{className:"currencies-selector__item".concat(c===t?" currencies-selector__item-active":""),onClick:function(){return r(t)},children:n},t)}))})]})},U=n(65),F=(n(274),function(e){var t=function(e){var t=Object(s.a)(),n=Object(s.b)((function(e){return e.languages})),c=n.list,r=n.active,u=Object(a.useState)(!1),i=Object(v.a)(u,2),o=i[0],l=i[1],b=Object(a.useRef)(null),j=Object(a.useCallback)((function(e){l(!e&&!o)}),[o]),f=Object(a.useMemo)((function(){return c.find((function(e){return e.id===r})).name}),[c,r]),d=Object(a.useCallback)((function(e){t(Object(U.c)(e)),j(!0)}),[t,j]);return Object(M.a)(b,e?void 0:function(){return j(!0)}),{list:c,activeLangName:f,active:r,setActive:d,open:o,toggleOpen:j,currRef:b}}(e.isMobile),n=t.list,c=t.active,r=t.setActive,u=t.activeLangName,i=t.open,o=t.toggleOpen,l=t.currRef;return Object(E.jsxs)("div",{ref:l,className:"languages-selector",children:[Object(E.jsx)(R,{open:i,label:u,onClick:function(){return o()}}),i&&Object(E.jsx)("div",{className:"languages-selector__list",children:n.map((function(e){var t=e.id,n=e.name;return Object(E.jsx)("div",{className:"languages-selector__item".concat(c===t?" languages-selector__item-active":""),onClick:function(){return r(t)},children:n},t)}))})]})}),B=n.p+"static/media/no-user.29fabf84.jpg",z=n(61),J=(n(275),n(296)),Y=n(297),D=n(298),Q=n(299),q=n(300),P=[{id:"logIn",name:"lblLogin",Icon:J.a,path:"/login"}],X=[{id:"myItems",name:"lblMyItems",Icon:Y.a,path:"my-items"},{id:"favoriteItems",name:"lblFavoriteItems",Icon:D.a,path:"favorite-items"},{id:"userProfile",name:"lblUserProfile",Icon:Q.a,path:"profile"},{id:"logOut",name:"lblLogout",Icon:q.a,action:"logout"}],W=function(){var e=function(){var e=Object(m.a)().t,t=Object(s.a)(),n=Object(b.a)().goTo,c=Object(a.useRef)(null),r=Object(a.useState)(!1),u=Object(v.a)(r,2),i=u[0],o=u[1],l=!!Object(s.b)((function(e){return e.user.id})),j=Object(a.useMemo)((function(){return!!l}),[l]),f=Object(a.useCallback)((function(e){o(!e&&!i)}),[i]);Object(M.a)(c,(function(){return f(!0)}));var d=Object(a.useMemo)((function(){return B}),[]),O=Object(a.useCallback)((function(){t(Object(z.a)()),n("/",!1,{})}),[t,n]);return{currRef:c,imgSrc:d,open:i,toggleOpen:f,isLoggedIn:j,t:e,logout:O}}(),t=e.t,n=e.currRef,c=e.imgSrc,r=e.open,u=e.toggleOpen,i=e.isLoggedIn,o=e.logout;return Object(E.jsxs)("div",{ref:n,className:"user-selector",children:[Object(E.jsx)("div",{className:"user-selector__avatar",onClick:function(){return u()},children:Object(E.jsx)("img",{src:c,alt:"avatar"})}),r&&Object(E.jsxs)("div",{className:"user-selector__list",children:[!i&&P.map((function(e){var n=e.id,c=e.name,r=e.Icon,a=e.path;return Object(E.jsxs)("a",{href:a,className:"user-selector__item",children:[Object(E.jsx)(r,{size:15,className:"user-selector__item-icon"})," ",t(c)]},n)})),!!i&&X.map((function(e){var n=e.id,c=e.name,r=e.Icon,a=e.action,u=e.path;return u?Object(E.jsxs)("a",{href:u,className:"user-selector__item",children:[Object(E.jsx)(r,{size:15,className:"user-selector__item-icon"})," ",t(c)]},n):"logout"===a?Object(E.jsxs)("span",{className:"user-selector__item user-selector__item-logout",onClick:o,children:[Object(E.jsx)(r,{size:15,className:"user-selector__item-icon"})," ",t(c)]},n):null})),Object(E.jsx)("div",{className:"user-selector__item update",children:"Last update: 10.01.2022. 15:20 Single ad view, login functionality, translations, flow check and speed"},"1000")]})]})},H=(n(276),n(301)),Z=function(){var e=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)(null),u=Object(a.useCallback)((function(e){c(!e&&!n)}),[n]);return Object(M.a)(r,(function(){return u(!0)})),{open:n,toggleOpen:u,currRef:r}}(),t=e.currRef,n=e.toggleOpen,c=e.open;return Object(E.jsxs)("div",{ref:t,className:"settings-selector",children:[Object(E.jsx)("div",{className:"settings-selector__icon-wrapper",onClick:function(){return n()},children:Object(E.jsx)(H.a,{className:"settings-selector__icon"})}),c&&Object(E.jsxs)("div",{className:"settings-selector__list",children:[Object(E.jsx)(V,{isMobile:!0}),Object(E.jsx)(F,{})]})]})},K=n(302),$=function(){var e=function(){var e=Object(s.a)(),t=Object(o.b)(),n=Object(b.a)().path;return{isMobile:t,isHome:Object(a.useMemo)((function(){return"/"===n}),[n]),onSidebarMenuClick:Object(a.useCallback)((function(){e(Object(l.e)())}),[e])}}(),t=e.isMobile,n=e.isHome,c=e.onSidebarMenuClick;return Object(E.jsx)("div",{className:"topbar ".concat(n?"topbar-home":""," ").concat(t?"":"topbar-desktop"),children:t?Object(E.jsx)(ee,{isHome:n,onSidebarMenuClick:c}):Object(E.jsx)(te,{isHome:n})})},ee=function(e){var t=e.isHome,n=e.onSidebarMenuClick;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"topbar__container topbar__container-mobile",children:[Object(E.jsxs)("div",{className:"topbar__left-actions",children:[t&&Object(E.jsx)("div",{className:"topbar__sidebar-menu",children:Object(E.jsx)(K.a,{size:26,onClick:n})}),Object(E.jsx)("div",{className:"topbar__logo-mobile",children:Object(E.jsx)(k,{})})]}),Object(E.jsxs)("div",{className:"topbar__mobile-buttons",children:[Object(E.jsx)("div",{className:"topbar-settings",children:Object(E.jsx)(Z,{})}),Object(E.jsx)("div",{className:"topbar__user-mobile",children:Object(E.jsx)(W,{})})]})]}),t&&Object(E.jsx)("div",{className:"topbar__container topbar__container-mobile",children:Object(E.jsx)("div",{className:"topbar__autocomplete-mobile",children:Object(E.jsx)(A,{})})})]})},te=function(e){var t=e.isHome;return Object(E.jsxs)("div",{className:"topbar__container",children:[Object(E.jsx)("div",{className:"topbar__logo",children:Object(E.jsx)(k,{})}),Object(E.jsx)("div",{className:"topbar__autocomplete",children:t&&Object(E.jsx)(A,{})}),Object(E.jsx)("div",{className:"topbar__currency",children:Object(E.jsx)(V,{})}),Object(E.jsx)("div",{className:"topbar__language",children:Object(E.jsx)(F,{})}),Object(E.jsx)("div",{className:"topbar__user",children:Object(E.jsx)(W,{})})]})},ne=n(303),ce=n(161),re=n.n(ce),ae=n(54),ue=(n(278),function(){return Object(E.jsx)("footer",{className:"footer",children:Object(E.jsx)(re.a,{showUnder:160,children:Object(E.jsx)(ae.a,{className:"footer__button",children:Object(E.jsx)(ne.a,{size:15})})})})}),ie=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,413))})),oe=n(48),se=function(){var e=Object(m.a)().t;return Object(E.jsx)(ae.e,{className:"m-0",children:Object(E.jsx)(ae.d,{sm:"12",children:Object(E.jsx)(ae.b,{className:"auth-card bg-transparent shadow-none rounded-0 mb-0 w-100",children:Object(E.jsxs)(ae.c,{className:"text-center",children:[Object(E.jsx)("h1",{className:"font-large-2 my-1",children:e("lblPageNotFound")}),Object(E.jsx)("p",{className:"pb-2",children:e("lblPageNotFoundDetails")}),Object(E.jsx)(ae.a,{tag:"a",href:"".concat(oe.a,"/"),color:"primary",size:"lg",className:"mt-2",children:e("lblBackToHome")})]})})})})},le=Object(a.lazy)((function(){return Promise.all([n.e(5),n.e(7)]).then(n.bind(null,417))})),be=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(11),n.e(9)]).then(n.bind(null,421))})),je=Object(a.lazy)((function(){return Promise.all([n.e(12),n.e(8)]).then(n.bind(null,420))})),fe=n(75),de=n(103),Oe=n(104),pe=n(78),ve=function(){var e=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={language:t},e.abrupt("return",Object(g.a)("GET","ui_language_data",n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=n(106),ge=n(76);me.a.use(ge.e).init({resources:{},debug:!0,interpolation:{escapeValue:!1}});var he=function(e,t){me.a.addResources(e,"translation",t)},xe=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),u=Object(v.a)(r,2),i=u[0],o=u[1],l=Object(s.b)((function(e){return e.languages})),b=l.active,j=l.list,f=Object(a.useMemo)((function(){var e;return null===(e=j.find((function(e){return e.id===b})))||void 0===e?void 0:e.code}),[b,j]),d=Object(a.useMemo)((function(){return j.map((function(e){return e.code}))}),[j]);return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(O.a.mark((function e(){var t,n,r,a,u,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(pe.a)(d),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=12;break}return r=n.value,e.next=7,ve(r);case 7:a=e.sent,(u=a.data.items)[0]&&(i=u[0].data,o=i[r],he(r,o),c((function(e){return e+1})));case 10:e.next=3;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t.e(e.t0);case 17:return e.prev=17,t.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(a.useEffect)((function(){var e;f&&n>=j.length&&(e=f,me.a.changeLanguage(e),o(!0))}),[f,j.length,n]),{ready:i}},Ne=function(){var e=Object(s.a)(),t=Object(s.b)((function(e){return e.currencies.list})),n=Object(s.b)((function(e){return e.languages.list})),c=Object(s.b)((function(e){return e.countries.list})),r=Object(s.b)((function(e){return e.categoryTree.tree})),u=Object(s.b)((function(e){return e.listingTypes.list})),i=Object(s.b)((function(e){return e.user})),o=i.id,l=i.token,b=i.data,j=xe().ready;return Object(a.useEffect)((function(){0===t.length&&e(Object(G.b)())}),[t.length,e]),Object(a.useEffect)((function(){0===n.length&&e(Object(U.b)())}),[n.length,e]),Object(a.useEffect)((function(){0===c.length&&e(Object(de.b)())}),[c.length,e]),Object(a.useEffect)((function(){0===r.length&&e(Object(fe.b)())}),[r.length,e]),Object(a.useEffect)((function(){0===r.length&&e(Object(fe.b)())}),[r.length,e]),Object(a.useEffect)((function(){0===u.length&&e(Object(Oe.b)())}),[u.length,e]),Object(a.useEffect)((function(){o&&l&&!b&&e(Object(z.c)(o))}),[o,l,e,b]),{loaded:Object(a.useMemo)((function(){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return 0!==e})).every((function(e){return!!e}))}(t.length,n.length,c.length,r.length,u.length)&&j}),[j,r.length,c.length,t.length,n.length,u.length]),isLoggedIn:Object(a.useMemo)((function(){return!!o}),[o])}},Ee=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,422))})),Ce=function(){return Object(E.jsx)("div",{children:"Profile"})},Se=(n(279),function(){return Object(E.jsx)("div",{className:"user-profile",children:Object(E.jsx)(Ce,{})})}),we=function(){var e=Ne(),t=e.loaded,n=e.isLoggedIn;return t?Object(E.jsxs)("div",{className:"app-container",children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(a.Suspense,{fallback:function(){return Object(E.jsx)("div",{children:"Loading"})},children:[Object(E.jsx)($,{}),Object(E.jsxs)(i.c,{children:[Object(E.jsx)(i.a,{path:"".concat(oe.a,"/"),element:Object(E.jsx)(ie,{})}),Object(E.jsx)(i.a,{path:"".concat(oe.a,"/ad/*"),element:Object(E.jsx)(le,{})}),!n&&Object(E.jsx)(i.a,{path:"".concat(oe.a,"/login"),element:Object(E.jsx)(be,{})}),!!n&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(i.a,{path:"".concat(oe.a,"/my-items"),element:Object(E.jsx)(je,{})}),Object(E.jsx)(i.a,{path:"".concat(oe.a,"/favorite-items"),element:Object(E.jsx)(Ee,{})}),Object(E.jsx)(i.a,{path:"".concat(oe.a,"/profile"),element:Object(E.jsx)(Se,{})})]}),Object(E.jsx)(i.a,{path:"*",element:Object(E.jsx)(se,{})})]})]})}),Object(E.jsx)(ue,{})]}):null},Ae=(n(280),n(281),n(74)),ye=n(73);r.a.render(Object(E.jsx)(ye.a,{store:Ae.a,children:Object(E.jsx)(o.a,{children:Object(E.jsx)(we,{})})}),document.getElementById("root"))},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n(9),r=n.n(c),a=n(12),u=n(8),i=n(154),o=n.n(i),s=n(70),l=n(74),b=function(e){var t={};return e?Object(u.a)(Object(u.a)({},t),e):t},j=function(e){return Object(u.a)(Object(u.a)({},e),{},{api_key:"03b7f69e-5cd2-4cd2-94b8-e59f95dc7b13"})},f=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c,a,u){var i,f,d,O,p,v,m,g,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=b(u),f={baseURL:"https://api.vevergo.com:4443",timeout:1e4,headers:i},d=j(c),O=[],p=0,v=Object.keys(d);p<v.length;p++)m=v[p],O.push(m+"="+d[m]);return g=0===O.length?n:n+"?"+O.join("&"),l.a.dispatch(Object(s.a)()),h=o.a.create(f),e.abrupt("return",h.request({method:t,url:g,data:a}).then((function(e){return e})).catch((function(e){return t=e,console.error(t),t.response;var t})).finally((function(){return l.a.dispatch(Object(s.c)())})));case 9:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}()},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c="/vevergo"},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(8),r=n(0),a=n(10),u=function(){var e=Object(a.f)(),t=Object(a.e)();return{goTo:Object(r.useCallback)((function(n,r,a){var u=0===Object.keys(a).length?null:Object(c.a)(Object(c.a)({},t.state),a),i={};i.replace=!!r,i.state=u,e(n,i)}),[t.state,e]),state:Object(r.useMemo)((function(){return t.state}),[t.state]),path:Object(r.useMemo)((function(){return t.pathname}),[t.pathname])}}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0),r=function(e,t){Object(c.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&"svg"!==n.target.tagName&&"polyline"!==n.target.tagName&&t&&t()};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[e,t])}},56:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var c=n(15),r={searchText:void 0,clearValue:!1},a=Object(c.c)({name:"mainPageFilter",initialState:r,reducers:{setSearchText:function(e,t){e.searchText=t.payload},clearSearchText:function(e){e.searchText=void 0},setClearValue:function(e,t){e.clearValue=t.payload}}}),u=a.actions,i=a.reducer,o=u.setSearchText,s=u.clearSearchText;u.setClearValue;t.b=i},61:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return m}));var c=n(8),r=n(9),a=n.n(r),u=n(12),i=n(15),o=n(33),s=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)("GET","view/user/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(17),b=n(18),j=Object(l.b)(b.a.USER,{}),f=Object(i.b)("user/fetch",function(){var e=Object(u.a)(a.a.mark((function e(t,n){var c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t);case 3:return c=e.sent,r=c.data,e.abrupt("return",{data:r});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0)||"Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(i.c)({name:"user",initialState:j,reducers:{setData:function(e,t){var n=t.payload,r=n.data,a=n.token,u=r.id,i={token:a,id:u},o=Object(c.a)(Object(c.a)({},e),{},{id:u,token:a,data:r});return Object(l.c)(b.a.USER,i),o},clearData:function(){return Object(l.a)(b.a.USER),{}}},extraReducers:function(e){(0,e.addCase)(f.fulfilled,(function(e,t){console.log(t.payload);var n=t.payload.data;if(0===(null===n||void 0===n?void 0:n.error_id)){var r=e.token,a=n.items[0],u=a.id,i={token:r,id:u},o=Object(c.a)(Object(c.a)({},e),{},{id:u,token:r,data:a});return Object(l.c)(b.a.USER,i),o}return e}))}}),O=d.actions,p=d.reducer,v=O.setData,m=O.clearData;t.b=p},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return v}));var c=n(8),r=n(9),a=n.n(r),u=n(12),i=n(15),o=n(33),s=function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)("GET","currencies"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(17),b=n(18),j=Object(l.b)(b.a.CURRENCIES,{list:[],active:44}),f=Object(i.b)("currencies/fetch",function(){var e=Object(u.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:return c=e.sent,e.abrupt("return",c.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(i.c)({name:"currencies",initialState:j,reducers:{setActive:function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{active:t.payload});return Object(l.c)(b.a.CURRENCIES,n),n}},extraReducers:function(e){(0,e.addCase)(f.fulfilled,(function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{list:t.payload.items});return Object(l.c)(b.a.CURRENCIES,n),n}))}}),O=d.actions,p=d.reducer,v=O.setActive;t.a=p},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return v}));var c=n(8),r=n(9),a=n.n(r),u=n(12),i=n(15),o=n(33),s=function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)("GET","languages"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(17),b=n(18),j=Object(l.b)(b.a.LANGUAGES,{list:[],active:1}),f=Object(i.b)("languages/fetch",function(){var e=Object(u.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:return c=e.sent,e.abrupt("return",c.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(i.c)({name:"languages",initialState:j,reducers:{setActive:function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{active:t.payload});return Object(l.c)(b.a.LANGUAGES,n),n}},extraReducers:function(e){(0,e.addCase)(f.fulfilled,(function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{list:t.payload.items});return Object(l.c)(b.a.LANGUAGES,n),n}))}}),O=d.actions,p=d.reducer,v=O.setActive;t.a=p},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var c=n(15),r=Object(c.c)({name:"loading",initialState:0,reducers:{addToLoading:function(e){return e+1},removeFromLoading:function(e){return 0===e?0:e-1}}}),a=r.actions,u=r.reducer,i=a.addToLoading,o=a.removeFromLoading;t.b=u},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(15),r=n(39),a=n(70),u=n(56),i=n(64),o=n(65),s=n(103),l=n(75),b=n(104),j=n(83),f=n(92),d=n(61),O=Object(r.b)({loading:a.b,mainPageFilter:u.b,currencies:i.a,languages:o.a,countries:s.a,categoryTree:l.a,listingTypes:b.a,homeView:j.b,sidebar:f.a,user:d.b}),p=Object(c.a)({reducer:O,middleware:function(e){return e()}})},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var c=n(8),r=n(9),a=n.n(r),u=n(12),i=n(15),o=n(33),s=function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)("GET","category_tree"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(17),b=n(18),j=Object(l.b)(b.a.CATEGORY_TREE,{tree:[]}),f=Object(i.b)("categoryTree/fetch",function(){var e=Object(u.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:return c=e.sent,e.abrupt("return",c.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(i.c)({name:"categoryTree",initialState:j,reducers:{},extraReducers:function(e){(0,e.addCase)(f.fulfilled,(function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{tree:t.payload.items});return Object(l.c)(b.a.CATEGORY_TREE,n),n}))}}).reducer;t.a=d},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var c=n(20),r=n(0),a=n(3),u=window.matchMedia("(max-width: 1000px)"),i=Object(r.createContext)({}),o=function(e){var t=e.children,n=Object(r.useState)(u.matches),o=Object(c.a)(n,2),s=o[0],l=o[1],b=Object(r.useCallback)((function(){l(u.matches)}),[]);Object(r.useEffect)((function(){return u.addEventListener("change",b),function(){u.removeEventListener("change",b)}}),[b]);var j=Object(r.useMemo)((function(){return{isMobile:s}}),[s]);return Object(a.jsx)(i.Provider,{value:j,children:t})},s=function(){return Object(r.useContext)(i).isMobile}},83:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return f}));var c=n(8),r=n(15),a=n(17),u=n(18),i={active:Object(a.b)(u.a.HOME_VIEW,{active:"list"}).active,sortValue:void 0},o=Object(r.c)({name:"countries",initialState:i,reducers:{setActive:function(e,t){var n=Object(c.a)(Object(c.a)({},e),{},{active:t.payload});return Object(a.c)(u.a.HOME_VIEW,{active:t.payload}),n},setSort:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{sortValue:t.payload})},clearSort:function(e){return Object(c.a)(Object(c.a)({},e),{},{sortValue:void 0})}}}),s=o.actions,l=o.reducer,b=s.setActive,j=s.setSort,f=s.clearSort;t.b=l},92:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return b}));var c=n(8),r=n(15),a=Object(r.c)({name:"sidebar",initialState:{docked:!0,open:!1,mobileOpen:!1},reducers:{toggleDocked:function(e){return Object(c.a)(Object(c.a)({},e),{},{docked:!e.docked})},setDocked:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{docked:t.payload})},toggleOpen:function(e){return Object(c.a)(Object(c.a)({},e),{},{open:!e.open})},setOpen:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{open:t.payload})},toggleMobileOpen:function(e){return Object(c.a)(Object(c.a)({},e),{},{mobileOpen:!e.mobileOpen})},setMobileOpen:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{mobileOpen:t.payload})}}}),u=a.actions,i=a.reducer,o=u.toggleDocked,s=(u.toggleOpen,u.setDocked,u.setOpen),l=u.toggleMobileOpen,b=u.setMobileOpen;t.a=i}},[[282,2,3]]]);
//# sourceMappingURL=main.985176e3.chunk.js.map