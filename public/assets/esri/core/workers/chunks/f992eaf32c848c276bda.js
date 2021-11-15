"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6810],{95401:(t,i,e)=>{e.d(i,{e:()=>x});var n,s,r,h={exports:{}};n=h,s=function(){function t(t,e,s){s=s||2;var r,h,x,l,a,u,y,c=e&&e.length,f=c?e[0]*s:t.length,p=i(t,0,f,s,!0),v=[];if(!p||p.next===p.prev)return v;if(c&&(p=o(t,e,p,s)),t.length>80*s){r=x=t[0],h=l=t[1];for(var m=s;m<f;m+=s)(a=t[m])<r&&(r=a),(u=t[m+1])<h&&(h=u),a>x&&(x=a),u>l&&(l=u);y=0!==(y=Math.max(x-r,l-h))?1/y:0}return n(p,v,s,r,h,y),v}function i(t,i,e,n,s){var r,h;if(s===U(t,i,e,n)>0)for(r=i;r<e;r+=n)h=L(r,t[r],t[r+1],h);else for(r=e-n;r>=i;r-=n)h=L(r,t[r],t[r+1],h);if(h&&g(h,h.next)){var x=h.next;R(h),h=x}return h}function e(t,i){if(!t)return t;i||(i=t);var e,n=t;do{if(e=!1,n.steiner||!g(n,n.next)&&0!==d(n.prev,n,n.next))n=n.next;else{var s=n.prev;if(R(n),(n=i=s)===n.next)break;e=!0}}while(e||n!==i);return i}function n(t,i,o,l,a,u,y){if(t){!y&&u&&c(t,l,a,u);for(var f,p,v=t;t.prev!==t.next;)if(f=t.prev,p=t.next,u?r(t,l,a,u):s(t))i.push(f.i/o),i.push(t.i/o),i.push(p.i/o),R(t),t=p.next,v=p.next;else if((t=p)===v){y?1===y?n(t=h(e(t),i,o),i,o,l,a,u,2):2===y&&x(t,i,o,l,a,u):n(e(t),i,o,l,a,u,1);break}}}function s(t){var i=t.prev,e=t,n=t.next;if(d(i,e,n)>=0)return!1;for(var s=t.next.next;s!==t.prev;){if(v(i.x,i.y,e.x,e.y,n.x,n.y,s.x,s.y)&&d(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function r(t,i,e,n){var s=t.prev,r=t,h=t.next;if(d(s,r,h)>=0)return!1;for(var x=s.x<r.x?s.x<h.x?s.x:h.x:r.x<h.x?r.x:h.x,o=s.y<r.y?s.y<h.y?s.y:h.y:r.y<h.y?r.y:h.y,l=s.x>r.x?s.x>h.x?s.x:h.x:r.x>h.x?r.x:h.x,a=s.y>r.y?s.y>h.y?s.y:h.y:r.y>h.y?r.y:h.y,u=f(x,o,i,e,n),y=f(l,a,i,e,n),c=t.prevZ,p=t.nextZ;c&&c.z>=u&&p&&p.z<=y;){if(c!==t.prev&&c!==t.next&&v(s.x,s.y,r.x,r.y,h.x,h.y,c.x,c.y)&&d(c.prev,c,c.next)>=0)return!1;if(c=c.prevZ,p!==t.prev&&p!==t.next&&v(s.x,s.y,r.x,r.y,h.x,h.y,p.x,p.y)&&d(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;c&&c.z>=u;){if(c!==t.prev&&c!==t.next&&v(s.x,s.y,r.x,r.y,h.x,h.y,c.x,c.y)&&d(c.prev,c,c.next)>=0)return!1;c=c.prevZ}for(;p&&p.z<=y;){if(p!==t.prev&&p!==t.next&&v(s.x,s.y,r.x,r.y,h.x,h.y,p.x,p.y)&&d(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function h(t,i,n){var s=t;do{var r=s.prev,h=s.next.next;!g(r,h)&&T(r,s,s.next,h)&&b(r,h)&&b(h,r)&&(i.push(r.i/n),i.push(s.i/n),i.push(h.i/n),R(s),R(s.next),s=t=h),s=s.next}while(s!==t);return e(s)}function x(t,i,s,r,h,x){var o=t;do{for(var l=o.next.next;l!==o.prev;){if(o.i!==l.i&&m(o,l)){var a=A(o,l);return o=e(o,o.next),a=e(a,a.next),n(o,i,s,r,h,x),void n(a,i,s,r,h,x)}l=l.next}o=o.next}while(o!==t)}function o(t,n,s,r){var h,x,o,a=[];for(h=0,x=n.length;h<x;h++)(o=i(t,n[h]*r,h<x-1?n[h+1]*r:t.length,r,!1))===o.next&&(o.steiner=!0),a.push(p(o));for(a.sort(l),h=0;h<a.length;h++)s=e(s=u(a[h],s),s.next);return s}function l(t,i){return t.x-i.x}function a(t){if(t.next.prev===t)return t;let i=t;for(;;){const e=i.next;if(e.prev===i||e===i||e===t)break;i=e}return i}function u(t,i){var n=function(t,i){var e,n=i,s=t.x,r=t.y,h=-1/0;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){var x=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(x<=s&&x>h){if(h=x,x===s){if(r===n.y)return n;if(r===n.next.y)return n.next}e=n.x<n.next.x?n:n.next}}n=n.next}while(n!==i);if(!e)return null;if(s===h)return e;var o,l=e,a=e.x,u=e.y,c=1/0;n=e;do{s>=n.x&&n.x>=a&&s!==n.x&&v(r<u?s:h,r,a,u,r<u?h:s,r,n.x,n.y)&&(o=Math.abs(r-n.y)/(s-n.x),b(n,t)&&(o<c||o===c&&(n.x>e.x||n.x===e.x&&y(e,n)))&&(e=n,c=o)),n=n.next}while(n!==l);return e}(t,i);if(!n)return i;var s=A(n,t),r=e(n,n.next);let h=a(s);return e(h,h.next),r=a(r),a(i===n?r:i)}function y(t,i){return d(t.prev,t,i.prev)<0&&d(i.next,t,t.next)<0}function c(t,i,e,n){var s=t;do{if(null===s.z&&(s.z=f(s.x,s.y,i,e,n)),s.prev.next!==s||s.next.prev!==s)return s.prev.next=s,s.next.prev=s,c(t,i,e,n);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,function(t){var i,e,n,s,r,h,x,o,l=1;do{for(e=t,t=null,r=null,h=0;e;){for(h++,n=e,x=0,i=0;i<l&&(x++,n=n.nextZ);i++);for(o=l;x>0||o>0&&n;)0!==x&&(0===o||!n||e.z<=n.z)?(s=e,e=e.nextZ,x--):(s=n,n=n.nextZ,o--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(h>1)}(s)}function f(t,i,e,n,s){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-e)*s)|t<<8))|t<<4))|t<<2))|t<<1))|(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=32767*(i-n)*s)|i<<8))|i<<4))|i<<2))|i<<1))<<1}function p(t){var i=t,e=t;do{(i.x<e.x||i.x===e.x&&i.y<e.y)&&(e=i),i=i.next}while(i!==t);return e}function v(t,i,e,n,s,r,h,x){return(s-h)*(i-x)-(t-h)*(r-x)>=0&&(t-h)*(n-x)-(e-h)*(i-x)>=0&&(e-h)*(r-x)-(s-h)*(n-x)>=0}function m(t,i){return t.next.i!==i.i&&t.prev.i!==i.i&&!function(t,i){var e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==i.i&&e.next.i!==i.i&&T(e,e.next,t,i))return!0;e=e.next}while(e!==t);return!1}(t,i)&&(b(t,i)&&b(i,t)&&function(t,i){var e=t,n=!1,s=(t.x+i.x)/2,r=(t.y+i.y)/2;do{e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next}while(e!==t);return n}(t,i)&&(d(t.prev,t,i.prev)||d(t,i.prev,i))||g(t,i)&&d(t.prev,t,t.next)>0&&d(i.prev,i,i.next)>0)}function d(t,i,e){return(i.y-t.y)*(e.x-i.x)-(i.x-t.x)*(e.y-i.y)}function g(t,i){return t.x===i.x&&t.y===i.y}function T(t,i,e,n){var s=w(d(t,i,e)),r=w(d(t,i,n)),h=w(d(e,n,t)),x=w(d(e,n,i));return s!==r&&h!==x||!(0!==s||!_(t,e,i))||!(0!==r||!_(t,n,i))||!(0!==h||!_(e,t,n))||!(0!==x||!_(e,i,n))}function _(t,i,e){return i.x<=Math.max(t.x,e.x)&&i.x>=Math.min(t.x,e.x)&&i.y<=Math.max(t.y,e.y)&&i.y>=Math.min(t.y,e.y)}function w(t){return t>0?1:t<0?-1:0}function b(t,i){return d(t.prev,t,t.next)<0?d(t,i,t.next)>=0&&d(t,t.prev,i)>=0:d(t,i,t.prev)<0||d(t,t.next,i)<0}function A(t,i){var e=new B(t.i,t.x,t.y),n=new B(i.i,i.x,i.y),s=t.next,r=i.prev;return t.next=i,i.prev=t,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function L(t,i,e,n){var s=new B(t,i,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function R(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function B(t,i,e){this.i=t,this.x=i,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function U(t,i,e,n){for(var s=0,r=i,h=e-n;r<e;r+=n)s+=(t[h]-t[r])*(t[r+1]+t[h+1]),h=r;return s}return t.deviation=function(t,i,e,n){var s=i&&i.length,r=s?i[0]*e:t.length,h=Math.abs(U(t,0,r,e));if(s)for(var x=0,o=i.length;x<o;x++){var l=i[x]*e,a=x<o-1?i[x+1]*e:t.length;h-=Math.abs(U(t,l,a,e))}var u=0;for(x=0;x<n.length;x+=3){var y=n[x]*e,c=n[x+1]*e,f=n[x+2]*e;u+=Math.abs((t[y]-t[f])*(t[c+1]-t[y+1])-(t[y]-t[c])*(t[f+1]-t[y+1]))}return 0===h&&0===u?0:Math.abs((u-h)/h)},t.flatten=function(t){for(var i=t[0][0].length,e={vertices:[],holes:[],dimensions:i},n=0,s=0;s<t.length;s++){for(var r=0;r<t[s].length;r++)for(var h=0;h<i;h++)e.vertices.push(t[s][r][h]);s>0&&(n+=t[s-1].length,e.holes.push(n))}return e},t},void 0!==(r=s())&&(n.exports=r);var x=h.exports},79087:(t,i,e)=>{e.d(i,{Z:()=>L});const n=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],s=["آ","أ","إ","ا"],r=["ﻵ","ﻷ","ﻹ","ﻻ"],h=["ﻶ","ﻸ","ﻺ","ﻼ"],x=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],o=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],l=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],a=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],u=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],y=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],c=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],f=["ء","ف"],p=["غ","ي"],v=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],m=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],d=10,g=11,T=12,_=18,w=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],b=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],A=[[_,_,_,_,_,_,_,_,_,6,5,6,8,5,_,_,_,_,_,_,_,_,_,_,_,_,_,_,5,5,5,6,8,4,4,g,g,g,4,4,4,4,4,d,9,d,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,_,_,_,_,_,_,5,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,9,4,g,g,g,g,4,4,4,4,0,4,4,_,4,4,g,g,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,1,T,1,T,T,1,T,T,1,T,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,g,g,7,9,7,4,4,T,T,T,T,T,T,T,T,T,T,T,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,3,3,3,3,3,3,3,3,3,3,g,3,3,7,7,7,T,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,T,T,T,T,T,T,T,3,4,T,T,T,T,T,T,7,7,T,T,4,T,T,T,T,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,T,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,T,T,T,T,T,T,T,T,T,T,T,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,T,T,T,T,T,T,T,T,T,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,_,_,_,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,g,g,g,g,g,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,_,_,_,_,_,4,4,4,4,4,_,_,_,_,_,_,2,0,4,4,2,2,2,2,2,2,d,d,4,4,4,0,2,2,2,2,2,2,2,2,2,2,d,d,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,T,1,1,1,1,1,1,1,1,1,1,d,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,T,T,T,T,T,T,T,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,g,4,4,d,d,4,4,4,4,4,g,g,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,_],[4,4,4,g,g,g,4,4,4,4,4,d,9,d,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,g,g,4,4,4,g,g,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];class L{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,i,e){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,i,e){Y=[],$=[];for(let n=0;n<e;n++)t[n]=n,i[n]=n,Y[n]=n}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(i,e))return t;i=this.inputFormat,e=this.outputFormat;let n=t;const x=G,a=j(i.charAt(1)),y=j(e.charAt(1)),f=("I"===i.charAt(0)?"L":i.charAt(0))+a,p=("I"===e.charAt(0)?"L":e.charAt(0))+y,v=i.charAt(2)+e.charAt(2);x.defInFormat=f,x.defOutFormat=p,x.defSwap=v;const m=R(t,f,p,v,x);let d=!1;return"R"===e.charAt(1)?d=!0:"C"!==e.charAt(1)&&"D"!==e.charAt(1)||(d="rtl"===this.checkContextual(m)),this.sourceToTarget=Y,this.targetToSource=function(t){const i=new Array(t.length);for(let e=0;e<t.length;e++)i[t[e]]=e;return i}(this.sourceToTarget),Q=this.targetToSource,n=i.charAt(3)===e.charAt(3)?m:"S"===e.charAt(3)?function(t,i,e){if(0===i.length)return"";void 0===t&&(t=!0),void 0===e&&(e=!0);const n=(i=String(i)).split("");let s=0,x=1,a=n.length;t||(s=n.length-1,x=-1,a=1);const y=function(t,i,e,n,s){let x=0;const a=[];let y=0;for(let c=i;c*e<n;c+=e)if(E(t[c])||O(t[c])){if("ل"===t[c]&&Z(t,c+e,e,n)){t[c]=X(t[c+e],0===x?r:h),c+=e,q(t,c,e,n),s&&(a[y]=c,y++),x=0;continue}const i=t[c];1===x?t[c]=V(t,c+e,e,n)?z(t[c]):D(t[c],l):!0===V(t,c+e,e,n)?t[c]=D(t[c],u):t[c]=D(t[c],o),O(i)||(x=1),!0===C(i)&&(x=0)}else x=0;return a}(n,s,x,a,e);let c="";for(let i=0;i<n.length;i++)e&&S(y,y.length,i)>-1?(W(Q,i,!t,-1),Y.splice(i,1)):c+=n[i];return c}(d,m,!0):function(t,i,e){if(0===t.length)return"";void 0===e&&(e=!0),void 0===i&&(i=!0);let n="";const r=(t=String(t)).split("");for(let h=0;h<t.length;h++){let x=!1;if(r[h]>="ﹰ"&&r[h]<"\ufeff"){const o=t.charCodeAt(h);r[h]>="ﻵ"&&r[h]<="ﻼ"?(i?(h>0&&e&&" "===r[h-1]?n=n.substring(0,n.length-1)+"ل":(n+="ل",x=!0),n+=s[(o-65269)/2]):(n+=s[(o-65269)/2],n+="ل",h+1<t.length&&e&&" "===r[h+1]?h++:x=!0),x&&(W(Q,h,!0,1),Y.splice(h,0,Y[h]))):n+=c[o-65136]}else n+=r[h]}return n}(m,d,!0),this.sourceToTarget=Y,this.targetToSource=Q,this.levels=$,n}_inputFormatSetter(t){if(!it.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!it.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,i){return t?this._inputFormatSetter(t):t=this.inputFormat,i?this._outputFormatSetter(i):i=this.outputFormat,t!==i}checkContextual(t){let i=B(t);if("ltr"!==i&&"rtl"!==i){try{i=document.dir.toLowerCase()}catch(t){}"ltr"!==i&&"rtl"!==i&&(i="ltr")}return i}hasBidiChar(t){return et.test(t)}}function R(t,i,e,n,s){const r=function(t,i,e){if(void 0===i.inFormat&&(i.inFormat=e.defInFormat),void 0===i.outFormat&&(i.outFormat=e.defOutFormat),void 0===i.swap&&(i.swap=e.defSwap),i.inFormat===i.outFormat)return i;const n=i.inFormat.substring(0,1),s=i.outFormat.substring(0,1);let r,h=i.inFormat.substring(1,4),x=i.outFormat.substring(1,4);return"C"===h.charAt(0)&&(r=B(t),h="ltr"===r||"rtl"===r?r.toUpperCase():"L"===i.inFormat.charAt(2)?"LTR":"RTL",i.inFormat=n+h),"C"===x.charAt(0)&&(r=B(t),"rtl"===r?x="RTL":"ltr"===r?(r=function(t){const i=t.split("");return i.reverse(),B(i.join(""))}(t),x=r.toUpperCase()):x="L"===i.outFormat.charAt(2)?"LTR":"RTL",i.outFormat=s+x),i}(t,{inFormat:i,outFormat:e,swap:n},s);if(r.inFormat===r.outFormat)return t;i=r.inFormat,e=r.outFormat,n=r.swap;const h=i.substring(0,1),x=i.substring(1,4),o=e.substring(0,1),l=e.substring(1,4);if(s.inFormat=i,s.outFormat=e,s.swap=n,"L"===h&&"VLTR"===e){if("LTR"===x)return s.dir=K,U(t,s);if("RTL"===x)return s.dir=tt,U(t,s)}if("V"===h&&"V"===o)return s.dir="RTL"===x?tt:K,N(t,s);if("L"===h&&"VRTL"===e)return"LTR"===x?(s.dir=K,t=U(t,s)):(s.dir=tt,t=U(t,s)),N(t);if("VLTR"===i&&"LLTR"===e)return s.dir=K,U(t,s);if("V"===h&&"L"===o&&x!==l)return t=N(t),"RTL"===x?R(t,"LLTR","VLTR",n,s):R(t,"LRTL","VRTL",n,s);if("VRTL"===i&&"LRTL"===e)return R(t,"LRTL","VRTL",n,s);if("L"===h&&"L"===o){const i=s.swap;return s.swap=i.substr(0,1)+"N","RTL"===x?(s.dir=tt,t=U(t,s),s.swap="N"+i.substr(1,2),s.dir=K,t=U(t,s)):(s.dir=K,t=U(t,s),s.swap="N"+i.substr(1,2),t=R(t,"VLTR","LRTL",s.swap,s)),t}return t}function B(t){const i=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return i?i[0]<="z"?"ltr":"rtl":""}function U(t,i){const e=t.split(""),n=[];return F(e,n,i),function(t,i,e){if(0!==e.hiLevel&&e.swap.substr(0,1)!==e.swap.substr(1,2))for(let e=0;e<t.length;e++)1===i[e]&&(t[e]=I(t[e]))}(e,n,i),k(2,e,n,i),k(1,e,n,i),$=n,e.join("")}function F(t,i,e){const n=t.length,s=e.dir?m:v;let r=0,h=-1;const x=[],o=[];e.hiLevel=e.dir,e.lastArabic=!1,e.hasUbatAl=!1,e.hasUbatB=!1,e.hasUbatS=!1;for(let i=0;i<n;i++)x[i]=M(t[i]);for(let l=0;l<n;l++){const n=r,a=P(t,x,o,l,e);o[l]=a,r=s[n][a];const u=240&r;r&=15;const y=s[r][H];if(i[l]=y,u>0)if(16===u){for(let t=h;t<l;t++)i[t]=1;h=-1}else h=-1;if(s[r][J])-1===h&&(h=l);else if(h>-1){for(let t=h;t<l;t++)i[t]=y;h=-1}5===x[l]&&(i[l]=0),e.hiLevel|=y}e.hasUbatS&&function(t,i,e,n){for(let s=0;s<e;s++)if(6===t[s]){i[s]=n.dir;for(let e=s-1;e>=0&&8===t[e];e--)i[e]=n.dir}}(x,i,n,e)}function M(t){const i=t.charCodeAt(0),e=b[i>>8];return e<100?e:A[e-100][255&i]}function N(t,i){const e=t.split("");if(i){const t=[];F(e,t,i),$=t}return e.reverse(),Y.reverse(),e.join("")}function S(t,i,e){for(let n=0;n<i;n++)if(t[n]===e)return n;return-1}function E(t){for(let i=0;i<f.length;i++)if(t>=f[i]&&t<=p[i])return!0;return!1}function V(t,i,e,n){for(;i*e<n&&O(t[i]);)i+=e;return!!(i*e<n&&E(t[i]))}function Z(t,i,e,n){for(;i*e<n&&O(t[i]);)i+=e;let r=" ";if(!(i*e<n))return!1;r=t[i];for(let t=0;t<s.length;t++)if(s[t]===r)return!0;return!1}function k(t,i,e,n){if(n.hiLevel<t)return;if(1===t&&n.dir===tt&&!n.hasUbatB)return i.reverse(),void Y.reverse();const s=i.length;let r,h,x,o,l,a=0;for(;a<s;){if(e[a]>=t){for(r=a+1;r<s&&e[r]>=t;)r++;for(h=a,x=r-1;h<x;h++,x--)o=i[h],i[h]=i[x],i[x]=o,l=Y[h],Y[h]=Y[x],Y[x]=l;a=r}a++}}function P(t,i,e,n,s){const r=i[n];return{UBAT_L:()=>(s.lastArabic=!1,0),UBAT_R:()=>(s.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>s.lastArabic?3:2,UBAT_AL:()=>(s.lastArabic=!0,s.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let t,r;return n<1||n+1>=i.length||2!==(t=e[n-1])&&3!==t||2!==(r=i[n+1])&&3!==r?4:(s.lastArabic&&(r=3),r===t?r:4)},UBAT_ES:()=>2===(n>0?e[n-1]:5)&&n+1<i.length&&2===i[n+1]?2:4,UBAT_ET:()=>{if(n>0&&2===e[n-1])return 2;if(s.lastArabic)return 4;let t=n+1;const r=i.length;for(;t<r&&i[t]===g;)t++;return t<r&&2===i[t]?2:4},UBAT_NSM:()=>{if("VLTR"===s.inFormat){const e=i.length;let s=n+1;for(;s<e&&i[s]===T;)s++;if(s<e){const e=t[n].charCodeAt[0],r=e>=1425&&e<=2303||64286===e,h=i[s];if(r&&(1===h||7===h))return 1}}return n<1||5===i[n-1]?4:e[n-1]},UBAT_B:()=>(s.lastArabic=!0,s.hasUbatB=!0,s.dir),UBAT_S:()=>(s.hasUbatS=!0,4),UBAT_LRE:()=>(s.lastArabic=!1,4),UBAT_RLE:()=>(s.lastArabic=!1,4),UBAT_LRO:()=>(s.lastArabic=!1,4),UBAT_RLO:()=>(s.lastArabic=!1,4),UBAT_PDF:()=>(s.lastArabic=!1,4),UBAT_BN:()=>4}[w[r]]()}function I(t){let i,e=0,s=n.length-1;for(;e<=s;)if(i=Math.floor((e+s)/2),t<n[i][0])s=i-1;else{if(!(t>n[i][0]))return n[i][1];e=i+1}return t}function C(t){for(let i=0;i<y.length;i++)if(y[i]===t)return!0;return!1}function z(t){for(let i=0;i<x.length;i++)if(t===x[i])return a[i];return t}function D(t,i){for(let e=0;e<x.length;e++)if(t===x[e])return i[e];return t}function O(t){return t>="ً"&&t<="ٕ"}function j(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function q(t,i,e,n){for(;i*e<n&&O(t[i]);)i+=e;return i*e<n&&(t[i]=" ",!0)}function X(t,i){for(let e=0;e<s.length;e++)if(t===s[e])return i[e];return t}function W(t,i,e,n){for(let s=0;s<t.length;s++)(t[s]>i||!e&&t[s]===i)&&(t[s]+=n)}let Y=[],Q=[],$=[];const G={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},H=5,J=6,K=0,tt=1,it=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,et=/[\u0591-\u06ff\ufb1d-\ufefc]/},65390:(t,i,e)=>{e.d(i,{j:()=>x,b:()=>o});var n=e(99880),s=e(80442);let r=null,h=null;async function x(){return r||(r=async function(){const t=(0,s.Z)("csp-restrictions")?await e.e(3852).then(e.bind(e,43852)).then((function(t){return t.l})):await e.e(4358).then(e.bind(e,84358)).then((function(t){return t.l}));h=await t.load({locateFile:()=>(0,n.V)("esri/core/libs/libtess/libtess.wasm")})}()),r}function o(t,i){const e=Math.max(t.length,128e3);return h.triangulate(t,i,e)}},35362:(t,i,e)=>{e.d(i,{E:()=>n});class n{constructor(t,i){this.x=t,this.y=i}clone(){return new n(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){this.x=t,this.y=i}normalize(){const t=this.x,i=this.y,e=Math.sqrt(t*t+i*i);this.x/=e,this.y/=e}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,i){this.x+=t,this.y+=i}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,i){this.x=t.x+i.x,this.y=t.y+i.y}assignSub(t,i){this.x=t.x-i.x,this.y=t.y-i.y}rotate(t,i){const e=this.x,n=this.y;this.x=e*t-n*i,this.y=e*i+n*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}static distance(t,i){const e=i.x-t.x,n=i.y-t.y;return Math.sqrt(e*e+n*n)}static add(t,i){return new n(t.x+i.x,t.y+i.y)}static sub(t,i){return new n(t.x-i.x,t.y-i.y)}}},55987:(t,i,e)=>{e.d(i,{vX:()=>x,s5:()=>h,Or:()=>r}),Number.POSITIVE_INFINITY;const n=128/Math.PI;function s(t,i){return(t%=i)>=0?t:t+i}function r(t){return s(t*n,256)}function h(t){return s(.7111111111111111*t,256)}function x(t,i,e){return t>=i&&t<=e||t>=e&&t<=i}Math.LN2},87893:(t,i,e)=>{e.d(i,{Z:()=>n});class n{constructor(t=0,i=0,e=0,n=0){this.x=t,this.y=i,this.width=e,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}},31294:(t,i,e)=>{e.d(i,{I:()=>o,b:()=>x});var n=e(16534),s=e(35362),r=e(55987);class h{constructor(t,i,e){this.ratio=t,this.x=i,this.y=e}}class x{constructor(t,i,e,s=8,r=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=s,this.pixelMargin=r,this.tileSize=n.I_*s,this.dz=t,this.yPos=i,this.xPos=e}setPixelMargin(t){t!==this.pixelMargin&&(this.pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this.finalRatio=this.tileSize/t*(1<<this.dz);let i=this.pixelRatio*this.pixelMargin;i/=this.finalRatio;const e=t>>this.dz;i>e&&(i=e),this.margin=i,this.xmin=e*this.xPos-i,this.ymin=e*this.yPos-i,this.xmax=this.xmin+e+2*i,this.ymax=this.ymin+e+2*i}reset(t){this.type=t,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new s.E(t,i),this._firstPt=new s.E(t,i),this._dist=0}lineTo(t,i){const e=this._isIn(t,i),n=new s.E(t,i),r=s.E.distance(this._prevPt,n);let x,o,l,a,u,y,c,f;if(e)this._prevIsIn?this._lineTo(t,i,!0):(x=this._prevPt,o=n,l=this._intersect(o,x),this.start=this._dist+r*(1-this._r),this._lineTo(l.x,l.y,!0),this._lineTo(o.x,o.y,!0));else if(this._prevIsIn)o=this._prevPt,x=n,l=this._intersect(o,x),this._lineTo(l.x,l.y,!0),this._lineTo(x.x,x.y,!1);else{const t=this._prevPt,i=n;if(t.x<=this.xmin&&i.x<=this.xmin||t.x>=this.xmax&&i.x>=this.xmax||t.y<=this.ymin&&i.y<=this.ymin||t.y>=this.ymax&&i.y>=this.ymax)this._lineTo(i.x,i.y,!1);else{const e=[];if((t.x<this.xmin&&i.x>this.xmin||t.x>this.xmin&&i.x<this.xmin)&&(a=(this.xmin-t.x)/(i.x-t.x),f=t.y+a*(i.y-t.y),f<=this.ymin?y=!1:f>=this.ymax?y=!0:e.push(new h(a,this.xmin,f))),(t.x<this.xmax&&i.x>this.xmax||t.x>this.xmax&&i.x<this.xmax)&&(a=(this.xmax-t.x)/(i.x-t.x),f=t.y+a*(i.y-t.y),f<=this.ymin?y=!1:f>=this.ymax?y=!0:e.push(new h(a,this.xmax,f))),(t.y<this.ymin&&i.y>this.ymin||t.y>this.ymin&&i.y<this.ymin)&&(a=(this.ymin-t.y)/(i.y-t.y),c=t.x+a*(i.x-t.x),c<=this.xmin?u=!1:c>=this.xmax?u=!0:e.push(new h(a,c,this.ymin))),(t.y<this.ymax&&i.y>this.ymax||t.y>this.ymax&&i.y<this.ymax)&&(a=(this.ymax-t.y)/(i.y-t.y),c=t.x+a*(i.x-t.x),c<=this.xmin?u=!1:c>=this.xmax?u=!0:e.push(new h(a,c,this.ymax))),0===e.length)u?y?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):y?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(e.length>1&&e[0].ratio>e[1].ratio)this.start=this._dist+r*e[1].ratio,this._lineTo(e[1].x,e[1].y,!0),this._lineTo(e[0].x,e[0].y,!0);else{this.start=this._dist+r*e[0].ratio;for(let t=0;t<e.length;t++)this._lineTo(e[t].x,e[t].y,!0)}this._lineTo(i.x,i.y,!1)}}this._dist+=r,this._prevIsIn=e,this._prevPt=n}close(){if(this.line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const e=this.line;let n=e.length;for(;n>=4&&(e[0].x===e[1].x&&e[0].x===e[n-2].x||e[0].y===e[1].y&&e[0].y===e[n-2].y);)e.pop(),e[0].x=e[n-2].x,e[0].y=e[n-2].y,--n}}result(t=!0){return this._pushLine(),0===this.lines.length?null:(3===this.type&&t&&l.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(2!==this.type)throw new Error("Only valid for lines");this._pushLine();const t=this.lines,i=t.length;if(0===i)return null;const e=[];for(let n=0;n<i;n++)e.push({line:t[n],start:this.starts[n]||0});return e}_isIn(t,i){return t>=this.xmin&&t<=this.xmax&&i>=this.ymin&&i<=this.ymax}_intersect(t,i){let e,n,r;if(i.x>=this.xmin&&i.x<=this.xmax)n=i.y<=this.ymin?this.ymin:this.ymax,r=(n-t.y)/(i.y-t.y),e=t.x+r*(i.x-t.x);else if(i.y>=this.ymin&&i.y<=this.ymax)e=i.x<=this.xmin?this.xmin:this.xmax,r=(e-t.x)/(i.x-t.x),n=t.y+r*(i.y-t.y);else{n=i.y<=this.ymin?this.ymin:this.ymax,e=i.x<=this.xmin?this.xmin:this.xmax;const s=(e-t.x)/(i.x-t.x),h=(n-t.y)/(i.y-t.y);s<h?(r=s,n=t.y+s*(i.y-t.y)):(r=h,e=t.x+h*(i.x-t.x))}return this._r=r,new s.E(e,n)}_pushLine(){this.line&&(1===this.type?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):2===this.type?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):3===this.type&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(t,i,e){3!==this.type?e&&(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new s.E(t,i))):(e||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new s.E(t,i)),this._is_h=!1,this._is_v=!1)}_lineTo(t,i,e){let n,r;if(3!==this.type)if(e){if(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(n=this.line[this.line.length-1],n.equals(t,i)))return;this.line.push(new s.E(t,i))}else this.line&&this.line.length>0&&this._pushLine();else if(e||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){n=this.line[this.line.length-1];const e=n.x===t,h=n.y===i;if(e&&h)return;this._is_h&&e||this._is_v&&h?(n.x=t,n.y=i,r=this.line[this.line.length-2],r.x===t&&r.y===i?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(r=this.line[this.line.length-2],this._is_h=r.x===t,this._is_v=r.y===i)):(this._is_h=r.x===t,this._is_v=r.y===i)):(this.line.push(new s.E(t,i)),this._is_h=e,this._is_v=h)}else this.line.push(new s.E(t,i))}}class o{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this.lines=[],this.line=null}moveTo(t,i){this.line&&this.lines.push(this.line),this.line=[];const e=this._ratio;this.line.push(new s.E(t*e,i*e))}lineTo(t,i){const e=this._ratio;this.line.push(new s.E(t*e,i*e))}close(){const t=this.line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}class l{static simplify(t,i,e){if(!e)return;const n=-i,s=t+i,r=-i,h=t+i,x=[],o=[],a=e.length;for(let t=0;t<a;++t){const i=e[t];if(!i||i.length<2)continue;let l,a=i[0];const u=i.length;for(let e=1;e<u;++e)l=i[e],a.x===l.x&&(a.x<=n&&(a.y>l.y?(x.push(t),x.push(e),x.push(0),x.push(-1)):(o.push(t),o.push(e),o.push(0),o.push(-1))),a.x>=s&&(a.y<l.y?(x.push(t),x.push(e),x.push(1),x.push(-1)):(o.push(t),o.push(e),o.push(1),o.push(-1)))),a.y===l.y&&(a.y<=r&&(a.x<l.x?(x.push(t),x.push(e),x.push(2),x.push(-1)):(o.push(t),o.push(e),o.push(2),o.push(-1))),a.y>=h&&(a.x>l.x?(x.push(t),x.push(e),x.push(3),x.push(-1)):(o.push(t),o.push(e),o.push(3),o.push(-1)))),a=l}if(0===x.length||0===o.length)return;l.fillParent(e,o,x),l.fillParent(e,x,o);const u=[];l.calcDeltas(u,o,x),l.calcDeltas(u,x,o),l.addDeltas(u,e)}static fillParent(t,i,e){const n=e.length,s=i.length;for(let h=0;h<s;h+=4){const s=i[h],x=i[h+1],o=i[h+2],l=t[s][x-1],a=t[s][x];let u=8092,y=-1;for(let i=0;i<n;i+=4){if(e[i+2]!==o)continue;const n=e[i],s=e[i+1],h=t[n][s-1],x=t[n][s];switch(o){case 0:case 1:if((0,r.vX)(l.y,h.y,x.y)&&(0,r.vX)(a.y,h.y,x.y)){const t=Math.abs(x.y-h.y);t<u&&(u=t,y=i)}break;case 2:case 3:if((0,r.vX)(l.x,h.x,x.x)&&(0,r.vX)(a.x,h.x,x.x)){const t=Math.abs(x.x-h.x);t<u&&(u=t,y=i)}}}i[h+3]=y}}static calcDeltas(t,i,e){const n=i.length;for(let s=0;s<n;s+=4){const n=[],r=l.calcDelta(s,i,e,n);t.push(i[s]),t.push(i[s+1]),t.push(i[s+2]),t.push(r)}}static calcDelta(t,i,e,n){const s=i[t+3];if(-1===s)return 0;const r=n.length;return r>1&&n[r-2]===s?0:(n.push(s),l.calcDelta(s,e,i,n)+1)}static addDeltas(t,i){const e=t.length;let n=0;for(let i=0;i<e;i+=4){const e=t[i+3];e>n&&(n=e)}for(let s=0;s<e;s+=4){const e=i[t[s]],r=t[s+1],h=n-t[s+3];switch(t[s+2]){case 0:e[r-1].x-=h,e[r].x-=h,1===r&&(e[e.length-1].x-=h),r===e.length-1&&(e[0].x-=h);break;case 1:e[r-1].x+=h,e[r].x+=h,1===r&&(e[e.length-1].x+=h),r===e.length-1&&(e[0].x+=h);break;case 2:e[r-1].y-=h,e[r].y-=h,1===r&&(e[e.length-1].y-=h),r===e.length-1&&(e[0].y-=h);break;case 3:e[r-1].y+=h,e[r].y+=h,1===r&&(e[e.length-1].y+=h),r===e.length-1&&(e[0].y+=h)}}}}},67327:(t,i,e)=>{e.d(i,{z:()=>f});var n=e(16534);function s(t,i){return t.x===i.x&&t.y===i.y}function r(t){if(!t)return;const i=t.length;if(i<=1)return;let e=0;for(let n=1;n<i;n++)s(t[n],t[e])||++e===n||(t[e]=t[n]);t.length=e+1}function h(t,i){return t.x=i.y,t.y=-i.x,t}function x(t,i){return t.x=-i.y,t.y=i.x,t}function o(t,i){return t.x=i.x,t.y=i.y,t}function l(t,i){return t.x=-i.x,t.y=-i.y,t}function a(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function u(t,i){return t.x*i.y-t.y*i.x}function y(t,i){return t.x*i.x+t.y*i.y}function c(t,i,e,n){return t.x=i.x*e+i.y*n,t.y=i.x*n-i.y*e,t}class f{constructor(t,i,e){this.writeVertex=t,this.writeTriangle=i,this.canUseThinTessellation=e,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(t,i){r(t),this.canUseThinTessellation&&i.halfWidth<n.tQ&&!i.offset?this.tessellateThin_(t,i):this.tessellate_(t,i)}tessellateThin_(t,i){if(t.length<2)return;const e=i.wrapDistance||65535;let n=i.initialDistance||0,s=!1,r=t[0].x,h=t[0].y;const x=t.length;for(let i=1;i<x;++i){s&&(s=!1,n=0);let x=t[i].x,o=t[i].y,l=x-r,a=o-h,u=Math.sqrt(l*l+a*a);if(l/=u,a/=u,n+u>e){s=!0;const t=(e-n)/u;u=e-n,x=(1-t)*r+t*x,o=(1-t)*h+t*o,--i}const y=this.writeVertex(r,h,0,0,l,a,a,-l,0,-1,n),c=this.writeVertex(r,h,0,0,l,a,-a,l,0,1,n);n+=u;const f=this.writeVertex(x,o,0,0,l,a,a,-l,0,-1,n),p=this.writeVertex(x,o,0,0,l,a,-a,l,0,1,n);this.writeTriangle(y,c,f),this.writeTriangle(c,f,p),r=x,h=o}}tessellate_(t,i){const e=t[0],n=t[t.length-1],r=s(e,n),f=r?3:2;if(t.length<f)return;const p=i.pixelCoordRatio,v=null!=i.capType?i.capType:0,m=null!=i.joinType?i.joinType:2,d=null!=i.miterLimit?Math.min(i.miterLimit,4):2,g=null!=i.roundLimit?Math.min(i.roundLimit,1.05):1.05,T=null!=i.halfWidth?i.halfWidth:2,_=!!i.textured;let w,b,A=null,L=null;const R=this.prevNormal,B=this.nextNormal;let U=-1,F=-1;const M=this.joinNormal;let N,S;const E=this.textureNormalLeft,V=this.textureNormalRight,Z=this.textureNormal;let k=-1,P=-1;const I=i.wrapDistance||65535;let C=i.initialDistance||0;const z=this.writeVertex,D=this.writeTriangle,O=function(t,i,e,n,s,r){const h=z(w,b,N,S,e,n,t,i,s,r,C);return k>=0&&P>=0&&h>=0&&D(k,P,h),k=P,P=h,h};r&&(A=t[t.length-2],B.x=n.x-A.x,B.y=n.y-A.y,F=a(B),B.x/=F,B.y/=F);let j=!1;for(let i=0;i<t.length;++i){if(j&&(j=!1,C=0),A&&(R.x=-B.x,R.y=-B.y,U=F,C+U>I&&(j=!0)),j){const e=(I-C)/U;U=I-C,A={x:(1-e)*A.x+e*t[i].x,y:(1-e)*A.y+e*t[i].y},--i}else A=t[i];w=A.x,b=A.y;const e=i<=0&&!j,n=i===t.length-1;if(e||(C+=U),L=n?r?t[1]:null:t[i+1],L?(B.x=L.x-w,B.y=L.y-b,F=a(B),B.x/=F,B.y/=F):(B.x=void 0,B.y=void 0),!r){if(e){x(M,B),N=M.x,S=M.y,2===v&&(O(-B.y-B.x,B.x-B.y,B.x,B.y,0,-1),O(B.y-B.x,-B.x-B.y,B.x,B.y,0,1)),1===v&&(O(-B.y-B.x,B.x-B.y,B.x,B.y,-1,-1),O(B.y-B.x,-B.x-B.y,B.x,B.y,-1,1)),1!==v&&0!==v||(O(-B.y,B.x,B.x,B.y,0,-1),O(B.y,-B.x,B.x,B.y,0,1));continue}if(n){h(M,R),N=M.x,S=M.y,1!==v&&0!==v||(O(R.y,-R.x,-R.x,-R.y,0,-1),O(-R.y,R.x,-R.x,-R.y,0,1)),2===v&&(O(R.y-R.x,-R.x-R.y,-R.x,-R.y,0,-1),O(-R.y-R.x,R.x-R.y,-R.x,-R.y,0,1)),1===v&&(O(R.y-R.x,-R.x-R.y,-R.x,-R.y,1,-1),O(-R.y-R.x,R.x-R.y,-R.x,-R.y,1,1));continue}}let s,f,z=-u(R,B);if(Math.abs(z)<.01)y(R,B)>0?(M.x=R.x,M.y=R.y,z=1,s=Number.MAX_VALUE,f=!0):(x(M,B),z=1,s=1,f=!1);else{M.x=(R.x+B.x)/z,M.y=(R.y+B.y)/z,s=a(M);const t=(s-1)*T*p;f=s>4||t>U&&t>F}N=M.x,S=M.y;let D=m;switch(m){case 0:s<1.05&&(D=2);break;case 1:s<g&&(D=2);break;case 2:s>d&&(D=0)}switch(D){case 2:if(O(M.x,M.y,-R.x,-R.y,0,-1),O(-M.x,-M.y,-R.x,-R.y,0,1),n)break;if(_){const t=j?0:C;k=this.writeVertex(w,b,N,S,B.x,B.y,M.x,M.y,0,-1,t),P=this.writeVertex(w,b,N,S,B.x,B.y,-M.x,-M.y,0,1,t)}break;case 0:{const t=z<0;let i,e,s,r;if(t){const t=k;k=P,P=t,i=E,e=V}else i=V,e=E;if(f)s=t?x(this.innerPrev,R):h(this.innerPrev,R),r=t?h(this.innerNext,B):x(this.innerNext,B);else{const i=t?l(this.inner,M):o(this.inner,M);s=i,r=i}const a=t?h(this.bevelStart,R):x(this.bevelStart,R);O(s.x,s.y,-R.x,-R.y,i.x,i.y);const u=O(a.x,a.y,-R.x,-R.y,e.x,e.y);if(n)break;const y=t?x(this.bevelEnd,B):h(this.bevelEnd,B);if(f){const t=this.writeVertex(w,b,N,S,-R.x,-R.y,0,0,0,0,C);k=this.writeVertex(w,b,N,S,B.x,B.y,r.x,r.y,i.x,i.y,C),P=this.writeVertex(w,b,N,S,B.x,B.y,y.x,y.y,e.x,e.y,C),this.writeTriangle(u,t,P)}else{if(_){const t=this.bevelMiddle;t.x=(a.x+y.x)/2,t.y=(a.y+y.y)/2,c(Z,t,-R.x,-R.y),O(t.x,t.y,-R.x,-R.y,Z.x,Z.y),c(Z,t,B.x,B.y),k=this.writeVertex(w,b,N,S,B.x,B.y,t.x,t.y,Z.x,Z.y,C),P=this.writeVertex(w,b,N,S,B.x,B.y,r.x,r.y,i.x,i.y,C)}else{const t=k;k=P,P=t}O(y.x,y.y,B.x,B.y,e.x,e.y)}if(t){const t=k;k=P,P=t}break}case 1:{const t=z<0;let i,e;if(t){const t=k;k=P,P=t,i=E,e=V}else i=V,e=E;const r=t?l(this.inner,M):o(this.inner,M);let a,u;f?(a=t?x(this.innerPrev,R):h(this.innerPrev,R),u=t?h(this.innerNext,B):x(this.innerNext,B)):(a=r,u=r);const p=t?h(this.roundStart,R):x(this.roundStart,R),v=t?x(this.roundEnd,B):h(this.roundEnd,B),m=O(a.x,a.y,-R.x,-R.y,i.x,i.y),d=O(p.x,p.y,-R.x,-R.y,e.x,e.y);if(n)break;const g=this.writeVertex(w,b,N,S,-R.x,-R.y,0,0,0,0,C);f||this.writeTriangle(k,P,g);const T=l(this.outer,r),A=this.writeVertex(w,b,N,S,B.x,B.y,v.x,v.y,e.x,e.y,C);let L,U;const F=s>2;if(F){let i;s!==Number.MAX_VALUE?(T.x/=s,T.y/=s,i=y(R,T),i=(s*(i*i-1)+1)/i):i=-1,L=t?h(this.startBreak,R):x(this.startBreak,R),L.x+=R.x*i,L.y+=R.y*i,U=t?x(this.endBreak,B):h(this.endBreak,B),U.x+=B.x*i,U.y+=B.y*i}c(Z,T,-R.x,-R.y);const I=this.writeVertex(w,b,N,S,-R.x,-R.y,T.x,T.y,Z.x,Z.y,C);c(Z,T,B.x,B.y);const D=_?this.writeVertex(w,b,N,S,B.x,B.y,T.x,T.y,Z.x,Z.y,C):I,j=g,q=_?this.writeVertex(w,b,N,S,B.x,B.y,0,0,0,0,C):g;let X=-1,W=-1;if(F&&(c(Z,L,-R.x,-R.y),X=this.writeVertex(w,b,N,S,-R.x,-R.y,L.x,L.y,Z.x,Z.y,C),c(Z,U,B.x,B.y),W=this.writeVertex(w,b,N,S,B.x,B.y,U.x,U.y,Z.x,Z.y,C)),_?F?(this.writeTriangle(j,d,X),this.writeTriangle(j,X,I),this.writeTriangle(q,D,W),this.writeTriangle(q,W,A)):(this.writeTriangle(j,d,I),this.writeTriangle(q,D,A)):F?(this.writeTriangle(g,d,X),this.writeTriangle(g,X,W),this.writeTriangle(g,W,A)):(this.writeTriangle(g,d,I),this.writeTriangle(g,D,A)),f?(k=this.writeVertex(w,b,N,S,B.x,B.y,u.x,u.y,i.x,i.y,C),P=A):(k=_?this.writeVertex(w,b,N,S,B.x,B.y,u.x,u.y,i.x,i.y,C):m,this.writeTriangle(k,q,A),P=A),t){const t=k;k=P,P=t}break}}}}}}}]);