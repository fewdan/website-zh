(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7270],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),N=m(n),u=l,g=N["".concat(d,".").concat(u)]||N[u]||k[u]||r;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},8565:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return o}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),i={title:"\u6a21\u62df HTTP \u6545\u969c",sidebar_label:"\u6a21\u62df HTTP \u6545\u969c"},p={unversionedId:"simulate-http-chaos-on-kubernetes",id:"simulate-http-chaos-on-kubernetes",isDocsHomePage:!1,title:"\u6a21\u62df HTTP \u6545\u969c",description:"HTTPChaos \u7b80\u4ecb",source:"@site/docs/simulate-http-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-http-chaos-on-kubernetes",permalink:"/website-zh/docs/simulate-http-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/docs/simulate-http-chaos-on-kubernetes.md",version:"current",sidebar_label:"\u6a21\u62df HTTP \u6545\u969c",frontMatter:{title:"\u6a21\u62df HTTP \u6545\u969c",sidebar_label:"\u6a21\u62df HTTP \u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df GCP \u6545\u969c",permalink:"/website-zh/docs/simulate-gcp-chaos"},next:{title:"Chaosd \u7ec4\u4ef6\u7b80\u4ecb",permalink:"/website-zh/docs/chaosd-overview"}},d=[{value:"HTTPChaos \u7b80\u4ecb",id:"httpchaos-\u7b80\u4ecb",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u521b\u5efa\u5b9e\u9a8c",id:"\u521b\u5efa\u5b9e\u9a8c",children:[{value:"YAML \u914d\u7f6e\u6587\u4ef6",id:"yaml-\u914d\u7f6e\u6587\u4ef6",children:[]}]},{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",children:[]}],m={toc:d};function o(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"httpchaos-\u7b80\u4ecb"},"HTTPChaos \u7b80\u4ecb"),(0,r.kt)("p",null,"HTTPChaos \u662f Chaos Mesh \u63d0\u4f9b\u7684\u6df7\u6c8c\u7c7b\u578b\u4e4b\u4e00\uff0c\u80fd\u591f\u5e2e\u52a9\u4f60\u6a21\u62df HTTP \u670d\u52a1\u7aef\u6545\u969c\u3002\u76ee\u524d Chaos Mesh \u652f\u6301\u5728\u8bf7\u6c42\u8fc7\u7a0b\u6216\u54cd\u5e94\u8fc7\u7a0b\u4e2d\u6ce8\u5165 HTTPChaos \u76f8\u5173\u6545\u969c\uff0c\u652f\u6301\u7684\u6545\u969c\u7c7b\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abort"),"\uff1a\u4e2d\u65ad\u670d\u52a1\u7aef\u7684\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay"),"\uff1a\u4e3a\u76ee\u6807\u8fc7\u7a0b\u6ce8\u5165\u5ef6\u8fdf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace"),"\uff1a\u66ff\u6362\u8bf7\u6c42\u62a5\u6587\u6216\u8005\u54cd\u5e94\u62a5\u6587\u7684\u90e8\u5206\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"patch"),"\uff1a\u7ed9\u8bf7\u6c42\u62a5\u6587\u6216\u54cd\u5e94\u62a5\u6587\u6dfb\u52a0\u989d\u5916\u5185\u5bb9")),(0,r.kt)("p",null,"HTTPChaos \u652f\u6301\u591a\u79cd\u7c7b\u578b\u6545\u969c\u7684\u7ec4\u5408\uff0c\u4e14\u6ce8\u5165\u6545\u969c\u7684\u4f18\u5148\u7ea7\uff08\u987a\u5e8f\uff09\u56fa\u5b9a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"patch"),"\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," \u6545\u969c\u4f1a\u5bfc\u81f4\u77ed\u8def\uff0c\u76f4\u63a5\u4e2d\u65ad\u6b64\u6b21\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"HTTPChaos \u8be6\u7ec6\u7684\u914d\u7f6e\u4ecb\u7ecd\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"#yaml-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"YAML \u914d\u7f6e\u6587\u4ef6"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u5728\u6ce8\u5165 HTTPChaos \u76f8\u5173\u6545\u969c\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Control Manager\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4f7f HTTPChaos \u6ce8\u5165\u751f\u6548\uff0c\u5c3d\u91cf\u907f\u514d\u590d\u7528\u5ba2\u6237\u7aef\u7684 TCP socket\u3002\u56e0\u4e3a\u5728\u6ce8\u5165\u6545\u969c\u524d\u5efa\u7acb\u7684 TCP socket \u4e0a\u8fdb\u884c HTTP \u8bf7\u6c42\u4e0d\u53d7 HTTPChaos \u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8c28\u614e\u4f7f\u7528\u975e\u5e42\u7b49\u8bed\u4e49\u8bf7\u6c42\uff08\u4f8b\u5982\u5927\u591a\u6570 POST \u8bf7\u6c42\uff09\u3002\u82e5\u4f7f\u7528\u4e86\u8fd9\u7c7b\u8bf7\u6c42\uff0c\u6ce8\u5165\u6545\u969c\u540e\u53ef\u80fd\u65e0\u6cd5\u901a\u8fc7\u91cd\u590d\u8bf7\u6c42\u4f7f\u76ee\u6807\u670d\u52a1\u6062\u590d\u6b63\u5e38\u72b6\u6001\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efa\u5b9e\u9a8c"},"\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u76ee\u524d\u53ea\u652f\u6301\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u3002\u4ee5\u914d\u7f6e\u6587\u4ef6\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"example.yaml")," \u4e3a\u4f8b\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f example.yaml")," \u5373\u53ef\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,r.kt)("h3",{id:"yaml-\u914d\u7f6e\u6587\u4ef6"},"YAML \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u6bcf\u6b21\u521b\u5efa\u5b9e\u9a8c\u524d\uff0c\u4f60\u9700\u8981\u51c6\u5907\u597d\u6545\u969c\u7684 YAML \u914d\u7f6e\u6587\u4ef6\u3002\u672c\u8282\u63d0\u4f9b YAML \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff0c\u4ee5\u53ca\u5bf9\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u8fdb\u884c\u4ecb\u7ecd\u3002"),(0,r.kt)("h4",{id:"abort-\u6545\u969c\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},(0,r.kt)("inlineCode",{parentName:"h4"},"abort")," \u6545\u969c\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api\n  abort: true\n  duration: 5m\n  scheduler:\n    cron: '@every 10m'\n")),(0,r.kt)("h4",{id:"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u7684\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},"\u5176\u5b83\u6545\u969c\u7ec4\u5408\u7684\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api/*\n  delay: 10s\n  replace:\n    path: /api/v2/\n    method: DELETE\n  patch:\n    headers:\n      - ["Token", "<one token>"]\n      - ["Token", "<another token>"]\n    body:\n      type: JSON\n      value: "{\\"foo\\": \\"bar\\"}"\n  duration: 5m\n  scheduler:\n    cron: \'@every 10m\'\n')),(0,r.kt)("h4",{id:"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e"},"\u901a\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"\u901a\u7528\u5b57\u6bb5\u6307\u6ce8\u5165\u76ee\u6807\u4e3a Request \u548c Response \u65f6\u5747\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u8fd0\u884c\u5b9e\u9a8c\u65f6\u5019\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"td"},"one"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"random-random-max-percent")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u53d6\u503c\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"Request")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"Response")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Request"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int32")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u670d\u52a1\u76d1\u542c\u7684 TCP \u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"80"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684 HTTP method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u65b9\u6cd5\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684 URI \u8def\u5f84\uff0c\u652f\u6301",(0,r.kt)("a",{parentName:"td",href:"https://www.wikiwand.com/en/Matching_wildcards"},"\u901a\u914d\u7b26")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u8def\u5f84\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"request_headers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u5339\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u8bf7\u6c42\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type: application/json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"abort")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6ce8\u5165\u8fde\u63a5\u4e2d\u65ad\u6545\u969c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"delay")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5ef6\u8fdf\u6545\u969c\u7684\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.header")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u66ff\u6362\u6545\u969c\u4e2d\u7528\u4e8e\u66ff\u6362\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type: application/xml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.body")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u66ff\u6362\u6545\u969c\u7684\u5185\u5bb9\uff08base64 \u7f16\u7801\uff09"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eyJmb28iOiAiYmFyIn0K"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.header")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[][]string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"- [Set-Cookie, one cookie]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.body.type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u53ea\u652f\u6301 ",(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7396"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JSON"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.body.value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u6545\u969c\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"{"foo": "bar"}"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u8fd0\u884c\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5 * * * *"))))),(0,r.kt)("h4",{id:"request-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"},"Request \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI \u8def\u5f84\u66ff\u6362\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v2/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.method")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42 HTTP \u65b9\u6cd5\u7684\u66ff\u6362\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.queries")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI query \u7684\u66ff\u6362\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foo: bar"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"patch.queries")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[][]string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a URI query \u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"- [foo, bar]"))))),(0,r.kt)("h4",{id:"response-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"},"Response \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int32")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u54cd\u5e94\u7684\u72b6\u6001\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u72b6\u6001\u7801\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"response_headers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u54cd\u5e94\u7684\u54cd\u5e94\u5934\u5339\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5bf9\u6240\u6709\u54cd\u5e94\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type: application/json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace.code")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int32")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u54cd\u5e94\u72b6\u6001\u7801\u7684\u66ff\u6362\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"404"))))),(0,r.kt)("h2",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u67d0\u79cd\u6545\u969c\u7684\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/rs-tproxy"},"rs-tproxy")," \u5728\u672c\u5730\u6d4b\u8bd5\u76f8\u5e94\u529f\u80fd\u3002Chaos Mesh \u540c\u6837\u4f7f\u7528 rs-tproxy \u5b9e\u73b0 HTTPChaos\u3002"))}o.isMDXComponent=!0}}]);