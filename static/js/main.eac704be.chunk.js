(this["webpackJsonpstarwars-react"]=this["webpackJsonpstarwars-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/falcon.5b35eabe.svg"},22:function(e,t,a){e.exports=a(37)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),s=a.n(c),l=a(9),o=a(3),i=a(17),m=a(20),u=a(5),p="GET_CHARACTERS_REQUEST",f="GET_CHARACTERS_SUCCESS",h="GET_CHARACTERS_FAIL",d="DELETE_CHARACTERS",E="https://swapi.co/api/",b="?search=",v="people/";function y(){var e="".concat(E).concat(v);return function(t,a){var r=a().search.searchQuery,n=a().characters.nextHref;r&&(e="".concat(E).concat(v).concat(b).concat(r)),t({type:p}),n&&(e=n),function(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){e.next?t({type:f,payload:{characters:e.results,nextHref:e.next,hasMoreItems:!0}}):t({type:f,payload:{characters:e.results,nextHref:null,hasMoreItems:!1}})}))}(e,t)}}function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={characters:[],isFetching:!1,hasMoreItems:!0,nextHref:null,error:""};var N="GET_FILMS_SUCCESS",w="GET_FILMS_FAIL",S="https://swapi.co/api/films/",C=[];function P(){return fetch(S).then((function(e){return e.json()})).then((function(e){e.results.forEach((function(e){var t=e.title,a=e.url;C.push({title:t,url:a})}))})),function(e){e({type:N,payload:{films:C}})}}function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={films:[]};var F="CHANGE_SEARCH_TEXT";function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var I={searchQuery:null};var R=Object(o.c)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return A({},e,{films:t.payload.films});case w:return A({},e,{error:t.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return j({},e,{isFetching:!0,error:""});case f:return j({},e,{characters:[].concat(Object(m.a)(e.characters),[t.payload.characters]).flat(),nextHref:t.payload.nextHref,hasMoreItems:t.payload.hasMoreItems,isFetching:!1,error:""});case d:return j({},e,{characters:[],nextHref:null,hasMoreItems:!0,isFetching:!0});case h:return j({},e,{error:t.payload,isFetching:!1});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{searchQuery:t.payload.searchQuery});default:return e}}}),H=Object(o.d)(R,Object(o.a)(i.a)),k=a(6),M=a(7),W=a(10),x=a(8),_=a(11),G=a(18),B=a.n(G);var Q=a(21),Y=function(e){function t(){var e,a;Object(k.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(W.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(n)))).el=document.createElement("div"),a}return Object(_.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return s.a.createPortal(this.props.children,this.el)}}]),t}(r.Component),U=(a(33),a(19)),J=a.n(U);function X(){return n.a.createElement("div",{className:"preloaderWrapper fadeIn"},n.a.createElement("img",{src:J.a,className:"falconPreloader",alt:"falcon"}))}a(34);var q=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(W.a)(this,Object(x.a)(t).call(this,e))).fetchData=function(){for(var e=a.props.films,t=a.props.titles,r=[],n=function(a){e.forEach((function(e){e===t[a].url&&r.push(t[a].title)}))},c=0;c<t.length;c++)n(c);a.setState({needShowLoader:!0,films:r}),null!==a.props.homeworld&&(fetch(a.props.homeworld).then((function(e){return e.json()})).then((function(e){a.setState({homeworld:e.name})})),fetch(a.props.species).then((function(e){return e.json()})).then((function(e){a.setState({species:e.name})})),setTimeout((function(){a.setState({needShowLoader:!1})}),2e3))},a.closeModal=function(){a.setState({styles:"modalWrapper animated fadeOut"}),setTimeout((function(){return a.props.onClose()}),300)},a.state={needShowLoader:!0,homeworld:null,species:null,films:[],styles:"modalWrapper animated fadeIn"},a}return Object(_.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,null,this.state.needShowLoader?n.a.createElement(X,null):n.a.createElement("div",{className:this.state.styles},n.a.createElement("div",{className:"modalWindow"},n.a.createElement("button",{className:"modalCloseBtn",onClick:this.closeModal}),n.a.createElement("div",{className:"modalHeader"},n.a.createElement("div",{className:"modalAvatar"},this.props.name[0]),n.a.createElement("p",null,this.props.name)),n.a.createElement("div",{className:"modalBody"},n.a.createElement("div",{className:"threeWrapper"},n.a.createElement("div",{className:"titlesWrapper"},n.a.createElement("span",{className:"iconDOB"}),n.a.createElement("span",{className:"titles"},"Birth year"),n.a.createElement("span",{className:"titleBirth"},this.props.birthYear)),n.a.createElement("div",{className:"titlesWrapper"},n.a.createElement("span",{className:"iconSpecies"}),n.a.createElement("span",{className:"titles"},"Species"),n.a.createElement("span",{className:"titleSpecies"},this.state.species)),n.a.createElement("div",{className:"titlesWrapper"},n.a.createElement("span",{className:"iconGender"}),n.a.createElement("span",{className:"titles"},"Gender"),n.a.createElement("span",{className:"titleGender"},this.props.gender))),n.a.createElement("div",{className:"filmsWrapper"},n.a.createElement("div",{className:"titlesWrapper"},n.a.createElement("span",{className:"iconHomeworld"}),n.a.createElement("span",{className:"titles"},"Homeworld"),n.a.createElement("span",{className:"titleHomeworld"},this.state.homeworld)),n.a.createElement("div",{className:"titlesWrapper"},n.a.createElement("span",{className:"iconFilms"}),n.a.createElement("span",{className:"titleFilms"},"Films"),n.a.createElement("div",{className:"titleList"},this.state.films.map((function(e,t){return n.a.createElement("span",{key:t},e)}))))))))))}}]),t}(r.Component),z=Object(l.b)((function(e){return{titles:e.films.films}}))(q);var K=function(e){var t=e.name,a=e.url,c=e.films,s=e.homeworld,l=e.species,o=e.gender,i=e.birthYear,m=e.appElement,u=t[0],p=Object(r.useState)(!1),f=Object(Q.a)(p,2),h=f[0],d=f[1],E=Object(r.useCallback)((function(){d(!0),m.current.classList.add("blur"),document.body.classList.add("scroll-hidden")}),[d,m]),b=Object(r.useCallback)((function(){d(!1),m.current.classList.remove("blur"),document.body.classList.remove("scroll-hidden"),m.current.classList.add("blurOut"),setTimeout((function(){return m.current.classList.remove("blurOut")}),2100)}),[d,m]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement("div",{className:"card animated fadeInUp",onClick:E},n.a.createElement("div",{className:"avatarWrapper"},n.a.createElement("div",{className:"avatar"},u),n.a.createElement("p",{className:"avatarName"},t),n.a.createElement("p",{className:"avatarSpecies"},o)))),h&&n.a.createElement(z,{onClose:b,name:t,films:c,homeworld:s,species:l,gender:o,birthYear:i,url:a}))};var V=Object(l.b)((function(e){var t=e.characters.hasMoreItems;return{characters:e.characters.characters,hasMoreItems:t,isFetching:e.characters.isFetching,films:e.films.films}}),(function(e){var t=function(e,t){var a=0;return function(){for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];a&&clearTimeout(a),a=setTimeout((function(){return e.apply(void 0,n)}),t)}}((function(){return e(y())}),1e3);return{setCharactersList:function(){e(y())},setSearch:function(a){e({type:d}),e(function(e){return{type:F,payload:{searchQuery:e}}}(a)),t()},getFilms:function(){e(P())}}}))((function(e){var t=e.characters,a=e.hasMoreItems,c=e.appElement,s=e.setSearch,l=e.setCharactersList,o=e.isFetching,i=e.getFilms;Object(r.useEffect)((function(){i()}),[i]);var m=0!==t.length;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault()}},n.a.createElement("input",{type:"text",className:"input",placeholder:"Search by name",onChange:function(e){return s(e.target.value)}}),n.a.createElement("button",{type:"submit",className:"searchButton"})),n.a.createElement("ul",{className:"cardList"},n.a.createElement(B.a,{pageStart:0,loadMore:function(){o||l()},hasMore:a},m?t.map((function(e){var t=e.name,a=e.url,r=e.films,s=e.homeworld,l=e.species,o=e.gender,i=e.birth_year;return n.a.createElement(K,{name:t,url:a,key:t,films:r,homeworld:s,appElement:c,species:l,gender:o,birthYear:i})})):n.a.createElement("div",{className:"noCharactersFound animated fadeIn"},"No characters found."))))})),Z=(a(35),a(36),function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(W.a)(this,Object(x.a)(t).call(this,e))).appRef=n.a.createRef(),a}return Object(_.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{ref:this.appRef,className:"app"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"logoWrapper"},n.a.createElement("div",{className:"logoStar"}),n.a.createElement("p",{className:"logoText"},"CHARACTER ENCYCLOPEDIA"),n.a.createElement("div",{className:"logoWars"}))),n.a.createElement("main",{className:"cardContainer"},n.a.createElement(V,{appElement:this.appRef})),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footerText"},n.a.createElement("p",{className:"footerText"},"STAR WARS CHARACTER ENCYCLOPEDIA, 2019"))))}}]),t}(r.Component));s.a.render(n.a.createElement(l.a,{store:H},n.a.createElement(Z,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.eac704be.chunk.js.map