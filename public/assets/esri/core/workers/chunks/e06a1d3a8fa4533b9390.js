"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3676],{60437:(t,e,n)=>{n.d(e,{Gv:()=>y,Ue:()=>o,cS:()=>f,fS:()=>m,TC:()=>i,pp:()=>u,JR:()=>g,al:()=>s,t8:()=>a,Tn:()=>h,op:()=>c,dp:()=>l});var r=n(70586);function o(t=p){return[t[0],t[1],t[2],t[3],t[4],t[5]]}function s(t,e,n,r,s,i,u=o()){return u[0]=t,u[1]=e,u[2]=n,u[3]=r,u[4]=s,u[5]=i,u}function i(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[3]),t[4]=Math.max(t[4],e[4]),t[5]=Math.max(t[5],e[5])}function u(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}function l(t,e=[0,0,0]){return e[0]=function(t){return t[0]>=t[3]?0:t[3]-t[0]}(t),e[1]=function(t){return t[1]>=t[4]?0:t[4]-t[1]}(t),e[2]=function(t){return t[2]>=t[5]?0:t[5]-t[2]}(t),e}function c(t,e,n=t){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n!==t&&(n[3]=t[3],n[4]=t[4],n[5]=t[5]),n}function h(t,e,n=t){return n[3]=e[0],n[4]=e[1],n[5]=e[2],n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),t}function a(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function f(t){return t?a(t,y):o(y)}function g(t,e){return t[0]=e[0],t[1]=e[1],t[2]=Number.NEGATIVE_INFINITY,t[3]=e[2],t[4]=e[3],t[5]=Number.POSITIVE_INFINITY,t}function d(t){return 6===t.length}function m(t,e,n){if((0,r.Wi)(t)||(0,r.Wi)(e))return t===e;if(!d(t)||!d(e))return!1;if(n){for(let r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}n(6570),n(24470);const y=[1/0,1/0,1/0,-1/0,-1/0,-1/0],p=[0,0,0,0,0,0];o()},24470:(t,e,n)=>{n.d(e,{Gv:()=>f,SO:()=>c,r3:()=>a,Ue:()=>s,oJ:()=>u,al:()=>i,kK:()=>h,HH:()=>l}),n(80442),n(22021);var r=n(70586),o=n(6570);function s(t=g){return[t[0],t[1],t[2],t[3]]}function i(t,e,n,r,o=s()){return o[0]=t,o[1]=e,o[2]=n,o[3]=r,o}function u(t,e=s()){return e[0]=t.xmin,e[1]=t.ymin,e[2]=t.xmax,e[3]=t.ymax,e}function l(t,e){return new o.Z({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:e})}function c(t){return function(t){return(0,r.Wi)(t)||t[0]>=t[2]?0:t[2]-t[0]}(t)*function(t){return t[1]>=t[3]?0:t[3]-t[1]}(t)}function h(t,e){return Math.max(e[0],t[0])<=Math.min(e[2],t[2])&&Math.max(e[1],t[1])<=Math.min(e[3],t[3])}function a(t,e){return e[0]>=t[0]&&e[2]<=t[2]&&e[1]>=t[1]&&e[3]<=t[3]}const f=[1/0,1/0,-1/0,-1/0],g=[0,0,0,0]},82397:(t,e,n)=>{n.d(e,{vY:()=>u,J9:()=>f,U1:()=>g,Ie:()=>d,G6:()=>m});var r=n(70586);n(33955);const o=(t,e,n)=>[e,n],s=(t,e,n)=>[e,n,t[2]],i=(t,e,n)=>[e,n,t[2],t[3]];function u(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:t.extent?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function l({scale:t,translate:e},n){return n*t[0]+e[0]}function c({scale:t,translate:e},n){return e[1]-n*t[1]}function h(t,e,n){const r=new Array(n.length);if(!n.length)return r;const[o,s]=t.scale;let i=l(t,n[0][0]),u=c(t,n[0][1]);r[0]=e(n[0],i,u);for(let t=1;t<n.length;t++){const l=n[t];i+=l[0]*o,u-=l[1]*s,r[t]=e(l,i,u)}return r}function a(t,e,n){const r=new Array(n.length);for(let o=0;o<n.length;o++)r[o]=h(t,e,n[o]);return r}function f(t,e,n,u,l){return(0,r.pC)(n)&&(e.points=function(t,e,n,r){return h(t,n?r?i:s:r?s:o,e)}(t,n.points,u,l)),e}function g(t,e,n,o,s){return(0,r.Wi)(n)||(e.x=l(t,n.x),e.y=c(t,n.y),e!==n&&(o&&(e.z=n.z),s&&(e.m=n.m))),e}function d(t,e,n,u,l){return(0,r.pC)(n)&&(e.rings=function(t,e,n,r){return a(t,n?r?i:s:r?s:o,e)}(t,n.rings,u,l)),e}function m(t,e,n,u,l){return(0,r.pC)(n)&&(e.paths=function(t,e,n,r){return a(t,n?r?i:s:r?s:o,e)}(t,n.paths,u,l)),e}},70272:(t,e,n)=>{n.d(e,{nd:()=>i,ZP:()=>o,S6:()=>s});var r=n(70586);class o{constructor(t=null,e={},n,r){this.geometry=t,this.attributes=e,this.centroid=n,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const t=new o(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function s(t){return!((0,r.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)}class i extends o{}},44876:(t,e,n)=>{n.d(e,{Z:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new r;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}},5428:(t,e,n)=>{n.d(e,{Z:()=>r});class r{constructor(t=[],e=[],n=!1){this.lengths=null!=t?t:[],this.coords=null!=e?e:[],this.hasIndeterminateRingOrder=n}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,e)=>t+e))}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];for(let n=0;n<r;n++)t(this.coords[2*(n+e)],this.coords[2*(n+e)+1]);e+=r}}clone(t){return t?(t.set(this.coords),new r(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},98732:(t,e,n)=>{n.d(e,{XA:()=>S,h_:()=>J,Yn:()=>U,GH:()=>V,Uy:()=>Y,EI:()=>O,cn:()=>$,di:()=>_,Iv:()=>R,fQ:()=>Z,eG:()=>z,J6:()=>q,oB:()=>st,zj:()=>K,$:()=>tt,lz:()=>ot,RZ:()=>H,Nh:()=>B,Jd:()=>I,IN:()=>M,hY:()=>nt,lM:()=>X,$g:()=>et});var r=n(20102),o=n(92604),s=n(70586),i=n(33955),u=n(70272),l=n(44876),c=n(5428);function h(t,e){return t?e?4:3:e?3:2}const a=o.Z.getLogger("esri.tasks.support.optimizedFeatureSet"),f={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},g=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s},d=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s,t[n+2]=e[r+2]},m=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s,t[n+2]=e[r+3]},y=(t,e,n,r,o,s)=>{t[n]=o,t[n+1]=s,t[n+2]=e[r+2],t[n+3]=e[r+3]};function p(t,e,n,r){if(t){if(n)return e&&r?y:d;if(e&&r)return m}else if(e&&r)return d;return g}function I({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function M({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function b({scale:t,translate:e},n){return n*t[0]+e[0]}function w({scale:t,translate:e},n){return e[1]-n*t[1]}function Z(t,e,n){return t?e?n?k(t):G(t):n?F(t):x(t):null}function x(t){const e=t.coords;return{x:e[0],y:e[1]}}function N(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function G(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function T(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function F(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function P(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function k(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function v(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function C(t,e){return t&&e?v:t?T:e?P:N}function R(t,e,n){if((0,s.Wi)(t))return null;const r=h(e,n),o=[];for(let e=0;e<t.coords.length;e+=r){const n=[];for(let o=0;o<r;o++)n.push(t.coords[e+o]);o.push(n)}return e?n?{points:o,hasZ:e,hasM:n}:{points:o,hasZ:e}:n?{points:o,hasM:n}:{points:o}}function j(t,e,n=h(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const r=t.coords;let o=0;for(const t of e.points)for(let e=0;e<n;e++)r[o++]=t[e];return t}function q(t,e,n){if(!t)return null;const r=h(e,n),{coords:o,lengths:s}=t,i=[];let u=0;for(const t of s){const e=[];for(let n=0;n<t;n++){const t=[];for(let e=0;e<r;e++)t.push(o[u++]);e.push(t)}i.push(e)}return e?n?{paths:i,hasZ:e,hasM:n}:{paths:i,hasZ:e}:n?{paths:i,hasM:n}:{paths:i}}function W(t,e,n=h(e.hasZ,e.hasM)){const{lengths:r,coords:o}=t;let s=0;for(const t of e.paths){for(const e of t)for(let t=0;t<n;t++)o[s++]=e[t];r.push(t.length)}return t}function z(t,e,n){if(!t)return null;const r=h(e,n),{coords:o,lengths:s}=t,i=[];let u=0;for(const t of s){const e=[];for(let n=0;n<t;n++){const t=[];for(let e=0;e<r;e++)t.push(o[u++]);e.push(t)}i.push(e)}return e?n?{rings:i,hasZ:e,hasM:n}:{rings:i,hasZ:e}:n?{rings:i,hasM:n}:{rings:i}}function Y(t,e,n=e.hasZ,r=e.hasM){return function(t,e,n,r){const o=h(n,r),{lengths:s,coords:i}=t;let u=0;s.length=i.length=0;for(const t of e){for(const e of t)for(let t=0;t<o;t++)i[u++]=e[t];s.push(t.length)}}(t,e.rings,n,r),t}const E=[],L=[];function S(t,e,n,r,o){E[0]=t;const[s]=U(L,E,e,n,r,o);return E.length=L.length=0,s}function U(t,e,n,o,i,l){if(t.length=0,!n){for(const n of e){const e=n.attributes[l];t.push(new u.ZP(null,n.attributes,null,e))}return t}switch(n){case"esriGeometryPoint":return function(t,e,n,r,o){const s=C(n,r);for(const n of e){const{geometry:e,attributes:r}=n;let i;e&&(i=s(new c.Z,e)),t.push(new u.ZP(i,r,null,r[o]))}return t}(t,e,o,i,l);case"esriGeometryMultipoint":return function(t,e,n,r,o){const s=h(n,r);for(const n of e){const e=n.geometry,r=n.attributes;let i;e&&(i=j(new c.Z,e,s)),t.push(new u.ZP(i,r,null,r[o]))}return t}(t,e,o,i,l);case"esriGeometryPolyline":return function(t,e,n,r,o){const s=h(n,r);for(const n of e){const e=n.geometry,r=n.attributes;let i;e&&(i=W(new c.Z,e,s)),t.push(new u.ZP(i,r,null,r[o]))}return t}(t,e,o,i,l);case"esriGeometryPolygon":return function(t,e,n,r,o){for(const i of e){const e=i.geometry,l=i.centroid,h=i.attributes;let a;e&&(a=Y(new c.Z,e,n,r)),(0,s.pC)(l)?t.push(new u.ZP(a,h,N(new c.Z,l),h[o])):t.push(new u.ZP(a,h,null,h[o]))}return t}(t,e,o,i,l);default:a.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`)),t.length=0}return t}function O(t,e,n,r){L[0]=t,A(E,L,e,n,r);const o=E[0];return E.length=L.length=0,o}function V(t,e,n){if((0,s.Wi)(t))return null;const o=new c.Z;return"hasZ"in t&&null==e&&(e=t.hasZ),"hasM"in t&&null==n&&(n=t.hasM),(0,i.wp)(t)?C(null!=e?e:null!=t.z,null!=n?n:null!=t.m)(o,t):(0,i.oU)(t)?Y(o,t,e,n):(0,i.l9)(t)?W(o,t,h(e,n)):(0,i.aW)(t)?j(o,t,h(e,n)):void a.error("convertFromGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${t}'`))}function _(t,e,n,o){const i=t&&("coords"in t?t:t.geometry);if((0,s.Wi)(i))return null;switch(e){case"esriGeometryPoint":{let t=x;return n&&o?t=k:n?t=G:o&&(t=F),t(i)}case"esriGeometryMultipoint":return R(i,n,o);case"esriGeometryPolyline":return q(i,n,o);case"esriGeometryPolygon":return z(i,n,o);default:return void a.error("convertToGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${e}'`))}}function A(t,e,n,o,i){if(t.length=0,(0,s.Wi)(n))return function(t,e){for(const n of e)t.push({attributes:n.attributes});return t}(t,e);switch(n){case"esriGeometryPoint":return function(t,e,n,r){let o=x;n&&r?o=k:n?o=G:r&&(o=F);for(const n of e){const{geometry:e,attributes:r}=n,i=(0,s.pC)(e)?o(e):null;t.push({attributes:r,geometry:i})}return t}(t,e,o,i);case"esriGeometryMultipoint":return function(t,e,n,r){for(const o of e){const{geometry:e,attributes:s}=o;let i;e&&(i=R(e,n,r)),t.push({attributes:s,geometry:i})}return t}(t,e,o,i);case"esriGeometryPolyline":return function(t,e,n,r){for(const o of e){const{geometry:e,attributes:i}=o;let u;(0,s.pC)(e)&&(u=q(e,n,r)),t.push({attributes:i,geometry:u})}return t}(t,e,o,i);case"esriGeometryPolygon":return function(t,e,n,r){for(const o of e){const{geometry:e,attributes:i,centroid:u}=o;let l;if((0,s.pC)(e)&&(l=z(e,n,r)),u){const e=x(u);t.push({attributes:i,centroid:e,geometry:l})}else t.push({attributes:i,geometry:l})}return t}(t,e,o,i);default:a.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`))}return t}function $(t){const{objectIdFieldName:e,spatialReference:n,transform:r,fields:o,hasM:s,hasZ:i,features:u,geometryType:l,exceededTransferLimit:c,uniqueIdField:h,queryGeometry:a,queryGeometryType:f}=t,g={features:A([],u,l,i,s),fields:o,geometryType:l,objectIdFieldName:e,spatialReference:n,uniqueIdField:h,queryGeometry:_(a,f,!1,!1)};return r&&(g.transform=r),c&&(g.exceededTransferLimit=c),s&&(g.hasM=s),i&&(g.hasZ=i),g}function J(t,e){const n=new l.Z,{hasM:o,hasZ:s,features:i,objectIdFieldName:u,spatialReference:c,geometryType:h,exceededTransferLimit:f,transform:g,fields:d}=t;return d&&(n.fields=d),n.geometryType=h,n.objectIdFieldName=u||e,n.spatialReference=c,n.objectIdFieldName?(i&&U(n.features,i,h,s,o,n.objectIdFieldName),f&&(n.exceededTransferLimit=f),o&&(n.hasM=o),s&&(n.hasZ=s),g&&(n.transform=g),n):(a.error(new r.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function X(t){const{transform:e,features:n,hasM:r,hasZ:o}=t;if(!e)return t;for(const t of n)(0,s.pC)(t.geometry)&&et(t.geometry,t.geometry,r,o,e),t.centroid&&et(t.centroid,t.centroid,r,o,e);return t.transform=null,t}function H(t,e){const{geometryType:n,features:r,hasM:o,hasZ:s}=e;if(!t)return e;for(let e=0;e<r.length;e++){const i=r[e],u=i.weakClone();u.geometry=new c.Z,B(u.geometry,i.geometry,o,s,n,t),i.centroid&&(u.centroid=new c.Z,B(u.centroid,i.centroid,o,s,"esriGeometryPoint",t)),r[e]=u}return e.transform=t,e}function B(t,e,n,r,o,i,u=n,l=r){if(t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0),(0,s.Wi)(e)||!e.coords.length)return null;const c=f[o],{coords:a,lengths:g}=e,d=h(n,r),m=h(n&&u,r&&l),y=p(n,r,u,l);if(!g.length)return y(t.coords,a,0,0,I(i,a[0]),M(i,a[1])),t.lengths.length&&(t.lengths.length=0),t.coords.length=d,t;let b,w,Z,x,N=0,G=0,T=G;for(const e of g){if(e<c)continue;let n=0;G=T,Z=b=I(i,a[N]),x=w=M(i,a[N+1]),y(t.coords,a,G,N,Z,x),n++,N+=d,G+=m;for(let r=1;r<e;r++,N+=d)Z=I(i,a[N]),x=M(i,a[N+1]),Z===b&&x===w||(y(t.coords,a,G,N,Z-b,x-w),G+=m,n++,b=Z,w=x);n>=c&&(t.lengths.push(n),T=G)}return t.coords.length=T,t.coords.length?t:null}function K(t,e,n,r,o,s,i=n,u=r){if(t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0),!e||!e.coords.length)return null;const l=f[o],{coords:c,lengths:a}=e,g=h(n,r),d=h(n&&i,r&&u),m=p(n,r,i,u);if(!a.length)return m(t.coords,c,0,0,c[0],c[1]),t.lengths.length&&(t.lengths.length=0),t.coords.length=g,t;let y=0;const I=s*s;for(const e of a){if(e<l){y+=e*g;continue}const n=t.coords.length/d,r=y,o=y+(e-1)*g;m(t.coords,c,t.coords.length,r,c[r],c[r+1]),D(t.coords,c,g,I,m,r,o),m(t.coords,c,t.coords.length,o,c[o],c[o+1]);const s=t.coords.length/d-n;s>=l?t.lengths.push(s):t.coords.length=n*d,y+=e*g}return t.coords.length?t:null}function Q(t,e,n,r){const o=t[e],s=t[e+1],i=t[n],u=t[n+1],l=t[r],c=t[r+1];let h=i,a=u,f=l-h,g=c-a;if(0!==f||0!==g){const t=((o-h)*f+(s-a)*g)/(f*f+g*g);t>1?(h=l,a=c):t>0&&(h+=f*t,a+=g*t)}return f=o-h,g=s-a,f*f+g*g}function D(t,e,n,r,o,s,i){let u,l=r,c=0;for(let t=s+n;t<i;t+=n)u=Q(e,t,s,i),u>l&&(c=t,l=u);l>r&&(c-s>n&&D(t,e,n,r,o,s,c),o(t,e,t.length,c,e[c],e[c+1]),i-c>n&&D(t,e,n,r,o,c,i))}function tt(t,e,n,r){if((0,s.Wi)(e)||!e.coords||!e.coords.length)return null;const o=h(n,r);let i=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=o){const n=t[e],r=t[e+1];i=Math.min(i,n),l=Math.max(l,n),u=Math.min(u,r),c=Math.max(c,r)}}return t[0]=i,t[1]=u,t[2]=l,t[3]=c,t}function et(t,e,n,r,o){const{coords:s,lengths:i}=e,u=n?r?y:d:r?d:g,l=h(n,r);if(!s.length)return t!==e&&(t.lengths.length=0,t.coords.length=0),t;if(!i.length)return u(t.coords,s,0,0,b(o,s[0]),w(o,s[1])),t!==e&&(t.lengths.length=0,t.coords.length=l),t;const[c,a]=o.scale;let f=0;for(let e=0;e<i.length;e++){const n=i[e];t.lengths[e]=n;let r=b(o,s[f]),h=w(o,s[f+1]);u(t.coords,s,f,f,r,h),f+=l;for(let e=1;e<n;e++,f+=l)r+=s[f]*c,h-=s[f+1]*a,u(t.coords,s,f,f,r,h)}return t!==e&&(t.lengths.length=i.length,t.coords.length=s.length),t}function nt(t,e,n,r,o,s){const i=h(n,r),u=p(n,r,o,s),l=e.coords;t.coords.length=0,t.lengths.length=0,t.lengths.push(...e.lengths);for(let e=0;e<l.length;e+=i)u(t.coords,l,t.coords.length,e,l[e],l[e+1]);return t}function rt(t,e,n,r){let o=0,s=t[r*e],i=t[r*(e+1)];for(let u=1;u<n;u++){const n=s+t[r*(e+u)],l=i+t[r*(e+u)+1],c=(n-s)*(l+i);s=n,i=l,o+=c}return.5*o}function ot(t,e){const{coords:n,lengths:r}=t;let o=0,s=0;for(let t=0;t<r.length;t++)s+=rt(n,o,r[t],e),o+=t;return Math.abs(s)}function st(t,e){if((0,s.Wi)(t))return null;const n=t.clone(),r=t.coords,o=t.lengths;let i=0;for(let t=0;t<o.length;t++){const s=o[t];let u=r[e*i],l=r[e*i+1];for(let t=1;t<s;t++){const o=u+r[e*(i+t)],s=l+r[e*(i+t)+1];n.coords[e*(i+t)]=o,n.coords[e*(i+t)+1]=s,u=o,l=s}i+=s}return n}}}]);