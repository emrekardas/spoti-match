(function(t){function e(e){for(var c,r,o=e[0],u=e[1],l=e[2],b=0,j=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&j.push(a[r][0]),a[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c]);s&&s(e);while(j.length)j.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(c=!1)}c&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},a={app:0},i=[];function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e2c":function(t,e,n){t.exports=n.p+"img/hero-3.b1e70b2f.jpg"},"127c":function(t,e,n){"use strict";(function(t){n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("c1f9"),n("25f0");var c=n("7a23"),a=n("bc3a"),i=n.n(a),r=n("6deb"),o=n("263b"),u=n("72bf"),l=n.n(u),s={class:"right-section-content"},b={key:0};e["a"]={setup:function(e){var a=Object(c["C"])(n("863c")),u=function(){return localStorage.getItem("access_token")};Object(c["u"])((function(){var e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());n.code&&i.a.post("https://accounts.spotify.com/api/token",l.a.stringify({code:n.code,redirect_uri:"http://localhost:8080/",grant_type:"authorization_code"}),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+new t("ac663a6b9bca4f82a94abff3ea1c6cf2:5c9b9982109f46199b309bf1239784f7").toString("base64")}}).then((function(t){localStorage.setItem("access_token",t.data.access_token)}))}));var j=function(){var t="https://accounts.spotify.com/authorize",e={response_type:"code",client_id:"ac663a6b9bca4f82a94abff3ea1c6cf2",scope:"user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-modify-playback-state",redirect_uri:"http://localhost:8080/",show_dialog:!0};e=new URLSearchParams(e).toString(),window.location.href="".concat(t,"?").concat(e)};return function(t,e){return Object(c["w"])(),Object(c["h"])(c["a"],null,[Object(c["j"])(o["a"],{title:"Home",image:a.value},null,8,["image"]),Object(c["i"])("div",s,[Object(c["i"])("div",null,[u()?(Object(c["w"])(),Object(c["h"])("h2",b,"You're already login")):Object(c["g"])("",!0),Object(c["j"])(Object(c["K"])(r["a"]),{text:"Sign with Spotify",onClick:j})])])],64)}}}}).call(this,n("b639").Buffer)},"263b":function(t,e,n){"use strict";var c=n("7a23"),a={class:"hero-title"},i={props:{title:String,image:{type:String,default:n("0e2c")}},setup:function(t){var e=t;return function(t,n){return Object(c["w"])(),Object(c["h"])("div",{class:"hero-image",style:Object(c["r"])({backgroundImage:"url('".concat(e.image,"')")})},[Object(c["i"])("div",a,Object(c["H"])(e.title),1)],4)}}};const r=i;e["a"]=r},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=(n("d3b7"),n("b0c0"),n("9d64")),i=n.n(a),r={props:{name:{type:String,required:!0},path:{type:String,required:!0},icon:{type:String,required:!0}},setup:function(t){var e=t;return function(t,n){var a=Object(c["F"])("ion-icon"),i=Object(c["F"])("router-link");return Object(c["w"])(),Object(c["f"])(i,{to:e.path,class:"menu-item"},{default:Object(c["O"])((function(){return[Object(c["j"])(a,{name:e.icon},null,8,["name"]),Object(c["i"])("span",null,Object(c["H"])(e.name),1)]})),_:1},8,["to"])}}};const o=r;var u=o,l={class:"left-section"},s={class:"app-logo"},b=Object(c["i"])("img",{src:i.a,alt:""},null,-1),j={class:"menu-items"},f={setup:function(t){var e=[{name:"Top Artists",path:"/top-artists",icon:"star-outline"},{name:"Top Tracks",path:"/top-tracks",icon:"heart-outline"},{name:"Recent",path:"/recent",icon:"time-outline"},{name:"Playlists",path:"/playlists",icon:"list-outline"},{name:"Compare",path:"/compare",icon:"person-outline"}];return function(t,n){var a=Object(c["F"])("router-link");return Object(c["w"])(),Object(c["h"])("div",l,[Object(c["i"])("div",s,[Object(c["j"])(a,{to:"/",class:"menu-item"},{default:Object(c["O"])((function(){return[b]})),_:1})]),Object(c["i"])("nav",j,[(Object(c["w"])(),Object(c["h"])(c["a"],null,Object(c["D"])(e,(function(t){return Object(c["j"])(Object(c["K"])(u),{name:t.name,icon:t.icon,path:t.path,key:t.path},null,8,["name","icon","path"])})),64))])])}}};const O=f;var d=O,p=n("be8d"),v=n.n(p),m=new v.a;localStorage.getItem("access_token")&&m.setAccessToken(localStorage.getItem("access_token"));var h=function(){return m.getMe()},g=function(t){return h().then((function(e){return m.createPlaylist(e.id,t)}))},y=function(){return m.getMyRecentlyPlayedTracks()},k=function(){return m.getUserPlaylists()},w=function(t){return m.getMyTopTracks({time_range:t})},_=function(t){return m.getMyTopArtists({time_range:t})},C=function(){return m.getMyCurrentPlayingTrack()},x=function(){return m.pause()},S=function(){return m.play()},P=function(){return m.skipToPrevious()},T=function(){return m.skipToNext()},H={key:0,class:"item"},q={class:"item-image"},M=["src"],I={class:"content"},A={class:"title"},K={class:"desc"},F={key:1,class:"action-buttons"},D={setup:function(t){var e=Object(c["C"])(""),n=Object(c["C"])(null),a=Object(c["C"])(),i=function(){C().then((function(t){a.value=t}))},r=function(){a.value.is_playing?x().then((function(){i()})):S().then((function(){i()}))},o=function(){P().then((function(){i()}))},u=function(){T().then((function(){i()}))};return Object(c["u"])((function(){i(),document.addEventListener("scroll",(function(){window.innerHeight+window.scrollY+n.value.offsetHeight>=.9*document.body.offsetHeight?e.value="fixd":(e.value="fixed",setTimeout((function(){}),500))}))})),function(t,i){var l=Object(c["F"])("ion-icon");return Object(c["w"])(),Object(c["h"])("div",{class:Object(c["q"])(["playback",e.value]),ref_key:"playback",ref:n},[a.value?(Object(c["w"])(),Object(c["h"])("div",H,[Object(c["i"])("div",q,[Object(c["i"])("img",{src:a.value.item.album.images[0].url},null,8,M)]),Object(c["i"])("div",I,[Object(c["i"])("div",A,Object(c["H"])(a.value.item.name),1),Object(c["i"])("div",K,Object(c["H"])(a.value.item.artists[0].name),1)])])):Object(c["g"])("",!0),a.value?(Object(c["w"])(),Object(c["h"])("div",F,[Object(c["j"])(l,{name:"play-back-outline",onClick:o}),Object(c["j"])(l,{name:a.value.is_playing?"pause-outline":"play-outline",onClick:r},null,8,["name"]),Object(c["j"])(l,{name:"play-forward-outline",onClick:u})])):Object(c["g"])("",!0)],2)}}};const L=D;var R=L,U=n("6c02"),z={class:"app-container"},E={class:"right-section"},V={setup:function(t){var e=Object(c["C"])(!1),n=Object(U["c"])();return n.beforeEach((function(t,n,c){"/"===t.path?e.value=!1:e.value=!0,c()})),n.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))?localStorage.getItem("access_token")?n():(alert("Firstly login!"),n({name:"Home"})):n()})),function(t,n){var a=Object(c["F"])("router-view");return Object(c["w"])(),Object(c["h"])("div",z,[Object(c["j"])(Object(c["K"])(d)),Object(c["i"])("div",E,[Object(c["j"])(a),e.value?(Object(c["w"])(),Object(c["f"])(Object(c["K"])(R),{key:0})):Object(c["g"])("",!0)])])}}};n("8c15");const N=V;var B=N,J=n("5530"),Y=n("a1e9"),G={class:"inner-links"},Q={emits:["change"],setup:function(t,e){var n=e.emit,a=Object(Y["n"])("long_term"),i=function(t){a.value!==t&&(a.value=t,n("change",t))};return function(t,e){return Object(c["w"])(),Object(c["h"])("div",G,[Object(c["i"])("div",{class:Object(c["q"])(["inner-link",{active:"long_term"==a.value}]),onClick:e[0]||(e[0]=function(t){return i("long_term")})}," All Time ",2),Object(c["i"])("div",{class:Object(c["q"])(["inner-link",{active:"medium_term"==a.value}]),onClick:e[1]||(e[1]=function(t){return i("medium_term")})}," Last 6 Months ",2),Object(c["i"])("div",{class:Object(c["q"])(["inner-link",{active:"short_term"==a.value}]),onClick:e[2]||(e[2]=function(t){return i("short_term")})}," Last Month ",2)])}}};const W=Q;var X=W,Z=(n("a4d3"),n("e01a"),["href"]),$={class:"content"},tt={class:"title"},et={class:"desc"},nt={props:{data:{type:Object,required:!0}},setup:function(t){var e=t,n=function(){var t=e.data.type;return"track"===t?e.data.album.images[0].url:!!e.data.images.length&&e.data.images[0].url};return function(t,a){return Object(c["w"])(),Object(c["h"])("a",{class:"item",href:e.data.uri},[Object(c["i"])("span",null,Object(c["H"])(e.data.index+1),1),n()?(Object(c["w"])(),Object(c["h"])("div",{key:0,class:"image",style:Object(c["r"])({backgroundImage:"url('".concat(n(),"')")})},null,4)):Object(c["g"])("",!0),Object(c["i"])("div",$,[Object(c["i"])("div",tt,Object(c["H"])(e.data.name),1),Object(c["i"])("div",et,Object(c["H"])(e.data.description),1)])],8,Z)}}};const ct=nt;var at=ct,it=n("263b"),rt={class:"right-section-content"},ot={class:"list-items"},ut={setup:function(t){var e=n("0e2c"),a=Object(c["C"])([]);Object(c["u"])((function(){_("long_term").then((function(t){a.value=t.items}))}));var i=function(t){_(t).then((function(t){a.value=t.items}))};return function(t,n){return Object(c["w"])(),Object(c["h"])(c["a"],null,[Object(c["j"])(it["a"],{title:"Top Artists",image:Object(c["K"])(e)},null,8,["image"]),Object(c["i"])("div",rt,[Object(c["j"])(X,{onChange:i}),Object(c["i"])("div",ot,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(a.value,(function(t,e){return Object(c["w"])(),Object(c["f"])(at,{data:Object(J["a"])(Object(J["a"])({},t),{},{index:e,type:"artist"}),key:t.id},null,8,["data"])})),128))])])],64)}}};const lt=ut;var st=lt,bt={class:"right-section-content"},jt={class:"list-items"},ft={setup:function(t){var e=n("94f9"),a=Object(c["C"])([]);Object(c["u"])((function(){w("long_term").then((function(t){a.value=t.items}))}));var i=function(t){w(t).then((function(t){a.value=t.items}))};return function(t,n){return Object(c["w"])(),Object(c["h"])(c["a"],null,[Object(c["j"])(it["a"],{title:"Top Tracks",image:Object(c["K"])(e)},null,8,["image"]),Object(c["i"])("div",bt,[Object(c["j"])(X,{onChange:i}),Object(c["i"])("div",jt,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(a.value,(function(t,e){return Object(c["w"])(),Object(c["f"])(at,{data:Object(J["a"])(Object(J["a"])({},t),{},{index:e,type:"track"}),key:t.id},null,8,["data"])})),128))])])],64)}}};const Ot=ft;var dt=Ot,pt=["href"],vt={class:"item-info"},mt={class:"content"},ht={class:"title"},gt={class:"desc artist-name"},yt={class:"time"},kt={props:{data:{type:Object,required:!0}},setup:function(t){var e=t,n=function(t){var e=new Date(t);return e.getHours()+":"+e.getMinutes()};return function(t,a){return Object(c["w"])(),Object(c["h"])("a",{class:"item",href:e.data.track.uri},[Object(c["i"])("div",vt,[Object(c["i"])("div",{class:"image",style:Object(c["r"])({backgroundImage:"url('".concat(e.data.track.album.images[0].url,"')")})},null,4),Object(c["i"])("div",mt,[Object(c["i"])("div",ht,Object(c["H"])(e.data.track.name),1),Object(c["i"])("div",gt,Object(c["H"])(e.data.track.artists[0].name),1)])]),Object(c["i"])("div",yt,Object(c["H"])(n(e.data.played_at)),1)],8,pt)}}},wt=(n("c616"),n("6b0d")),_t=n.n(wt);const Ct=_t()(kt,[["__scopeId","data-v-1d2e0b46"]]);var xt=Ct,St={class:"right-section-content"},Pt={class:"list-items"},Tt={setup:function(t){var e=Object(c["C"])(n("6900")),a=Object(c["C"])([]);return Object(c["u"])((function(){y().then((function(t){a.value=t.items}))})),function(t,n){return Object(c["w"])(),Object(c["h"])(c["a"],null,[Object(c["j"])(it["a"],{title:"Recents",image:e.value},null,8,["image"]),Object(c["i"])("div",St,[Object(c["i"])("div",Pt,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(a.value,(function(t){return Object(c["w"])(),Object(c["f"])(xt,{data:t,key:t.id},null,8,["data"])})),128))])])],64)}}};const Ht=Tt;var qt=Ht,Mt=n("127c");n("ad9a");const It=_t()(Mt["a"],[["__scopeId","data-v-16cb2de0"]]);var At=It,Kt=n("6deb"),Ft=function(t){return Object(c["z"])("data-v-9c6e6f84"),t=t(),Object(c["x"])(),t},Dt={class:"right-section-content"},Lt={class:"list-items"},Rt={class:"modal"},Ut=Ft((function(){return Object(c["i"])("p",null,"Playlist Name",-1)})),zt={class:"buttons"},Et={setup:function(t){var e=Object(c["C"])(n("6900")),a=Object(c["C"])(!1),i=Object(c["C"])([]),r=Object(c["C"])("");Object(c["u"])((function(){k().then((function(t){i.value=t.items}))}));var o=function(){a.value=!0},u=function(){a.value=!1},l=function(){g({name:r.value}).then((function(){k().then((function(t){i.value=t.items})),u()}))};return function(t,n){var s=Object(c["F"])("Modal");return Object(c["w"])(),Object(c["h"])(c["a"],null,[Object(c["j"])(it["a"],{title:"Playlists",image:e.value},null,8,["image"]),Object(c["i"])("div",Dt,[Object(c["j"])(Object(c["K"])(Kt["a"]),{text:"Create a Playlist",onClick:o}),Object(c["i"])("div",Lt,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["D"])(i.value,(function(t,e){return Object(c["w"])(),Object(c["f"])(at,{data:Object(J["a"])(Object(J["a"])({},t),{},{index:e}),key:t.id},null,8,["data"])})),128))])]),Object(c["j"])(s,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=function(t){return a.value=t})},{default:Object(c["O"])((function(){return[Object(c["i"])("div",Rt,[Ut,Object(c["P"])(Object(c["i"])("input",{type:"text",placeholder:"Playlist Name","onUpdate:modelValue":n[0]||(n[0]=function(t){return r.value=t})},null,512),[[c["L"],r.value]]),Object(c["i"])("div",zt,[Object(c["j"])(Object(c["K"])(Kt["a"]),{text:"Cancel",onClick:u}),Object(c["j"])(Object(c["K"])(Kt["a"]),{text:"Create",onClick:l})])])]})),_:1},8,["modelValue"])],64)}}};n("6fc9");const Vt=_t()(Et,[["__scopeId","data-v-9c6e6f84"]]);var Nt=Vt,Bt=[{path:"/",name:"Home",component:At},{path:"/top-artists",component:st,meta:{requiresAuth:!0}},{path:"/top-tracks",component:dt,meta:{requiresAuth:!0}},{path:"/recent",component:qt,meta:{requiresAuth:!0}},{path:"/playlists",component:Nt,meta:{requiresAuth:!0}}],Jt=Object(U["a"])({history:Object(U["b"])(),routes:Bt}),Yt=Jt,Gt=(n("fe26"),n("2373"));n("6ac6");Object(c["e"])(B).use(Yt).use(Gt["a"],{teleportTarget:"#modals"}).mount("#app")},"5fd3":function(t,e,n){},6032:function(t,e,n){},6900:function(t,e,n){t.exports=n.p+"img/hero-2.9fd8b6a0.jpg"},"6deb":function(t,e,n){"use strict";var c=n("7a23"),a={props:{text:{type:String,default:""}},setup:function(t){var e=t;return function(t,n){return Object(c["w"])(),Object(c["h"])("button",null,Object(c["H"])(e.text),1)}}},i=(n("ed5b"),n("6b0d")),r=n.n(i);const o=r()(a,[["__scopeId","data-v-2db127e4"]]);e["a"]=o},"6fc9":function(t,e,n){"use strict";n("6032")},"735a":function(t,e,n){},"863c":function(t,e,n){t.exports=n.p+"img/hero-1.54ea4d47.jpg"},"8c15":function(t,e,n){"use strict";n("5fd3")},"94f9":function(t,e,n){t.exports=n.p+"img/hero-4.dc046b31.png"},"96e2":function(t,e,n){},"9d64":function(t,e,n){t.exports=n.p+"img/logo.e8834a3e.png"},ad9a:function(t,e,n){"use strict";n("735a")},b931:function(t,e,n){},c616:function(t,e,n){"use strict";n("96e2")},ed5b:function(t,e,n){"use strict";n("b931")}});
//# sourceMappingURL=app.5de9a40b.js.map