"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[763],{763:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var t,a,i,s,o,c,u,p,l,d=r(861),h=r(439),x=r(757),f=r.n(x),v=r(791),g=r(689),b=r(515),m=r(168),w=r(444),y=r(87),j=(0,w.ZP)(y.rU)(t||(t=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 16px 0 8px 0;\n\n  text-decoration: none;\n  font-size: 16px;\n  text-transform: uppercase;\n\n  color: black;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    color: orangered;\n  }\n"]))),Z=r(184),k=function(e){var n,r,t=e.children,a=null!==(n=null===(r=(0,g.TH)().state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/";return(0,Z.jsx)(j,{to:a,children:t})},_=w.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  padding: 0;\n  border-bottom: 1px solid black;\n"]))),P=w.ZP.img(i||(i=(0,m.Z)(["\n  display: block;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n"]))),M=w.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 5px 20px;\n"]))),S=w.ZP.ul(o||(o=(0,m.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),E=w.ZP.div(c||(c=(0,m.Z)(["\n  padding: 16px 0;\n  border-bottom: 1px solid black;\n  text-align: center;\n"]))),U=w.ZP.h2(u||(u=(0,m.Z)(["\n  margin-bottom: 12px;\n"]))),q=w.ZP.ul(p||(p=(0,m.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n"]))),z=(0,w.ZP)(y.OL)(l||(l=(0,m.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  color: black;\n  font-weight: 500;\n  font-size: 16px;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: orangered;\n  }\n"]))),C=function(){var e=(0,g.UO)().movieId,n=(0,v.useState)([]),r=(0,h.Z)(n,2),t=r[0],a=r[1],i=(0,g.TH)(),s=i.pathname,o=i.search,c="".concat(s).concat(o);if((0,v.useEffect)((function(){function n(){return(n=(0,d.Z)(f().mark((function n(){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.Z.getMovieById(Number(e));case 3:r=n.sent,a(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("something wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),!t)return null;var u=t.poster_path,p=t.title,l=t.vote_average,x=t.overview,m=t.genres,w=t.release_date,y=u?"https://image.tmdb.org/t/p/w500"+u:"https://placehold.jp/200x300.png",j=w?w.slice(0,4):"without year";return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(k,{children:" go back"}),(0,Z.jsxs)(_,{children:[(0,Z.jsx)(P,{src:y,alt:p,width:"60%",height:"60%"}),(0,Z.jsxs)(M,{children:[(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:p}),(0,Z.jsxs)("span",{children:["(",j,")"]})]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"User Score:"})," ",(0,Z.jsxs)("i",{children:[Math.round(10*l),"%"]})]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Overview: "}),(0,Z.jsx)("i",{children:x})]}),(0,Z.jsx)("p",{children:(0,Z.jsx)("b",{children:"Genres:"})}),(0,Z.jsx)(S,{children:null===m||void 0===m?void 0:m.map((function(e){var n=e.id,r=e.name;return(0,Z.jsx)("li",{children:(0,Z.jsx)("i",{children:r})},n)}))})]})]}),(0,Z.jsxs)(E,{children:[(0,Z.jsx)(U,{children:" Additional infomation"}),(0,Z.jsxs)(q,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(z,{to:"cast",state:{from:c},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(z,{to:"reviews",state:{from:c},children:"reviews"})})]})]}),(0,Z.jsx)(v.Suspense,{fallback:null,children:(0,Z.jsx)(g.j3,{})})]})}},515:function(e,n,r){var t=r(861),a=r(757),i=r.n(a),s=r(388).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"97c31631b31361f75213aa46907a2e0a",language:"en-US"}});function o(){return(o=(0,t.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/movie/day");case 2:if(n=e.sent,(r=n.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies.");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,t.Z)(i().mark((function e(n){var r,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie/?query=".concat(n));case 2:if(r=e.sent,t=r.response,(a=t.data.results).length){e.next=7;break}throw new Error("Nothing was found for your request");case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie?query=".concat(n));case 2:if(r=e.sent,(t=r.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/credits"));case 2:if(r=e.sent,(t=r.data.cast).length){e.next=6;break}throw new Error("cast not found");case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/reviews"));case 2:if(r=e.sent,t=r.data.results){e.next=6;break}throw new Error("reviews not found");case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h={getTrendingMovies:function(){return o.apply(this,arguments)},getMovieById:function(e){return c.apply(this,arguments)},searchMovieQuery:function(e){return u.apply(this,arguments)},fetchSearchMovies:function(e){return p.apply(this,arguments)},getMovieCredits:function(e){return l.apply(this,arguments)},getMovieReviews:function(e){return d.apply(this,arguments)}};n.Z=h}}]);
//# sourceMappingURL=763.b3147477.chunk.js.map