(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{2730:function(n,t,e){"use strict";var i=e(7294);function r(n){return Array.prototype.slice.call(n)}function a(n,t){var e=Math.floor(n);return e===t||e+1===t?n:t}function o(){return Date.now()}function u(n,t,e){if(t="data-keen-slider-"+t,null===e)return n.removeAttribute(t);n.setAttribute(t,e||"")}function s(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?r(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?r(n):[]}function c(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function d(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function l(){var n=[];return{add:function(t,e,i,r){t.addListener?t.addListener(i):t.addEventListener(e,i,r),n.push([t,e,i,r])},input:function(n,t,e,i){this.add(n,t,function(n){n.nativeEvent&&(n=n.nativeEvent);var t=n.changedTouches||[],i=n.targetTouches||[],r=n.detail&&n.detail.x?n.detail:null;return e({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":t[0]?t[0]?t[0].identifier:"e":"d",raw:n,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:n.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:n.pageY})},i)},purge:function(){n.forEach(function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])}),n=[]}}}function f(n,t,e){return Math.min(Math.max(n,t),e)}function p(n){return(n>0?1:0)-(n<0?1:0)||+n}function v(n){var t=n.getBoundingClientRect();return{height:a(t.height,n.offsetHeight),width:a(t.width,n.offsetWidth)}}function h(n,t,e,i){var r=n&&n[t];return null==r?e:i&&"function"==typeof r?r():r}function g(n){return Math.round(1e6*n)/1e6}var m=function(){return(m=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};function b(n,t,e){if(e||2==arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))}function x(n){var t,e,i,r,a,o,u,s;function c(n){return 1-Math.pow(1-n,3)}function d(){return i?n.track.velocity():0}function l(n,t){void 0===t&&(t=1e3);var e=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/e,dur:n/e}}function v(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function h(){n.animator.stop()}n.on("updated",v),n.on("optionsChanged",v),n.on("created",v),n.on("dragStarted",function(){i=!1,h(),t=e=n.track.details.abs}),n.on("dragChecked",function(){i=!0}),n.on("dragEnded",function(){var i,v,g,m,b,x,k=n.options.mode;"snap"===k&&(i=n.track,g=(v=n.track.details).position,m=p(d()),(g>o||g<a)&&(m=0),b=t+m,0===v.slides[i.absToRel(b)].portion&&(b-=m),t!==e&&(b=e),p(i.idxToDist(b,!0))!==m&&(b+=m),b=f(b,u,s),x=i.idxToDist(b,!0),n.animator.start([{distance:x,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])),"free"!==k&&"free-snap"!==k||function(){h();var t="free-snap"===n.options.mode,e=n.track,i=d();r=p(i);var v=n.track.details,g=[];if(i||!t){var m=l(i),b=m.dist,x=m.dur;if(x*=2,b*=r,t){var k=e.idxToDist(e.distToIdx(b),!0);k&&(b=k)}g.push({distance:b,duration:x,easing:c});var w=v.position,y=w+b;if(y<a||y>o){var M=y<a?a-w:o-w,T=0,C=i;if(p(M)===r){var E=Math.min(Math.abs(M)/Math.abs(b),1),_=(1-Math.pow(1-E,1/3))*x;g[0].earlyExit=_,C=i*(1-E)}else g[0].earlyExit=0,T+=M;var I=l(C,100),j=I.dist*r;n.options.rubberband&&(g.push({distance:j,duration:2*I.dur,easing:c}),g.push({distance:-j+T,duration:500,easing:c}))}n.animator.start(g)}else n.moveToIdx(f(v.abs,u,s),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}()}),n.on("dragged",function(){e=n.track.details.abs})}function k(n){var t,e,i,r,a,o,u,v,h,g,m,b,x,k,w,y,M,T,C=l();function E(t){if(o&&v===t.id){var s=z(t);if(h){if(!j(t))return I(t);g=s,h=!1,n.emit("dragChecked")}if(y)return g=s;c(t);var l=function(t){if(M===-1/0&&T===1/0)return t;var i=n.track.details,o=i.length,u=i.position,s=f(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M||u<M&&e>0||u>T&&e<0)return t;var c=Math.max(0,1-Math.abs((u<M?u-M:u-T)/o*(r*o))/a*2);return c*c*t}(u(g-s)/r*i);e=p(l);var x=n.track.details.position;(x>M&&x<T||x===M&&e>0||x===T&&e<0)&&d(t),m+=l,!b&&Math.abs(m*r)>5&&(b=!0),n.track.add(l),g=s,n.emit("dragged")}}function _(t){!o&&n.track.details&&n.track.details.length&&(m=0,o=!0,b=!1,h=!0,v=t.id,j(t),g=z(t),n.emit("dragStarted"))}function I(t){o&&v===t.idChanged&&(o=!1,n.emit("dragEnded"))}function j(n){var t=A(),e=t?n.y:n.x,i=t?n.x:n.y,r=void 0!==x&&void 0!==k&&Math.abs(k-i)<=Math.abs(x-e);return x=e,k=i,r}function z(n){return A()?n.y:n.x}function A(){return n.options.vertical}function N(){r=n.size,a=A()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function D(n){b&&(d(n),c(n))}function O(){if(C.purge(),n.options.drag&&!n.options.disabled){u="function"==typeof(r=n.options.dragSpeed||1)?r:function(n){return n*r},i=n.options.rtl?-1:1,N(),t=n.container,e="data-keen-slider-clickable",s("[".concat(e,"]:not([").concat(e,"=false])"),t).map(function(n){C.add(n,"dragstart",d),C.add(n,"mousedown",d),C.add(n,"touchstart",d)}),C.add(t,"dragstart",function(n){c(n)}),C.add(t,"click",D,{capture:!0}),C.input(t,"ksDragStart",_),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",_),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",_,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",function(n){o&&c(n)});var e,r,a="data-keen-slider-scrollable";s("[".concat(a,"]:not([").concat(a,"=false])"),n.container).map(function(n){var t;C.input(n,"touchstart",function(n){t=z(n),y=!0,w=!0},{passive:!0}),C.input(n,"touchmove",function(e){var i=A(),r=i?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-z(e),o=i?n.scrollTop:n.scrollLeft,u=i&&"scroll"===n.style.overflowY||!i&&"scroll"===n.style.overflowX;if(t=z(e),(a<0&&o>0||a>0&&o<r)&&w&&u)return y=!0;w=!1,c(e),y=!1}),C.input(n,"touchend",function(){y=!1})})}}n.on("updated",N),n.on("optionsChanged",O),n.on("created",O),n.on("destroyed",C.purge)}function w(n){var t,e,i=null;function r(t,e,i){n.animator.active?o(t,e,i):requestAnimationFrame(function(){return o(t,e,i)})}function a(){r(!1,!1,e)}function o(e,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach(function(n,t){if(e)!i&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!i&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}})}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,e){var i=e?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+i]=t,n.style["max-"+i]=t}function c(n,t,e){if(null!==t){t=u(t);var i=e?t:0;t="translate3d(".concat(e?0:t,"px, ").concat(i,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,e),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,e)}function f(){d(),e=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(i="auto"===h(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",function(){d()}),n.on("updated",l),n.on("destroyed",d)}var y=function(n,t,e){try{var i,r,a,c;return r=b([(i={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(t){var e,r,a,o,c,d,f=l();function p(n){var e;u(t.container,"reverse","rtl"!==(e=t.container,window.getComputedStyle(e,null).getPropertyValue("direction"))||n?null:""),u(t.container,"v",t.options.vertical&&!n?"":null),u(t.container,"disabled",t.options.disabled&&!n?"":null)}function g(){b()&&y()}function b(){var n=null;if(o.forEach(function(t){t.matches&&(n=t.__media)}),n===e)return!1;e||t.emit("beforeOptionsChanged"),e=n;var i=n?a.breakpoints[n]:a;return t.options=m(m({},a),i),p(),_(),I(),T(),!0}function x(){return t.options.trackConfig.length}function k(n){for(var u in e=!1,a=m(m({},i),n),f.purge(),r=t.size,o=[],a.breakpoints||[]){var s=window.matchMedia(u);s.__media=u,o.push(s),f.add(s,"change",g)}f.add(window,"orientationchange",E),f.add(window,"resize",C),b()}function w(n){t.animator.stop();var e=t.track.details;t.track.init(null!=n?n:e?e.abs:0)}function y(n){w(n),t.emit("optionsChanged")}function M(n,e){if(n)return k(n),void y(e);_(),I();var i=x();T(),x()!==i?y(e):w(e),t.emit("updated")}function T(){var n=t.options.slides;if("function"==typeof n)return t.options.trackConfig=n(t.size,t.slides);for(var e=t.slides,i=e.length,r="number"==typeof n?n:h(n,"number",i,!0),a=[],o=h(n,"perView",1,!0),u=h(n,"spacing",0,!0)/t.size||0,s="auto"===o?u:u/o,c=h(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===o?function(n){var e=v(n);return(t.options.vertical?e.height:e.width)/t.size||1}(e[l]):1/o-u+s,p="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:p,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===c&&!t.options.loop&&1!==o){var g=0;a.map(function(n){var t=d-g;return g+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n})}t.options.trackConfig=a}function C(){_();var n=t.size;t.options.disabled||n===r||(r=n,M())}function E(){C(),setTimeout(C,500),setTimeout(C,2e3)}function _(){var n=v(t.container);t.size=(t.options.vertical?n.height:n.width)||1}function I(){t.slides=s(t.options.selector,t.container)}t.container=(d=s(n,c||document)).length?d[0]:null,t.destroy=function(){f.purge(),t.emit("destroyed"),p(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=M,k(t.options)}),w,k,x],e||[],!0),c={},a={emit:function(n){c[n]&&c[n].forEach(function(n){n(a)});var t=a.options&&a.options[n];t&&t(a)},moveToIdx:function(n,t,e){var i=a.track.idxToDist(n,t);if(i){var r=a.options.defaultAnimation;a.animator.start([{distance:i,duration:h(e||r,"duration",500),easing:h(e||r,"easing",function(n){return 1+--n*n*n*n*n})}])}},on:function(n,t,e){void 0===e&&(e=!1),c[n]||(c[n]=[]);var i=c[n].indexOf(t);i>-1?e&&delete c[n][i]:e||c[n].push(t)},options:t},function(){if(a.track=function(n){var t,e,i,r,a,u,s,c,d,l,v,m,x,k,w=1/0,y=[],M=null,T=0;function C(n){N(T+n)}function E(n){var t=_(T+n).abs;return z(t)===t?t:null}function _(n){var t=Math.floor(Math.abs(g(n/e))),i=g((n%e+e)%e);i===e&&(i=0);var r=p(n),a=s.indexOf(b([],s,!0).reduce(function(n,t){return Math.abs(t-i)<Math.abs(n-i)?t:n})),o=a;return r<0&&t++,a===u&&(o=0,t+=r>0?1:-1),{abs:o+t*u*r,origin:a,rel:o}}function I(n,t,e){if(t||!r.loop)return j(n,e);if(z(n)!==n)return null;var i,a=_(null!=e?e:T),o=a.abs,s=n-a.rel,c=o+s;i=j(c);var d=j(c-u*p(s));return(null!==d&&Math.abs(d)<Math.abs(i)||null===i)&&(i=d),g(i)}function j(n,t){if(null==t&&(t=g(T)),i=n,z(i)!==i||null===n)return null;n=Math.round(n);var i,r=_(t),a=r.abs,o=r.rel,c=r.origin,d=A(n),l=(t%e+e)%e,f=s[c],p=Math.floor((n-(a-o))/u)*e;return g(f-l-f+s[d]+p+(c===u?e:0))}function z(n){return f(n,d,l)}function A(n){return(n%u+u)%u}function N(t){e=t-T,y.push({distance:e,timestamp:o()}),y.length>6&&(y=y.slice(-6)),T=g(t);var e,i=D().abs;if(i!==M){var r=null!==M;M=i,r&&n.emit("slideChanged")}}function D(o){var s=o?null:function(){if(u){var n=r.loop,t=n?(T%e+e)%e:T,o=(n?T%e:T)-a[0][2],s=0-(o<0&&n?e-Math.abs(o):o),c=0,f=_(T),h=f.abs,g=f.rel,b=a[g][2],w=a.map(function(t,i){var a=s+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>e-1&&n?e:0)*p(-a));var o=i-g,d=p(o),l=o+h;n&&(-1===d&&a>b&&(l+=u),1===d&&a<b&&(l-=u),null!==v&&l<v&&(a+=e),null!==m&&l>m&&(a-=e));var f=a+t[0]+t[1],x=Math.max(a>=0&&f<=1?1:f<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:l,distance:r.rtl?-1*a+1-t[0]:a,portion:x,size:t[0]}});return g=A(h=z(h)),{abs:z(h),length:i,max:k,maxIdx:l,min:x,minIdx:d,position:T,progress:n?t/e:T/i,rel:g,slides:w,slidesLength:e}}}();return t.details=s,n.emit("detailsChanged"),s}return t={absToRel:A,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){var o,f,p,b;if(function(){if(u=(a=((r=n.options).trackConfig||[]).map(function(n){return[h(n,"size",1),h(n,"spacing",0),h(n,"origin",0)]})).length){e=g(a.reduce(function(n,t){return n+t[0]+t[1]},0));var t,o=u-1;i=g(e+a[0][2]-a[o][0]-a[o][2]-a[o][1]),s=a.reduce(function(n,e){if(!n)return[0];var i=a[n.length-1],r=n[n.length-1]+(i[0]+i[2])+i[1];return r-=e[2],n[n.length-1]>r&&(r=n[n.length-1]),r=g(r),n.push(r),(!t||t<r)&&(c=n.length-1),t=r,n},null),0===i&&(c=0),s.push(g(e))}}(),!u)return D(!0);o=n.options.range,v=d=(f=n.options.loop)?h(f,"min",-1/0):0,m=l=f?h(f,"max",w):c,p=h(o,"min",null),b=h(o,"max",null),p&&(d=p),b&&(l=b),x=d===-1/0?d:n.track.idxToDist(d||0,!0,0),k=l===w?l:I(l,!0,0),null===b&&(m=l),h(o,"align",!1)&&l!==w&&0===a[A(l)][2]&&(k-=1-a[A(l)][0],l=E(k-T)),x=g(x),k=g(k),Number(t)===t?C(j(z(t))):D()},to:N,velocity:function(){var n=o(),t=y.reduce(function(t,e){var i=e.distance,r=e.timestamp;return n-r>200||(p(i)!==p(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t},{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(a),a.animator=function(n){var t,e,i,r,a,o;function u(n){t.active=n}function s(n){t.targetIdx=n}function c(){var t;t=a,window.cancelAnimationFrame(t),u(!1),s(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(c(),n.track.details){var d=0,l=n.track.details.position;e=0,i=0,r=t.map(function(n){var t,e=Number(l),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,a=n.easing,o=n.distance*a(r/n.duration)||0;l+=o;var u=i;return i+=r,d+=o,[e,n.distance,u,i,n.duration,a]}),s(n.track.distToIdx(d)),function t(){a=window.requestAnimationFrame(function a(c){o||(o=c),u(!0);var d=c-o;d>i&&(d=i);var l=r[e];if(l[3]<d)return e++,a(c);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(d-f)/p);if(h&&n.track.to(v+h),d<i)return t();o=null,u(!1),s(null),n.emit("animationEnded")})}(),n.emit("animationStarted")}},stop:c,targetIdx:null}}(a),r)for(var n=0;n<r.length;n++)(0,r[n])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}catch(n){console.error(n)}};t.E=function(n,t){var e=i.useRef(null),r=i.useRef(!1),a=i.useRef(n),o=i.useCallback(function(i){i?(a.current=n,e.current=new y(i,n,t),r.current=!1):(e.current&&e.current.destroy&&e.current.destroy(),e.current=null)},[]);return i.useEffect(function(){(function n(t,e){if(t===e)return!0;var i=typeof t;if(i!==typeof e)return!1;if("object"!==i||null===t||null===e)return"function"===i&&t.toString()===e.toString();if(t.length!==e.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(e).length)return!1;for(var r in t)if(!n(t[r],e[r]))return!1;return!0})(a.current,n)||(a.current=n,e.current&&e.current.update(a.current))},[n]),[o,e]}},5216:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var i=e(5893);e(7294);var r=e(2730);e(3780);var a=e(5675),o=e.n(a);let u={duration:7e4,easing:n=>n};function s(n){let{rtl:t}=n,[e]=(0,r.E)({loop:!0,slides:{origin:"center",perView:2,spacing:10},breakpoints:{"(min-width: 640px)":{slides:{origin:"center",perView:2.5,spacing:10}},"(min-width: 1024px)":{slides:{origin:"center",perView:3,spacing:10}}},renderMode:"performance",drag:!0,rubberband:!1,rtl:t,created(n){n.moveToIdx(4,!0,u)},updated(n){n.moveToIdx(n.track.details.abs+4,!0,u)},animationEnded(n){n.moveToIdx(n.track.details.abs+4,!0,u)}});return(0,i.jsxs)("div",{ref:e,className:"keen-slider",children:[(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)(o(),{width:462,height:212,src:"/img/slide/course-1.png",alt:"course-1.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)(o(),{width:462,height:212,src:"/img/slide/course-2.png",alt:"course-2.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)(o(),{width:462,height:212,src:"/img/slide/course-3.png",alt:"course-3.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)(o(),{width:462,height:212,src:"/img/slide/course-4.png",alt:"course-4.png"})})]})}},3780:function(){}}]);