(self.webpackChunkCoronaStatics=self.webpackChunkCoronaStatics||[]).push([[797],{1179:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>E});var a=t(7703),o=t(1930),r=t(1338),l=t(7294),c=t(5977),s=t(6847),i=t(9895),m=t(2302),u=t(3750),g=t(7394),A=t(8222),C=t(9613),p=t(1860),h=t(8889),d=t(3379),b=t.n(d),v=t(1691);b()(v.Z,{insert:"head",singleton:!1}),v.Z.locals;const E=(0,a.$j)((e=>({listData:(0,r.Oj)(e),globalData:(0,r.F3)(e)})),(e=>({getListData:n=>{e((e=>({type:o.Z.GET_LIST_DATA,payload:e}))(n))}})))((function(e){var n=e.getListData,t=e.listData,a=void 0===t?[]:t,o=e.globalData;l.useEffect((function(){return n(),function(){return null}}),[]);var r=(0,c.k6)(),d=l.useState(0),b=d[0],v=d[1],E=l.useState(25),_=E[0],f=E[1];return l.createElement("div",{className:"list-view"},l.createElement(h.Z,{staticsData:o}),l.createElement(s.Z,{className:"container",component:i.Z},l.createElement(m.Z,{stickyHeader:!0,"aria-label":"sticky table"},l.createElement(u.Z,null,l.createElement(g.Z,null,l.createElement(A.Z,null,"Country"),l.createElement(A.Z,{align:"right"},"Total Confirmed"),l.createElement(A.Z,{align:"right"},"Total Deaths"),l.createElement(A.Z,{align:"right"},"Total Recovered"))),l.createElement(C.Z,null,a.slice(b*_,b*_+_).map((function(e){return l.createElement(g.Z,{onClick:function(){return n=e.Country,void r.push({pathname:"/detail",search:"?query="+n});var n},className:"table-row",hover:!0,key:e.ID},l.createElement(A.Z,{component:"th",scope:"row"},e.Country),l.createElement(A.Z,{align:"right"},e.TotalConfirmed),l.createElement(A.Z,{align:"right"},e.TotalDeaths),l.createElement(A.Z,{align:"right"},e.TotalRecovered))}))))),l.createElement(p.Z,{component:"div",count:a.length||0,rowsPerPage:_,page:b,onChangePage:function(e,n){v(n)},onChangeRowsPerPage:function(e){f(+e.target.value),v(0)}}))}))},251:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var a=t(4015),o=t.n(a),r=t(3645),l=t.n(r)()(o());l.push([e.id,".global-counter{text-align:center}.global-counter__main-counter-wrap{margin-top:15px}.global-counter__main-counter-wrap h2{font-weight:300;font-size:40px;color:#555;margin:0}.global-counter__main-counter-number{font-weight:700;color:#696969;font-size:54px}.global-counter__main-counter-number.recovered{color:#8aca2b;margin-bottom:15px}.global-counter__total-cases{color:#aaa}\n","",{version:3,sources:["webpack://./src/components/common/CoronaHeadlines/style.scss"],names:[],mappings:"AAAA,gBACI,iBAAkB,CAClB,mCACE,eAAgB,CADjB,sCAGG,eAAgB,CAChB,cAAe,CACf,UAAW,CACX,QAAS,CACV,qCAGD,eAAgB,CAChB,aAAc,CACd,cAAe,CAHhB,+CAKG,aAAc,CACd,kBAAmB,CACpB,6BAGD,UAAW",sourcesContent:[".global-counter {\n    text-align: center;\n    &__main-counter-wrap {\n      margin-top: 15px;\n      h2 {\n        font-weight: 300;\n        font-size: 40px;\n        color: #555;\n        margin: 0;\n      }\n    }\n    &__main-counter-number {\n      font-weight: 700;\n      color: #696969;\n      font-size: 54px;\n      &.recovered {\n        color: #8aca2b;\n        margin-bottom: 15px;\n      }\n    }\n    &__total-cases {\n      color: #aaa;\n    }\n  }"],sourceRoot:""}]);const c=l},1691:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var a=t(4015),o=t.n(a),r=t(3645),l=t.n(r)()(o());l.push([e.id,".container{max-height:700px}.list-view{max-width:1440px;margin:0 auto}.table-row{cursor:pointer}\n","",{version:3,sources:["webpack://./src/components/features/CoronaListView/style.scss"],names:[],mappings:"AAAA,WACE,gBAAiB,CAClB,WAGC,gBAAiB,CACjB,aAAc,CACf,WAGC,cAAe",sourcesContent:[".container {\n  max-height: 700px;\n}\n\n.list-view {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.table-row {\n  cursor: pointer;\n}\n\n"],sourceRoot:""}]);const c=l},8889:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var a=t(7294),o=t(3379),r=t.n(o),l=t(251);r()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;const c=function(e){var n=e.staticsData,t=void 0===n?{}:n,o=t.TotalConfirmed,r=t.TotalDeaths,l=t.TotalRecovered;return a.createElement("div",{className:"global-counter"},a.createElement("div",{className:"global-counter__main-counter-wrap"},a.createElement("h1",null,"Coronavirus Cases:"),a.createElement("div",{className:"global-counter__main-counter-number"},a.createElement("span",{className:"global-counter__total-cases"},o))),a.createElement("div",{className:"global-counter__main-counter-wrap"},a.createElement("h1",null,"Deaths:"),a.createElement("div",{className:"global-counter__main-counter-number"},a.createElement("span",null,r))),a.createElement("div",{className:"global-counter__main-counter-wrap"},a.createElement("h1",null,"Recovered:"),a.createElement("div",{className:"global-counter__main-counter-number recovered"},a.createElement("span",null,l))))}}}]);
//# sourceMappingURL=797.bundle.js.map