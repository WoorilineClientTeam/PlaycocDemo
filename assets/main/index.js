System.register("chunks:///_virtual/Card.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var t,i,e,a,n,o,s,l,u,c,p,b,f;return{setters:[function(r){t=r.applyDecoratedDescriptor,i=r.inheritsLoose,e=r.initializerDefineProperty,a=r.assertThisInitialized},function(r){n=r.cclegacy,o=r._decorator,s=r.EventTarget,l=r.Sprite,u=r.SpriteFrame,c=r.Vec3,p=r.Quat,b=r.tween,f=r.Component}],execute:function(){var h,d,m,k,g,F,y,B,C,v,w,M,N,z,S,P,T,_;n._RF.push({},"7c0db/XbdVHbZfIlfpGcHVo","Card",void 0);var I=o.ccclass,V=o.property,D=o.integer,E=o.boolean;new s,r("Card",(h=I("Card"),d=V(l),m=V(l),k=V(l),g=V(l),F=V(u),y=V(u),h((v=t((C=function(r){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return t=r.call.apply(r,[this].concat(n))||this,e(t,"cardNumber",v,a(t)),e(t,"mark",w,a(t)),e(t,"isBack",M,a(t)),e(t,"spriteNumber",N,a(t)),e(t,"spriteSmallMark",z,a(t)),e(t,"spriteBigMark",S,a(t)),e(t,"spriteCardback",P,a(t)),e(t,"sfFrontCard",T,a(t)),e(t,"sfBackCard",_,a(t)),t._cardFactory=null,t.bigMarkPos={normal:new c(13.839,-38,0),jqk:new c(22.5,-22.8,0)},t}i(t,r);var n=t.prototype;return n.init=function(r){this._cardFactory=r},n.flipFront=function(r,t){var i=this;if(0==this.isBack)throw"�ո��� ī�带 ������ ���������� ��. cardInfo : "+r.toString();this.isBack=!1;var e=new p;return p.fromEuler(e,0,90,0),b(this.node).to(t/2,{rotation:e}).call((function(){return i.visualUpdateFront(r)})).to(t/2,{rotation:p.IDENTITY})},n.flipBack=function(r){var t=this;if(1==this.isBack)throw"�޸��� ī�带 ������ ���������� ��.";this.isBack=!0;var i=new p;p.fromEuler(i,0,90,0);return b(this.node).to(r/2,{rotation:i}).call((function(){return t.Clear()})).to(r/2,{rotation:p.IDENTITY})},n.setFrontVisual=function(r){this.spriteNumber.node.active=r,this.spriteSmallMark.node.active=r,this.spriteBigMark.node.active=r},n.visualUpdateFront=function(r){var t=this._cardFactory.GetFrontVisual(r);this.spriteNumber.spriteFrame=t.cardNumber,this.spriteSmallMark.spriteFrame=t.cardSmallType,this.spriteBigMark.spriteFrame=t.cardBigType,this.spriteCardback.spriteFrame=this.sfFrontCard,this.setFrontVisual(!0),r.cardNumber>10?this.spriteBigMark.node.setPosition(this.bigMarkPos.jqk):this.spriteBigMark.node.setPosition(this.bigMarkPos.normal)},n.Clear=function(){this.isBack=!0,this.cardNumber=0,this.mark=0,this.setFrontVisual(!1),this.spriteNumber.spriteFrame=null,this.spriteSmallMark.spriteFrame=null,this.spriteBigMark.spriteFrame=null,this.spriteCardback.spriteFrame=this.sfBackCard},n.backToPool=function(){this._cardFactory.PushCard(this)},n.onEnable=function(){},n.onDisable=function(){this.Clear()},t}(f)).prototype,"cardNumber",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),w=t(C.prototype,"mark",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),M=t(C.prototype,"isBack",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),N=t(C.prototype,"spriteNumber",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(C.prototype,"spriteSmallMark",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(C.prototype,"spriteBigMark",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(C.prototype,"spriteCardback",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(C.prototype,"sfFrontCard",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(C.prototype,"sfBackCard",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=C))||B));n._RF.pop()}}}));

System.register("chunks:///_virtual/CardFactory.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t,i,a,n,o,c,l,u,p,s;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,i=r.initializerDefineProperty,a=r.assertThisInitialized},function(r){n=r.cclegacy,o=r._decorator,c=r.Prefab,l=r.SpriteFrame,u=r.instantiate,p=r.tween,s=r.Component}],execute:function(){var b,d,f,y,m,h,g,v,P,S,k,C,N,w,M,z,O;n._RF.push({},"7e3e8f3Cq9HA40NRrhq23QP","CardFactory",void 0);var T=o.ccclass,F=o.property,D=o.disallowMultiple,j=o.integer,A={1:!1,2:!0,3:!0,4:!1};r("CardFactory",(b=T("CardFactory"),d=D(!0),f=F(c),y=F([l]),m=F([l]),h=F([l]),g=F([l]),v=F([l]),b(P=d((k=e((S=function(r){function e(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n))||this,i(e,"cardPrefab",k,a(e)),i(e,"blackNumberSprite",C,a(e)),i(e,"redNumberSprtie",N,a(e)),i(e,"markSprite",w,a(e)),i(e,"bigJQKMark",M,a(e)),i(e,"specialAMark",z,a(e)),i(e,"initObjectCount",O,a(e)),e.cardPool=[],e.specialOn={1:!1,2:!1,3:!1,4:!1},e.bigMarkDictionary={11:0,12:1,13:2},e}t(e,r);var n=e.prototype;return n.SetupSpecial=function(r,e,t,i){this.specialOn[0]=r,this.specialOn[1]=e,this.specialOn[2]=t,this.specialOn[3]=i},n.start=function(){for(var r=0;r<this.initObjectCount;r++){var e=u(this.cardPrefab);e.setParent(this.node),e.setPosition(0,0,0),e.active=!1;var t=e.getComponent("Card");t.init(this),this.cardPool.push(t)}},n.GetFrontVisual=function(r){var e={cardNumber:null,cardSmallType:null,cardBigType:null};return e.cardNumber=A[r.cardType]?this.redNumberSprtie[r.cardNumber-1]:this.blackNumberSprite[r.cardNumber-1],e.cardSmallType=this.markSprite[r.cardType-1],e.cardBigType=e.cardSmallType,void 0!==this.bigMarkDictionary[r.cardNumber]&&(e.cardBigType=this.bigJQKMark[this.bigMarkDictionary[r.cardNumber]]),e},n.PopCard=function(){var r=this.cardPool.pop();return r.node.active=!0,r},n.PushCard=function(r){var e=this,t=r.getComponent("cc.UIOpacity");p(t).to(.3,{opacity:0}).call((function(){r.node.setParent(e.node),r.node.active=!1,e.cardPool.push(r)})).start()},e}(s)).prototype,"cardPrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(S.prototype,"blackNumberSprite",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),N=e(S.prototype,"redNumberSprtie",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=e(S.prototype,"markSprite",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),M=e(S.prototype,"bigJQKMark",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=e(S.prototype,"specialAMark",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=e(S.prototype,"initObjectCount",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 52}}),P=S))||P)||P));n._RF.pop()}}}));

