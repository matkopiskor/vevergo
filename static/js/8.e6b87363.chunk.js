(this.webpackJsonpvevergo=this.webpackJsonpvevergo||[]).push([[8],{338:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(415),c=a(335),i=(a(343),a(181)),r=a(3),s=function(e){var t=e.label,a=e.onChange,s=e.value,l=e.placeholder,b=e.type,o=void 0===b?"text":b,d=e.name,j=e.labelClassName,u=void 0===j?"":j,m=e.inputClassName,O=void 0===m?"":m,x=e.Prefix,h=e.disabled,p=e.infoText,v=e.required;return Object(r.jsxs)("div",{className:"input__wrapper",children:[Object(r.jsxs)("div",{className:"info-text-wrapper",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"input__label ".concat(u),children:t}),v&&Object(r.jsx)("span",{className:"input__label-required",children:"*"})]}),p&&Object(r.jsx)(n.a,{title:p,children:Object(r.jsx)(i.a,{})})]}),Object(r.jsx)(c.a,{type:o,className:"input__select ".concat(O),onChange:a,value:s,placeholder:l,name:d,prefix:x,disabled:h})]})}},343:function(e,t,a){},346:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(130),c=a(415),i=(a(353),a(181)),r=a(3),s=n.a.Option,l=function(e){var t=e.options,a=e.onChange,l=e.value,b=e.placeholder,o=e.label,d=e.mode,j=e.disabled,u=e.infoText,m=e.removeClear;return Object(r.jsxs)("div",{className:"single-select__wrapper",children:[Object(r.jsxs)("div",{className:"info-text-wrapper",children:[Object(r.jsx)("label",{className:"single-select__label",children:o}),u&&Object(r.jsx)(c.a,{title:u,children:Object(r.jsx)(i.a,{})})]}),Object(r.jsx)(n.a,{className:"single-select__select",onChange:a,value:l,placeholder:b,allowClear:!m,mode:d,disabled:j,children:t.map((function(e){var t=e.label,a=e.value;return Object(r.jsx)(s,{value:a,children:t},a)}))})]})}},348:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(349);var n=a(3),c=function(e){var t=e.title;return Object(n.jsx)("h3",{className:"page-title",children:t})}},349:function(e,t,a){},350:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(565),c=a(3),i=function(e){var t=e.children;return Object(c.jsx)(n.a,{xl:12,lg:12,sm:24,xs:24,children:t})}},353:function(e,t,a){},356:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(565),c=a(3),i=function(e){var t=e.children;return Object(c.jsx)(n.a,{xl:8,lg:8,sm:12,xs:24,children:t})}},359:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(371);var n=a(3),c=function(e){var t=e.children;return Object(n.jsx)("div",{className:"profile-info-item",children:t})}},360:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(380);var n=a(3),c=function(e){var t,a=e.tabs,c=a.panes,i=a.onTabClick,r=a.activeKey,s=Array.from(null!==(t=c)&&void 0!==t?t:{});return Object(n.jsx)("div",{className:"tabs-list-container",children:Object(n.jsx)("div",{className:"tabs-list-wrapper",children:Object(n.jsx)("div",{className:"tabs-list",children:s.map((function(e){var t,a="tabs-item";return e.key===r&&(a+=" tabs-item-active"),Object(n.jsx)("div",{className:a,onClick:function(t){return i(e.key,t)},children:null===e||void 0===e||null===(t=e.props)||void 0===t?void 0:t.tab},e.key)}))})})})}},371:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},383:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(10),c=a(28),i=a(0),r=a(372),s=a.n(r),l=a(382),b=a(507),o=a(539),d=a(336),j=a(86),u=a(87),m=(a(373),a(3)),O=function(e){var t=e.src;return Object(m.jsx)("div",{className:"single-image",children:Object(m.jsx)("img",{src:t,alt:"single"})})},x=(a(374),function(e){var t=e.currentImage,a=e.onSaveImage,r=Object(d.a)(),x=Object(c.a)(r,1)[0],h=Object(i.useState)(),p=Object(c.a)(h,2),v=p[0],f=p[1],_=Object(i.useState)(!1),g=Object(c.a)(_,2),N=g[0],y=g[1],k=Object(i.useState)(),w=Object(c.a)(k,2),z=w[0],C=w[1],P=Object(i.useCallback)((function(e){e&&f(e)}),[]),S=Object(i.useCallback)((function(e){C(e[0])}),[]),I=Object(i.useCallback)((function(e){if(e.preventDefault(),e.stopPropagation(),z&&v){var t=function(e){for(var t=";base64,",a=e.indexOf(t)+t.length,n=e.substring(a),c=window.atob(n),i=c.length,r=new Uint8Array(new ArrayBuffer(i)),s=0;s<i;s++)r[s]=c.charCodeAt(s);return r}(v.getImage().toDataURL());u.a.dispatch(Object(j.a)()),a(t)}}),[v,z,a]),A=Object(i.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),y(!1),C(void 0)}),[]);return Object(i.useEffect)((function(){y(!1),C(void 0),u.a.dispatch(Object(j.c)())}),[t]),Object(m.jsx)(l.a,{onDrop:S,noKeyboard:!0,children:function(e){var a=e.getRootProps,c=e.getInputProps;return Object(m.jsx)("div",{className:"avatar-dropzone-wrapper",children:N?Object(m.jsx)("div",Object(n.a)(Object(n.a)({},a()),{},{title:x("lblDropImageHere"),children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{ref:P,image:null!==z&&void 0!==z?z:t,className:"avatar-dropzone-editor",border:1,width:249,height:249}),Object(m.jsx)("input",Object(n.a)({},c())),Object(m.jsx)("button",{className:"avatar-dropzone-save-button",onClick:I,children:x("lblSave")}),Object(m.jsx)("div",{className:"avatar-dropzone-cancel",title:x("lblCancelEditing"),onClick:A,children:Object(m.jsx)(b.a,{size:"26px",className:"avatar-dropzone-icon"})})]})})):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{src:t}),Object(m.jsx)("div",{className:"avatar-dropzone-edit",title:x("lblEditPhoto"),onClick:function(e){return y(!0)},children:Object(m.jsx)(o.a,{size:"26px",className:"avatar-dropzone-icon"})})]})})}})})},384:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(379);var n=a(3),c=function(e){var t=e.children;return Object(n.jsx)("div",{className:"card",children:t})}},549:function(e,t,a){},550:function(e,t,a){},551:function(e,t,a){},552:function(e,t,a){},553:function(e,t,a){},554:function(e,t,a){},593:function(e,t,a){"use strict";a.r(t);var n=a(62),c=a(6),i=a.n(c),r=a(9),s=a(28),l=a(566),b=a(565),o=a(0),d=a(57),j=a(41),u=a(15),m=a(33),O=a(500),x=a(413),h=a(408),p=a(540),v=a(541),f=a(328),_=a(331),g=a(336),N=a(144),y=a(86),k=a(53),w=a(87),z=a(137),C=a(48),P=a(383),S=a(359),I=(a(549),a(3)),A=function(e){var t=e.nickname,a=e.name,n=e.profile_image,c=e.country_name,l=e.city,b=e.create_date_formatted,A=e.privacyData,R=e.phone_number,D=e.mobile_number,F=e.fax_number,T=e.website,U=Object(g.a)(),E=Object(s.a)(U,1)[0],L=Object(u.a)(),V=Object(C.a)().goTo,W=n?Object(z.a)(n):N.b,G=function(e,t){var a=null;(t||e)&&(a="https://www.google.com/maps/place/",t?e&&(a+=",+ "+e):a+=e);var n=[],c=null;return e&&n.push(e),t&&n.push(t),0!==n.length&&(c=n.join(", ")),c||a?{label:c,url:a}:null}(c,l),K=function(e){return e||null}(b),M=function(e,t){if(!e&&!t)return null;var a=[];return t&&a.push(t),e&&a.push(e),0!==a.length?a.join(", "):null}(R,D),q=Object(o.useCallback)((function(){L(Object(k.g)()),V("/",!1,{})}),[L,V]),B=Object(o.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.h)(t);case 2:(null===(c=e.sent)||void 0===c||null===(a=c.data)||void 0===a?void 0:a.error_id)&&0!==(null===c||void 0===c||null===(n=c.data)||void 0===n?void 0:n.error_id)?(Object(m.a)({type:"WARNING",description:j.a[null===c||void 0===c||null===(r=c.data)||void 0===r?void 0:r.error_id]}),w.a.dispatch(Object(y.c)())):L(Object(k.f)());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[L]);return Object(I.jsxs)("div",{className:"basic-org-info",children:[Object(I.jsx)("div",{className:"basic-org-info-image",children:Object(I.jsx)(P.a,{currentImage:W,onSaveImage:B})}),Object(I.jsxs)("div",{children:[(null===A||void 0===A?void 0:A.name_public)&&Object(I.jsx)("div",{className:"org-name",children:a}),t&&Object(I.jsx)("div",{className:"org-name org-name__nickname",children:t})]}),Object(I.jsx)("div",{className:"organization-divider"}),(null===A||void 0===A?void 0:A.address_public)&&G&&Object(I.jsx)(S.a,{children:G.url&&Object(I.jsxs)("a",{href:G.url,target:"_blank",rel:"noopener noreferrer",className:"profile-location",children:[Object(I.jsx)(O.a,{size:15}),G.label&&Object(I.jsx)("span",{className:"org-location-label",children:G.label})]})}),(null===A||void 0===A?void 0:A.phone_public)&&M&&Object(I.jsx)(S.a,{children:Object(I.jsxs)("div",{className:"profile-info-data",children:[Object(I.jsx)(x.a,{size:15}),Object(I.jsx)("span",{className:"profile-info-label",children:M})]})}),(null===A||void 0===A?void 0:A.phone_public)&&F&&Object(I.jsx)(S.a,{children:Object(I.jsxs)("div",{className:"profile-info-data",children:[Object(I.jsx)(h.a,{size:15}),Object(I.jsx)("span",{className:"profile-info-label",children:F})]})}),(null===A||void 0===A?void 0:A.website_public)&&T&&Object(I.jsx)(S.a,{children:Object(I.jsxs)("div",{className:"profile-info-data",children:[Object(I.jsx)(p.a,{size:15}),Object(I.jsx)("span",{className:"profile-info-label",children:T})]})}),K&&Object(I.jsx)(S.a,{children:Object(I.jsxs)("div",{className:"org-info-data",children:[Object(I.jsx)(v.a,{size:15}),Object(I.jsxs)("span",{className:"org-info-label",children:[E("lblOrganizationCreated"),": ",K]})]})}),Object(I.jsxs)("div",{className:"org-buttons",children:[Object(I.jsxs)("button",{className:"org-button-1",onClick:function(){},children:[Object(I.jsx)(f.a,{size:15}),Object(I.jsx)("span",{children:E("lblPublishedItems")})]}),Object(I.jsxs)("button",{className:"org-button-2",onClick:q,children:[Object(I.jsx)(_.a,{size:15}),Object(I.jsx)("span",{children:E("lblSignOffFromProfile")})]})]})]})},R=a(384),D=a(10),F=a(588),T=a(591),U=a(355),E=a(146),L=a(360),V=a(348),W=a(338),G=a(350),K=a(346),M=T.a.Item,q=function(e){var t=e.hasRights,a=Object(g.a)(),n=Object(s.a)(a,1)[0],c=Object(u.b)((function(e){return e.countries.list})).map((function(e){var t=e.id,a=e.name;return{value:t.toString(),label:a}}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(l.a,{gutter:[30,0],children:[Object(I.jsx)(G.a,{children:Object(I.jsx)(M,{name:"nickname",children:Object(I.jsx)(W.a,{label:n("lblUserId"),disabled:!t})})}),Object(I.jsx)(G.a,{}),Object(I.jsx)(G.a,{children:Object(I.jsx)(M,{name:"name",children:Object(I.jsx)(W.a,{label:n("lblCompanyName"),disabled:!t})})}),Object(I.jsx)(G.a,{}),Object(I.jsx)(G.a,{children:Object(I.jsx)(M,{name:"description",children:Object(I.jsx)(W.a,{label:n("lblLongCompanyName"),disabled:!t})})}),Object(I.jsx)(G.a,{}),Object(I.jsx)(G.a,{children:Object(I.jsx)(M,{name:"country",children:Object(I.jsx)(K.a,{label:n("lblCountry"),options:c,disabled:!t})})}),Object(I.jsx)(G.a,{}),Object(I.jsx)(G.a,{children:Object(I.jsx)(M,{name:"owner_nickname",children:Object(I.jsx)(W.a,{label:n("lblOwner"),disabled:!0})})}),Object(I.jsx)(G.a,{children:Object(I.jsx)(M,{name:"organization_type_name",children:Object(I.jsx)(W.a,{label:n("lblOrganizationType"),disabled:!0})})})]}),t&&Object(I.jsx)("button",{type:"submit",className:"organization-save-button",children:n("lblSave")})]})},B=a(507),J=a(60),H=(a(550),function(e){var t=e.users,a=e.removeUser,n=Object(g.a)(),c=Object(s.a)(n,1)[0];return 0!==(null===t||void 0===t?void 0:t.length)?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(J.i,{responsive:!0,bordered:!0,children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:c("lblUsername")}),Object(I.jsx)("th",{children:c("lblName")}),Object(I.jsx)("th",{})]})}),Object(I.jsx)("tbody",{children:t.map((function(e){var t=[];return e.first_name&&t.push(e.first_name),e.last_name&&t.push(e.last_name),Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:e.nickname}),Object(I.jsx)("td",{children:t}),Object(I.jsx)("td",{children:Object(I.jsx)("button",{onClick:function(){a(e.id)},children:Object(I.jsx)(B.a,{size:15})})})]},e.id)}))})]}),Object(I.jsx)("button",{type:"submit",className:"organization-save-button",children:c("lblAddLinkedAccount")})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(J.i,{responsive:!0,bordered:!0,children:Object(I.jsx)("thead",{children:Object(I.jsx)("tr",{children:Object(I.jsx)("td",{colSpan:3,className:"text-align-center",children:c("lblNoData")})},11)})}),Object(I.jsx)("button",{type:"button",className:"organization-save-button",children:c("lblAddLinkedAccount")})]})}),Y=a(356),Q=T.a.Item,X=function(e){var t=e.hasRights,a=Object(g.a)(),n=Object(s.a)(a,1)[0];return Object(I.jsxs)(I.Fragment,{children:[" ",Object(I.jsxs)(l.a,{gutter:[30,0],children:[Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{name:"taxable",children:Object(I.jsx)(K.a,{label:n("lblVatPayer"),options:[{label:n("lblYes"),value:"1"},{label:n("lblNo"),value:"2"}],disabled:!t})})}),Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{name:"vat_id",children:Object(I.jsx)(W.a,{label:n("lblVatId"),disabled:!t})})}),Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{name:"address",children:Object(I.jsx)(W.a,{label:n("lblAddress"),disabled:!t})})}),Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{name:"address_2",children:Object(I.jsx)(W.a,{label:n("lblAddress")+" 2",disabled:!t})})}),Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{name:"post_code",children:Object(I.jsx)(W.a,{label:n("lblPostcode"),disabled:!t})})}),Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{name:"city",children:Object(I.jsx)(W.a,{label:n("lblCity"),disabled:!t})})}),Object(I.jsx)(Y.a,{children:Object(I.jsx)(Q,{name:"mobile_number",children:Object(I.jsx)(W.a,{label:n("lblMobileTelephoneNumber"),disabled:!t})})}),Object(I.jsx)(Y.a,{children:Object(I.jsx)(Q,{name:"phone_number",children:Object(I.jsx)(W.a,{label:n("lblLandlineTelephoneNumber"),disabled:!t})})}),Object(I.jsx)(Y.a,{children:Object(I.jsx)(Q,{name:"fax_number",children:Object(I.jsx)(W.a,{label:n("lblFaxNumber"),disabled:!t})})}),Object(I.jsx)(Y.a,{children:Object(I.jsx)(Q,{name:"website",children:Object(I.jsx)(W.a,{label:n("lblWebsite"),disabled:!t})})}),Object(I.jsx)(Y.a,{children:Object(I.jsx)(Q,{name:"email",children:Object(I.jsx)(W.a,{label:n("lblEmail"),disabled:!t})})})]}),t&&Object(I.jsx)("button",{type:"submit",className:"organization-save-button",children:n("lblSave")})]})},Z=(a(551),a(562)),$=(a(552),T.a.Item),ee=function(e){var t=e.hasRights,a=Object(g.a)(),n=Object(s.a)(a,1)[0];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(l.a,{children:[Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)($,{name:"name_public",valuePropName:"checked",className:"no-gap",children:Object(I.jsx)(Z.a,{disabled:!t,children:n("lblShowOrganizationNamePublic")})})}),Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)($,{name:"address_public",valuePropName:"checked",className:"no-gap",children:Object(I.jsx)(Z.a,{disabled:!t,children:n("lblShowCompanyAddress")})})}),Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)($,{name:"phone_public",valuePropName:"checked",className:"no-gap",children:Object(I.jsx)(Z.a,{disabled:!t,children:n("lblMobilePhoneVisible")})})}),Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)($,{name:"website_public",valuePropName:"checked",className:"no-gap",children:Object(I.jsx)(Z.a,{disabled:!t,children:n("lblWebsiteVisible")})})}),Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)($,{name:"expired_items_notifications",valuePropName:"checked",className:"no-gap",children:Object(I.jsx)(Z.a,{disabled:!t,children:n("lblNotificationsExpiredItems")})})}),Object(I.jsx)(b.a,{span:24,children:Object(I.jsx)($,{name:"contact_notifications",valuePropName:"checked",className:"no-gap",children:Object(I.jsx)(Z.a,{disabled:!t,children:n("lblNotificationsNewMessages")})})})]}),t&&Object(I.jsx)("button",{type:"submit",className:"organization-save-button",children:n("lblSave")})]})},te=F.a.TabPane,ae=function(e){var t=e.removeUser,a=e.org,n=e.privacyData,c=e.users,l=e.hasRights,b=e.userId,O=Object(g.a)(),x=Object(s.a)(O,1)[0],h=Object(U.useForm)(),p=Object(s.a)(h,1)[0],v=Object(u.a)(),f=Object(o.useState)(),_=Object(s.a)(f,2),N=_[0],y=_[1];Object(o.useEffect)((function(){var e={};a.nickname&&(e.nickname=a.nickname),a.name&&(e.name=a.name),a.description&&(e.description=a.description),a.country&&(e.country=a.country.toString()),a.owner_nickname&&(e.owner_nickname=a.owner_nickname),a.organization_type_name&&(e.organization_type_name=a.organization_type_name),a.taxable?e.taxable="1":e.taxable="2",a.vat_id&&(e.vat_id=a.vat_id),a.address&&(e.address=a.address),a.address_2&&(e.address_2=a.address_2),a.post_code&&(e.post_code=a.post_code),a.city&&(e.city=a.city),a.mobile_number&&(e.mobile_number=a.mobile_number),a.phone_number&&(e.phone_number=a.phone_number),a.fax_number&&(e.fax_number=a.fax_number),a.website&&(e.website=a.website),a.email&&(e.email=a.email),e.address_public=n.address_public,e.contact_notifications=n.contact_notifications,e.email_public=n.email_public,e.expired_items_notifications=n.expired_items_notifications,e.name_public=n.name_public,e.phone_public=n.phone_public,e.website_public=n.website_public,y(e)}),[a,n]);var w=Object(o.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(t){var c,r,s,l,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p.isFieldsTouched()){e.next=2;break}return e.abrupt("return");case 2:return(c=Object(D.a)({},a)).id&&(c.organization_id=c.id),t.nickname&&(c.nickname=t.nickname),t.name&&(c.name=t.name),t.description&&(c.description=t.description),t.country&&(c.country=parseInt(t.country)),t.owner_nickname&&(c.owner_nickname=t.owner_nickname),t.organization_type_name&&(c.organization_type_name=t.organization_type_name),"1"===t.taxable?c.taxable=!0:c.taxable=!1,t.vat_id&&(c.vat_id=t.vat_id),t.address&&(c.address=t.address),t.address_2&&(c.address_2=t.address_2),t.post_code&&(c.post_code=t.post_code),t.city&&(c.city=t.city),t.mobile_number&&(c.mobile_number=t.mobile_number),t.phone_number&&(c.phone_number=t.phone_number),t.fax_number&&(c.fax_number=t.fax_number),t.website&&(c.website=t.website),t.email&&(c.email=t.email),r=Object(D.a)({},n),void 0!==t.address_public&&(r.address_public=t.address_public),void 0!==t.contact_notifications&&(r.contact_notifications=t.contact_notifications),void 0!==t.email_public&&(r.email_public=t.email_public),void 0!==t.expired_items_notifications&&(r.expired_items_notifications=t.expired_items_notifications),void 0!==t.name_public&&(r.name_public=t.name_public),void 0!==t.phone_public&&(r.phone_public=t.phone_public),void 0!==t.website_public&&(r.website_public=t.website_public),e.prev=29,e.next=32,Object(d.g)(c);case 32:return(null===(l=e.sent)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.error_id)&&(0!==(null===l||void 0===l?void 0:l.error_id)?Object(m.a)({type:"WARNING",description:j.a[null===l||void 0===l||null===(b=l.data)||void 0===b?void 0:b.error_id]}):Object(m.a)({type:"SUCCESS",description:"lblSuccessProfileUpdate"})),e.next=36,Object(E.d)(r);case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(29),console.error(e.t0);case 41:v(Object(k.f)());case 42:case"end":return e.stop()}}),e,null,[[29,38]])})));return function(t){return e.apply(this,arguments)}}(),[v,p,a,n]);return N?Object(I.jsxs)(T.a,{form:p,name:"organization-form",initialValues:N,onFinish:w,children:[Object(I.jsx)("div",{className:"profile-form-header",children:Object(I.jsx)(V.a,{title:x("lblOrganizationProfile")})}),Object(I.jsxs)(F.a,{defaultActiveKey:"1",type:"card",renderTabBar:function(e){return Object(I.jsx)(L.a,{tabs:e})},children:[Object(I.jsx)(te,{tab:x("lblAccountData"),children:Object(I.jsx)(q,{hasRights:l})},"1"),Object(I.jsx)(te,{tab:x("lblCompanyData"),children:Object(I.jsx)(X,{hasRights:l})},"2"),Object(I.jsx)(te,{tab:x("lblSecurityPrivacy"),children:Object(I.jsx)(ee,{hasRights:l})},"3"),b===a.owner&&Object(I.jsx)(te,{tab:x("lblLinkedAccounts"),children:Object(I.jsx)(H,{users:c,removeUser:t})},"4")]})]}):null},ne=(a(553),function(){var e=Object(u.b)((function(e){return e.organizations.list})),t=Object(u.b)((function(e){return e.organizations.membership})),a=Object(u.b)((function(e){return e.organizations.active})),c=Object(u.b)((function(e){return e.organizations.privacy})),O=Object(u.b)((function(e){return e.user.id})),x=Object(o.useState)(),h=Object(s.a)(x,2),p=h[0],v=h[1],f=Object(o.useCallback)(Object(r.a)(i.a.mark((function e(){var t,a,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)();case 2:if((null===(c=e.sent)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.error_id)&&0!==(null===c||void 0===c?void 0:c.error_id)&&Object(m.a)({type:"WARNING",description:j.a[null===c||void 0===c||null===(r=c.data)||void 0===r?void 0:r.error_id]}),0===(null===c||void 0===c||null===(a=c.data)||void 0===a||null===(n=a.items)||void 0===n?void 0:n.length)){e.next=7;break}return v(c.data.items),e.abrupt("return");case 7:v([]);case 8:case"end":return e.stop()}}),e)}))),[]),_=Object(o.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(t);case 2:return e.next=4,f();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f]);Object(o.useEffect)((function(){f()}),[]);var g=[].concat(Object(n.a)(e),Object(n.a)(t)).find((function(e){return e.id===a})),N=void 0!==e.find((function(e){return e.id===a}));return g?Object(I.jsxs)(l.a,{gutter:[20,0],children:[Object(I.jsx)(b.a,{xl:6,lg:8,sm:8,xs:24,children:Object(I.jsx)(R.a,{children:Object(I.jsx)(A,{profile_image:g.profile_image,name:g.name,nickname:g.nickname,country_name:g.country_name,city:g.city,create_date_formatted:g.create_date_formatted,phone_number:g.phone_number,mobile_number:g.mobile_number,fax_number:g.fax_number,website:g.website,privacyData:c})})}),Object(I.jsx)(b.a,{xl:18,lg:16,sm:16,xs:24,children:Object(I.jsx)(R.a,{children:void 0!==p&&Object(I.jsx)(ae,{org:g,privacyData:c,users:p,hasRights:N,userId:O,removeUser:_})})})]}):null});a(554),t.default=function(){return Object(I.jsx)("div",{className:"organization-profile",children:Object(I.jsx)(ne,{})})}}}]);
//# sourceMappingURL=8.e6b87363.chunk.js.map