(this.webpackJsonpcontractorapp=this.webpackJsonpcontractorapp||[]).push([[102],{1236:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return g}));var n=r(10),a=r.n(n),i=r(18),l=r(16),o=r(91),s=r(93),u=r(308),c=r(75),b=r(27),y=r(35),f=r(48),p=r(534),v=r(527),d=r(533),O=r(186),j={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function h(e){var t=e.folders||[],r=t.slice(),n=new Map,a=new Map,i=new Map,l=new Map,o=new Map,s={esriGeometryPoint:a,esriGeometryPolyline:i,esriGeometryPolygon:l};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=Object(b.a)(e);t.featureSet.features=[];var r=e.featureSet.geometryType;n.set(r,t);var o=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?k(a,o,e.featureSet.features):"esriGeometryPolyline"===r?k(i,o,e.featureSet.features):"esriGeometryPolygon"===r&&k(l,o,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){o.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(n){var a=function(e,t,r){var n=function(e,t){var r;return t.some((function(t){return t.id===e&&(r=t,!0)})),r}(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);a&&r.push(a)}))})),r.forEach((function(e){e.featureInfos&&(e.points=Object(b.a)(n.get("esriGeometryPoint")),e.polylines=Object(b.a)(n.get("esriGeometryPolyline")),e.polygons=Object(b.a)(n.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((function(t){switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var r=s[t.type].get(t.id);r&&e[j[t.type]].featureSet.features.push(r);break;case"GroundOverlay":var n=o.get(t.id);n&&e.mapImages.push(n)}})),e.fullExtent=x([e]))}));var u=x(r);return{folders:t,sublayers:r,extent:u}}function m(e,t,r,n){var a=s.b&&s.b.findCredential(e);e=Object(y.e)(e,{token:a&&a.token});var i=o.a.kmlServiceUrl;return Object(c.default)(i,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=[],i={},l=t.sublayers,o=t.folders.map((function(e){return e.id}));return l.forEach((function(t){var l=new e;if(r?l.read(t,r):l.read(t),n.length&&o.indexOf(l.id)>-1&&(l.visible=-1!==n.indexOf(l.id)),i[t.id]=l,null!=t.parentFolderId&&-1!==t.parentFolderId){var s=i[t.parentFolderId];s.sublayers||(s.sublayers=[]),s.sublayers.unshift(l)}else a.unshift(l)})),a}function k(e,t,r){r.forEach((function(r){e.set(r.attributes[t],r)}))}function S(e){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(a.a.mark((function e(t){var r,n,l,o,s,c,b,y,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=O.default.fromJSON(t.featureSet).features,n=t.layerDefinition,l=Object(d.a)(n.drawingInfo.renderer),o=u.a.fromJSON(t.popupInfo),s=[],c=Object(i.a)(r),e.prev=2,c.s();case 4:if((b=c.n()).done){e.next=12;break}return y=b.value,e.next=8,l.getSymbolAsync(y);case 8:f=e.sent,y.symbol=f,y.popupTemplate=o,y.visible=!0,s.push(y);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:return e.abrupt("return",s);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function x(e){var t,r=Object(p.b)(p.a),n=Object(p.b)(p.a),a=Object(i.a)(e);try{for(a.s();!(t=a.n()).done;){var l=t.value;if(l.polygons&&l.polygons.featureSet&&l.polygons.featureSet.features){var o,s=Object(i.a)(l.polygons.featureSet.features);try{for(s.s();!(o=s.n()).done;){var u=o.value;Object(v.b)(r,u.geometry),Object(p.e)(n,r)}}catch(k){s.e(k)}finally{s.f()}}if(l.polylines&&l.polylines.featureSet&&l.polylines.featureSet.features){var c,b=Object(i.a)(l.polylines.featureSet.features);try{for(b.s();!(c=b.n()).done;){var y=c.value;Object(v.b)(r,y.geometry),Object(p.e)(n,r)}}catch(k){b.e(k)}finally{b.f()}}if(l.points&&l.points.featureSet&&l.points.featureSet.features){var d,O=Object(i.a)(l.points.featureSet.features);try{for(O.s();!(d=O.n()).done;){var j=d.value;Object(v.b)(r,j.geometry),Object(p.e)(n,r)}}catch(k){O.e(k)}finally{O.f()}}if(l.mapImages){var h,m=Object(i.a)(l.mapImages);try{for(m.s();!(h=m.n()).done;){var g=h.value;Object(v.b)(r,g.extent),Object(p.e)(n,r)}}catch(k){m.e(k)}finally{m.f()}}}}catch(k){a.e(k)}finally{a.f()}return Object(p.d)(n,p.a)?null:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:f.a.WGS84}}},1380:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return B}));var n,a=r(18),i=r(10),l=r.n(i),o=r(16),s=r(32),u=r(14),c=r(4),b=r(5),y=r(55),f=r(51),p=r(6),v=r(7),d=r(0),O=(r(95),r(45)),j=r(250),h=r(12),m=r(275),g=r(33),k=r(35),S=r(1),w=(r(15),r(17)),x=(r(13),r(37)),E=r(11),_=r(34),I=r(48),P=r(384),L=r(712),F=r(709),G=r(708),M=r(716),C=r(710),J=r(162),N=r(144),T=r(26),R=r(124),K=r(116),z=r(39),A=r(64),H=r(1236),W=r(60),D=n=function(e){Object(p.a)(r,e);var t=Object(v.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.apply(this,arguments))._sublayersHandles=null,e.description=null,e.id=null,e.networkLink=null,e.title=null,e.sourceJSON=null,e.fullExtent=null,e}return Object(b.a)(r,[{key:"initialize",value:function(){var e=this;Object(z.j)(this,"networkLink").then((function(){return Object(z.l)(e,"visible")})).then((function(){return e.load()}))}},{key:"load",value:function(e){var t=this;if(this.networkLink&&!this.networkLink.viewFormat){var r=Object(h.j)(e)?e.signal:null,a=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=Object(H.a)(e.sublayers);t.fullExtent=W.a.fromJSON(r),t.sourceJSON=e;var a=Object(w.m)(O.a.ofType(n),Object(H.e)(n,e));t.sublayers?t.sublayers.addMany(a):t.sublayers=a,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(a),Promise.resolve(this)}}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return Object(w.m)(O.a.ofType(n),e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,t){return!!t.visibility}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"_fetchService",value:function(e,t){return Object(H.b)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return Object(H.d)(e.data)}))}}]),r}(N.a.EventedMixin(Object(T.b)(R.a)));Object(d.a)([Object(S.b)()],D.prototype,"description",void 0),Object(d.a)([Object(S.b)()],D.prototype,"id",void 0),Object(d.a)([Object(S.b)({readOnly:!0,value:null})],D.prototype,"networkLink",void 0),Object(d.a)([Object(S.b)({json:{write:{allowNull:!0}}})],D.prototype,"parent",void 0),Object(d.a)([Object(S.b)({value:null,json:{write:{allowNull:!0}}})],D.prototype,"sublayers",null),Object(d.a)([Object(A.a)("sublayers")],D.prototype,"castSublayers",null),Object(d.a)([Object(S.b)({value:null,json:{read:{source:"name",reader:function(e){return Object(K.d)(e)}}}})],D.prototype,"title",void 0),Object(d.a)([Object(S.b)({value:!0})],D.prototype,"visible",null),Object(d.a)([Object(x.a)("visible",["visibility"])],D.prototype,"readVisible",null),Object(d.a)([Object(S.b)()],D.prototype,"sourceJSON",void 0),Object(d.a)([Object(S.b)({value:null})],D.prototype,"layer",null),Object(d.a)([Object(S.b)({type:W.a})],D.prototype,"fullExtent",void 0);var V=D=n=Object(d.a)([Object(E.a)("esri.layers.support.KMLSublayer")],D),q=["kml","xml"],U=function(e){Object(p.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a)))._visibleFolders=[],e.allSublayers=new j.a({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=I.a.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return Object(b.a)(r,[{key:"initialize",value:function(){var e=this;this.watch("sublayers",(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),!0),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(u.a)({url:e},t):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,t){this._visibleFolders=t.visibleFolders}},{key:"readSublayers",value:function(e,t,r){return Object(H.e)(V,t,r,this._visibleFolders)}},{key:"writeSublayers",value:function(e,t){for(var r=[],n=e.toArray();n.length;){var a=n[0];a.networkLink||(a.visible&&r.push(a.id),a.sublayers&&n.push.apply(n,Object(s.a)(a.sublayers.toArray()))),n.shift()}t.visibleFolders=r}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(k.k)(this.url,q)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var t=this,r=Object(h.j)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(g.u).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"destroy",value:function(){Object(y.a)(Object(f.a)(r.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){return a.resourceInfo?{ssl:!1,data:a.resourceInfo}:Object(H.b)(a.url,a.outSpatialReference,a.refreshInterval,t)}));case 2:r=e.sent,(n=Object(H.d)(r.data))&&this.read(n,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_recomputeFullExtent",value:function(){var e=null;this.extent&&(e=this.extent.clone());return function t(r){if(r.sublayers){var n,i=Object(a.a)(r.sublayers.items);try{for(i.s();!(n=i.n()).done;){var l=n.value;t(l),l.visible&&l.fullExtent&&(e?e.union(l.fullExtent):e=l.fullExtent.clone())}}catch(o){i.e(o)}finally{i.f()}}}(this),e}}]),r}(Object(L.a)(Object(M.a)(Object(C.a)(Object(F.a)(Object(G.a)(Object(m.a)(P.a)))))));Object(d.a)([Object(S.b)({readOnly:!0})],U.prototype,"allSublayers",void 0),Object(d.a)([Object(S.b)({type:I.a})],U.prototype,"outSpatialReference",void 0),Object(d.a)([Object(S.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),Object(d.a)([Object(S.b)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"legendEnabled",void 0),Object(d.a)([Object(S.b)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),Object(d.a)([Object(S.b)({type:["KML"]})],U.prototype,"operationalLayerType",void 0),Object(d.a)([Object(S.b)({})],U.prototype,"resourceInfo",void 0),Object(d.a)([Object(S.b)({type:O.a.ofType(V),json:{write:{ignoreOrigin:!0}}})],U.prototype,"sublayers",void 0),Object(d.a)([Object(x.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],U.prototype,"readSublayersFromItemOrWebMap",null),Object(d.a)([Object(x.a)("service","sublayers",["sublayers"])],U.prototype,"readSublayers",null),Object(d.a)([Object(_.a)("sublayers")],U.prototype,"writeSublayers",null),Object(d.a)([Object(S.b)({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),Object(d.a)([Object(S.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],U.prototype,"title",null),Object(d.a)([Object(S.b)(J.n)],U.prototype,"url",void 0),Object(d.a)([Object(S.b)({readOnly:!0})],U.prototype,"visibleSublayers",null),Object(d.a)([Object(S.b)({type:W.a})],U.prototype,"extent",void 0),Object(d.a)([Object(S.b)()],U.prototype,"fullExtent",null);var B=U=Object(d.a)([Object(E.a)("esri.layers.KMLLayer")],U)}}]);
//# sourceMappingURL=102.b9065942.chunk.js.map