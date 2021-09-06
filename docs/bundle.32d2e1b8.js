(()=>{"use strict";var t,e={422:(t,e,o)=>{o(511),o(155);var r=o(755);class s{constructor(t,e){this.$headerMenuEl=r(t),this.$toggleEl=r(e),this.$toggleEl.on("click",(()=>{this._toggle()})),this.$headerMenuEl.find('a[href^="#"]').on("click",(()=>{this.hide()}))}_toggle(){r([this.$headerMenuEl,this.$toggleEl]).toggleClass("active")}hide(){this.$headerMenuEl.hasClass("active")&&this._toggle()}get getHeight(){return this.$headerMenuEl.outerHeight()}}var a=o(755);class i{constructor(t,e){this.$parallaxEl=a(t),this._height=e,this._scrollTop=0,this._transformPos=this._opacityRatio=null}transform(t){this._scrollTop=t,this._transformPos=0-.6*this._scrollTop,this._opacityRatio=this._opacity(this._height),this.$parallaxEl.css({opacity:this._opacityRatio,transform:"translateY("+this._transformPos+"px)"})}_opacity(t){return 1-this._scrollTop/(t/1.5)}remove(){this.$parallaxEl.removeAttr("style")}set height(t){this._height=t,this._opacityRatio=this._opacity(t),this.$parallaxEl.css({opacity:this._opacityRatio})}}var n=o(755);class l{constructor(t){this.$headerTopEl=n(t),this.height=this.getHeight}showSticky(){this.$headerTopEl.addClass("sticky")}hideSticky(){this.$headerTopEl.removeClass("sticky")}get getHeight(){return this.$headerTopEl.outerHeight()}}var c=o(755);class h{constructor(){this._offset=0,this._easeInOutCubic(),this._init()}_init(){const t=this;let e=null,o=0;c('a[href^="#"]').on("click",(function(r){r.preventDefault(),e=c(this).attr("href"),o="#"===e?0:c(e).offset().top-t._offset,c("html, body").animate({scrollTop:o},820,"easeInOutCubic")}))}_easeInOutCubic(){c.easing.easeInOutCubic=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}}set offset(t){this._offset=t}}var u=o(916),d=o.n(u),f=o(755);class p{constructor(){d()("browser-address-bar");const t=this;let e=0,o=0,r=0,a=0;let n=0,c=!1,u=!1,p=!1;this.BREAKPOINTS={XS:575.98,SM:768.98,MD:991.98,LG:1199.98},this.headerMenu=new s(".header__menu-wrapper",".header__menu_toggle"),this.headerParallax=new i(".header__hero",f(window).outerHeight()),this.headerTop=new l(".header-top"),this.scrollTo=new h,f(window).on("load",(()=>{this.removePreloader()})),f(window).on("resize",(function(){e=f(this).outerHeight(),o=f(this).outerWidth(),o<=t.BREAKPOINTS.XS&&(u||(t.headerParallax.remove(),t.scrollTo.offset=0),u=!0),o>=t.BREAKPOINTS.XS&&(t.scrollTo.offset=70,u=!1),o<=t.BREAKPOINTS.SM&&(p=!1),o>=t.BREAKPOINTS.SM&&(p||t.headerMenu.hide(),p=!0),r=t.headerTop.getHeight,a=t.headerMenu.getHeight})).trigger("resize"),f(window).on("scroll",(function(){n=f(this).scrollTop(),o<=t.BREAKPOINTS.XS&&n>a&&t.headerMenu.hide(),o>=t.BREAKPOINTS.XS&&(n<e&&t.headerParallax.transform(n),n>=e-r&&!c?(c=!0,t.headerTop.showSticky()):n<e-r&&c&&(c=!1,t.headerTop.hideSticky()))})).trigger("scroll"),this.fancyBox(),this.portfolioWebp(),this.sendMessage(),this.wayPoints()}portfolioWebp(){function t(t){return t.replace(/\.[^/.]+$/,"")+".jpg"}(function(){const t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0==t.toDataURL("image/webp").indexOf("data:image/webp")})||(f(".portfolio__cover").each((function(){const e=f(this);e.attr("src",t(e.attr("src"))),e.is("[srcset]")&&e.attr("srcset",t(e.attr("srcset")))})),f(".portfolio__gallery_img").each((function(){const e=f(this);e.attr("data-src",t(e.attr("data-src"))),e.attr("data-retina",t(e.attr("data-retina")))})))}removePreloader(){setTimeout((function(){f("body").removeClass("compensate-for-scrollbar"),f(".preloader").removeClass("visible")}),1e3)}fancyBox(){const t=window.devicePixelRatio||1;f('button[value="gallery"]').on("click",(function(){const e=f(this).closest(".portfolio__item").find(".portfolio__gallery_img");let o=[],r=null;for(let s=0;s<e.length;s++)r=t>1.5?f(e[s]).data("retina"):f(e[s]).data("src"),o.push({src:r});f.fancybox.open(o,{image:{preload:!0},transitionEffect:"slide",transitionDuration:620,wheel:!1,afterLoad:function(e,o){t>1.5&&(o.width=o.width/t,o.height=o.height/t)}})}))}sendMessage(){let t="Идёт отправка...",e="Сообщение успешно отправлено!",o="Ошибка отправки сообщения!";const r=f(".contact__form"),s=f(".contact__form_alert"),a=f(".contact__form_submit");let i=a.val();r.on("submit",(function(n){n.preventDefault(),r.addClass("inactive"),a.val(t),f.ajax({type:"POST",dataType:"json",url:"https://formcarry.com/s/r1L5qvKGX",data:f(this).serialize(),success:function(t){"success"===t.status?s.addClass("active success").text(e):this.error()},error:function(){s.addClass("active error").text(o)},complete:function(){setTimeout((function(){s.removeClass("active success error"),a.val(i),r.trigger("reset").removeClass("inactive")}),3500)}})}))}wayPoints(){let t;setTimeout((function(){!function(e,o){let r=f(window).height()/1.2;e.each((function(){let e=f(this),s=e.attr("data-animation"),a=e.attr("data-delay");e.css({animationDelay:a}),t=o?t:e,t.waypoint((function(){e.addClass(s)}),{triggerOnce:!0,offset:r})}))}(f(".animated"))}),10)}}o(755)((function(){new p}))}},o={};function r(t){var s=o[t];if(void 0!==s)return s.exports;var a=o[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,t=[],r.O=(e,o,s,a)=>{if(!o){var i=1/0;for(h=0;h<t.length;h++){for(var[o,s,a]=t[h],n=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((t=>r.O[t](o[l])))?o.splice(l--,1):(n=!1,a<i&&(i=a));if(n){t.splice(h--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var h=t.length;h>0&&t[h-1][2]>a;h--)t[h]=t[h-1];t[h]=[o,s,a]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={296:0};r.O.j=e=>0===t[e];var e=(e,o)=>{var s,a,[i,n,l]=o,c=0;if(i.some((e=>0!==t[e]))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(l)var h=l(r)}for(e&&e(o);c<i.length;c++)a=i[c],r.o(t,a)&&t[a]&&t[a][0](),t[i[c]]=0;return r.O(h)},o=self.webpackChunkmefremov=self.webpackChunkmefremov||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var s=r.O(void 0,[736],(()=>r(422)));s=r.O(s)})();