(this.webpackJsonpcontractorapp=this.webpackJsonpcontractorapp||[]).push([[173],{1445:function(e,t,a){"use strict";a.r(t),a.d(t,"getPatternDescriptor",(function(){return S})),a.d(t,"getSymbolLayerFill",(function(){return z})),a.d(t,"previewSymbol3D",(function(){return q}));var r=a(10),n=a.n(r),s=a(14),l=a(16),i=a(80),c=a(1149),o=(a(15),a(29)),u=a(13),p=a(12),h=a(33),b=a(49),m=a(744),f=a(824),y=a(825),v=a(1338),d=a(1388),j=a(674),O=a(304),k=22,g=120,x=u.a.getLogger("esri.symbols.support.previewSymbol3D");function w(e){var t=e.outline,a=Object(p.j)(e.material)?e.material.color:null,r=Object(p.j)(a)?a.toHex():null;if(Object(p.i)(t)||"none"===t.pattern)return"fill"===e.type&&"#ffffff"===r?{color:"#bdc3c7",width:.75}:null;var n=Object(b.c)(t.size)||0;return{color:"rgba("+(Object(p.j)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(n,80),style:"pattern"in e?Object(m.b)(t.pattern):null,join:"butt",cap:t.patternCap}}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.a,r=Object(c.a)(e),n=r.h,s=r.s/t,l=100-(100-r.v)/t,i=Object(c.d)({h:n,s:s,v:l}),o=i.r,u=i.g,p=i.b;return[o,u,p,a]}function L(e){return"water"===e.type?Object(p.i)(e.color)?null:e.color:Object(p.i)(e.material)||Object(p.i)(e.material.color)?null:e.material.color}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=L(e);if(!a){if("fill"===e.type)return null;var r=m.a.r,n=Object(v.b)(r,t);return[n,n,n,100]}for(var s=a.toRgba(),l=0;l<3;l++)s[l]=Object(v.b)(s[l],t);return s}function S(e,t){return P.apply(this,arguments)}function P(){return(P=Object(l.a)(n.a.mark((function e(t,a){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==(r=t.style)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,Object(m.d)(Object(i.a)("esri/symbols/patterns/".concat(r,".png")),a.toCss(!0));case 5:return e.t0=e.sent,e.abrupt("return",{type:"pattern",x:0,y:0,src:e.t0,width:5,height:5});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return e.outline?w(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function C(e,t){var a=L(e);if(!a)return null;var r="rgba(";return r+=Object(v.b)(a.r,t)+",",r+=Object(v.b)(a.g,t)+",",(r+=Object(v.b)(a.b,t)+",")+a.a+");"}function I(e,t){var a=C(e,t);return a?"pattern"in e&&"none"===e.pattern?null:{color:a,width:Math.min(e.size?Object(b.c)(e.size):.75,80),style:"pattern"in e?Object(m.b)(e.pattern):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?Object(b.c)(2):e.join:null}:{}}function E(e,t,a){var r=.75*a;return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function R(e,t){var a,r=t&&t.size?Object(b.c)(t.size):null,n=t&&t.maxSize?Object(b.c)(t.maxSize):null,s=t&&t.disableUpsampling,l=e.symbolLayers,c=[],o=0,u=0,p=l.getItemAt(l.length-1);return p&&"icon"===p.type&&(a=p.size&&Object(b.c)(p.size)),l.forEach((function(l){if("icon"===l.type||"object"===l.type){var p="icon"===l.type?l.size&&Object(b.c)(l.size):0,h=r||p?Math.ceil(Math.min(r||p,n||g)):k;if(l&&l.resource&&l.resource.href){var m=function(e,t){var a=t&&t.resource,r=a&&a.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(r&&"object"!==t.type)return Promise.resolve(Object(O.f)(e,t));var n=Object(i.a)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?Object(j.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((function(e){return e})).then((function(e){var t;return(null==e||null==(t=e.thumbnail)?void 0:t.url)||n})):Promise.resolve(n)}(e,l).then((function(e){var t=l.get("material.color"),a=function(e){return"icon"===e.type?"multiply":"tint"}(l);return Object(d.b)(e,h,t,a,s)})).then((function(e){var t=e.width,a=e.height;return o=Math.max(o,t),u=Math.max(u,a),[{shape:{type:"image",x:0,y:0,width:t,height:a,src:e.url},fill:null,stroke:null}]}));c.push(m)}else{var x,M=h;"icon"===l.type&&a&&r&&(M=h*(p/a));var L="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(x=t.symbolConfig)?void 0:x.isTall)||"object"===l.type&&function(e){var t=e.depth,a=e.height,r=e.width;return r&&t&&a&&r===t&&r<a}(l);o=Math.max(o,L?20:M),u=Math.max(u,M),c.push(Promise.resolve(function(e,t,a){var r=[];if(!e)return r;switch(e.type){case"icon":var n=t,s=t;switch(e.resource&&e.resource.primitive||f.b){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:z(e,0),stroke:w(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[0,s]},{command:"L",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,s]},{command:"Z",values:[]}]},fill:z(e,0),stroke:w(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[0,s]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,s]},{command:"Z",values:[]}]},fill:z(e,0),stroke:w(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[.5*n,s]},{command:"M",values:[0,.5*s]},{command:"L",values:[n,.5*s]}]},stroke:D(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,s]},{command:"M",values:[n,0]},{command:"L",values:[0,s]}]},stroke:D(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,.5*s]},{command:"L",values:[.5*n,s]},{command:"Z",values:[]}]},fill:z(e,0),stroke:w(e)})}break;case"object":switch(e.resource&&e.resource.primitive||y.b){case"cone":var l=E(z(e,0),z(e,-.6),a?20:t),i=Object(v.c)(t,a);r.push({shape:i[0],fill:l}),r.push({shape:i[1],fill:l});break;case"inverted-cone":var c=z(e,0),o=E(c,z(e,-.6),t),u=Object(v.h)(t);r.push({shape:u[0],fill:o}),r.push({shape:u[1],fill:c});break;case"cube":var p=Object(v.d)(t,a);r.push({shape:p[0],fill:z(e,0)}),r.push({shape:p[1],fill:z(e,-.3)}),r.push({shape:p[2],fill:z(e,-.5)});break;case"cylinder":var h=E(z(e,0),z(e,-.6),a?20:t),b=Object(v.e)(t,a);r.push({shape:b[0],fill:h}),r.push({shape:b[1],fill:h}),r.push({shape:b[2],fill:z(e,0)});break;case"diamond":var m=Object(v.f)(t);r.push({shape:m[0],fill:z(e,-.3)}),r.push({shape:m[1],fill:z(e,0)}),r.push({shape:m[2],fill:z(e,-.3)}),r.push({shape:m[3],fill:z(e,-.7)});break;case"sphere":var d=E(z(e,0),z(e,-.6));d.x1=0,d.y1=0,d.x2=.25*t,d.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:d});break;case"tetrahedron":var j=Object(v.j)(t);r.push({shape:j[0],fill:z(e,-.3)}),r.push({shape:j[1],fill:z(e,0)}),r.push({shape:j[2],fill:z(e,-.6)})}}return r}(l,M,L)))}}})),Object(h.j)(c).then((function(e){var a=[];return e.forEach((function(e){e.value?a.push(e.value):e.error&&x.warn("error while building swatchInfo!",e.error)})),Object(d.a)(a,[o,u],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function Z(){return(Z=Object(l.a)(n.a.mark((function e(t,a){var r,l,i,c,o,u,h,m,f,y,j,O,x,P,D,C,E,R,Z,q,A,H,J,N,T,U,F,W,B,G,K,Q;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="mesh-3d"===t.type,l=t.symbolLayers,i=a&&a.size?Object(b.c)(a.size):null,c=a&&a.maxSize?Object(b.c)(a.maxSize):null,o=i||k,u=[],h=0,m=0,f=!1,y=0;case 3:if(!(y<l.length)){e.next=42;break}if(j=l.getItemAt(y),O=[],!r||"fill"===j.type){e.next=7;break}return e.abrupt("continue",39);case 7:x=v.l.fill[0],e.t0=j.type,e.next="fill"===e.t0?11:"line"===e.t0?22:"extrude"===e.t0?28:"water"===e.t0?33:38;break;case 11:if(P=w(j),D=Math.min(o,c||g),h=Math.max(h,D),m=Math.max(m,D),f=!0,C=z(j,0),E="pattern"in j&&j.pattern,R=L(j),e.t1=!r&&Object(p.j)(E)&&"style"===E.type&&"solid"!==E.style&&R,!e.t1){e.next=20;break}return e.next=19,S(E,R);case 19:C=e.sent;case 20:return O.push({shape:x,fill:C,stroke:P}),e.abrupt("break",38);case 22:if(Z=I(j,0),!Object(p.i)(Z)){e.next=25;break}return e.abrupt("break",38);case 25:return q={stroke:Z,shape:x},h=Math.max(h,k),m=Math.max(m,k),O.push(q),e.abrupt("break",38);case 28:return A=Object(s.a)({join:"round",width:1},I(j,-.4)),H=z(j,0),J=z(j,-.2),N=Math.min(o,c||g),T=Object(v.g)(N),A.width=1,O.push({shape:T[0],fill:J,stroke:A}),O.push({shape:T[1],fill:J,stroke:A}),O.push({shape:T[2],fill:H,stroke:A}),k,U=.7*k+.5*N,h=Math.max(h,22),m=Math.max(m,U),e.abrupt("break",38);case 33:return F=L(j),W=M(F),B=M(F,2),G=M(F,3),K=Object(v.k)(),f=!0,O.push({shape:K[0],fill:W}),O.push({shape:K[1],fill:B}),O.push({shape:K[2],fill:G}),Q=Math.min(o,c||g),h=Math.max(h,Q),m=Math.max(m,Q),e.abrupt("break",38);case 38:u.push(O);case 39:y++,e.next=3;break;case 42:return e.abrupt("return",Promise.resolve(Object(d.a)(u,[h,m],{node:a&&a.node,scale:f,opacity:a&&a.opacity})));case 43:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){if(0===e.symbolLayers.length)return Promise.reject(new o.a("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return R(e,t);case"line-3d":return function(e,t){var a,r=e.symbolLayers,n=[],l=Object(O.g)(e),i=t&&t.size?Object(b.c)(t.size):null,c=(t&&t.maxSize?Object(b.c)(t.maxSize):null)||80,o=0,u=0;return r.forEach((function(e,t){if(e&&("line"===e.type||"path"===e.type)){var r=[];switch(e.type){case"line":var l=I(e,0);if(Object(p.i)(l))break;var h=l&&l.width||0;0===t&&(a=h);var b=Math.min(i||h,c),m=0===t?b:i?b*(h/a):b,f=m>20?2*m:40;u=Math.max(u,m),o=Math.max(o,f),l.width=m,r.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u]},{command:"L",values:[o,.5*u]}]},stroke:l});break;case"path":var y=Math.min(i||k,c),d=z(e,0),j=z(e,-.2),O=C(e,-.4),g=O?{color:O,width:1}:{};if("quad"===e.profile){var x=e.width,w=e.height,M=Object(v.i)(x&&w?x/w:1,0===w,0===x),L=Object(s.a)(Object(s.a)({},g),{},{join:"bevel"});r.push({shape:M[0],fill:j,stroke:L}),r.push({shape:M[1],fill:j,stroke:L}),r.push({shape:M[2],fill:d,stroke:L})}else r.push({shape:v.l.pathSymbol3DLayer[0],fill:j,stroke:g}),r.push({shape:v.l.pathSymbol3DLayer[1],fill:d,stroke:g});u=Math.max(u,y),o=u}n.push(r)}})),Promise.resolve(Object(d.a)(n,[o,u],{node:t&&t.node,scale:l,opacity:t&&t.opacity}))}(e,t);case"polygon-3d":case"mesh-3d":return function(e,t){return Z.apply(this,arguments)}(e,t)}return Promise.reject(new o.a("symbolPreview: swatchInfo3D","symbol not supported."))}}}]);
//# sourceMappingURL=173.f922ef03.chunk.js.map