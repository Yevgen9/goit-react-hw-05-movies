"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{938:function(e,n,t){t.d(n,{Z:function(){return o}});t(791);var r=t(154),i="Loader_loader__DwtSp",c=t(184);function o(){return(0,c.jsx)("div",{className:i,children:(0,c.jsx)(r.s5,{visible:!0,height:"200",width:"200",color:"grey",strokeWidth:"3",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""})})}},75:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(439),i=t(791),c=t(689),o=t(94),s=(t(462),t(938)),u=t(574),a={reviewsRef:"Reviews_reviewsRef__udMv+",reviwsList:"Reviews_reviwsList__Hj7gD",reviewsTitle:"Reviews_reviewsTitle__qSAdV",reviewsItem:"Reviews_reviewsItem__qjdGO"},l=t(184);function h(){var e=(0,c.UO)().movieId,n=(0,i.useState)(null),t=(0,r.Z)(n,2),h=t[0],f=t[1],v=(0,i.useState)(!1),d=(0,r.Z)(v,2),w=d[0],j=d[1];return(0,i.useEffect)((function(){j(!0),(0,u.Cq)(e).then((function(e){if(0===e.results.length)return o.Am.error("Sorry, there is no reviews!",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});f(e.results)})).finally((function(){return j(!1)}))}),[e]),(0,l.jsxs)("div",{className:a.reviewsRef,children:[w&&(0,l.jsx)(s.Z,{}),(0,l.jsx)(o.Ix,{}),h&&(0,l.jsx)("ul",{className:a.reviwsList,children:h.map((function(e){return(0,l.jsxs)("li",{className:a.reviewsItem,children:[(0,l.jsx)("h5",{className:a.reviewsTitle,children:e.author}),(0,l.jsx)("p",{className:a.reviewsText,children:e.content})]},e.id)}))})]})}},574:function(e,n,t){t.d(n,{Cq:function(){return a},Gd:function(){return u},HV:function(){return s},iI:function(){return o},sz:function(){return c}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ4ODBlY2VhMjk1Yjk3ZWMwYzA2OTdjMDRjMDRhMSIsInN1YiI6IjY2MjhiZTk5Y2I2ZGI1MDBjYWFkNjYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dZiO4FGnOBDLSQeO81T0oCwzPEGAndYNnW-ORczZcxw"}},i="https://api.themoviedb.org/3/",c=function(){var e="".concat(i,"movie/popular?language=en-US");return fetch(e,r).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))},o=function(e){var n="".concat(i,"movie/").concat(e,"?language=en-US");return fetch(n,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e){var n="".concat(i,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1");return fetch(n,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},u=function(e){var n="".concat(i,"movie/").concat(e,"/credits");return fetch(n,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},a=function(e){var n="".concat(i,"movie/").concat(e,"/reviews");return fetch(n,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}}]);
//# sourceMappingURL=75.11073e46.chunk.js.map