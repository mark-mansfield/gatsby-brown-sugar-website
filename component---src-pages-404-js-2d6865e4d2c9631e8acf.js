(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,l){"use strict";l.r(t);var o=l(0),n=l.n(o),a=l(247);t.default=function(){return n.a.createElement(a.a,null,n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},178:function(e,t,l){"use strict";var o=l(35),n=l.n(o),a=l(7),r=l.n(a),i=l(213),c=l.n(i),s=l(0),m=l.n(s),d=l(4),u=l.n(d),f=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(n()(t)),t}r()(t,e);var l=t.prototype;return l.componentDidMount=function(){c.a.polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,l=!0,o=this.props,n=o.type,a=o.element,r=o.offset,i=o.timeout;if(n&&a)switch(n){case"class":l=!!(t=document.getElementsByClassName(a)[0]);break;case"id":l=!!(t=document.getElementById(a))}l?this.scrollTo(t,r,i):console.log("Element not found: "+a)},l.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout(function(){window.scroll({top:o+t,left:0,behavior:"smooth"})},l):window.scroll({top:o+t,left:0,behavior:"smooth"})},l.render=function(){return m.a.createElement(f,null,"object"==typeof this.props.children?m.a.cloneElement(this.props.children,{onClick:this.handleClick}):m.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(m.a.Component);p.propTypes={type:u.a.string,element:u.a.string,offset:u.a.number,timeout:u.a.number,children:u.a.node.isRequired},t.a=p},213:function(e,t,l){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var l,o=e.HTMLElement||e.Element,n=468,a={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||c,scrollIntoView:o.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):a.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?a.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var l=function(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}(this),o=l.getBoundingClientRect(),n=this.getBoundingClientRect();l!==t.body?(p.call(this,l,l.scrollLeft+n.left-o.left,l.scrollTop+n.top-o.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function m(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function d(t,l){var o=e.getComputedStyle(t,null)["overflow"+l];return"auto"===o||"scroll"===o}function u(e){var t=m(e,"Y")&&d(e,"Y"),l=m(e,"X")&&d(e,"X");return t||l}function f(t){var l,o,a,i,c=(r()-t.startTime)/n;i=c=c>1?1:c,l=.5*(1-Math.cos(Math.PI*i)),o=t.startX+(t.x-t.startX)*l,a=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,o,a),o===t.x&&a===t.y||e.requestAnimationFrame(f.bind(e,t))}function p(l,o,n){var i,s,m,d,u=r();l===t.body?(i=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,d=a.scroll):(i=l,s=l.scrollLeft,m=l.scrollTop,d=c),f({scrollable:i,method:d,startTime:u,startX:s,startY:m,x:o,y:n})}}}}()},247:function(e,t,l){"use strict";var o=l(7),n=l.n(o),a=l(0),r=l.n(a),i=l(178),c=l(147),s=l.n(c),m=function(){return r.a.createElement("div",{className:s.a.footer},r.a.createElement("section",{className:s.a.section},r.a.createElement("h2",null,"Contact Us"),r.a.createElement("dl",{className:"alt"},r.a.createElement("dt",{className:"phone_number"}),r.a.createElement("dd",null," "),r.a.createElement("dt",null,r.a.createElement("h3",null,"Address")),r.a.createElement("dd",null,"106 Curlewis Street • Bondi Beach, • NSW 2026"),r.a.createElement("dt",{className:s.a.bottom_margin},r.a.createElement("h3",null,"Phone")),r.a.createElement("dt",{className:s.a.bottom_margin},r.a.createElement("a",{href:"tel:0291301566",id:"callnowbutton",title:"call now","aria-label":"call us button"})),r.a.createElement("dd",null,"(02) 9130 1566"))),r.a.createElement("section",{className:s.a.section},r.a.createElement("h2",null,"Hours"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Tuesday - Thursday"),r.a.createElement("dd",null,"6pm - 11:00pm"),r.a.createElement("dt",null,"Friday - Sunday"),r.a.createElement("dd",null,"6pm - late")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Email"),r.a.createElement("dl",null,r.a.createElement("dd",null,r.a.createElement(i.a,{type:"id",element:"contact"},r.a.createElement("button",{className:"form-button-accent"},"Email"))))),r.a.createElement("section",{className:s.a.section},r.a.createElement("ul",null,r.a.createElement("li",{className:s.a.bottom_margin},r.a.createElement("a",{href:"facebook.com",alt:"company facebook page",title:"company facebook page"},r.a.createElement("svg",{height:"50px",version:"1.1",viewBox:"0 0 50 50",width:"50px"},r.a.createElement("title",null),r.a.createElement("defs",null),r.a.createElement("g",{fill:"none",fillRule:"evenodd",id:"Page-1",stroke:"none",strokeWidth:"1"},r.a.createElement("g",{fill:"#000000",id:"Facebook"},r.a.createElement("path",{d:"M25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 Z M25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 Z M26.8145197,36 L26.8145197,24.998712 L30.0687449,24.998712 L30.5,21.2076072 L26.8145197,21.2076072 L26.8200486,19.3101227 C26.8200486,18.3213442 26.9207209,17.7915341 28.4425538,17.7915341 L30.4769629,17.7915341 L30.4769629,14 L27.2222769,14 C23.3128757,14 21.9368678,15.8390937 21.9368678,18.9318709 L21.9368678,21.2080366 L19.5,21.2080366 L19.5,24.9991413 L21.9368678,24.9991413 L21.9368678,36 L26.8145197,36 Z M26.8145197,36",id:"Oval-1"})))))),r.a.createElement("li",null,r.a.createElement("a",{href:"instagram.com",alt:"company instagram page",title:"company instagram page"},r.a.createElement("svg",{height:"50px",version:"1.1",viewBox:"0 0 50 50",width:"50px"},r.a.createElement("title",null),r.a.createElement("defs",null),r.a.createElement("g",{fill:"none",fillRule:"evenodd",id:"Page-1",stroke:"none",strokeWidth:"1"},r.a.createElement("g",{fill:"#000000",id:"Intsagram"},r.a.createElement("path",{d:"M25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 Z M25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 Z M35.9513128,34.5096659 C35.9701595,34.4075385 35.9839804,34.3037693 36,34.2013135 L36,15.7986865 C35.9846086,15.6978726 35.9714159,15.5967304 35.9525693,15.496245 C35.7600194,14.4654483 34.9467868,13.6655054 33.9482288,13.5226585 C33.9067662,13.517076 33.8662459,13.5075528 33.8254116,13.5 L16.1745884,13.5 C16.0681049,13.5200314 15.9609932,13.5351371 15.8560802,13.5600942 C14.8813947,13.7922616 14.1601965,14.6128926 14.0213595,15.6453312 C14.0157055,15.6883495 14.0072245,15.7310394 14,15.7740577 L14,34.2269275 C14.0201031,34.3438321 14.0361227,34.4617219 14.0612516,34.5779697 C14.2767315,35.5742861 15.0902783,36.3466448 16.0580534,36.4766848 C16.1048559,36.4825957 16.1519725,36.4921188 16.198775,36.5 L33.801225,36.5 C33.9155613,36.4796402 34.0302117,36.4628926 34.1432916,36.4372787 C35.0416482,36.2379497 35.775725,35.454426 35.9513128,34.5096659 Z M16.380331,33.0989292 C16.380331,33.5885494 16.7858479,34.0095374 17.254187,34.0095374 C22.4169106,34.0098658 27.5793201,34.0098658 32.7420437,34.0095374 C33.2147803,34.0095374 33.6180985,33.5892062 33.6180985,33.0959737 C33.6184126,29.6962164 33.6180985,26.2967875 33.6180985,22.8973587 L33.6180985,22.8267561 L31.5179543,22.8267561 C31.8144748,23.81749 31.9055669,24.8252998 31.7893459,25.8524843 C31.6724968,26.8799971 31.3558732,27.8362507 30.8401034,28.7192747 C30.3240195,29.6032838 29.6549637,30.3355797 28.8357629,30.9184609 C26.7123745,32.4303398 23.9167892,32.5633352 21.6636731,31.2412621 C20.5247077,30.5736579 19.6304345,29.6426899 19.0069247,28.4431039 C18.0768429,26.653084 17.9282685,24.7744003 18.4738788,22.8251142 C17.7771813,22.825771 17.0833107,22.825771 16.3800168,22.825771 L16.3800168,22.8878355 C16.3800168,26.2915334 16.3797027,29.6952313 16.380331,33.0989292 Z M24.897757,29.6581239 C27.3886549,29.7139492 29.403361,27.6333095 29.4558175,25.1027841 C29.5095304,22.4931182 27.4960808,20.3376071 25.0001571,20.339249 C22.5601451,20.3376071 20.5765359,22.3900057 20.5422979,24.9293975 C20.5071175,27.5370931 22.5039192,29.604269 24.897757,29.6581239 Z M33.6177844,18.481582 C33.6180985,17.7555254 33.6180985,17.0291405 33.6177844,16.303084 C33.6177844,15.7822673 33.2235754,15.3678469 32.7260241,15.3675186 C32.03341,15.3671902 31.3407958,15.3668618 30.6478676,15.3675186 C30.1515727,15.3681753 29.7561073,15.7835808 29.7557932,16.3043975 C29.7554791,17.0242147 29.7535944,17.744032 29.7583061,18.4641776 C29.7589343,18.5715591 29.7784092,18.6832096 29.8110767,18.7850086 C29.9354645,19.1682324 30.2712489,19.4033552 30.6824198,19.4053255 C31.0166336,19.4059823 31.3508474,19.4049971 31.6853753,19.4049971 C32.0472308,19.4007282 32.4103428,19.4079526 32.7725125,19.3987579 C33.2383386,19.3866077 33.6177844,18.9692319 33.6177844,18.481582 Z M33.6177844,18.481582",id:"Oval-1"}))))))),"[Newsletter widget]",r.a.createElement("br",null),"© Brown Sugar Food Company"))},d=function(e){function t(t){var l;return(l=e.call(this,t)||this).toggleDrawer=function(e,t){return function(){var o;l.setState(((o={})[e]=t,o))}},l.state={loading:"is-loading",left:!1},l}n()(t,e);var l=t.prototype;return l.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},l.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},l.render=function(){var e=this.props.children;return r.a.createElement("div",{className:"body "+this.state.loading},r.a.createElement("div",{id:"wrapper"},e),r.a.createElement("section",{id:"footer"},r.a.createElement("div",null,r.a.createElement(m,null))))},t}(r.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-2d6865e4d2c9631e8acf.js.map