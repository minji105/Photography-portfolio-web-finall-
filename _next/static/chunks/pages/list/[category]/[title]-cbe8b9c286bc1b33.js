(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[147],{3056:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list/[category]/[title]",function(){return n(9419)}])},9419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var i=n(5893),r=n(7294),s=n(1163);let o={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},a={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},c="mousemove",l="mouseup";function u(e,t){if(0===t)return e;let n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}var d=n(5675),h=n.n(d),g=n(7253),p=n.n(g),_=JSON.parse('{"Beauty":{"&nd STICK CHEEK":7,"BETTER THAN CONTOUR":8,"SHEER POWDER PEARLS":12,"GLASTING COLOR GLOSS_JP":3,"SHEER TINTED STICK":14},"Personal Work":{"1":9,"2":6,"3":6,"4":4,"5":3,"6":5,"7":6,"8":4,"9":12,"10":8},"Profile":{"1":2,"2":3,"3":2},"Snap":{"1":17,"2":13,"3":15,"4":2}}'),f=n(461),j=n(1329),m=n(7666),v=n(6815),w=function(){let e=(0,s.useRouter)(),{title:t,category:n}=e.query,[d,g]=(0,r.useState)([]);(0,r.useEffect)(()=>{if(n&&t){let e=Array.from({length:_[n][t]},(e,i)=>`/imgs/${n}/${t}/${i+1}.jpg`),i=[],r=0;e.forEach(t=>{let n=document.createElement("img");n.src=t,n.onload=()=>{i.push({img:t,title:`image${r+1}`,date:new Date().toLocaleDateString()}),++r===e.length&&g(i)},n.onerror=()=>{++r===e.length&&g(i),console.log(`Image not found: ${t}`)}})}},[t,n]);let[w,O]=(0,r.useState)(!1),[S,E]=(0,r.useState)(0),b=e=>{E(e),O(!0)},x=()=>{E(e=>(e+1)%d.length)},L=()=>{E(e=>(e-1+d.length)%d.length)},[T,C]=(0,r.useState)(!0),P=()=>{C(e=>!e),O(e=>!e)},k=(e,t,n)=>{P(!1),b(e+t*n)},N=function(e){var t,n,i;let s;let{trackMouse:d}=e,h=r.useRef(Object.assign({},a)),g=r.useRef(Object.assign({},o)),p=r.useRef(Object.assign({},g.current));for(s in p.current=Object.assign({},g.current),g.current=Object.assign(Object.assign({},o),e),o)void 0===g.current[s]&&(g.current[s]=o[s]);let[_,f]=r.useMemo(()=>(function(e,t){let n=t=>{let n="touches"in t;n&&t.touches.length>1||e((e,r)=>{r.trackMouse&&!n&&(document.addEventListener(c,i),document.addEventListener(l,d));let{clientX:s,clientY:o}=n?t.touches[0]:t,h=u([s,o],r.rotationAngle);return r.onTouchStartOrOnMouseDown&&r.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),a),{initial:h.slice(),xy:h,start:t.timeStamp||0})})},i=t=>{e((e,n)=>{let i="touches"in t;if(i&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;let{clientX:r,clientY:s}=i?t.touches[0]:t,[a,c]=u([r,s],n.rotationAngle),l=a-e.xy[0],d=c-e.xy[1],h=Math.abs(l),g=Math.abs(d),p=(t.timeStamp||0)-e.start,_=h>g?l>0?"Right":"Left":d>0?"Down":"Up",f="number"==typeof n.delta?n.delta:n.delta[_.toLowerCase()]||o.delta;if(h<f&&g<f&&!e.swiping)return e;let j={absX:h,absY:g,deltaX:l,deltaY:d,dir:_,event:t,first:e.first,initial:e.initial,velocity:Math.sqrt(h*h+g*g)/(p||1),vxvy:[l/(p||1),d/(p||1)]};j.first&&n.onSwipeStart&&n.onSwipeStart(j),n.onSwiping&&n.onSwiping(j);let m=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${_}`])&&(m=!0),m&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:j,swiping:!0})})},r=t=>{e((e,n)=>{let i;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){i=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(i);let r=n[`onSwiped${i.dir}`];r&&r(i)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),a),{eventData:i})})},s=()=>{document.removeEventListener(c,i),document.removeEventListener(l,d)},d=e=>{s(),r(e)},h=(e,t)=>{let s=()=>{};if(e&&e.addEventListener){let a=Object.assign(Object.assign({},o.touchEventOptions),t.touchEventOptions),c=[["touchstart",n,a],["touchmove",i,Object.assign(Object.assign({},a),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",r,a]];c.forEach(([t,n,i])=>e.addEventListener(t,n,i)),s=()=>c.forEach(([t,n])=>e.removeEventListener(t,n))}return s},g={ref:t=>{null!==t&&e((e,n)=>{if(e.el===t)return e;let i={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),i.cleanUpTouch=void 0),n.trackTouch&&t&&(i.cleanUpTouch=h(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),i)})}};return t.trackMouse&&(g.onMouseDown=n),[g,h]})(e=>h.current=e(h.current,g.current),{trackMouse:d}),[d]);return h.current=(t=h.current,n=g.current,i=p.current,n.trackTouch&&t.el?t.cleanUpTouch?n.preventScrollOnSwipe!==i.preventScrollOnSwipe||n.touchEventOptions.passive!==i.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:f(t.el,n)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:f(t.el,n)}):(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0}))),_}({onSwipedLeft:x,onSwipedRight:L,preventDefaultTouchmoveEvent:!0,trackMouse:!0}),I=(0,f.Y)(),M=(0,f.Z)(d,I);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{title:t}),(0,i.jsxs)("div",{className:p().buttons,children:[(0,i.jsxs)("p",{onClick:()=>{e.back()},children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"4",className:`h-6 w-6 ${p().arrowIcon}`,children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})," Back To List"]}),(0,i.jsx)("p",{onClick:P,className:T?p().active:"",children:"View Grid"})]}),T&&!w&&(0,i.jsx)("div",{className:p().gridContainer,children:M.map((e,t)=>(0,i.jsx)("div",{className:p().imgColumn,children:e.map((e,n)=>(0,i.jsx)("div",{className:p().imgContainer,children:(0,i.jsx)(h(),{src:e.img,alt:e.title,layout:"responsive",width:800,height:600,onClick:()=>k(t,I,n),className:p().gridImg},n)},`image-${t}-${n}`))},`column-${t}`))}),!T&&w&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:p().slideContainer,...N,children:[(0,i.jsx)(m.Z,{direction:"horizontal",storageKey:"projectPageAlertShown"}),(0,i.jsx)("button",{onClick:L,className:`${p().arrow} ${p().left}`,children:"<"}),(0,i.jsx)(h(),{src:d[S]?.img,alt:`${S+1}`,width:800,height:600}),(0,i.jsx)("button",{onClick:x,className:`${p().arrow} ${p().right}`,children:">"})]}),(0,i.jsx)("div",{className:p().slideIndex,children:(0,i.jsxs)("p",{children:[S+1," / ",d.length]})})]}),(0,i.jsx)(v.Z,{})]})}},7666:function(e,t,n){"use strict";var i=n(5893),r=n(7294),s=n(2909),o=n.n(s),a=n(1016);t.Z=function(e){let{direction:t,storageKey:n}=e,s=(0,a.Z)(),[c,l]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{sessionStorage.getItem(n)||(l(!0),sessionStorage.setItem(n,"true"))},[n]),s&&c)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:o().slideAlert,children:"vertical"===t?"Swipe up or down":"Swipe left or right"})}):null}},6815:function(e,t,n){"use strict";var i=n(5893),r=n(7294);t.Z=function(){let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{t(window.innerWidth<=479)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,i.jsx)("div",{style:{position:"relative",height:"15vh",width:"100vw"},children:(0,i.jsx)("span",{style:{...e?{fontSize:"9px"}:{fontSize:"15px"},position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textWrap:"nowrap"},children:"\xa9 2024 Heesu Cho. All Rights Reserved"})})}},1329:function(e,t,n){"use strict";var i=n(5893);n(7294);var r=n(7096),s=n.n(r);t.Z=function(e){let{title:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:s().projectHeader,children:(0,i.jsx)("h1",{className:s().title,children:t})})})}},461:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var i=n(7294);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,[t,n]=(0,i.useState)(e);return(0,i.useEffect)(()=>{let e=()=>{window.innerWidth<=768?n(3):n(4)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),t};t.Z=(e,t)=>{let n=Array.from({length:t},()=>[]);return e.forEach((e,i)=>{n[i%t].push(e)}),n}},1016:function(e,t,n){"use strict";var i=n(7294);t.Z=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=navigator.userAgent||navigator.vendor||window.opera;/android|iPad|iPhone|iPod/.test(e)&&!window.MSStream&&t(!0)},[]),e}},7253:function(e){e.exports={buttons:"List_Project_buttons__hIH_G",arrowIcon:"List_Project_arrowIcon__EYVyB",active:"List_Project_active__654hA",gridContainer:"List_Project_gridContainer__E2Tn2",imgColumn:"List_Project_imgColumn__8WEPo",gridImg:"List_Project_gridImg__mz0Ol",imgContainer:"List_Project_imgContainer__fkS7r",slideContainer:"List_Project_slideContainer__3_QYJ",slideIndex:"List_Project_slideIndex__I_K5y",projectInfo:"List_Project_projectInfo__nFJ6K",arrow:"List_Project_arrow__8KOOb",left:"List_Project_left__4953_",right:"List_Project_right__WW_3q",imageColumn:"List_Project_imageColumn__pVJpm"}},2909:function(e){e.exports={slideAlert:"SlideAlert_slideAlert___k2r3",fadeInOut:"SlideAlert_fadeInOut__h_r4s"}},7096:function(e){e.exports={projectHeader:"ProjectHeader_projectHeader__hIh1a",title:"ProjectHeader_title__N7QKl"}},1163:function(e,t,n){e.exports=n(9090)}},function(e){e.O(0,[675,888,774,179],function(){return e(e.s=3056)}),_N_E=e.O()}]);