(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/star-wars-logo-974.739e58c0.png"},12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),u=a(4),i=a(1),o=Object(n.createContext)(),s={"maior que":">","menor que":"<","igual a":"="};var m=function(){var e=Object(n.useContext)(o),t=e.filters,a=e.setFilters,l=e.setOptions,c=e.options,m=t.filterByNumericValues;return r.a.createElement("div",{className:"filter-cards"},m.map((function(e,n){var o=e.column,m=e.comparison,f=e.value;return r.a.createElement("div",{key:"filter-".concat(n),className:"filter-card","data-testid":"filter"},r.a.createElement("p",null,o," ",s[m]," ",f),r.a.createElement("button",{type:"button",onClick:function(){return e=n,r=o,a(Object(i.a)(Object(i.a)({},t),{},{filterByNumericValues:Object(u.a)(t.filterByNumericValues.filter((function(t,a){return a!==e})))})),void l([].concat(Object(u.a)(c),[r]));var e,r}},"X"))})))};var f=function(){var e=Object(n.useContext)(o).planets;return e.length?r.a.createElement("div",{className:"sort"},r.a.createElement("label",{htmlFor:"column-sort"},"Ordenar por",r.a.createElement("select",{name:"column",id:"column-sort","data-testid":"column-sort"},Object.keys(e[0]).map((function(e,t){return r.a.createElement("option",{key:t},e)})))),r.a.createElement("label",{htmlFor:"input-asc",className:"input-label"},r.a.createElement("input",{type:"radio",name:"asc",id:"input-asc"}),"Ascendente"),r.a.createElement("label",{htmlFor:"input-dsc",className:"input-label"},r.a.createElement("input",{type:"radio",name:"dsc",id:"input-dsc"}),"Descendente")):null};var p=function(){var e=Object(n.useContext)(o),t=e.filters,a=e.setFilters;return r.a.createElement("label",{htmlFor:"name-filter"},"Nome",r.a.createElement("input",{id:"name-filter",type:"text","data-testid":"name-filter",onChange:function(e){var n=e.target.value;a(Object(i.a)(Object(i.a)({},t),{},{filterByName:{name:n}}))}}))},b=a(6),v=a(2);function d(e){var t=e.change,a=e.value,n=e.options;return r.a.createElement("label",{htmlFor:"column-filter"},"Coluna",r.a.createElement("select",{onChange:t,name:"column",id:"column-filter","data-testid":"column-filter",value:a},n.map((function(e){return r.a.createElement("option",{key:e},e)}))))}function E(e){var t=e.change,a=e.value;return r.a.createElement("label",{htmlFor:"comparison-filter"},"Maior/Menor/Igual",r.a.createElement("select",{name:"comparison",id:"comparison-filter","data-testid":"comparison-filter",value:a,onChange:t},r.a.createElement("option",{value:"maior que"},"maior que"),r.a.createElement("option",{value:"menor que"},"menor que"),r.a.createElement("option",{value:"igual a"},"igual a")))}function h(e){var t=e.change,a=e.value;return r.a.createElement("label",{htmlFor:"value-filter"},"Valor",r.a.createElement("input",{id:"value-filter",value:a,onChange:t,type:"number","data-testid":"value-filter",name:"value"}))}function j(e){var t=e.click;return r.a.createElement("button",{"data-testid":"button-filter",type:"button",onClick:t},"Filtrar")}var O={column:"population",comparison:"maior que",value:""};function y(){var e=Object(n.useContext)(o),t=e.filters,a=e.setFilters,l=e.options,c=e.setOptions,s=Object(n.useState)(O),m=Object(v.a)(s,2),f=m[0],p=m[1],y=function(e){var t=e.target,a=t.value,n=t.name;p(Object(i.a)(Object(i.a)({},f),{},Object(b.a)({},n,a)))};return r.a.createElement("div",{className:"numeric-filters"},r.a.createElement(d,{options:l,change:y,value:f.column}),r.a.createElement(E,{change:y,value:f.comparison}),r.a.createElement(h,{change:y,value:f.value}),r.a.createElement(j,{click:function(){a(Object(i.a)(Object(i.a)({},t),{},{filterByNumericValues:[].concat(Object(u.a)(t.filterByNumericValues),[f])}));var e=l.filter((function(e){return e!==f.column}));c(e),p(Object(i.a)(Object(i.a)({},O),{},{column:e[0]}))}}))}function g(){return r.a.createElement("div",{className:"filters-div"},r.a.createElement("div",{className:"filters"},r.a.createElement(p,null),r.a.createElement(y,null),r.a.createElement(f,null)))}var N=a(10),k=a.n(N);var x=function(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"title-div"},r.a.createElement("img",{src:k.a,alt:"Star Wars logo",className:"title"}),r.a.createElement("h3",{className:"subtitle"},"Planet Search")),r.a.createElement(g,null),r.a.createElement(m,null))};var C=function(){var e=Object(n.useContext)(o),t=e.loading,a=e.filters,l=a.filterByNumericValues,c=function(){var e=Object(n.useContext)(o),t=e.filters.filterByNumericValues,a=e.setPlanets,r=e.planets,l=e.data;return[function(){var e={"maior que":function(e,t){return Number(e)>Number(t)},"menor que":function(e,t){return Number(e)<Number(t)},"igual a":function(e,t){return Number(e)===Number(t)}};t.length||a(l),1===t.length?t.forEach((function(t){var n=t.column,r=t.comparison,c=t.value;return a(l.filter((function(t){return e[r](t[n],c)})))})):t.forEach((function(t){var n=t.column,l=t.comparison,c=t.value;return a(r.filter((function(t){return e[l](t[n],c)})))}))}]}(),u=Object(v.a)(c,1)[0],i=Object(n.useContext)(o).planets;Object(n.useEffect)(u,[l]);var s=a.filterByName.name;if(t)return"Loading";if(s&&(i=i.filter((function(e){return e.name.toLowerCase().includes(s)}))),!i.length)return"No Planets Found";var m={1:"A New Hope",2:"The Empire Strikes Back",3:"The Return of Jedi",4:"The Phantom Menace",5:"The Attack of the Clones",6:"The Revenge of the Sith"};return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(i[0]).map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,i.map((function(e,t){return r.a.createElement("tr",{key:t},Object.values(e).map((function(e,t){if(Array.isArray(e)){var a=Object.values(e).map((function(e){return m[e.split("/")[e.split("/").length-2]]})).join(", ");return r.a.createElement("td",{key:"cell-".concat(t)},r.a.createElement("span",null,a))}return t===Object.keys(i[0]).length-1?r.a.createElement("td",{key:"cell-".concat(t)},r.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer"},"API Link")):r.a.createElement("td",{key:t},e)})))}))))};var B=function(){return r.a.createElement("main",null,r.a.createElement(x,null),r.a.createElement(C,null))},F=a(7),w=a.n(F),S=a(11);var q=["population","orbital_period","diameter","rotation_period","surface_water"];function V(e){var t=e.children,a=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),c=Object(v.a)(l,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(S.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi-trybe.herokuapp.com/api/planets/",e.next=3,fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()}));case 3:t=e.sent,(a=t.results).forEach((function(e){delete e.residents})),r(a),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),[a,u]}(),l=Object(v.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)([]),s=Object(v.a)(i,2),m=s[0],f=s[1],p=Object(n.useState)(q),b=Object(v.a)(p,2),d=b[0],E=b[1];Object(n.useEffect)((function(){f(c)}),[c]);var h=Object(n.useState)({filterByName:{name:""},filterByNumericValues:[]}),j=Object(v.a)(h,2),O=j[0],y=j[1],g={planets:m,setPlanets:f,loading:u,filters:O,setFilters:y,options:d,setOptions:E,data:c};return r.a.createElement(o.Provider,{value:g},t)}var P=function(){return r.a.createElement(V,null,r.a.createElement(B,null))};a(18);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1dd564a0.chunk.js.map