(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,image:"/static/media/cabin.56ec4ee7.png"},{id:2,image:"/static/media/cake.a29c0b43.png"},{id:3,image:"/static/media/circus.e27c88e5.png"},{id:4,image:"/static/media/game.107d31e8.png"},{id:5,image:"/static/media/safe.7dfdcf55.png"},{id:6,image:"/static/media/submarine.8fad4ff9.png"}]},function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),i=t.n(r),l=(t(15),t(1)),o=t(2),s=t(4),m=t(3),u=t(5);var d=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"GuessMessage"))};t(16);var f=function(e){return c.a.createElement("ul",{className:"nav nav-pills nav-fill"},c.a.createElement("li",{className:"brand nav-item"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"ClickyGame")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(d,null)),c.a.createElement("li",{className:"nav-item"},c.a.createElement("p",null,"Score: ",e.score," | Top Score: ",e.topScore)))},g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={score:0},t.increaseScore=function(){t.setState({score:t.state.score+1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,{score:this.state.score,topScore:this.state.score}))}}]),a}(n.Component),v=t(8);var p=function(e){return c.a.createElement("div",{className:"card text-center"},c.a.createElement("img",{className:"img-fluid",src:e.image,alt:e.id,onClick:function(){console.log("Clicked ImgCard")}}),console.error())},E=(t(17),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={imageList:v},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"card-columns"},this.state.imageList.map(function(e){return c.a.createElement(p,{id:e.id,key:e.id,image:e.image})})))}}]),a}(c.a.Component));t(18);var h=function(){return c.a.createElement("div",null,c.a.createElement(g,null),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.9d36f162.chunk.js.map