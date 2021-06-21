(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,a){},51:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(21),i=a.n(r),s=a(3),o=a(14),u=(a(44),a(1)),l=function(){var e=[{id:1,nav:"home",path:"/"},{id:2,nav:"weather",path:"/weather"},{id:3,nav:"favorite",path:"/favorite"}].map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,{to:"".concat(e.path),exact:!0,activeClassName:"active",children:["home"===e.nav&&Object(u.jsx)("i",{className:"fas fa-home"}),e.nav]})},e.id)}));return Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"navbar-main",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)("i",{className:"fas fa-umbrella fa-lg"})," AccuApp"]}),Object(u.jsx)("input",{type:"checkbox",onChange:function(e){if(e.target.checked)return document.body.className="light-mode";document.body.className=""}})]}),Object(u.jsx)("ul",{children:e})]})})},j=a(81),d=(a(51),function(){return Object(u.jsx)(j.a.div,{exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100vh"}},children:Object(u.jsxs)("div",{className:"home-screen-main",children:[Object(u.jsx)("h1",{children:"Weather App"}),Object(u.jsx)("p",{children:"- Herolo project -"}),Object(u.jsx)("small",{children:"This weather app was built by using AccuWeather API and React (Inc Redux for state management, Router & Hooks)."}),Object(u.jsx)("i",{className:"fas fa-cloud-moon-rain fa-3x"})]})})}),p=a(4),h=a(13),f=a.n(h),m=a(16),b=a(20),O=a.n(b),v="SEARCH_RESULTS",x="GET_WEATHER",y="GET_WEEK_WEATHER",g="ADD_TO_FAVORITES",N="REMOVE_FROM_FAVORITES",w="SET_MESSAGE",k="REDIRECT",E="HeIBFKnJmUovajKW8vDI6Ja7F1c80SiR",R=function(e,t,a){return function(){var c=Object(m.a)(f.a.mark((function c(n){var r,i,s;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,O.a.get("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(E));case 3:r=c.sent,i=r.data[0],s={id:Math.random(),country:t,city:a,text:i.WeatherText,temp:i.Temperature.Imperial.Value,datetime:new Date(i.LocalObservationDateTime),key:e},n({type:x,payload:s}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),n({type:w,payload:c.t0.message});case 12:case"end":return c.stop()}}),c,null,[[0,9]])})));return function(e){return c.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(a){var c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(E));case 3:c=t.sent,a({type:y,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:w,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=a(19),C=(a(71),function(e){var t=Object(c.useState)(""),a=Object(S.a)(t,2),n=a[0],r=a[1],i=Object(p.c)((function(e){return e.inputResults})),s=Object(p.b)();return Object(u.jsxs)("div",{className:"input-search-main",children:[Object(u.jsxs)("form",{className:"input-search-form",onSubmit:function(e){var t;e.preventDefault(),s((t=n,function(){var e=Object(m.a)(f.a.mark((function e(a){var c,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(E,"&q=").concat(t));case 3:for(c=e.sent,n=[],r=0;r<5;r++)c.data[r]&&n.push(c.data[r]);a({type:v,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:w,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),r("")},children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:n,placeholder:"City..."}),Object(u.jsx)("button",{type:"submit",children:"Search"})]}),Object(u.jsx)("ul",{children:i.length>0&&i.map((function(t){return Object(u.jsxs)("li",{onClick:function(){return e.onWeather(t.Key,t.Country.LocalizedName,t.LocalizedName)},children:[Object(u.jsx)("p",{children:t.LocalizedName}),Object(u.jsx)("small",{children:t.Country.LocalizedName})]},t.Key)}))})]})}),D=(a(72),function(e){var t,a=e.temp;return t=a<50?Object(u.jsx)("i",{className:"fas fa-cloud-showers-heavy fa-3x"}):a<61?Object(u.jsx)("i",{className:"fas fa-cloud-sun-rain fa-3x"}):a<75?Object(u.jsx)("i",{className:"fas fa-cloud-sun fa-3x"}):Object(u.jsx)("i",{className:"fas fa-sun fa-3x"}),Object(u.jsx)("div",{className:"weather-icon-main",children:t})}),F=(a(73),function(){var e,t=Object(p.c)((function(e){return e.weekForecasts}));return Object(u.jsx)("div",{className:"tempdeck-main",children:(null===(e=t.DailyForecasts)||void 0===e?void 0:e.length)>0?t.DailyForecasts.map((function(e){var t=new Date(e.Date);return Object(u.jsxs)("div",{className:"tempdeck-main-card",children:[Object(u.jsx)("p",{children:t.toLocaleDateString()}),Object(u.jsx)(D,{temp:e.Temperature.Minimum.Value}),Object(u.jsx)("p",{children:"Min ".concat(e.Temperature.Minimum.Value,"F - Max ").concat(e.Temperature.Maximum.Value,"F")})]},Math.random())})):null})}),_=(a(74),function(){var e=Object(p.c)((function(e){return e.curWeather})),t=Object(p.c)((function(e){return e.message})),a=Object(p.c)((function(e){return e.isRedirect})),n=Object(p.b)();Object(c.useEffect)((function(){if(!a){n(function(){var e=Object(m.a)(f.a.mark((function e(t){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(){var e=Object(m.a)(f.a.mark((function e(a){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(E,"&q=").concat(a.coords.latitude,"%2C").concat(a.coords.longitude,"&toplevel=true"));case 2:c=e.sent,n={id:Math.random(),country:c.data.Country.LocalizedName,city:c.data.TimeZone.Name,text:c.data.Region.LocalizedName,temp:72.4,datetime:new Date,key:"213225"},t({type:x,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(e){console.log(e)},navigator.geolocation.getCurrentPosition(a,c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return n(T("215854"))}}),[]);var r;""!==t&&(r=Object(u.jsx)("p",{className:"weather-screen-message",children:t}));return Object(u.jsxs)(j.a.div,{exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100vh"}},children:[r,Object(u.jsxs)("div",{className:"weather-screen-main",children:[Object(u.jsxs)("div",{className:"flex-warrper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:null===e||void 0===e?void 0:e.datetime.toLocaleTimeString()}),Object(u.jsx)("i",{className:"fas fa-clock fa-2x"}),Object(u.jsx)("small",{children:null===e||void 0===e?void 0:e.datetime.toDateString()})]}),Object(u.jsx)(C,{onWeather:function(e,t,a){n(R(e,t,a)),n(T(e))}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:null===e||void 0===e?void 0:e.country}),Object(u.jsx)("i",{onClick:function(){n((function(e,t){var a=t().curWeather,c=t().favorites.find((function(e){return e.city===a.city}));if(c)return e({type:w,payload:"".concat(c.city," already in your favorites")});e({type:g,payload:a})}))},className:"fas fa-heart fa-2x"}),Object(u.jsx)("small",{children:null===e||void 0===e?void 0:e.city}),Object(u.jsx)("small",{children:null===e||void 0===e?void 0:e.text}),Object(u.jsxs)("small",{children:["Now: ",null===e||void 0===e?void 0:e.temp,"F"]})]})]}),Object(u.jsx)(F,{})]})]})}),M=(a(75),Object(s.f)((function(e){var t=Object(p.b)();return Object(u.jsxs)("div",{onClick:function(){t({type:"REDIRECT"}),t(R(e.searchKey,e.country,e.city)),t(T(e.searchKey)),e.history.push("/weather")},className:"card-main",children:[Object(u.jsx)("div",{className:"card-icon",children:Object(u.jsx)(D,{temp:e.temp})}),Object(u.jsxs)("div",{className:"card-details",children:[Object(u.jsx)("p",{children:e.country}),Object(u.jsxs)("p",{children:["- ",e.desc," -"]}),Object(u.jsx)("small",{children:"There is ".concat(e.temp,"F in ").concat(e.city)}),Object(u.jsx)("i",{onClick:function(a){var c;a.stopPropagation(),t((c=e.city,function(e){e({type:N,payload:c})}))},className:"fas fa-minus-square fa-lg"})]})]})}))),A=(a(76),function(e){for(var t=[],a=1;a<=Math.ceil(e.totalForecasts.length/e.forecastPerPage);a++)t.push(a);return Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{className:"pagination",children:t.map((function(t){return Object(u.jsx)("li",{onClick:function(){return function(t){e.paginate(t)}(t)},children:Object(u.jsx)("i",{className:"fas fa-circle"})},t)}))})})}),W=(a(77),function(){var e=Object(p.c)((function(e){return e.favorites})),t=Object(c.useState)(1),a=Object(S.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(6),s=Object(S.a)(i,1)[0],o=n*s,l=o-s,d=e.slice(l,o);return Object(u.jsx)(j.a.div,{exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100vh"}},children:Object(u.jsxs)("div",{className:"favorite-screen-main",children:[Object(u.jsxs)("div",{className:"favorite-screen-main-title",children:[Object(u.jsx)("h2",{children:"Favorite List"}),Object(u.jsx)("small",{children:"Keep track after your favorite areas"})]}),Object(u.jsx)("div",{className:"favorite-grid",children:e.length>0?d.map((function(e){return Object(u.jsx)(M,{country:e.country,city:e.city,temp:e.temp,desc:e.text,searchKey:e.key},e.id)})):null}),e&&Object(u.jsx)(A,{paginate:function(e){return r(e)},totalForecasts:e,forecastPerPage:s})]})})}),I=(a(78),function(){return Object(u.jsxs)("div",{className:"app-main",children:[Object(u.jsx)(l,{}),Object(u.jsx)("main",{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",exact:!0,component:d}),Object(u.jsx)(s.a,{path:"/weather",component:_}),Object(u.jsx)(s.a,{path:"/favorite",component:W})]})}),Object(u.jsx)("div",{className:"author",children:Object(u.jsx)("p",{children:"Ido Adar"})})]})}),L=a(24),K=a(38),P=a(39),V=a(5),z={curWeather:null,inputResults:[],weekForecasts:[],favorites:[],message:"",isRedirect:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(V.a)(Object(V.a)({},e),{},{inputResults:t.payload,message:""});case x:return Object(V.a)(Object(V.a)({},e),{},{curWeather:t.payload,inputResults:[],message:""});case y:return Object(V.a)(Object(V.a)({},e),{},{weekForecasts:t.payload,message:"",isRedirect:!1});case g:return Object(V.a)(Object(V.a)({},e),{},{favorites:[t.payload].concat(Object(P.a)(e.favorites)),message:"".concat(t.payload.city," added to your favorites")});case N:return Object(V.a)(Object(V.a)({},e),{},{favorites:e.favorites.filter((function(e){return e.city!==t.payload}))});case w:return Object(V.a)(Object(V.a)({},e),{},{message:t.payload});case k:return Object(V.a)(Object(V.a)({},e),{},{isRedirect:!0});default:return e}},J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.b,q=Object(L.c)(H,J(Object(L.a)(K.a)));i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p.a,{store:q,children:Object(u.jsx)(o.a,{children:Object(u.jsx)(I,{})})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.eaf89293.chunk.js.map