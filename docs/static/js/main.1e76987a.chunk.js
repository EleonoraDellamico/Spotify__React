(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(12),r=n.n(i),s=(n(79),n(130)),o=n(150),l=n(151),d=n(149),u=n(152),j=n(133),p=n(134),b=n(135),x=n(136),m=n(137),h=n(48),g=n(66),f=n.n(g),O=n(63),v=n.n(O),y=n(65),w=n.n(y),S=n(2),_=Object(s.a)((function(e){return{drawer:{width:"240px",flexShrink:0},drawerPaper:{width:"240px"},titleList:{padding:"12px 16px",fontWeight:"bold"}}})),C=[{text:"Inicio",icon:Object(S.jsx)(v.a,{})},{text:"Buscar",icon:Object(S.jsx)(w.a,{})},{text:"Radio",icon:Object(S.jsx)(f.a,{})}],N=function(){var e=_();return Object(S.jsx)(u.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:Object(S.jsxs)("div",{className:e.drwaerContainer,children:[Object(S.jsx)(j.a,{children:C.map((function(e){return Object(S.jsxs)(p.a,{button:!0,children:[Object(S.jsxs)(b.a,{children:[e.icon," "]}),Object(S.jsx)(x.a,{primary:e.text})]})}))}),Object(S.jsx)(m.a,{}),Object(S.jsx)(h.a,{variant:"body1",className:e.titleList,children:"TU BIBLIOTECA"}),Object(S.jsx)(j.a,{children:["Especialmente para ti","Escuchad. recient.","Canciones que te gu...","\xc1lbumes","Artistas","Podcasts"].map((function(e){return Object(S.jsx)(p.a,{button:!0,children:Object(S.jsx)(x.a,{primary:e})})}))})]})})},k=n(18),A=n(67),I=n.n(A),q=n(32),P=Object(a.createContext)(),T={queue:[],currentSong:null},D=function(e){var t=e.children,n=Object(a.useState)(T),c=Object(k.a)(n,2),i=c[0],r=c[1];return Object(S.jsx)(P.Provider,{value:{user:i,addSongToQueue:function(e){var t=Object(q.a)({},i);0===t.queue.length&&(t.currentSong=e.id),t.queue.push(e),console.log("Actual queue, ",t),r(t)},removeSongToQueue:function(e){var t=Object(q.a)({},i);t.queue=t.queue.filter((function(t){return t.id!==e})),r(t)},nextSongFromQueue:function(){var e=Object(q.a)({},i),t=e.queue.findIndex((function(t){return t.id===e.currentSong}))+1;t&&(e.currentSong=e.queue[t].id,r(e))},previousSongFromQueue:function(){var e=Object(q.a)({},i),t=e.queue.findIndex((function(t){return t.id===e.currentSong}))-1;t>=0&&(e.currentSong=e.queue[t].id,r(e))},playSongFromQueue:function(e){var t=Object(q.a)({},i),n=t.queue.findIndex((function(e){return e.id===t.currentSong}));n>=0&&(t.queue.splice(n,0,e),t.currentSong=e.id,console.log("Actual queue, ",t),r(t))}},children:t})},E=n(138),F=n(153),Q=n(139),W=n(140),L=n(141),B=n(142),M=n(143),J=n(144),R=Object(s.a)((function(e){return{player:{position:"fixed",bottom:"0",width:"calc(100vw - 240px)",background:e.palette.background.paper,maxHeight:"80px",display:"flex",padding:"10px 12px"},playerInfo:{width:"250px",maxWidth:"250px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center","& img":{height:"60px",width:"60px",objectFit:"cover"}},playerInfoName:{marginLeft:"12px"},playerSong:{display:"flex",flex:"1",flexDirection:"column",alignItems:"center"},playerSongActions:{marginTop:"-12px",display:"flex",zIndex:"200",alignItems:"center",justifyContent:"center"},playerSongSlider:{marginTop:"-12px",display:"flex",alignItems:"center",justifyContent:"center",minWidth:"60%"},playerTimer:{margin:"0 12px"},playerExtra:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"10%"}}})),z=function(){var e=R(),t=Object(a.useContext)(P),n=t.user,c=t.nextSongFromQueue,i=t.previousSongFromQueue,r=n.queue,s=n.currentSong,o=Object(a.useState)(!1),l=Object(k.a)(o,2),d=l[0],u=l[1],j=Object(a.useState)(0),p=Object(k.a)(j,2),b=p[0],x=p[1],m=Object(a.useState)(0),g=Object(k.a)(m,2),f=g[0],O=g[1],v=Object(a.useState)(.5),y=Object(k.a)(v,2),w=y[0],_=y[1],C=Object(a.useState)(null),N=Object(k.a)(C,2),A=N[0],q=N[1],T=Object(a.useState)(0),D=Object(k.a)(T,2),z=D[0],H=D[1];return Object(a.useEffect)((function(){q(r.find((function(e){return e.id===s}))),H(r.findIndex((function(e){return e.id===s}))),u(!0)}),[s,r]),Object(S.jsxs)("div",{children:[Object(S.jsx)(I.a,{playing:d,url:null===A||void 0===A?void 0:A.url,width:"0px",height:"0px",volume:w,progressInterval:1,onProgress:function(e){var t=e.played,n=e.playedSeconds;O(t),x(new Date(1e3*n).toISOString().substr(14,5))}}),Object(S.jsxs)("div",{className:e.player,children:[Object(S.jsxs)("div",{className:e.playerInfo,children:[Object(S.jsx)("img",{src:null===A||void 0===A?void 0:A.picture,alt:null===A||void 0===A?void 0:A.name}),Object(S.jsxs)("div",{className:e.playerInfoName,children:[Object(S.jsx)(h.a,{variant:"body1",children:null===A||void 0===A?void 0:A.name}),Object(S.jsx)(h.a,{variant:"body2",children:null===A||void 0===A?void 0:A.artist})]})]}),Object(S.jsxs)("div",{className:e.playerSong,children:[Object(S.jsxs)("div",{className:e.playerSongActions,children:[Object(S.jsx)(E.a,{color:0===z?"disabled":"inherit",disabled:0===z,onClick:function(){i()},children:Object(S.jsx)(Q.a,{color:0===z?"disabled":"inherit"})}),d?Object(S.jsx)(W.a,{onClick:function(){u(!1)}}):Object(S.jsx)(L.a,{onClick:function(){u(!0)}}),Object(S.jsx)(E.a,{color:z===r.length-1?"disabled":"inherit",disabled:z===r.length-1,onClick:function(){z<r.length&&c()},children:Object(S.jsx)(B.a,{color:z===r.length-1?"disabled":"inherit"})})]}),Object(S.jsxs)("div",{className:e.playerSongSlider,children:[Object(S.jsx)(h.a,{variant:"caption",className:e.playerTimer,children:b}),Object(S.jsx)(F.a,{step:.001,value:f,onChange:function(e,t){O(t)},max:1,min:0,"aria-labelledby":"continious-slider"})]})]}),Object(S.jsxs)("div",{className:e.playerExtra,children:[Object(S.jsx)(M.a,{}),Object(S.jsx)(F.a,{step:.001,value:w,onChange:function(e,t){_(t)},max:1,min:0,"aria-labelledby":"continious-slider"}),Object(S.jsx)(J.a,{})]})]})]})},H=(n(105),n(68)),Y=n.n(H),U=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(S.jsx)("div",{className:"search__container",children:Object(S.jsxs)("div",{className:"search__inputContainer",children:[Object(S.jsx)(Y.a,{className:"search__icon"}),Object(S.jsx)("input",{type:"text",className:"search__input",onChange:function(e){c(e.taget.value)},value:n,placeholder:"buscar..."})]})})},G=n(145),V=Object(s.a)((function(e){return{root:{display:"flex",padding:"12px 16px",alignItems:"center",position:"fixed",width:"calc(100vw - 240px)",background:e.palette.background.default,zIndex:"1",top:"0"},button:{borderRadius:"24px"},buttonProfile:{marginLeft:"12px"}}})),Z=function(e){var t=V();return Object(S.jsxs)("div",{className:t.root,children:[Object(S.jsx)(U,{}),Object(S.jsx)(G.a,{variant:"outlined",className:t.button,children:"Mejora tu cuenta"}),Object(S.jsx)(G.a,{variant:"contained",className:[t.button,t.buttonProfile].join(" "),children:"Perfil"})]})},K=n(146),X=n(147),$=n(148),ee=(n(106),function(e){var t=e.data,n=Object(a.useContext)(P),c=n.addSongToQueue,i=n.playSongFromQueue;return Object(S.jsxs)("div",{className:"song__container",children:[Object(S.jsx)("img",{src:t.picture,alt:t.name}),Object(S.jsxs)("div",{className:"song__info",children:[Object(S.jsx)(K.a,{className:"song__buttonSecondary"}),Object(S.jsx)(X.a,{className:"song__buttonPrimary",onClick:function(){return i(t)}}),Object(S.jsx)($.a,{className:"song__buttonSecondary",onClick:function(){return c(t)}})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(h.a,{variant:"body1",children:t.name}),Object(S.jsx)(h.a,{variant:"body2",children:t.desc})]})]})});ee.defaultProps={data:{}};var te=ee,ne=(n(107),n(154)),ae=function(e){var t=e.data;return Object(S.jsxs)("div",{className:"artist__container",children:[Object(S.jsx)(ne.a,{alt:t.name,src:t.img,className:"artist__avatar"}),Object(S.jsx)(h.a,{variant:"body1",align:"center",children:t.name})]})},ce=Object(s.a)((function(e){return{root:{marginLeft:"22px",padding:"16px 22px 16px 0",overflow:"hidden"},carouselContainer:{display:"flex",overflow:"scroll",minHeight:"350px",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}}})),ie=function(e){var t=ce();return Object(S.jsxs)("div",{className:t.root,children:[Object(S.jsx)(d.a,{item:!0,xs:12,children:Object(S.jsx)(h.a,{variant:"h6",children:e.title})}),Object(S.jsx)(d.a,{item:!0,xs:12,children:Object(S.jsx)(m.a,{})}),Object(S.jsxs)(d.a,{item:!0,xs:12,className:t.carouselContainer,children:[e.data.map((function(e,t){return"song"===e.type?Object(S.jsx)(te,{data:e},t+"_song"+e._id):"artist"===e.type?Object(S.jsx)(ae,{data:e},t+"_artist"+e._id):null})),e.data.map((function(e){return Object(S.jsx)("h1",{children:e.title})}))]})]})},re=n(69),se=n(70),oe=function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(h.a,{variant:"h1"}),Object(S.jsx)(ie,{data:se,title:"Favorite artists"}),Object(S.jsx)(ie,{data:re,title:"Favorite songs"})]})},le=n(71),de=Object(le.a)({palette:{type:"dark",primary:{main:"#b3b3b3"}}}),ue=Object(s.a)((function(e){return{root:{height:"100vh",display:"flex",flexDirection:"row",flexWrap:"nowrap"},content:{flexGrow:1,maxWidth:"calc(100vw - 240px)",height:"100vh"},drawer:{width:"240px",height:"100vh",background:"blue"}}})),je=function(){var e=ue();return Object(S.jsxs)(o.a,{theme:de,children:[Object(S.jsx)(l.a,{}),Object(S.jsx)(D,{children:Object(S.jsxs)(d.a,{container:!0,className:e.root,children:[Object(S.jsx)(N,{}),Object(S.jsxs)("div",{className:e.content,children:[Object(S.jsx)(Z,{}),Object(S.jsx)("div",{style:{marginTop:"80px"}}),Object(S.jsx)(oe,{}),Object(S.jsx)(z,{})]})]})})]})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(je,{})}),document.getElementById("root")),pe()},69:function(e){e.exports=JSON.parse('[{"id":"ksandfeurrn3j4b","name":"Save your Tears","artist":"The Weeknd","desc":"Cancion free copyright","picture":"http://www.contrareplica.mx/uploads/2021/01/05/normal/019d734a0ba720d04dc1057937d99c49.jpg","year":"2020","genre":"R&B/Soul","url":"https://www.youtube.com/watch?v=u6lihZAcy4s","type":"song","timeStamp":{"createdAt":"","updatedAt":""}},{"id":"iojfin5io345n345o","name":"Under pressure","artist":"Queen David Bowie","desc":"Cancion free copyright","picture":"https://i0.wp.com/auralcrave.com/wp-content/uploads/2018/08/0000240487.jpeg?fit=915%2C515&ssl=1","year":"1995","genre":"Rock","type":"song","url":"https://www.youtube.com/watch?v=MkQK83Tf9so","timeStamp":{"createdAt":"","updatedAt":""}},{"id":"ndosifndsioegnrep0","name":"You\'ve got the love","artist":"Florence + The Machine","desc":"Cancion free copyright","picture":"https://i.scdn.co/image/ab67616d0000b2730672b0f8756ae2af86e8a5ce","year":"2009","genre":"Alternative","type":"song","url":"https://www.youtube.com/watch?v=PQZhN65vq9E","timeStamp":{"createdAt":"","updatedAt":""}},{"id":"onfosifnwefoindflkm4","name":"Around the World","artist":"Daft Punk","desc":"Cancion free copyright","picture":"https://estaticos-cdn.elperiodico.com/clip/9ce8e852-00ed-44b7-881b-df98be974b55_alta-libre-aspect-ratio_default_0.jpg","year":"2021","genre":"Electronic","type":"song","url":"https://www.youtube.com/watch?v=_JPa3BNi6l4","timeStamp":{"createdAt":"","updatedAt":""}},{"id":"xzncjondfwenreoint45","name":"Musica Leggerissima","artist":"Colapesce, Dimartino","desc":"Cancion free copyright","picture":"https://static.fanpage.it/wp-content/uploads/sites/14/2020/12/ColaDima-638x425.jpg","year":"2021","genre":"Indie Pop","url":"https://www.youtube.com/watch?v=Q7NjUxGMv7Y","type":"song","timeStamp":{"createdAt":"","updatedAt":""}},{"id":"dfwqdn3o2n32o4n54o4n5435","name":"Midnight City","artist":"M83","desc":"Cancion free copyright","picture":"https://www.hoyesarte.com/constelac10n/files/2020/01/19_m83_midnight_city-300x300.jpg","year":"2011","genre":"Electronic ","url":"https://www.youtube.com/watch?v=dX3k_QDnzHE","type":"song","timeStamp":{"createdAt":"","updatedAt":""}},{"id":"rmdscmelk45m546lkm46kl","name":"A Real Hero","artist":"Electric Youth","desc":"Cancion free copyright","picture":"https://i.ytimg.com/vi/-DSVDcw6iW8/hqdefault.jpg","year":"2012","genre":"Electronic","url":"https://www.youtube.com/watch?v=6cedWvuxwbc","type":"song","timeStamp":{"createdAt":"","updatedAt":""}}]')},70:function(e){e.exports=JSON.parse('[{"img":"https://estaticos-cdn.elperiodico.com/clip/9ce8e852-00ed-44b7-881b-df98be974b55_alta-libre-aspect-ratio_default_0.jpg","name":"Daft Punk","type":"artist"},{"img":"https://www.hoyesarte.com/constelac10n/files/2020/01/19_m83_midnight_city-300x300.jpg","name":"m83","type":"artist"},{"img":"https://i.ytimg.com/vi/-DSVDcw6iW8/hqdefault.jpg","name":"Electric Youth","type":"artist"}]')},79:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.1e76987a.chunk.js.map