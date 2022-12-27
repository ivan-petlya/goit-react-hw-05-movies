"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{779:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n,a,s,i,o=t(861),u=t(439),c=t(757),p=t.n(c),f=t(791),h=t(689),d=t(515),v=t(168),x=t(444),l=x.ZP.ul(n||(n=(0,v.Z)(["\n  padding: 16px 0;\n  list-style: disc;\n  margin-left: 10px;\n"]))),g=x.ZP.li(a||(a=(0,v.Z)(["\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid #eeeeee;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n"]))),w=x.ZP.h4(s||(s=(0,v.Z)(["\n  margin-bottom: 15px;\n"]))),m=x.ZP.p(i||(i=(0,v.Z)(["\n  padding: 14px 0;\n"]))),y=t(184),b=function(){var e=(0,h.UO)().movieId,r=(0,f.useState)([]),t=(0,u.Z)(r,2),n=t[0],a=t[1];return(0,f.useEffect)((function(){function r(){return(r=(0,o.Z)(p().mark((function r(){var t;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.Z.getMovieReviews(e);case 2:t=r.sent,a(t);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),(0,y.jsx)(y.Fragment,{children:n.length>0?(0,y.jsx)(l,{children:n.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,y.jsxs)(g,{children:[(0,y.jsxs)(w,{children:["Author:",t]}),(0,y.jsxs)("p",{children:[" ",n]})]},r)}))}):(0,y.jsx)(m,{children:"No reviews for this movie"})})}},515:function(e,r,t){var n=t(861),a=t(757),s=t.n(a),i=t(388).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"97c31631b31361f75213aa46907a2e0a",language:"en-US"}});function o(){return(o=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day");case 2:if(r=e.sent,(t=r.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies.");case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie/?query=".concat(r));case 2:if(t=e.sent,n=t.response,(a=n.data.results).length){e.next=7;break}throw new Error("Nothing was found for your request");case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie?query=".concat(r));case 2:if(t=e.sent,(n=t.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(r,"/credits"));case 2:if(t=e.sent,(n=t.data.cast).length){e.next=6;break}throw new Error("cast not found");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(r,"/reviews"));case 2:if(t=e.sent,n=t.data.results){e.next=6;break}throw new Error("reviews not found");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={getTrendingMovies:function(){return o.apply(this,arguments)},getMovieById:function(e){return u.apply(this,arguments)},searchMovieQuery:function(e){return c.apply(this,arguments)},fetchSearchMovies:function(e){return p.apply(this,arguments)},getMovieCredits:function(e){return f.apply(this,arguments)},getMovieReviews:function(e){return h.apply(this,arguments)}};r.Z=d}}]);
//# sourceMappingURL=779.d6b34970.chunk.js.map