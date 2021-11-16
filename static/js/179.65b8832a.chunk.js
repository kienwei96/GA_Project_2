(this.webpackJsonpcontractorapp=this.webpackJsonpcontractorapp||[]).push([[179],{1459:function(t,e,i){"use strict";i.r(e),i.d(e,"Bloom",(function(){return p}));var s=i(4),r=i(5),o=(i(1038),i(1039)),n=(i(15),i(1037),i(1036),i(1043),i(1041),i(1035),i(1040),i(1148)),a=[1,0],u=[0,1],h=[1,.8,.6,.4,.2],l=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],p=function(){function t(){Object(s.a)(this,t),this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}return Object(r.a)(t,[{key:"dispose",value:function(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(var t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}}},{key:"draw",value:function(t,e,i){var s=e.width,r=e.height,o=t.context,p=t.painter.materialManager,m=o.gl,d=this._programDesc,c=i.strength,_=i.radius,f=i.threshold;this._quad||(this._quad=new n.a(o,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,s,r),o.setStencilTestEnabled(!1),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilWriteMask(0);var g=this._quad;g.bind(),o.bindFramebuffer(this._intensityFBO);var F=p.getProgram(t,d.luminosityHighPass);o.useProgram(F),o.bindTexture(e.colorTexture,0),F.setUniform1i("u_texture",0),F.setUniform3fv("u_defaultColor",[0,0,0]),F.setUniform1f("u_defaultOpacity",0),F.setUniform1f("u_luminosityThreshold",f),F.setUniform1f("u_smoothWidth",.01);var b=[Math.round(s/2),Math.round(r/2)];o.setViewport(0,0,b[0],b[1]),o.setClearColor(0,0,0,0),o.clear(m.COLOR_BUFFER_BIT),g.draw(),o.setBlendingEnabled(!1);for(var B=this._intensityFBO.colorTexture,O=0;O<this._nMips;O++){var T=p.getProgram(t,d.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[O]}]);o.useProgram(T),o.bindTexture(B,O+1),T.setUniform1i("u_colorTexture",O+1),T.setUniform2fv("u_texSize",b),T.setUniform2fv("u_direction",a),o.setViewport(0,0,b[0],b[1]);var v=this._mipsFBOs[O];o.bindFramebuffer(v.horizontal),g.draw(),B=v.horizontal.colorTexture,o.bindFramebuffer(v.vertical),o.bindTexture(B,O+1),T.setUniform2fv("u_direction",u),g.draw(),B=v.vertical.colorTexture,b[0]=Math.round(b[0]/2),b[1]=Math.round(b[1]/2)}o.setViewport(0,0,s,r);var x=p.getProgram(t,d.composite,[{name:"nummips",value:5}]);o.bindFramebuffer(this._compositeFBO),o.useProgram(x),x.setUniform1f("u_bloomStrength",c),x.setUniform1f("u_bloomRadius",_),x.setUniform1fv("u_bloomFactors",h),x.setUniform3fv("u_bloomTintColors",l),o.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),o.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),o.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),o.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),o.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),g.draw(),o.bindFramebuffer(e),o.setBlendingEnabled(!0);var w=p.getProgram(t,d.blit);o.useProgram(w),o.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),o.setBlendFunction(1,1),g.draw(),g.unbind(),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0)}},{key:"_createOrResizeResources",value:function(t,e,i){var s=t.context;if(!this._compositeFBO||this._size[0]!==e||this._size[1]!==i){this._size[0]=e,this._size[1]=i;var r=[Math.round(e/2),Math.round(i/2)];this._compositeFBO?this._compositeFBO.resize(e,i):this._compositeFBO=new o.a(s,{colorTarget:0,depthStencilTarget:0,width:e,height:i}),this._intensityFBO?this._intensityFBO.resize(r[0],r[1]):this._intensityFBO=new o.a(s,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]});for(var n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(r[0],r[1]),this._mipsFBOs[n].vertical.resize(r[0],r[1])):this._mipsFBOs[n]={horizontal:new o.a(s,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),vertical:new o.a(s,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]})},r[0]=Math.round(r[0]/2),r[1]=Math.round(r[1]/2)}}}]),t}()}}]);
//# sourceMappingURL=179.65b8832a.chunk.js.map