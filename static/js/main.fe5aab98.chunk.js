(this["webpackJsonpmovies-browser"]=this["webpackJsonpmovies-browser"]||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),o=t(23),c=t.n(o),a=t(20),x=t(27),s=t(47),h=Object(x.b)({name:"movieList",initialState:{movieList:[],loading:!0,error:!1},reducers:{fetchMovieList:function(n){n.loading=!0,n.error=!1},fetchMovieListSuccess:function(n,e){var t=e.payload;n.movieList=t.results,n.loading=!1,n.error=!1},fetchMovieListError:function(n){n.loading=!1,n.error=!0}}}),p=h.actions,d=p.fetchMovieList,l=p.fetchMovieListSuccess,m=p.fetchMovieListError,b=function(n){return n.movieList.movieList},u=h.reducer,f=t(16),j=t.n(f),g=t(25),w=t(42),O=t.n(w),v=function(n){return O.a.get(n).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},k=t(18),M=j.a.mark(z),y=j.a.mark(F);function z(){var n,e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat("https://api.themoviedb.org/3/","movie/popular").concat("?api_key=54628f6d7df0fa35378bd39ea74a55d1").concat("&language=en-US","&page=1"),t.prev=1,t.next=4,Object(k.b)(200);case 4:return t.next=6,Object(k.a)(v,n);case 6:return e=t.sent,t.next=9,Object(k.c)(l(e));case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(1),t.next=15,Object(k.c)(m());case 15:case"end":return t.stop()}}),M,null,[[1,11]])}function F(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(k.d)(d.type,z);case 2:case"end":return n.stop()}}),y)}var L=j.a.mark(E);function E(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.a)([F()]);case 2:case"end":return n.stop()}}),L)}var C=Object(s.a)(),S=Object(x.a)({reducer:{movieList:u},middleware:[C]});C.run(E);var D,_,B,P,A,I,J,T,N,U,q,G,H,K=t(26),Q=t(8),R=t(7),V=t(6),W=V.c.div(D||(D=Object(R.a)(["\n    max-width: 1368px;\n    margin: auto;\n"]))),X=V.c.div(_||(_=Object(R.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 24px;\n    justify-content: center;\n\n    @media(max-width: ","){\n        gap: 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Y=V.c.article(B||(B=Object(R.a)(["\n    width: 324px;\n    min-height: 650px;\n    background-color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    border-radius: 5px;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n\n    @media(max-width:","){\n        flex-direction: row;\n        width: 100%;\n        margin: 0 16px 0 16px;\n        min-height: 201px;\n    };\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),Z=V.c.img(P||(P=Object(R.a)(["\n    max-width: 292px;\n    max-height: 434px;\n\n    @media(max-width: ","){\n        max-width: 114px;\n        max-height: 169px;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),$=V.c.div(A||(A=Object(R.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex-grow: 1;\n    margin-top: 16px;\n\n    @media(max-width: ","){\n        flex-direction: column;\n        margin: 0 0 0 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),nn=V.c.div(I||(I=Object(R.a)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n"]))),en=V.c.header(J||(J=Object(R.a)(["\n    font-weight: 500;\n    font-size: 22px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 16px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),tn=V.c.div(T||(T=Object(R.a)(["\n    font-size: 16px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 13px;\n    };\n"])),(function(n){return n.theme.color.waterloo}),(function(n){return n.theme.breakpoint.mobileMax})),rn=V.c.div(N||(N=Object(R.a)(["\n    display: flex;\n    align-items: flex-end;\n    gap: 12px;\n"]))),on=V.c.div(U||(U=Object(R.a)(["\n    font-weight: 600;\n    font-size: 16px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 13px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),cn=V.c.div(q||(q=Object(R.a)(["\n    font-size: 16px;\n    color: ",";\n\n    @media(max-width: ","){\n        font-size: 13px;\n    };\n"])),(function(n){return n.theme.color.waterloo}),(function(n){return n.theme.breakpoint.mobileMax})),an=V.c.img(G||(G=Object(R.a)(["\n    width: 24px;\n\n    @media(max-width: ","){\n        width: 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),xn=t.p+"static/media/star.8663155c.svg",sn=t(2);function hn(n){var e=n.rate,t=n.votes;return Object(sn.jsxs)(rn,{children:[Object(sn.jsx)(an,{src:xn}),Object(sn.jsx)(on,{children:e}),Object(sn.jsxs)(cn,{children:[t," votes"]})]})}function pn(n){var e=n.title,t=n.subtitle,i=n.poster_path,r=n.votes,o=n.rate;return Object(sn.jsxs)(Y,{children:[Object(sn.jsx)(Z,{src:i?"https://image.tmdb.org/t/p/w500".concat(i):"no image",alt:"".concat(e," poster")}),Object(sn.jsxs)($,{children:[Object(sn.jsxs)(nn,{children:[Object(sn.jsx)(en,{children:e}),Object(sn.jsx)(tn,{children:t.slice(0,4)})]}),Object(sn.jsx)(hn,{votes:r,rate:o})]})]})}var dn,ln,mn,bn,un,fn,jn,gn,wn,On,vn=V.c.h2(H||(H=Object(R.a)([" \nwidth: 285px;\nheight: 43px;\nmargin: 56px 0px 24px;\nfont-weight: 600;\nfont-size: 36px;\nline-height: 120%;\ncolor: ",";\ntext-transform: capitalize;\n\n@media(max-width: ","){\n    width: 143px;\n    height: 22px;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 120%;\n    margin: 24px 0px 12px 16px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),kn=function(){return Object(sn.jsx)(vn,{children:"popular movies"})};function Mn(){var n=Object(a.b)(),e=Object(a.c)(b);return Object(i.useEffect)((function(){n(d())}),[]),Object(sn.jsx)(sn.Fragment,{children:Object(sn.jsxs)(W,{children:[Object(sn.jsx)(kn,{}),Object(sn.jsx)(X,{children:e.map((function(n){var e=n.id,t=n.poster_path,i=n.title,r=n.release_date,o=n.vote_count,c=n.vote_average;return Object(sn.jsx)(pn,{poster_path:t,title:i,subtitle:r,votes:o,rate:c},e)}))})]})})}var yn,zn,Fn=V.c.div(dn||(dn=Object(R.a)(["\n    background-color: ",";\n    height: 94px;\n\n    @media(max-width: ","){\n    height: 142px;\n    };\n"])),(function(n){return n.theme.color.woodsmoke}),(function(n){return n.theme.breakpoint.mobileMax})),Ln=V.c.header(ln||(ln=Object(R.a)(["\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    max-width: 1368px;\n    height: 94px;\n\n    @media(max-width: ","){\n    height: 142px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),En=V.c.div(mn||(mn=Object(R.a)(["\n    align-self: flex-start;\n    height: 94px;\n    display: flex;\n    align-items: center;\n\n    @media(max-width: ","){\n    width: 120px;\n    height: 17px;\n    margin: 32px 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Cn=V.c.h1(bn||(bn=Object(R.a)(["\n    font-size: 24px;\n    line-height: 40px;\n    letter-spacing: -1,5px;\n    color: ",";\n    padding-left: 16px;\n    text-transform: capitalize;\n    \n    @media(max-width: ","){\n    height: 17px;\n    width: 95px;\n    padding-left: 0;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 130%;\n    letter-spacing: -0.5px;\n    };\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),Sn=V.c.img(un||(un=Object(R.a)(["\n    width: 40px;\n    height: 40px;\n\n    @media(max-width: ","){\n    width: 17px;\n    height: 17px;\n    margin-right: 8px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Dn=V.c.div(fn||(fn=Object(R.a)(["\n    margin-left: auto;\n    height: 48px;\n    width: 432px;\n    border-radius: 33px;\n    border: 1px solid ",";\n    border-radius: 33px;\n    background-color: white;\n    display: flex;\n    align-items: center;\n\n    @media(max-width: ","){\n    margin: 0 auto 16px;\n    height: 44px;\n    width: 284px;\n    }; \n"])),(function(n){return n.theme.color.mystic}),(function(n){return n.theme.breakpoint.mobileMax})),_n=V.c.ul(jn||(jn=Object(R.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin-left: 32px;\n\n    @media(max-width: ","){\n    margin-left: -32px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Bn=V.c.li(gn||(gn=Object(R.a)(["\n    list-style: none;\n    text-decoration: none;\n    color: ",";\n    padding: 0 32px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    text-transform: uppercase;\n\n    @media(max-width: ","){\n    padding: 8px 12px;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 18px;\n    };\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),Pn=V.c.img(wn||(wn=Object(R.a)(["\n    margin: 0px 16px 0px 24px;\n    width: 24px;\n    height: 24px;\n\n    @media(max-width: ","){\n    width: 16px;\n    height: 16px;\n    margin: 0px 8px 0px 16px;\n    };\n"])),(function(n){return n.theme.breakpoint.mobileMax})),An=V.c.input(On||(On=Object(R.a)(["\n    color: ",";\n    height: 24px;\n    width: 155px;\n    border: none;\n\n    &:focus-visible {\n    outline: none;\n    };\n\n    @media(max-width: ","){\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 130%;\n    };\n\n"])),(function(n){return n.theme.color.waterloo}),(function(n){return n.theme.breakpoint.mobileMax})),In=t.p+"static/media/search.b7af4217.svg",Jn=t.p+"static/media/video.094c01c4.svg",Tn=Object(V.b)(yn||(yn=Object(R.a)(["\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n::after,\n::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: ",";\n  font-family: 'Poppins', sans-serif;\n}\n"])),(function(n){return n.theme.color.mercury})),Nn=Object(V.c)(K.b)(zn||(zn=Object(R.a)(["\n    text-decoration: none;\n    color: white;\n    \n    &.active {\n      border: 1px solid ",";\n      border-radius: 24px;\n      padding: 8px 12px;\n    };\n"])),(function(n){return n.theme.color.white})),Un=function(){return Object(sn.jsx)(Fn,{children:Object(sn.jsxs)(Ln,{children:[Object(sn.jsxs)(En,{children:[Object(sn.jsx)(Sn,{src:Jn,alt:"camera"}),Object(sn.jsx)(Cn,{children:"movies browser"})]}),Object(sn.jsxs)(_n,{children:[Object(sn.jsx)(Bn,{children:Object(sn.jsx)(Nn,{to:"/filmy",children:"movies"})}),Object(sn.jsx)(Bn,{children:"people"})]}),Object(sn.jsxs)(Dn,{children:[Object(sn.jsx)(Pn,{src:In,alt:"magnifier"}),Object(sn.jsx)(An,{placeholder:"Search for movies..."})]})]})})};var qn=function(){return Object(sn.jsx)("div",{className:"App",children:Object(sn.jsx)(K.a,{children:Object(sn.jsxs)("nav",{children:[Object(sn.jsx)(Un,{}),Object(sn.jsxs)(Q.d,{children:[Object(sn.jsx)(Q.b,{path:"/movies",children:Object(sn.jsx)(Mn,{})}),Object(sn.jsx)(Q.b,{path:"/",children:Object(sn.jsx)(Q.a,{to:"/movies"})})]})]})})})},Gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),i(n),r(n),o(n),c(n)}))};c.a.render(Object(sn.jsx)(r.a.StrictMode,{children:Object(sn.jsx)(a.a,{store:S,children:Object(sn.jsxs)(V.a,{theme:{color:{woodsmoke:"#18181B",white:"#FFFFFF",waterloo:"#7E839A",mercury:"#E5E5E5",mystic:"#E4E6F0",candlelight:"#FCD420",pattensblue:"#D6E4FF",scienceblue:"#0044CC",silver:"#C4C4C4",snuff:"#DDDDEE",black:"#000000",stormgray:"#74788B",mineshaft:"#333333"},breakpoint:{mobileMax:"767px",tabletMax:"992px",mediumScreenMax:"1280px"}},children:[Object(sn.jsx)(Tn,{}),Object(sn.jsx)(qn,{})]})})}),document.getElementById("root")),Gn()}},[[77,1,2]]]);
//# sourceMappingURL=main.fe5aab98.chunk.js.map