(this.webpackJsonpvevergo=this.webpackJsonpvevergo||[]).push([[7],{310:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(9),i=a.n(n),r=a(12),c=a(33),s=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c.a)("GET","/view/item_listing/".concat(t,"/media")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},353:function(e,t,a){},354:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){},360:function(e,t,a){},374:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);a(353);var n=a(3),i=function(e){var t=e.children;return Object(n.jsx)("div",{className:"page-container",children:t})},r=a(9),c=a.n(r),s=a(12),l=a(20),o=a(0),d=a(310),u=a(33),m=function(){var e=Object(s.a)(c.a.mark((function e(t,a,n){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="view/item_listing/".concat(t),e.abrupt("return",Object(u.a)("GET",i,a,null,n));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),j=a(16),b=a(297),_=a(405),p=a(355),v=a(406),O=a(304),h=(a(354),function(e){var t=e.isFavorite,a=e.isLoggedIn,i=e.className,r=e.onFavoriteClick,c=e.userEmail,s=Object(O.a)().t,l=Object(o.useMemo)((function(){var e=window.location.href,t=encodeURI(e);return"https://facebook.com/sharer/sharer.php?u=".concat(t)}),[]),d=Object(o.useMemo)((function(){return"mailto:".concat(c)}),[c]),u=Object(o.useCallback)((function(){window.print()}),[]);return Object(n.jsxs)("div",{className:i,children:[a&&Object(n.jsx)("span",{onClick:r,title:s(t?"lblRemoveFromFavorites":"lblAddToFavorites"),className:"ad-details-icon",children:Object(n.jsx)(b.a,{className:"ad-details-icon__svg ".concat(t?"favorite":"")})}),Object(n.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"ad-details-icon",children:Object(n.jsx)(_.a,{className:"ad-details-icon__svg"})}),Object(n.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"ad-details-icon",children:Object(n.jsx)(p.a,{className:"ad-details-icon__svg"})}),Object(n.jsx)("span",{onClick:u,className:"ad-details-icon",children:Object(n.jsx)(v.a,{className:"ad-details-icon__svg"})})]})}),f=(a(356),a(357),function(e){var t=e.currency_name,a=e.price_formatted,i=e.converted_price_formatted,r=e.measurement_unit_name,c=e.cn,s=e.shouldDisplaySeparator,l=e.price_by_agreement,o=e.activeCurrency,d=Object(O.a)().t;return Object(n.jsxs)("div",{className:c,children:["top"===s&&Object(n.jsx)("div",{className:"ad-details-price__horizontal-separator"}),Object(n.jsx)("h2",{children:Object(n.jsxs)("strong",{children:[t===o?a:i||a?"\u2248 ".concat(i):null," ",i||a?o:l?d("lblPriceByAgreement"):null,!!r&&"/",r]})}),t!==o&&Object(n.jsxs)("span",{className:"ad-details-price__segment-text",children:[a," ",t,!!r&&"/",r]}),"bottom"===s&&Object(n.jsx)("div",{className:"ad-details-price__horizontal-separator"})]})}),x=a(358),g=a.n(x),N=(a(359),a(360),function(e){var t=e.images,a=Object(o.useMemo)((function(){return t.map((function(e,t){var a=e.imageUrl,i=e.thumbnailUrl,r=e.videoUrl,c=e.media_type,s={original:a,thumbnail:i,description:e.comment,originalClass:"image-gallery-original",thumbnailClass:"image-gallery-thumbnail"};return 1===c||(s.renderItem=function(){return function(e,t){return Object(n.jsx)("div",{className:"video-wrapper",children:Object(n.jsx)("iframe",{title:t,width:"560",height:"315",src:e,frameBorder:"0",allowFullScreen:!0})})}(r,t)}),s}))}),[t]);return Object(n.jsx)("div",{className:"image-gallery-wrapper",children:Object(n.jsx)(g.a,{items:a,showPlayButton:!1,showBullets:!0,showIndex:!0,lazyLoad:!0})})}),w=a(361),y=a(407),k=a(408),C=a(409),F=a(350),M=(a(374),0),L=function(e){var t=e.attributes,a=Object(o.useCallback)((function(e,t,a,n,i){if(0===a.length)return[e,t];if(n===i)return[e,t];var r=a.find((function(e){return e.metric_system===i}))||{},c=r.value_formatted;return[void 0===c?e:c,r.name]}),[]),i=Object(o.useMemo)((function(){var e="";return t.reduce((function(t,n,i){var r=n.group_name,c=n.name,s=n.value_formatted,o=n.measurement_unit_name,d=n.additional_measurement_units,u=n.metric_system;t[r]||(t[r]=[]);var m=a(s,o,d,u,false),j=Object(l.a)(m,2),b={key:c,value:j[0],unit:j[1]};return 0===i&&(e=c),0!==i&&(c!==e?e=c:b.key=""),t[r].push(b),t}),{})}),[t,a]),r=Object(o.useState)(new Set),c=Object(l.a)(r,2),s=c[0],d=c[1],u=Object(o.useCallback)((function(e){d((function(t){return t.has(e)?t.delete(e):t.add(e),t}))}),[]);return Object(n.jsx)("div",{className:"ad-details__details-info-container",children:Object.keys(i).map((function(e,t){var a=i[e],r=!s.has(e);return M++,Object(n.jsxs)("div",{className:"ad-details__details-info-group-container",children:[Object(n.jsxs)("div",{className:"ad-details__details-info-group-title-container ".concat(M%2===1?"ad-details__details-info-group-item-white":""),onClick:function(){return u(e)},children:[Object(n.jsx)("div",{children:r?Object(n.jsx)(y.a,{className:"ad-details__details-info-group-title-container-icon"}):Object(n.jsx)(k.a,{className:"ad-details__details-info-group-title-container-icon"})}),Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:e})})]}),r&&Object(n.jsx)("div",{className:"ad-details__details-info-group-info-container",children:a.map((function(e,a){M++;var i=e.key,r=e.value,c=e.unit;return Object(n.jsxs)("div",{className:"ad-details__details-info-group-info-item ".concat(M%2===1?"ad-details__details-info-group-item-white":""),children:[Object(n.jsxs)("div",{className:"ad-details__details-info-group-key",children:[i,""!==i?":":""]}),Object(n.jsx)("div",{className:"ad-details__details-info-group-value",children:Object(n.jsxs)("strong",{children:[Object(n.jsx)(I,{value:r})," ",c]})})]},t)}))})]},t)}))})},I=function(e){var t=e.value;switch(t){case"True":return Object(n.jsx)(C.a,{size:15});case"False":return Object(n.jsx)(F.a,{size:15});default:return t}},z=a(344),S=a(410),T=a(58);t.default=function(){var e=Object(O.a)().t,t=function(){var e,t,a,n=Object(j.b)((function(e){return e.currencies})),i=n.active,r=n.list,u=Object(j.b)((function(e){return e.languages})),b=u.active,_=u.list,p=Object(o.useMemo)((function(){var e;return null===(e=_.find((function(e){return e.id===b})))||void 0===e?void 0:e.code}),[b,_]),v=Object(o.useState)(),O=Object(l.a)(v,2),h=O[0],f=O[1],x=Object(o.useState)(),g=Object(l.a)(x,2),N=g[0],w=g[1],y=r.find((function(e){return e.id===i})).name;Object(o.useEffect)((function(){try{var e=window.location.pathname;console.log(e,e.split("/"));var t=e.split("/")[2];console.log(t),f(t)}catch(a){console.log("error")}}),[]),Object(o.useEffect)((function(){h&&function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r,s,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={iss_authentication_token:null},p&&(n["accept-language"]=p),e.next=4,m(t,{currency:i},n);case 4:return 0!==(null===(r=e.sent)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.error_id)&&(window.location.href="/"),s=r.data.items[0],e.next=9,Object(d.a)(t);case 9:l=e.sent,o=l.data.items.reduce((function(e,t){var a=t.id,n=t.comment,i=t.media_type,r=t.video_code,c={comment:n,media_type:i,image_height:t.image_height,image_width:t.image_width,imageUrl:1===i?"https://api.vevergo.com:4443/item_images/"+a+".jpeg":"https://img.youtube.com/vi/"+r+"/maxresdefault.jpg",videoUrl:2===i?"https://www.youtube.com/embed/"+r:null,thumbnailUrl:1===i?"https://api.vevergo.com:4443/item_adjusted_images/"+a+".jpeg":"https://img.youtube.com/vi/"+r+"/maxresdefault.jpg"};return t.default?e.unshift(c):e.push(c),e}),[]),w({item:s,media:o});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(h)}),[h,p,i]);var k=Object(o.useMemo)((function(){return!1}),[]),C=Object(o.useMemo)((function(){return!1}),[]),F=Object(o.useCallback)((function(){}),[]),M=Object(o.useMemo)((function(){var e,t;return"1"===(null===N||void 0===N||null===(e=N.item)||void 0===e?void 0:e.owner)?"/my-items":"/profile/".concat(null===N||void 0===N||null===(t=N.item)||void 0===t?void 0:t.owner,"/items")}),[null===N||void 0===N||null===(e=N.item)||void 0===e?void 0:e.owner]),L=Object(o.useMemo)((function(){var e,t,a,n,i,r,c,s=null!==(e=null===N||void 0===N||null===(t=N.item)||void 0===t?void 0:t.country_name)&&void 0!==e?e:"",l="https://www.google.com/maps/place/";return(null===N||void 0===N||null===(a=N.item)||void 0===a?void 0:a.place)?(l+=(null===N||void 0===N||null===(n=N.item)||void 0===n?void 0:n.place)+",+ "+(null===N||void 0===N||null===(i=N.item)||void 0===i?void 0:i.country_name),s+=", "+(null===N||void 0===N||null===(r=N.item)||void 0===r?void 0:r.place)):l+=null===N||void 0===N||null===(c=N.item)||void 0===c?void 0:c.country_name,{placeLink:l,placeText:s}}),[null===N||void 0===N||null===(t=N.item)||void 0===t?void 0:t.country_name,null===N||void 0===N||null===(a=N.item)||void 0===a?void 0:a.place]),I=L.placeLink,z=L.placeText,S=Object(o.useState)(!1),T=Object(l.a)(S,2),E=T[0],U=T[1],B=Object(o.useState)(!1),D=Object(l.a)(B,2),R=D[0],P=D[1];return{ad:N,isFavorite:k,isLoggedIn:C,onFavoriteClick:F,activeCurrencyName:y,userLink:M,placeLink:I,placeText:z,userId:"1",modalOpen:E,setModalOpen:U,reportModalOpen:R,setReportModalOpen:P}}(),a=t.ad,r=t.isFavorite,u=t.isLoggedIn,b=t.onFavoriteClick,_=t.activeCurrencyName,v=t.userLink,x=t.placeLink,g=t.placeText,y=t.userId,k=(t.modalOpen,t.setModalOpen),C=(t.reportModalOpen,t.setReportModalOpen);if(!a)return null;var F=a.item,M=a.media,I=F.listing_type_name,E=F.title,U=F.description,B=F.attributes,D=F.price_formatted,R=F.currency_name,P=F.converted_price_formatted,A=F.owner_nickname,G=F.expiry_date_formatted,J=F.change_date_formatted,V=F.create_date_formatted,q=F.view_count,H=F.owner_phone_number,K=F.owner_mobile_number,Q=F.owner,W=F.measurement_unit_name,X=F.price_by_agreement,Y=F.owner_name,Z=K||H;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(i,{children:Object(n.jsxs)("div",{className:"ad-details",children:[Object(n.jsxs)("div",{className:"ad-details__header",children:[Object(n.jsxs)("span",{className:"ad-details__header-title",children:[Object(n.jsx)("strong",{children:I}),": ",E]}),Object(n.jsx)(h,{isFavorite:r,isLoggedIn:u,className:"ad-details-icon-wrapper-desktop",onFavoriteClick:b,userEmail:"test@tset.test"})]}),Object(n.jsx)(f,{currency_name:R,price_formatted:D,converted_price_formatted:P,measurement_unit_name:W,cn:"ad-details-price__mobile",shouldDisplaySeparator:"top",price_by_agreement:X,activeCurrency:_}),Object(n.jsxs)("div",{className:"ad-details__main",children:[Object(n.jsxs)("div",{className:"ad-details__main-info",children:[Object(n.jsx)("div",{className:"ad-details__main-swiper",children:0!==M.length&&Object(n.jsx)(N,{images:M})}),Object(n.jsx)("span",{className:"ad-details__section-label",children:Object(n.jsx)("strong",{children:e("lblDescription")})}),Object(n.jsx)("div",{className:"ad-details-price__horizontal-separator "}),Object(n.jsx)("span",{className:"ad-details__section-text",children:Object(w.a)(U)}),Object(n.jsx)("span",{className:"ad-details__section-label",children:Object(n.jsx)("strong",{children:e("lblDetails")})}),Object(n.jsx)("div",{className:"ad-details-price__horizontal-separator "}),Object(n.jsx)(L,{attributes:B}),Object(n.jsx)("div",{className:"ad-details-price__horizontal-separator "})]}),Object(n.jsx)("div",{className:"ad-details__empty-segment"}),Object(n.jsxs)("div",{className:"ad-details__price-segment",children:[Object(n.jsx)(f,{currency_name:R,price_formatted:D,converted_price_formatted:P,measurement_unit_name:W,cn:"ad-details-price",shouldDisplaySeparator:"bottom",price_by_agreement:X,activeCurrency:_}),Object(n.jsxs)("span",{className:"ad-details-price__segment-text",children:[e("lblPostedBy"),":"," ",Object(n.jsxs)(T.b,{to:v,children:[A,null!==Y?" (".concat(Y,")"):""]})]}),Object(n.jsxs)("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"ad-details__segmnet-link",children:[Object(n.jsx)(z.a,{size:15,className:"ad-details__mappin"}),Object(n.jsx)("span",{className:"ad-details__segmnet-link-text",children:g})]}),Object(n.jsxs)("span",{className:"ad-details-price__segment-text",children:[e("lblValidTo"),": ",G]}),Object(n.jsx)("div",{className:"ad-details-price__horizontal-separator "}),Object(n.jsxs)("div",{className:"ad-details__contact-container",children:[u&&y!==Q&&Object(n.jsxs)("div",{className:"ad-details__phone-button",onClick:function(){return k(!0)},children:[Object(n.jsx)(p.a,{}),e("lblContactOwner")]}),Z&&Object(n.jsx)("div",{children:Object(n.jsxs)("a",{href:"tel:".concat(Z),className:"ad-details__phone-button",children:[Object(n.jsx)(S.a,{}),Z]})})]})]})]}),Object(n.jsx)(h,{isFavorite:r,isLoggedIn:u,className:"ad-details-icon-wrapper-mobile",onFavoriteClick:b,userEmail:"test@tset.test"}),Object(n.jsxs)("div",{className:"ad-details__footer",children:[Object(n.jsx)("span",{onClick:function(){return C(!0)},className:"ad-details__footer-text report-item",children:e("lblReportItem")}),Object(n.jsxs)("span",{className:"ad-details__footer-text",children:[e("lblCreated"),": ",Object(n.jsx)("strong",{children:V}),", ",e("lblChanged"),":"," ",Object(n.jsx)("strong",{children:J}),", ",e("lblViews"),": ",Object(n.jsx)("strong",{children:q})]})]})]})})})}}}]);
//# sourceMappingURL=7.46760a21.chunk.js.map