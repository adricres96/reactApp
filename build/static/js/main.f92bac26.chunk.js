(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){e.exports=a.p+"static/media/Roma-ninos-coliseo.4fef5fcc.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/Pantheon-Roma.c35524e3.jpg"},30:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(22),r=a(8),o=a(11),s=a(29),m=a(28),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(m.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(s.a)({},e,{completed:!e.completed}):e});default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NUM_SLIDE":return t.numSlide;default:return e}},d=[!1,!1,!1],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DROPDOWN_VISIBILITY_FILTER":return t.elements;default:return e}},p=Object(o.combineReducers)({todos:i,actualSlide:u,listFilter:E}),v=a(5),g=a(6),h=a(9),b=a(7),N=a(10),S=a(41),f=function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(S.a,{to:"/generalData"},n.a.createElement("svg",{className:"svg",width:"18px",height:"17px",viewBox:"0 0 18 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("polygon",{className:"arrow",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),n.a.createElement("polygon",{className:"arrowfixed",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),n.a.createElement("path",{d:"M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"}))))},O=a(13),w=a.n(O);var j=function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return console.log(H.getState()),n.a.createElement("div",null,n.a.createElement("div",{className:"container2"},n.a.createElement("div",{className:"item"},n.a.createElement("img",{src:w.a,className:"Applogo",alt:"logo"}),n.a.createElement("h3",{className:"whiteText"},"--- React + TypeScript + Redux ---"),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(f,null))))}}]),t}(n.a.Component),y=a(24),x=a.n(y),C=a(25),T=a.n(C),I=function(e){return{type:"SET_NUM_SLIDE",numSlide:e}},D=function(e){return{type:"SET_DROPDOWN_VISIBILITY_FILTER",elements:e}},k=function(e){return console.log("entra en SlideActive"),e.dataSlideTo==e.actualSlide?n.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":e.dataSlideTo,className:"active"}):n.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":e.dataSlideTo,className:""})},L=function(e){return e.activeSlide==e.numSlide?(console.log("entra en RenderSlide1"),n.a.createElement("div",{className:"item active"},n.a.createElement("img",{className:".img-responsive",src:e.imgUrl,alt:"Image"}),n.a.createElement("div",{className:"carousel-caption"},n.a.createElement("h3",null," Principal Foto"),n.a.createElement("p",null," Rome")))):(console.log("entra en RenderSlide2"),n.a.createElement("div",{className:"item"},n.a.createElement("img",{className:".img-responsive",src:e.imgUrl,alt:"Image"}),n.a.createElement("div",{className:"carousel-caption"},n.a.createElement("h3",null,"More Sell $"),n.a.createElement("p",null,"Lorem ipsum..."))))},A=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).changeNumSlide=function(){console.log("entra en changeNumSlide"),console.log("-------------------------------------------"),0==a.state.numSlide?(a.setState({numSlide:1}),a.props.dispatch(I(1))):(a.setState({numSlide:0}),a.props.dispatch(I(0))),console.log(a.state.numSlide),console.log("-----------A continuacion el store.getState().actualSlide--------------------"),console.log(H.getState().actualSlide)},a.state={numSlide:0},a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return console.log("entra en GeneralData"),console.log("Actualmente el numero de slide es:"),console.log(this.state.numSlide),n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-inverse"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"})),n.a.createElement("img",{src:w.a,className:"ApplogoLittle",alt:"logo"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},n.a.createElement("ul",{className:"nav navbar-nav"},n.a.createElement("li",{className:"active"},n.a.createElement("a",{href:"#"},"Home")),n.a.createElement("li",null,n.a.createElement(S.a,{to:"/About"},n.a.createElement("p",null,"About"))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Contact"))),n.a.createElement("ul",{className:"nav navbar-nav navbar-right"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("span",null)," Date")))))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{className:"carousel-indicators"},n.a.createElement(k,{dataSlideTo:0,actualSlide:this.state.numSlide}),n.a.createElement(k,{dataSlideTo:1,actualSlide:this.state.numSlide})),n.a.createElement("div",{className:"carousel-inner"},n.a.createElement(L,{activeSlide:this.state.numSlide,numSlide:0,imgUrl:x.a}),n.a.createElement(L,{activeSlide:this.state.numSlide,numSlide:1,imgUrl:T.a})),n.a.createElement("a",{className:"left carousel-control",onClick:this.changeNumSlide,role:"button","data-slide":"prev"},n.a.createElement("span",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"right carousel-control",onClick:this.changeNumSlide,role:"button","data-slide":"next"},n.a.createElement("span",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next")))),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"well"},n.a.createElement("p",null,"Name")),n.a.createElement("div",{className:"well"},n.a.createElement("p",null,"Year")),n.a.createElement("div",{className:"well"},n.a.createElement("p",null,"Birth Place")))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"container text-center"},n.a.createElement("h3",null,"General Information"),n.a.createElement("p",null,"Esto es un texto de prueba........................................... .......................................................................... ................................................................................ ..........................................................."),n.a.createElement("br",null),n.a.createElement(S.a,{to:"/CV"},n.a.createElement("button",{type:"button",className:"especialButton"},"GO TO CV")),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("img",{src:"https://placehold.it/150x80?text=IMAGE",className:"img-responsive",style:{width:"100%"},alt:"Image"}),n.a.createElement("p",null,"Current Project")),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("img",{src:"https://placehold.it/150x80?text=IMAGE",className:"img-responsive",style:{width:"100%"},alt:"Image"}),n.a.createElement("p",null,"Project 2")),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"well"},n.a.createElement("p",null,"Some text..")),n.a.createElement("div",{className:"well"},n.a.createElement("p",null,"Some text.."))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"well"},n.a.createElement("p",null,"Some text..")),n.a.createElement("div",{className:"well"},n.a.createElement("p",null,"Some text..")))),n.a.createElement("hr",null)),n.a.createElement("br",null),n.a.createElement("footer",{className:"container-fluid text-center"},n.a.createElement("p",null,"Footer Text")))}}]),t}(n.a.Component),R=Object(r.b)()(A),_=a(26),F=a(42),P=a(44),B=a(43),G=a(12),M=function(e){function t(e){var a;Object(v.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).controlStore=a.controlStore.bind(Object(G.a)(a)),a.state={imageNumber:H.getState().actualSlide};H.subscribe(a.controlStore);return a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"controlStore",value:function(){console.log("-----Ha entrado en controlStore del subscriber ----------"),console.log(H.getState()),console.log(H.getState()),H.getState().actualSlide!=this.state.imageNumber&&this.setState({imageNumber:H.getState().actualSlide})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Esto es About y deber\xeda tener el numero de la foto: ",this.state.imageNumber),n.a.createElement(S.a,{to:"/generalData"},n.a.createElement("p",null,"About")))}}]),t}(n.a.Component),U=Object(r.b)()(M),V=function(e){return 1==e.controller?n.a.createElement("div",null,n.a.createElement("div",null,"mysql"),n.a.createElement("div",null,"oracle")):n.a.createElement("hr",null)},W=function(e){function t(e){var a;Object(v.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).updateData=function(){console.log("entra en el subscribe de cv para actualizar el viewController"),a.setState({viewController:H.getState().listFilter})},a.clickComponent=function(e){var t=a.state.viewController,l=a.state.list;t[e]=!t[e],a.setState({list:l,viewController:t}),H.dispatch(D(a.state.viewController))};var l=[{title:"",component:[]}];a.state={list:l,viewController:H.getState().listFilter};H.subscribe(a.updateData);return a}return Object(N.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"hola"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{onClick:function(){e.clickComponent(0)}},"Database"),n.a.createElement(V,{controller:H.getState().listFilter[0]}))),"..",n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{onClick:function(){e.clickComponent(1)}},"Backend"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{onClick:function(){e.clickComponent(2)}},"Frontend"))))}}]),t}(n.a.Component),Y=Object(r.b)()(W);a.d(t,"store",function(){return H});var H=Object(o.createStore)(p,Object(_.composeWithDevTools)());Object(c.render)(n.a.createElement(r.a,{store:H},n.a.createElement(F.a,{basename:"/adricres96/reactApp/"},n.a.createElement(P.a,null,n.a.createElement(B.a,{path:"/",component:j,exact:!0}),n.a.createElement(B.a,{path:"/generalData",component:R}),n.a.createElement(B.a,{path:"/About",component:U}),n.a.createElement(B.a,{path:"/CV",component:Y})))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f92bac26.chunk.js.map