System.register("chunks:///_virtual/CommonCardEnum.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"edcea8pRxpLQb7rPRJphOLe","CommonCardEnum",void 0);e("ECardType",function(e){return e[e.Back=0]="Back",e[e.Clover=1]="Clover",e[e.Diamond=2]="Diamond",e[e.Heart=3]="Heart",e[e.Spade=4]="Spade",e}({}));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Card.ts","./CardFactory.ts","./CommonCardEnum.ts","./ObjectTweenQueue.ts","./TestButtonHandler.ts","./TestUserManager.ts","./TestUserItem.ts","./TestUserManager2.ts","./Visual.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ObjectTweenQueue.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,u,c;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,u=e._decorator,c=e.Component}],execute:function(){var i;t._RF.push({},"716a62ESFFK+rJExgoeA0DW","ObjectTweenQueue",void 0);var o=u.ccclass;u.property,e("ObjectTweenQueue",o("ObjectTweenQueue")(i=function(e){function t(){for(var n,t=arguments.length,u=new Array(t),c=0;c<t;c++)u[c]=arguments[c];return(n=e.call.apply(e,[this].concat(u))||this).actionQueue=[],n.executionTween=null,n}n(t,e);var u=t.prototype;return u.EnqueueTween=function(e){return this.actionQueue.push(e),this.checkAndRun(),this},u.onEnable=function(){},u.onDisable=function(){this.clear()},u.clear=function(){null!=this.executionTween&&(this.executionTween.stop(),this.executionTween=null),this.actionQueue=[]},u.checkAndRun=function(){var e=this;null!=this.executionTween&&0!=this.actionQueue.length&&(this.executionTween=this.actionQueue.shift(),this.executionTween.call((function(){e.executionTween=null,e.checkAndRun()})).start())},t}(c))||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/TestButtonHandler.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CardFactory.ts"],(function(t){var o,n,e,r,c,i,u,l;return{setters:[function(t){o=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){c=t.cclegacy,i=t._decorator,u=t.Component},function(t){l=t.CardFactory}],execute:function(){var a,s,f,p,d;c._RF.push({},"35b30H5zedPI4iEmOCtxQi1","TestButtonHandler",void 0);var b=i.ccclass,g=i.property;t("TestButtonHandler",(a=b("TestButtonHandler"),s=g(l),a((d=o((p=function(t){function o(){for(var o,n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return o=t.call.apply(t,[this].concat(c))||this,e(o,"cf",d,r(o)),o}n(o,t);var c=o.prototype;return c.button0=function(t){this.cf.PopCard().visualUpdateFront({cardNumber:3,cardType:1}),console.log(t)},c.button1=function(t){console.log(t)},c.button2=function(t){console.log(t)},c.button3=function(t){console.log(t)},c.button4=function(t){console.log(t)},c.button5=function(t){console.log(t)},c.button6=function(t){console.log(t)},c.button7=function(t){console.log(t)},c.button8=function(t){console.log(t)},o}(u)).prototype,"cf",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=p))||f));c._RF.pop()}}}));

System.register("chunks:///_virtual/TestUserItem.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,n,e,o,r,s,u,a,l;return{setters:[function(i){t=i.applyDecoratedDescriptor,n=i.inheritsLoose,e=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){r=i.cclegacy,s=i._decorator,u=i.Node,a=i.tween,l=i.Component}],execute:function(){var c,p,f,b,h,y,g,m,I,w;r._RF.push({},"a2eb4hT+HpCHrrnw8EvriwT","TestUserItem",void 0);var d=s.ccclass,v=s.property,P=s.boolean,x=s.float;i("TestUserItem",(c=d("TestUserItem"),p=v(u),f=v(u),c((y=t((h=function(i){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t=i.call.apply(i,[this].concat(r))||this,e(t,"outPosition",y,o(t)),e(t,"inPosition",g,o(t)),e(t,"isLock",m,o(t)),e(t,"isIn",I,o(t)),e(t,"baseAngle",w,o(t)),t.isExcution=!1,t}return n(t,i),t.prototype.inOut=function(){var i=this;this.isLock||this.isExcution||(this.isIn?(this.isExcution=!0,a(this.node).to(.3,{position:this.outPosition.position}).call((function(){return i.isExcution=!1})).start(),this.isIn=!1):(this.isExcution=!0,a(this.node).to(.3,{position:this.inPosition.position}).call((function(){return i.isExcution=!1})).start(),this.isIn=!0))},t}(l)).prototype,"outPosition",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=t(h.prototype,"inPosition",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(h.prototype,"isLock",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),I=t(h.prototype,"isIn",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w=t(h.prototype,"baseAngle",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=h))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/TestUserManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,n,i,a,u,o,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,u=e._decorator,o=e.Node,l=e.Component}],execute:function(){var s,c,p,f,b,g,y,d,m,h,v;a._RF.push({},"ad09dPJBmFE6q/Q1SV3mTFN","TestUserManager",void 0);var z=u.ccclass,T=u.property;e("TestUserManager",(s=z("TestUserManager"),c=T(o),p=T(o),f=T(o),b=T(o),s((d=r((y=function(e){function r(){for(var r,t=arguments.length,a=new Array(t),u=0;u<t;u++)a[u]=arguments[u];return r=e.call.apply(e,[this].concat(a))||this,n(r,"user1",d,i(r)),n(r,"user2",m,i(r)),n(r,"user3",h,i(r)),n(r,"user4",v,i(r)),r}t(r,e);var a=r.prototype;return a.start=function(){},a.update=function(e){},r}(l)).prototype,"user1",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=r(y.prototype,"user2",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=r(y.prototype,"user3",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=r(y.prototype,"user4",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/TestUserManager2.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CardFactory.ts","./Card.ts","./TestUserItem.ts"],(function(e){var r,t,i,n,a,o,u,s,l,c,f,d,p,h,b;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized,a=e.createForOfIteratorHelperLoose},function(e){o=e.cclegacy,u=e._decorator,s=e.Node,l=e.Tween,c=e.Vec3,f=e.tween,d=e.Component},function(e){p=e.CardFactory},function(e){h=e.Card},function(e){b=e.TestUserItem}],execute:function(){var g,y,m,v,w,T,z,C,L,P,I,M,U,F,D,_,k,x,A,B,H,S;o._RF.push({},"d6df1YDJMZBnp/slva0EIxm","TestUserManager",void 0);var O=u.ccclass,R=u.property,j=u.integer,E=u.float;e("TestUserManager",(g=O("TestUserManager"),y=R(b),m=R(b),v=R(b),w=R(b),T=R(s),z=R(p),C=R([h]),g((I=r((P=function(e){function r(){for(var r,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a))||this,i(r,"user1",I,n(r)),i(r,"user2",M,n(r)),i(r,"user3",U,n(r)),i(r,"user4",F,n(r)),i(r,"cardParent",D,n(r)),i(r,"cf",_,n(r)),i(r,"cardList",k,n(r)),i(r,"cardCount",x,n(r)),i(r,"moveTime",A,n(r)),i(r,"delayTime",B,n(r)),i(r,"radius",H,n(r)),i(r,"unit",S,n(r)),r}t(r,e);var o=r.prototype;return o.cardCountHandler=function(e){this.cardCount=+e},o.divide=function(){for(var e=0,r=[this.user1,this.user2,this.user3,this.user4];e<r.length;e++){r[e].isLock=!0}l.stopAllByTag(100);for(var t=0,i=0;i<this.cardCount;i++)for(var n=0,a=[this.user1,this.user2,this.user3,this.user4];n<a.length;n++){var o=a[n];if(o.isIn){var u=this.cf.PopCard();u.node.setScale(.5,.5,.5),u.node.setParent(this.cardParent),u.node.setSiblingIndex(0),u.node.setPosition(-.5*t,-1*t,0),u.node.angle=180,u.getComponent("cc.UIOpacity").opacity=255,this.cardList.push(u);var s=o.baseAngle+(i-this.cardCount/2)*this.unit,d=3.141592*s/180,p=this.radius*Math.cos(d),h=this.radius*Math.sin(d),b=new c;c.add(b,o.node.position,new c(p,h,0));f(u.node).delay(t*this.delayTime).to(this.moveTime,{position:b,angle:(s+90)%360}).tag(100).start(),t++}}},o.clear=function(){for(var e=0,r=[this.user1,this.user2,this.user3,this.user4];e<r.length;e++){r[e].isLock=!1}for(var t,i=a(this.cardList);!(t=i()).done;){var n=t.value;this.cf.PushCard(n)}this.cardList=[]},r}(d)).prototype,"user1",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=r(P.prototype,"user2",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=r(P.prototype,"user3",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=r(P.prototype,"user4",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=r(P.prototype,"cardParent",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=r(P.prototype,"cf",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=r(P.prototype,"cardList",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=r(P.prototype,"cardCount",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),A=r(P.prototype,"moveTime",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),B=r(P.prototype,"delayTime",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),H=r(P.prototype,"radius",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 50}}),S=r(P.prototype,"unit",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),L=P))||L));o._RF.pop()}}}));

System.register("chunks:///_virtual/Visual.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CardFactory.ts"],(function(r){var t,e,a,o,i,n,l,c,s,u,d;return{setters:[function(r){t=r.applyDecoratedDescriptor,e=r.inheritsLoose,a=r.initializerDefineProperty,o=r.assertThisInitialized},function(r){i=r.cclegacy,n=r._decorator,l=r.Tween,c=r.tween,s=r.math,u=r.Component},function(r){d=r.CardFactory}],execute:function(){var p,f,h,y,v;i._RF.push({},"ba807aWWrhGIKwbtVRday5U","Visual",void 0);var F=n.ccclass,C=n.property;r("Visual",(p=F("Visual"),f=C(d),p((v=t((y=function(r){function t(){for(var t,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return t=r.call.apply(r,[this].concat(i))||this,a(t,"cardFactory",v,o(t)),t.allCard=[],t}e(t,r);var i=t.prototype;return i.start=function(){this.rotate()},i.deleteAll=function(){this.allCard.forEach((function(r){r.backToPool()})),l.stopAllByTag(100),this.allCard=[]},i.rotate=function(){this.deleteAll();for(var r=1;r<5;r++)for(var t=0;t<13;t++){var e=this.cardFactory.PopCard();this.allCard.push(e),e.node.setScale(.5,.5,.5);var a=e.flipFront({cardType:r,cardNumber:t+1},.5),o=c(this.node).delay(1);e.node.setPosition(s.lerp(-600,700,t/13),s.lerp(-300,300,r/4),0);var i=e.flipBack(.5);c(e.node).sequence(a,o,i).repeatForever().tag(100).start()}},i.stop=function(){this.deleteAll();for(var r=1;r<5;r++)for(var t=0;t<13;t++){var e=this.cardFactory.PopCard();this.allCard.push(e),e.node.setScale(.5,.5,.5),e.visualUpdateFront({cardType:r,cardNumber:t+1}),e.node.setPosition(s.lerp(-600,700,t/13),s.lerp(-300,300,r/4),0)}},t}(u)).prototype,"cardFactory",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=y))||h));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});