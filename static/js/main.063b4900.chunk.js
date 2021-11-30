(this["webpackJsonpmovies-browser"]=this["webpackJsonpmovies-browser"]||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),c=t(24),o=t.n(c),a=t(18),s=t(20),x=t(47),p=Object(s.b)({name:"movieList",initialState:{movieList:[],loading:!0,error:!1},reducers:{fetchMovieList:function(n){n.loading=!0,n.error=!1},fetchMovieListSuccess:function(n,e){var t=e.payload;n.movieList=t.results,n.loading=!1,n.error=!1},fetchMovieListError:function(n){n.loading=!1,n.error=!0}}}),d=p.actions,h=d.fetchMovieList,m=d.fetchMovieListSuccess,l=d.fetchMovieListError,u=function(n){return n.movieList.movieList},b=p.reducer,f=t(12),j=t.n(f),g=t(26),O=t(42),w=t.n(O),v=function(n){return w.a.get(n).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},k="https://api.themoviedb.org/3/",M="?api_key=54628f6d7df0fa35378bd39ea74a55d1",y="&language=en-US",z=Object(s.b)({name:"common",initialState:{genresList:[],loading:!0,error:!1},reducers:{fetchCommon:function(n){n.loading=!0,n.error=!1},fetchCommonSuccess:function(n,e){var t=e.payload;n.genresList=t.genres,n.loading=!1,n.error=!1},fetchCommonError:function(n){n.loading=!1,n.error=!0}}}),L=z.actions,C=L.fetchCommon,E=L.fetchCommonSuccess,F=L.fetchCommonError,_=function(n){return n.common.genresList},S=z.reducer,D=t(16),B=j.a.mark(A),P=j.a.mark(I);function A(){var n,e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(k,"genre/movie/list").concat(M).concat(y),t.prev=1,t.next=4,Object(D.a)(v,n);case 4:return e=t.sent,t.next=7,Object(D.c)(E(e));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(D.c)(F());case 13:case 14:case"end":return t.stop()}}),B,null,[[1,9]])}function I(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.d)(C.type,A);case 2:case"end":return n.stop()}}),P)}var J=j.a.mark(N),T=j.a.mark(U);function N(){var n,e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(k,"movie/popular").concat(M).concat(y,"&page=1"),t.prev=1,t.next=4,Object(D.b)(200);case 4:return t.next=6,Object(D.a)(v,n);case 6:return e=t.sent,t.next=9,Object(D.c)(m(e));case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(1),t.next=15,Object(D.c)(l());case 15:case"end":return t.stop()}}),J,null,[[1,11]])}function U(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.d)(h.type,N);case 2:case"end":return n.stop()}}),T)}var q=j.a.mark(G);function G(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.a)([U(),I()]);case 2:case"end":return n.stop()}}),q)}var H=Object(x.a)(),K=Object(s.a)({reducer:{movieList:b,common:S},middleware:[H]});H.run(G);var Q,R,V,W,X,Y,Z,$,nn,en,tn,rn,cn,on,an=t(27),sn=t(8),xn=t(7),pn=t(4),dn=pn.c.div(Q||(Q=Object(xn.a)(["\n    max-width: 1368px;\n    margin: auto;\n"]))),hn=pn.c.div(R||(R=Object(xn.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 24px;\n    justify-content: center;\n\n    @media(max-width: ","){\n        gap: 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),mn=pn.c.article(V||(V=Object(xn.a)(["\n    width: 324px;\n    min-height: 650px;\n    background-color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    border-radius: 5px;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n\n    @media(max-width:","){\n        flex-direction: row;\n        width: 100%;\n        margin: 0 16px 0 16px;\n        min-height: 201px;\n    };\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),ln=pn.c.img(W||(W=Object(xn.a)(["\n    max-width: 292px;\n    max-height: 434px;\n\n    @media(max-width: ","){\n        max-width: 114px;\n        max-height: 169px;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),un=pn.c.div(X||(X=Object(xn.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex-grow: 1;\n    margin-top: 16px;\n\n    @media(max-width: ","){\n        flex-direction: column;\n        margin: 0 0 0 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),bn=pn.c.div(Y||(Y=Object(xn.a)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n"]))),fn=pn.c.header(Z||(Z=Object(xn.a)(["\n    font-weight: 500;\n    font-size: 22px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 16px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),jn=pn.c.div($||($=Object(xn.a)(["\n    font-size: 16px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 13px;\n    };\n"])),(function(n){return n.theme.color.waterloo}),(function(n){return n.theme.breakpoint.mobileMax})),gn=pn.c.div(nn||(nn=Object(xn.a)(["\n    display: flex;\n    align-items: flex-end;\n    gap: 12px;\n"]))),On=pn.c.div(en||(en=Object(xn.a)(["\n    font-weight: 600;\n    font-size: 16px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 13px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),wn=pn.c.div(tn||(tn=Object(xn.a)(["\n    font-size: 16px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 13px;\n    };\n"])),(function(n){return n.theme.color.waterloo}),(function(n){return n.theme.breakpoint.mobileMax})),vn=pn.c.img(rn||(rn=Object(xn.a)(["\n    width: 24px;\n\n    @media(max-width: ","){\n        width: 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),kn=t.p+"static/media/star.8663155c.svg",Mn=t(2);function yn(n){var e=n.rate,t=n.votes;return Object(Mn.jsxs)(gn,{children:[Object(Mn.jsx)(vn,{src:kn}),Object(Mn.jsx)(On,{children:e}),Object(Mn.jsxs)(wn,{children:[t," votes"]})]})}var zn,Ln=pn.c.ul(cn||(cn=Object(xn.a)(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n"]))),Cn=pn.c.li(on||(on=Object(xn.a)(["\n    font-size: 14px;\n    background-color: ",";\n    padding: 8px 16px;\n    border-radius: 5px;\n\n    @media(max-width: ","){\n        font-size: 10px;\n        padding: 4px 8px;\n    };\n"])),(function(n){return n.theme.color.mystic}),(function(n){return n.theme.breakpoint.mobileMax})),En=function(n){var e=n.genre_ids,t=Object(a.c)(_);return Object(Mn.jsx)(Ln,{children:t.map((function(n){var t=n.id,i=n.name;return e.includes(t)&&Object(Mn.jsx)(Cn,{children:i},t)}))})};function Fn(n){var e=n.title,t=n.subtitle,i=n.poster_path,r=n.votes,c=n.rate,o=n.genre_ids;return Object(Mn.jsxs)(mn,{children:[Object(Mn.jsx)(ln,{src:i?"https://image.tmdb.org/t/p/w500".concat(i):"no image",alt:"".concat(e," poster")}),Object(Mn.jsxs)(un,{children:[Object(Mn.jsxs)(bn,{children:[Object(Mn.jsx)(fn,{children:e}),Object(Mn.jsx)(jn,{children:t.slice(0,4)}),Object(Mn.jsx)(En,{genre_ids:o})]}),Object(Mn.jsx)(yn,{votes:r,rate:c})]})]})}var _n,Sn,Dn,Bn,Pn,An,In,Jn,Tn,Nn,Un=pn.c.h2(zn||(zn=Object(xn.a)([" \nwidth: 285px;\nheight: 43px;\nmargin: 56px 0px 24px;\nfont-weight: 600;\nfont-size: 36px;\nline-height: 120%;\ncolor: ",";\ntext-transform: capitalize;\n\n@media(max-width: ","){\n    width: 143px;\n    height: 22px;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 120%;\n    margin: 24px 0px 12px 16px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),qn=function(){return Object(Mn.jsx)(Un,{children:"popular movies"})};function Gn(){var n=Object(a.b)(),e=Object(a.c)(u);return Object(i.useEffect)((function(){n(h()),n(C())}),[]),Object(Mn.jsx)(Mn.Fragment,{children:Object(Mn.jsxs)(dn,{children:[Object(Mn.jsx)(qn,{}),Object(Mn.jsx)(hn,{children:e.map((function(n){var e=n.id,t=n.poster_path,i=n.title,r=n.release_date,c=n.vote_count,o=n.vote_average,a=n.genre_ids;return Object(Mn.jsx)(Fn,{poster_path:t,title:i,subtitle:r,genre_ids:a,votes:c,rate:o},e)}))})]})})}var Hn,Kn,Qn=pn.c.div(_n||(_n=Object(xn.a)(["\n    background-color: ",";\n    height: 94px;\n\n    @media(max-width: ","){\n    height: 142px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),Rn=pn.c.header(Sn||(Sn=Object(xn.a)(["\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    max-width: 1368px;\n    height: 94px;\n\n    @media(max-width: ","){\n    height: 142px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Vn=pn.c.div(Dn||(Dn=Object(xn.a)(["\n    align-self: flex-start;\n    height: 94px;\n    display: flex;\n    align-items: center;\n\n    @media(max-width: ","){\n    width: 120px;\n    height: 17px;\n    margin: 32px 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Wn=pn.c.h1(Bn||(Bn=Object(xn.a)(["\n    font-size: 24px;\n    line-height: 40px;\n    letter-spacing: -1,5px;\n    color: ",";\n    padding-left: 16px;\n    text-transform: capitalize;\n    \n    @media(max-width: ","){\n    height: 17px;\n    width: 95px;\n    padding-left: 0;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 130%;\n    letter-spacing: -0.5px;\n    };\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),Xn=pn.c.img(Pn||(Pn=Object(xn.a)(["\n    width: 40px;\n    height: 40px;\n\n    @media(max-width: ","){\n    width: 17px;\n    height: 17px;\n    margin-right: 8px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Yn=pn.c.div(An||(An=Object(xn.a)(["\n    margin-left: auto;\n    height: 48px;\n    width: 432px;\n    border-radius: 33px;\n    border: 1px solid ",";\n    border-radius: 33px;\n    background-color: white;\n    display: flex;\n    align-items: center;\n\n    @media(max-width: ","){\n    margin: 0 auto 16px;\n    height: 44px;\n    width: 284px;\n    }; \n"])),(function(n){return n.theme.color.mystic}),(function(n){return n.theme.breakpoint.mobileMax})),Zn=pn.c.ul(In||(In=Object(xn.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin-left: 32px;\n\n    @media(max-width: ","){\n    margin-left: -32px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),$n=pn.c.li(Jn||(Jn=Object(xn.a)(["\n    list-style: none;\n    text-decoration: none;\n    color: ",";\n    padding: 0 32px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    text-transform: uppercase;\n\n    @media(max-width: ","){\n    padding: 8px 12px;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 18px;\n    };\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),ne=pn.c.img(Tn||(Tn=Object(xn.a)(["\n    margin: 0px 16px 0px 24px;\n    width: 24px;\n    height: 24px;\n\n    @media(max-width: ","){\n    width: 16px;\n    height: 16px;\n    margin: 0px 8px 0px 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),ee=pn.c.input(Nn||(Nn=Object(xn.a)(["\n    color: ",";\n    height: 24px;\n    width: 155px;\n    border: none;\n\n    &:focus-visible {\n    outline: none;\n    };\n\n    @media(max-width: ","){\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 130%;\n    };\n\n"])),(function(n){return n.theme.color.waterloo}),(function(n){return n.theme.breakpoint.mobileMax})),te=t.p+"static/media/search.b7af4217.svg",ie=t.p+"static/media/video.094c01c4.svg",re=Object(pn.b)(Hn||(Hn=Object(xn.a)(["\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n::after,\n::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: ",";\n  font-family: 'Poppins', sans-serif;\n}\n"])),(function(n){return n.theme.color.mercury})),ce=Object(pn.c)(an.b)(Kn||(Kn=Object(xn.a)(["\n    text-decoration: none;\n    color: white;\n    \n    &.active {\n      border: 1px solid ",";\n      border-radius: 24px;\n      padding: 8px 12px;\n    };\n"])),(function(n){return n.theme.color.white})),oe=function(){return Object(Mn.jsx)(Qn,{children:Object(Mn.jsxs)(Rn,{children:[Object(Mn.jsxs)(Vn,{children:[Object(Mn.jsx)(Xn,{src:ie,alt:"camera"}),Object(Mn.jsx)(Wn,{children:"movies browser"})]}),Object(Mn.jsxs)(Zn,{children:[Object(Mn.jsx)($n,{children:Object(Mn.jsx)(ce,{to:"/filmy",children:"movies"})}),Object(Mn.jsx)($n,{children:"people"})]}),Object(Mn.jsxs)(Yn,{children:[Object(Mn.jsx)(ne,{src:te,alt:"magnifier"}),Object(Mn.jsx)(ee,{placeholder:"Search for movies..."})]})]})})};var ae=function(){return Object(Mn.jsx)("div",{className:"App",children:Object(Mn.jsx)(an.a,{children:Object(Mn.jsxs)("nav",{children:[Object(Mn.jsx)(oe,{}),Object(Mn.jsxs)(sn.d,{children:[Object(Mn.jsx)(sn.b,{path:"/movies",children:Object(Mn.jsx)(Gn,{})}),Object(Mn.jsx)(sn.b,{path:"/",children:Object(Mn.jsx)(sn.a,{to:"/movies"})})]})]})})})},se=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),c(n),o(n)}))};o.a.render(Object(Mn.jsx)(r.a.StrictMode,{children:Object(Mn.jsx)(a.a,{store:K,children:Object(Mn.jsxs)(pn.a,{theme:{color:{woodsmoke:"#18181B",white:"#FFFFFF",waterloo:"#7E839A",mercury:"#E5E5E5",mystic:"#E4E6F0",candlelight:"#FCD420",pattensblue:"#D6E4FF",scienceblue:"#0044CC",silver:"#C4C4C4",snuff:"#DDDDEE",black:"#000000",stormgray:"#74788B",mineshaft:"#333333"},breakpoint:{mobileMax:"767px",tabletMax:"992px",mediumScreenMax:"1280px"}},children:[Object(Mn.jsx)(re,{}),Object(Mn.jsx)(ae,{})]})})}),document.getElementById("root")),se()}},[[77,1,2]]]);
//# sourceMappingURL=main.063b4900.chunk.js.map