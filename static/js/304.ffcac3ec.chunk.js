"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{600:function(n,t,e){e.d(t,{O:function(){return g}});var r,a,c,o,i,u=e(689),s=e(168),p=e(444),f=e(87),v=p.ZP.li(r||(r=(0,s.Z)(["\n  width: calc((100% - 10px) / 3);\n  box-shadow: 0px 0px 13px 1px #a39b9c;\n"]))),h=(0,p.ZP)(f.rU)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n"]))),x=p.ZP.p(c||(c=(0,s.Z)(["\n  height: 40px;\n  margin-bottom: 5px;\n  text-align: center;\n  color: black;\n  font-weight: 700;\n"]))),l=p.ZP.img(o||(o=(0,s.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),d=e(184),m=function(n){var t=n.movie,e=(0,u.TH)();return(0,d.jsx)(v,{children:(0,d.jsxs)(h,{to:"/movies/".concat(t.id),state:{from:e},children:[(0,d.jsx)(x,{children:t.title}),(0,d.jsx)(l,{src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):"http://placehold.it/200x300",alt:t.title})]})})},Z=p.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  list-style-type: none;\n"]))),g=function(n){var t=n.movies;return(0,d.jsx)(Z,{children:t.map((function(n){return(0,d.jsx)(m,{movie:n},n.id)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(861),c=e(439),o=e(757),i=e.n(o),u=e(600),s=e(791),p=e(390),f=e(245),v=e(168),h=e(444).ZP.h2(r||(r=(0,v.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),x=e(184),l=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],o=(0,s.useState)(!1),v=(0,c.Z)(o,2),l=v[0],d=v[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,(0,p.Df)();case 4:t=n.sent,r(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,x.jsx)("div",{children:l?(0,x.jsx)(f.Z,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h,{children:"Tranding movies"}),(0,x.jsx)(u.O,{movies:e})]})})}},390:function(n,t,e){e.d(t,{Cf:function(){return f},Df:function(){return s},Re:function(){return v},bs:function(){return p},h7:function(){return h}});var r=e(861),a=e(757),c=e.n(a),o=e(912),i="https://api.themoviedb.org/3/",u="77c88a9974e8e5cf721d75ac1e275e9a",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"trending/movie/week?api_key=").concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,o.Z.get("".concat(i,"search/movie?api_key=").concat(u,"&query=").concat(t,"&page=").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.ffcac3ec.chunk.js.map