"use strict";(self.webpackChunkintroduccion_gatsby=self.webpackChunkintroduccion_gatsby||[]).push([[678],{517:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var i=n(294);var c=e=>{let{bien:t}=e;return i.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"200px",border:"1px solid #ccc",borderRadius:"10px",margin:"10px",padding:"10px",boxShadow:"2px 2px 6px 0px rgba(0,0,0,0.3)"}},"* Nombre del edificio ",i.createElement("p",null,t.nombre),"* Antecedentes del edificio ",i.createElement("p",null,t.antecedentes),"* Tipo de arquitectura y época del edificio ",i.createElement("p",null,t.tipo.arquitectura+" - "+t.tipo.época),"* Imagen del edificio ",i.createElement("img",{src:t.img,alt:t.nombre,style:{width:"100%",height:"auto"}}),"* Localización del edificio ",i.createElement("p",null,t.localizacion.lat+", "+t.localizacion.long))};function a(){const{0:e,1:t}=(0,i.useState)([]);return(0,i.useEffect)((()=>{fetch("https://demo4085396.mockable.io").then((e=>e.json())).then((e=>t(e.bienes)))}),[]),i.createElement("div",{id:"container",style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.map((e=>i.createElement(c,{bien:e,key:e.nombre}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5cf89dd66b91dd8085d8.js.map