"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3230],{43230:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s(20102),a=s(92604),n=s(70586),i=s(95330),u=s(8744),o=s(98732),h=s(57191),y=s(37427),l=s(87958),p=s(92722),c=s(23095),_=s(46919),g=s(99514);class d{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await(0,_.Bm)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await(0,p.O3)(s),(0,i.k_)(e);const r=(0,p.lG)(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!(0,u.fS)(this._queryEngine.spatialReference,u.Zn))for(const e of r)(0,n.pC)(e.geometry)&&(e.geometry=(0,o.GH)((0,y.iV)((0,o.di)(e.geometry,this._queryEngine.geometryType,!1,!1),u.Zn,this._queryEngine.spatialReference)));let a=1;for(const e of r){const s={};(0,c.O0)(this._fieldsIndex,s,e.attributes,null,!0),e.attributes=s,null==e.attributes[t]&&(e.objectId=e.attributes[t]=a++)}return r}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:r,spatialReference:a,fields:u,geometryType:o,featureType:y,objectIdField:p,customParameters:c}=e;this._featureType=y,this._customParameters=c,this._getFeatureUrl=s,this._getFeatureOutputFormat=r,this._fieldsIndex=new g.Z(u),await this._checkProjection(a),(0,i.k_)(t),this._queryEngine=new l.Z({fields:u,geometryType:o,hasM:!1,hasZ:!1,objectIdField:p,spatialReference:a,timeInfo:null,featureStore:new h.Z({geometryType:o,hasM:!1,hasZ:!1})});const _=await this._snapshotFeatures((0,n.Wg)(t.signal));return this._queryEngine.featureStore.addMany(_),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new r.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}setCustomParameters(e){this._customParameters=e}async refresh(){var e;return null==(e=this._snapshotTask)||e.abort(),this._snapshotTask=(0,i.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,i.D_)(e)||a.Z.getLogger("esri.layers.WFSLayer").error(new r.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await(0,y._W)(u.Zn,e)}catch{throw new r.Z("unsupported-projection","Projection not supported",{spatialReference:e})}}}}}]);