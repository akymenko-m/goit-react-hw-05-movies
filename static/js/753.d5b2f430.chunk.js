"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{600:function(n,t,e){e.d(t,{O:function(){return g}});var r,a,c,u,o,i=e(689),s=e(168),p=e(444),f=e(87),l=p.ZP.li(r||(r=(0,s.Z)(["\n  width: calc((100% - 10px) / 3);\n  box-shadow: 0px 0px 13px 1px #a39b9c;\n"]))),d=(0,p.ZP)(f.rU)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n"]))),h=p.ZP.p(c||(c=(0,s.Z)(["\n  height: 40px;\n  margin-bottom: 5px;\n  text-align: center;\n  color: black;\n  font-weight: 700;\n"]))),v=p.ZP.img(u||(u=(0,s.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),x=e(184),m=function(n){var t=n.movie,e=(0,i.TH)();return(0,x.jsx)(l,{children:(0,x.jsxs)(d,{to:"/movies/".concat(t.id),state:{from:e},children:[(0,x.jsx)(h,{children:t.title}),(0,x.jsx)(v,{src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):"http://placehold.it/200x300",alt:t.title})]})})},Z=p.ZP.ul(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  list-style-type: none;\n"]))),g=function(n){var t=n.movies;return(0,x.jsx)(Z,{children:t.map((function(n){return(0,x.jsx)(m,{movie:n},n.id)}))})}},753:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,u=e(861),o=e(439),i=e(757),s=e.n(i),p=e(791),f=e(87),l=e(390),d=e(600),h=e(168),v=e(444),x=v.ZP.form(r||(r=(0,h.Z)(["\n  margin: 20px 0;\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n"]))),m=v.ZP.input(a||(a=(0,h.Z)(["\n  width: 250px;\n  padding: 3px;\n"]))),Z=v.ZP.button(c||(c=(0,h.Z)(["\n  width: 100px;\n  padding: 5px;\n  background-color: darkblue;\n  color: white;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    border: 2px solid greenyellow;\n  }\n"]))),g=e(184),w=function(n){var t=n.onSubmit,e=n.defaultValue,r=(0,p.useState)(""),a=(0,o.Z)(r,2),c=a[0],u=a[1];return(0,g.jsxs)(x,{onSubmit:function(n){n.preventDefault(),t(c)},children:[(0,g.jsx)(m,{defaultValue:e,onChange:function(n){var t=n.target.value;u(t)},name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",required:!0}),(0,g.jsx)(Z,{type:"submit",children:"Search"})]})},b=e(245),y=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,f.lr)(),c=(0,o.Z)(a,2),i=c[0],h=c[1],v=(0,p.useState)(!1),x=(0,o.Z)(v,2),m=x[0],Z=x[1],y=i.get("query");(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(s().mark((function n(){var t,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Z(!0),n.prev=1,n.next=4,(0,l.bs)(y);case 4:t=n.sent,e=t.results,r(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:return n.prev=12,Z(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})))).apply(this,arguments)}null!==y&&function(){n.apply(this,arguments)}(y)}),[y]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(w,{onSubmit:function(n){h({query:n})},defaultValue:y}),m&&(0,g.jsx)(b.Z,{}),e.length>0?(0,g.jsx)(d.O,{movies:e}):(0,g.jsx)("p",{children:"There are no movies for your request"})]})}},390:function(n,t,e){e.d(t,{Cf:function(){return f},Df:function(){return s},Re:function(){return l},bs:function(){return p},h7:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(912),o="https://api.themoviedb.org/3/",i="77c88a9974e8e5cf721d75ac1e275e9a",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/week?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=753.d5b2f430.chunk.js.map