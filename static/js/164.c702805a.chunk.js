(this.webpackJsonpcontractorapp=this.webpackJsonpcontractorapp||[]).push([[164],{1384:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return oe}));var a,n=r(10),i=r.n(n),o=r(16),c=r(14),l=r(4),s=r(5),b=r(6),p=r(7),d=r(0),u=(r(95),r(308)),y=(r(531),r(646),r(647),r(648),r(164),r(482)),j=r(481),O=r(533),f=r(484),v=r(75),m=r(77),h=r(29),g=r(61),w=r(13),S=r(12),I=r(275),k=r(33),x=r(1),R=(r(15),r(17)),F=r(37),T=r(11),D=r(34),P=r(231),N=r(277),E=r(384),L=r(720),_=r(712),J=r(709),A=r(708),U=r(716),W=r(710),C=r(729),G=r(162),V=r(506),q=r(730),z=r(82),M=r(392),Q=r(650),B=r(26),H=a=function(e){Object(b.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.apply(this,arguments)).age=null,e.ageReceived=null,e.displayCount=null,e.maxObservations=1,e}return Object(s.a)(r,[{key:"clone",value:function(){return new a({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}}]),r}(B.a);Object(d.a)([Object(x.b)({type:Number,json:{write:!0}})],H.prototype,"age",void 0),Object(d.a)([Object(x.b)({type:Number,json:{write:!0}})],H.prototype,"ageReceived",void 0),Object(d.a)([Object(x.b)({type:Number,json:{write:!0}})],H.prototype,"displayCount",void 0),Object(d.a)([Object(x.b)({type:Number,json:{write:!0}})],H.prototype,"maxObservations",void 0);var K=H=a=Object(d.a)([Object(T.a)("esri.layers.support.PurgeOptions")],H),X=r(734),Y=r(121),Z=r(724),$=r(740),ee=r(48),te=r(60),re=w.a.getLogger("esri.layers.StreamLayer"),ae=Object(q.a)(),ne=function(e){Object(b.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(l.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).copyright=null,e.definitionExpression=null,e.displayField=null,e.elevationInfo=null,e.featureReduction=null,e.fields=null,e.fieldsIndex=null,e.geometryDefinition=null,e.geometryType=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.maxReconnectionAttempts=0,e.maxReconnectionInterval=20,e.maxScale=0,e.minScale=0,e.objectIdField=null,e.operationalLayerType="ArcGISStreamLayer",e.popupEnabled=!0,e.popupTemplate=null,e.purgeOptions=new K,e.screenSizePerspectiveEnabled=!0,e.sourceJSON=null,e.spatialReference=ee.a.WGS84,e.type="stream",e.url=null,e.updateInterval=300,e.webSocketUrl=null,e}return Object(s.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(c.a)({url:e},t):e}},{key:"load",value:function(e){var t=this;if(!("WebSocket"in g.a))return this.addResolvingPromise(Promise.reject(new h.a("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);var r=Object(S.j)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(k.u).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"readFeatureReduction",value:function(e,t){return Object(V.b)(e,t)}},{key:"writeWebSceneFeatureReduction",value:function(e,t,r,a){Object(V.d)(e,t,"layerDefinition.featureReduction",a)}},{key:"renderer",set:function(e){Object(z.k)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"readRenderer",value:function(e,t,r){var a=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(a){var n=Object(O.b)(a,t,r)||void 0;return n||re.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),n}if(t.defaultSymbol)return t.types&&t.types.length?new j.a({defaultSymbol:ie(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((function(e){return{id:e.id,symbol:ie(e.symbol,e,r)}}))}):new y.a({symbol:ie(t.defaultSymbol,t,r)})}},{key:"writeRenderer",value:function(e,t,r,a){Object(O.c)(e,t,r,a)}},{key:"writeWebSceneRenderer",value:function(e,t,r,a){Object(O.c)(e,t,"layerDefinition.drawingInfo.renderer",a)}},{key:"createPopupTemplate",value:function(e){return Object(Z.a)(this,e)}},{key:"createQuery",value:function(){var e=new Y.a;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}},{key:"getFieldDomain",value:function(e,t){if(!this.fields)return null;var r=null;return this.fields.some((function(t){return t.name===e&&(r=t.domain),!!r})),r}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"_fetchService",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.webSocketUrl){e.next=12;break}if(null!=(a=this.timeInfo)&&a.trackIdField){e.next=3;break}throw new h.a("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");case 3:if(this.objectIdField){e.next=5;break}throw new h.a("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");case 5:if(this.fields){e.next=7;break}throw new h.a("stream-layer:missing-metadata","The stream layer fields must be specified.");case 7:if(this.geometryType){e.next=9;break}throw new h.a("stream-layer:missing-metadata","The stream layer geometryType must be specified.");case 9:this.url=this.webSocketUrl,e.next=18;break;case 12:if(this.sourceJSON){e.next=18;break}return e.next=15,Object(v.default)(this.parsedUrl.path,{query:Object(c.a)({f:"json"},this.parsedUrl.query),responseType:"json",signal:t});case 15:n=e.sent,o=n.data,this.sourceJSON=o;case 18:return e.abrupt("return",(this.sourceJSON=Object(c.a)(Object(c.a)({},null!=(r=this.sourceJSON)?r:{}),{},{objectIdField:"__esri_stream_id__"}),this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),Object(z.k)(this.renderer,this.fieldsIndex),Object(z.l)(this.timeInfo,this.fieldsIndex),Object(X.a)(this,{origin:"service"})));case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(_.a)(Object(C.a)(Object(W.a)(Object(U.a)(Object(L.a)(Object(J.a)(Object(A.a)(Object(I.a)(E.a)))))))));Object(d.a)([Object(x.b)({type:String})],ne.prototype,"copyright",void 0),Object(d.a)([Object(x.b)({readOnly:!0})],ne.prototype,"defaultPopupTemplate",null),Object(d.a)([Object(x.b)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ne.prototype,"definitionExpression",void 0),Object(d.a)([Object(x.b)({type:String})],ne.prototype,"displayField",void 0),Object(d.a)([Object(x.b)({type:$.a})],ne.prototype,"elevationInfo",void 0),Object(d.a)([Object(F.a)("featureReduction",["layerDefinition.featureReduction"])],ne.prototype,"readFeatureReduction",null),Object(d.a)([Object(D.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:V.c}})],ne.prototype,"writeWebSceneFeatureReduction",null),Object(d.a)([Object(x.b)(ae.fields)],ne.prototype,"fields",void 0),Object(d.a)([Object(x.b)(ae.fieldsIndex)],ne.prototype,"fieldsIndex",void 0),Object(d.a)([Object(x.b)({type:te.a})],ne.prototype,"geometryDefinition",void 0),Object(d.a)([Object(x.b)({type:N.a.apiValues,json:{read:{reader:N.a.read}}})],ne.prototype,"geometryType",void 0),Object(d.a)([Object(x.b)(G.d)],ne.prototype,"labelsVisible",void 0),Object(d.a)([Object(x.b)({type:[M.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:Q.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],ne.prototype,"labelingInfo",void 0),Object(d.a)([Object(x.b)(G.e)],ne.prototype,"legendEnabled",void 0),Object(d.a)([Object(x.b)({type:["show","hide"]})],ne.prototype,"listMode",void 0),Object(d.a)([Object(x.b)({type:R.a})],ne.prototype,"maxReconnectionAttempts",void 0),Object(d.a)([Object(x.b)({type:R.a})],ne.prototype,"maxReconnectionInterval",void 0),Object(d.a)([Object(x.b)(G.f)],ne.prototype,"maxScale",void 0),Object(d.a)([Object(x.b)(G.g)],ne.prototype,"minScale",void 0),Object(d.a)([Object(x.b)({type:String})],ne.prototype,"objectIdField",void 0),Object(d.a)([Object(x.b)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ne.prototype,"operationalLayerType",void 0),Object(d.a)([Object(x.b)(G.j)],ne.prototype,"popupEnabled",void 0),Object(d.a)([Object(x.b)({type:u.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ne.prototype,"popupTemplate",void 0),Object(d.a)([Object(x.b)({type:K})],ne.prototype,"purgeOptions",void 0),Object(d.a)([Object(x.b)({types:f.a,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ne.prototype,"renderer",null),Object(d.a)([Object(F.a)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),Object(F.a)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ne.prototype,"readRenderer",null),Object(d.a)([Object(D.a)("renderer")],ne.prototype,"writeRenderer",null),Object(d.a)([Object(D.a)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:f.b}})],ne.prototype,"writeWebSceneRenderer",null),Object(d.a)([Object(x.b)(G.m)],ne.prototype,"screenSizePerspectiveEnabled",void 0),Object(d.a)([Object(x.b)({type:ee.a,json:{origins:{service:{read:{source:"spatialReference"}}}}})],ne.prototype,"spatialReference",void 0),Object(d.a)([Object(x.b)({json:{read:!1}})],ne.prototype,"type",void 0),Object(d.a)([Object(x.b)(G.n)],ne.prototype,"url",void 0),Object(d.a)([Object(x.b)({type:Number})],ne.prototype,"updateInterval",void 0),Object(d.a)([Object(x.b)({type:String})],ne.prototype,"webSocketUrl",void 0),ne=Object(d.a)([Object(T.a)("esri.layers.StreamLayer")],ne);var ie=Object(P.b)({types:m.i}),oe=ne}}]);
//# sourceMappingURL=164.c702805a.chunk.js.map