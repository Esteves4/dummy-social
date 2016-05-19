if (self.CavalryLogger) { CavalryLogger.start_js(["DRAWi"]); }

__d('rayInterceptsBox',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=Object.keys(k);l.forEach(function(n){!(m.indexOf(n)!==-1)?h(0):void 0;!(typeof k[n]==='number')?h(0):void 0;});}var j={check:function(k,l){i(k,['minX','maxX','minY','maxY']);i(l,['x','y','dx','dy']);!(k.maxX>k.minX&&k.maxY>k.minY)?h(0):void 0;if(l.dx===0&&l.dy===0)return false;if(l.x>=k.minX&&l.x<=k.maxX&&l.y>=k.minY&&l.y<=k.maxY)return true;var m=(k.minX-l.x)/l.dx,n=(k.maxX-l.x)/l.dx,o=(k.minY-l.y)/l.dy,p=(k.maxY-l.y)/l.dy,q=Math.max(Math.min(m,n),Math.min(o,p)),r=Math.min(Math.max(m,n),Math.max(o,p));if(q<0)return false;if(q>r)return false;return true;}};f.exports=j;},null);
__d('AdsMouseStateStore',['invariant','Arbiter','DOM','Event','Vector','$','keyMirror','rayInterceptsBox','throttle'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=30,j=500,k=c('keyMirror')({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null}),l,m,n,o,p;function q(){l=k.STATIONARY;m=0;n=0;o=Date.now();p='pagelet_ego_pane';}q();function r(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(t){var u=Math.random()*1000;return {x:u,y:u};}}var s=Object.assign(new (c('Arbiter'))(),{getState:function(){return l;},updateRhcID:function(t){!c('$')(t)?h(0):void 0;p=t;},getRhcID:function(){return p;},onPageTransition:function(event){q();},onMouseMove:function(event){this.calculateState(r(event));},__updateMousePos:function(t){m=t.x;n=t.y;},isRhcPresent:function(){if(!c('DOM').scry(document.body,'#'+p).length)return false;var t=this.getRhcDimensions();return t.y>0&&t.x>0;},getRhc:function(){return c('$')(p);},getRhcPosition:function(){return c('Vector').getElementPosition(this.getRhc());},getRhcScreenPos:function(){var t=c('Vector').getScrollPosition(),u=this.getRhcPosition();return {x:u.x-t.x,y:u.y-t.y};},getRhcDimensions:function(){return c('Vector').getElementDimensions(this.getRhc());},getRhcBoundingBox:function(){var t=this.getRhcDimensions(),u=this.getRhcScreenPos();return {minX:u.x,maxX:u.x+t.x,minY:u.y,maxY:u.y+t.y};},isPosContainedInRhc:function(t){var u=this.getRhcBoundingBox();return (t.x>=u.minX&&t.x<=u.maxX&&t.y>=u.minY&&t.y<=u.maxY);},hasMovedMinDistance:function(t){var u=t.x-m,v=t.y-n;return u*u+v*v>=i*i;},tooSoon:function(){return Date.now()-o<j;},_updateTime:function(){o=Date.now();},calculateState:function(t){if(this.tooSoon())return;this._updateTime();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(t)){this.transitionToState(k.HOVER);this.__updateMousePos(t);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(t)){this.transitionToState(k.STATIONARY);return;}var u=this.isMovingTowardsRhc(t)?k.INTENT:k.NO_INTENT;this.transitionToState(u);this.__updateMousePos(t);this.scheduleCheckup();},isMovingTowardsRhc:function(t){var u={x:m,y:n};if(this.isPosContainedInRhc(u))return true;var v=this.getRhcBoundingBox(),w={x:m,y:n,dx:t.x-m,dy:t.y-n};return c('rayInterceptsBox').check(v,w);},scheduleCheckup:function(){var t={x:m,y:n};setTimeout(function(){this.calculateState(t);}.bind(this),j*1.5);},transitionToState:function(t){if(t===l)return;l=t;s.inform('change');}});c('Event').listen(document,'mousemove',c('throttle')(s.onMouseMove.bind(s),j));c('Arbiter').subscribe('page_transition',s.onPageTransition);s.STATES=k;s.MIN_MOVE_DISTANCE=i;s.THROTTLE_TIME=j;f.exports=s;},null);
__d("arrayStableSort",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){return i.map(function(k,l){return {data:k,index:l};}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index;}).map(function(k){return k.data;});}f.exports=h;},null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k;}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m});};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i);};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k;};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null;}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this));};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={};};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return (this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j)));}.bind(this));};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2;};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null;};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i];};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i];};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat();};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length;};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j;};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j);if(!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&i.start+i.limit>k.length){return false;}else{var l=k.slice(i.start,i.start+i.limit),m=i.start+i.limit>k.length?this.$RangedCallbackManager3:null;return [l,m];}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k]);}return j;};f.exports=h;},null);
__d("cancelAnimationFramePolyfill",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.oCancelAnimationFrame||b.msCancelAnimationFrame||b.clearTimeout;f.exports=h;},null);
__d('cancelAnimationFrame',['TimerStorage','cancelAnimationFramePolyfill'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];c('TimerStorage').unset(c('TimerStorage').ANIMATION_FRAME,i[0]);return Function.prototype.apply.call(c('cancelAnimationFramePolyfill'),b,i);};},null);
__d('BookmarkFeedSorter',['Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i={init:function(j){h=j;c('Run').onLeave(function(){h=null;});},setChecked:function(j){if(h)h.setValue(j);}};f.exports=i;},null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='CheckIsOpen',i={registerOpenChecker:function(j){return i.subscribe(h,function(k,l){if(j())l.is_Open=true;});},checkIsOpen:function(){var j={is_Open:false};i.inform(h,j);return j.is_Open;}};Object.assign(i,c('ArbiterMixin'));f.exports=i;},null);
__d('LitestandStream',['csx','cx','CSS','LitestandStoryInsertionStatus','ViewportBounds','getElementPosition','nullthrows'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k,l,m={init:function(n,o,p,q){j=p;k=n;l=q;},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return k;},getSectionID:function(){return j;},getStoryID:function(){return l;},isStory:function(n){return c('CSS').matchesSelector(n,"._5jmm");},canInsertNewerStories:function(){if(c('ViewportBounds').getTop()>c('getElementPosition')(m.getStreamRoot()).y)return false;return c('LitestandStoryInsertionStatus').canInsert();},getFeedStreamID:function(){return parseInt(c('nullthrows')(k).id.split('feed_stream_')[1],16)%1e+08;}};f.exports=m;},null);
__d("ScriptPathState",["Arbiter"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j,k,l=100,m={setIsUIPageletRequest:function(n){j=n;},setUserURISampleRate:function(n){k=n;},reset:function(){h=null;i=false;j=false;},_shouldUpdateScriptPath:function(){return i&&!j;},_shouldSendURI:function(){return Math.random()<k;},getParams:function(){var n={};if(m._shouldUpdateScriptPath()){if(m._shouldSendURI()&&h!==null)n.user_uri=h.substring(0,l);}else n.no_script_path=1;return n;}};c("Arbiter").subscribe("pre_page_transition",function(n,o){i=true;h=o.to.getUnqualifiedURI().toString();});f.exports=b.ScriptPathState=m;},null);
__d('AjaxPipeRequest',['Arbiter','AsyncRequest','BigPipe','CSS','DOM','Env','PageEvents','PageletSet','ScriptPathState','URI','ge','goOrReplace','performance','performanceAbsoluteNow'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i=0;function j(m,n){var o=c('ge')(m);if(!o)return;if(!n)o.style.minHeight='100px';var p=c('PageletSet').getPageletIDs();for(var q=0;q<p.length;q++){var r=p[q];if(c('DOM').contains(o,r))c('PageletSet').removePagelet(r);}c('DOM').empty(o);c('Arbiter').inform('pagelet/destroy',{id:null,root:o});}function k(m,n){var o=c('ge')(m);if(o&&!n)o.style.minHeight='100px';}function l(m,n){'use strict';this._uri=m;this._query_data=n;this._request=new (c('AsyncRequest'))();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new (c('Arbiter'))();this._requestID=i++;}l.prototype.setCanvasId=function(m){'use strict';this._canvas_id=m;return this;};l.prototype.setURI=function(m){'use strict';this._uri=m;return this;};l.prototype.setData=function(m){'use strict';this._query_data=m;return this;};l.prototype.getData=function(m){'use strict';return this._query_data;};l.prototype.setAllowCrossPageTransition=function(m){'use strict';this._allow_cross_page_transition=m;return this;};l.prototype.setAppend=function(m){'use strict';this._append=m;return this;};l.prototype.send=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_PERSISTENT);var m={ajaxpipe:1,ajaxpipe_token:c('Env').ajaxpipe_token};Object.assign(m,c('ScriptPathState').getParams());c('ScriptPathState').reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(Object.assign(m,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=h;}else h=this._request;if(this._isQuickling){var n=c('performance').clearResourceTimings||c('performance').webkitClearResourceTimings;if(n)n.call(c('performance'));}this._request.send();return this;};l.prototype._preBootloadFirstResponse=function(m){'use strict';return false;};l.prototype._fireDomContentCallback=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_DOMREADY,true,c('Arbiter').BEHAVIOR_STATE);};l.prototype._fireOnloadCallback=function(){'use strict';if(window.console&&console.timeStamp)console.timeStamp('perf_trace {"name": "e2e",'+' "parent": "PageEvents.AJAXPIPE_ONLOAD"}');this._arbiter.inform(c('PageEvents').AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_STATE);};l.prototype._isRelevant=function(m){'use strict';return this._request==h||this._automatic&&this._relevantRequest==h||this._jsNonBlock||h&&h._allowIrrelevantRequests;};l.prototype._preBootloadHandler=function(m){'use strict';var n=m.getPayload();if(!n||n.redirect||!this._isRelevant(m))return false;var o=false;if(m.is_first){!this._append&&!this._displayCallback&&j(this._canvas_id,this._constHeight);o=this._preBootloadFirstResponse(m);this.pipe=new (c('BigPipe'))({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:c('PageEvents').AJAXPIPE_DOMREADY,onloadEvt:c('PageEvents').AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return o;};l.prototype._redirect=function(m){'use strict';if(m.redirect){if(m.force||!this.isPageActive(m.redirect)){var n=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());c('goOrReplace')(window.location,new (c('URI'))(m.redirect).removeQueryData(n),true);}else{var o=b.PageTransitions;o.go(m.redirect,true);}return true;}else return false;};l.prototype.isPageActive=function(m){'use strict';return true;};l.prototype.getSanitizedParameters=function(){'use strict';return [];};l.prototype._versionCheck=function(m){'use strict';return true;};l.prototype._onInitialResponse=function(m){'use strict';var n=m.getPayload();if(!this._isRelevant(m))return false;if(!n)return true;if(this._redirect(n)||!this._versionCheck(n))return false;return true;};l.prototype._processFirstResponse=function(m){'use strict';var n=m.getPayload();if(c('ge')(this._canvas_id)&&n.canvas_class!=null)c('CSS').setClass(this._canvas_id,n.canvas_class);};l.prototype.setFirstResponseCallback=function(m){'use strict';this._firstResponseCallback=m;return this;};l.prototype.setFirstResponseHandler=function(m){'use strict';this._processFirstResponse=m;return this;};l.prototype._onResponse=function(m){'use strict';var n=m.payload;if(!this._isRelevant(m))return c('AsyncRequest').suppressOnloadToken;if(m.is_first){this._processFirstResponse(m);this._firstResponseCallback&&this._firstResponseCallback();n.provides=n.provides||[];n.provides.push('uipage_onload');}if(n){if('content' in n.content&&this._canvas_id!==null){if(this._append)n.append=this._canvas_id;var o=n.content.content;delete n.content.content;n.content[this._canvas_id]=o;}if(n.secondFlushResources||n.secondFlushHashes){this.pipe.setSecondFlushResources(n.secondFlushResources,n.secondFlushHashes);}else this.pipe.onPageletArrive(n);}if(m.is_last)k(this._canvas_id,this._constHeight);return c('AsyncRequest').suppressOnloadToken;};l.prototype.setNectarModuleDataSafe=function(m){'use strict';this._request.setNectarModuleDataSafe(m);return this;};l.prototype.setFinallyHandler=function(m){'use strict';this._request.setFinallyHandler(m);return this;};l.prototype.setErrorHandler=function(m){'use strict';this._request.setErrorHandler(m);return this;};l.prototype.setTransportErrorHandler=function(m){'use strict';this._request.setTransportErrorHandler(m);return this;};l.prototype.abort=function(){'use strict';this._request.abort();if(h==this._request)h=null;this._request=null;return this;};l.prototype.setJSNonBlock=function(m){'use strict';this._jsNonBlock=m;return this;};l.prototype.setAutomatic=function(m){'use strict';this._automatic=m;return this;};l.prototype.setDisplayCallback=function(m){'use strict';this._displayCallback=m;return this;};l.prototype.setConstHeight=function(m){'use strict';this._constHeight=m;return this;};l.prototype.setAllowIrrelevantRequests=function(m){'use strict';this._allowIrrelevantRequests=m;return this;};l.prototype.getAsyncRequest=function(){'use strict';return this._request;};l.getCurrentRequest=function(){'use strict';return h;};l.setCurrentRequest=function(m){'use strict';h=m;};f.exports=l;},null);
__d("CSSClassTransition",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(){}Object.assign(i,{go:function(j,k,l,m){var n;for(var o=0;o<h.length;o++)if(h[o](j,k,l,m)===true)n=true;if(!n)j.className=k;},registerHandler:function(j){h.push(j);return {remove:function(){var k=h.indexOf(j);if(k>=0)h.splice(k,1);}};}});f.exports=i;},null);
__d('DocumentTitle',['Arbiter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){if(k.length>0){if(!n){p(k[l].title);l=++l%k.length;}else q();}else{clearInterval(m);m=null;q();}}function p(s){document.title=s;n=true;}function q(){r.set(i||h,true);n=false;}var r={get:function(){return h;},set:function(s,t){document.title=s;if(!t){h=s;i=null;c('Arbiter').inform('update_title',s);}else i=s;},blink:function(s){var t={title:s};k.push(t);if(m===null)m=setInterval(o,j);return {stop:function(){var u=k.indexOf(t);if(u>=0){k.splice(u,1);if(l>u){l--;}else if(l==u&&l==k.length)l=0;}}};}};f.exports=r;},null);
__d("Ease",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={makePowerOut:function(i){var j=h.makePowerIn(i);return function(k){return 1-j(1-k);};},makePowerIn:function(i){return function(j){var k=Math.pow(j,i);return (k*10000|0)/10000;};},makePowerInOut:function(i){var j=h.makePowerIn(i),k=h.makePowerOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};},expoOut:function(i){return 1-Math.pow(2,-10*i);},expoIn:function(i){return 1-h.expoOut(1-i);},expoInOut:function(i){return i<.5?.5*h.expoIn(i*2):.5*h.expoOut(i*2-1)+.5;},sineOut:function(i){return Math.sin(i*Math.PI*.5);},sineIn:function(i){return 1-Math.cos(i*Math.PI*.5);},sineInOut:function(i){return -.5*(Math.cos(Math.PI*i)-1);},circOut:function(i){i--;return Math.sqrt(1-i*i);},circIn:function(i){return 1-h.circOut(1-i);},circInOut:function(i){return i<.5?.5*h.circIn(i*2):.5*h.circOut(i*2-1)+.5;},bounceOut:function(i){if(i<1/2.75){return 7.5625*i*i;}else if(i<2/2.75){return 7.5625*(i-=1.5/2.75)*i+.75;}else if(i<2.5/2.75){return 7.5625*(i-=2.25/2.75)*i+.9375;}else return 7.5625*(i-=2.625/2.75)*i+.984375;},bounceIn:function(i){return 1-h.bounceOut(1-i);},bounceInOut:function(i){return i<.5?.5*h.bounceIn(i*2):.5*h.bounceOut(i*2-1)+.5;},makeBounceOut:function(i){i=i||1;return function(j){j=(1-Math.cos(j*Math.PI*i))*(1-j)+j;return 1-Math.abs(1-j);};},makeBounceIn:function(i){var j=h.makeBounceOut(i);return function(k){return 1-j(1-k);};},makeElasticOut:function(i,j){i<1&&(i=1);var k=Math.PI*2;return function(l){if(l===0||l===1)return l;var m=j/k*Math.asin(1/i);return i*Math.pow(2,-10*l)*Math.sin((l-m)*k/j)+1;};},makeElasticIn:function(i,j){var k=h.makeElasticOut(i,j);return function(l){return 1-k(1-l);};},makeElasticInOut:function(i,j){j*=1.5;var k=h.makeElasticIn(i,j),l=h.makeElasticOut(i,j);return function(m){return m<.5?.5*k(m*2):.5*l(m*2-1)+.5;};},makeBackOut:function(i){var j=h.makeBackIn(i);return function(k){return 1-j(1-k);};},makeBackIn:function(i){return function(j){return j*j*((i+1)*j-i);};},makeBackInOut:function(i){i*=1.525;var j=h.makeBackIn(i),k=h.makeBackOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};}};h.elasticOut=h.makeElasticOut(1,.3);h.elasticIn=h.makeElasticIn(1,.3);h.elasticInOut=h.makeElasticInOut(1,.3);h.backOut=h.makeBackOut(1.7);h.backIn=h.makeBackIn(1.7);h.backInOut=h.makeBackInOut(1.7);f.exports=h;},null);
__d('MenuDeprecated',['Event','Arbiter','CSS','DataStore','DOM','HTML','Keys','Parent','Style','UserAgent_DEPRECATED','emptyFunction','Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='menu:mouseover',i=null;function j(t){if(c('CSS').hasClass(t,'uiMenuContainer'))return t;return c('Parent').byClass(t,'uiMenu');}function k(t){return c('Parent').byClass(t,'uiMenuItem');}function l(t){if(document.activeElement){var u=k(document.activeElement);return t.indexOf(u);}return -1;}function m(t){return c('DOM').find(t,'a.itemAnchor');}function n(t){return c('CSS').hasClass(t,'checked');}function o(t){return !c('CSS').hasClass(t,'disabled')&&c('Style').get(t,'display')!=='none';}function p(event){var t=document.activeElement;if(!t||!c('Parent').byClass(t,'uiMenu')||!c('DOM').isInputNode(t)){var u=k(event.getTarget());u&&s.focusItem(u);}}function q(t){c('UserAgent_DEPRECATED').firefox()&&m(t).blur();s.inform('select',{menu:j(t),item:t});}var r=function(){r=c('emptyFunction');var t={};t.click=function(event){var u=k(event.getTarget());if(u&&o(u)){q(u);var v=m(u),w=v.href,x=v.getAttribute('rel');return x&&x!=='ignore'||w&&w.charAt(w.length-1)!=='#';}};t.keydown=function(event){var u=event.getTarget();if(event.getModifiers().any)return;if(!i||c('DOM').isInputNode(u))return;var v=c('Event').getKeyCode(event),w;switch(v){case c('Keys').UP:case c('Keys').DOWN:var x=s.getEnabledItems(i);w=l(x);s.focusItem(x[w+(v===c('Keys').UP?-1:1)]);return false;case c('Keys').SPACE:var y=k(u);if(y){q(y);event.prevent();}break;default:var z=String.fromCharCode(v).toLowerCase(),aa=s.getEnabledItems(i);w=l(aa);var ba=w,ca=aa.length;while(~w&&(ba=++ba%ca)!==w||!~w&&++ba<ca){var da=s.getItemLabel(aa[ba]);if(da&&da.charAt(0).toLowerCase()===z){s.focusItem(aa[ba]);return false;}}}};c('Event').listen(document.body,t);},s=Object.assign(new (c('Arbiter'))(),{focusItem:function(t){if(t&&o(t)){this._removeSelected(j(t));c('CSS').addClass(t,'selected');m(t).focus();}},getEnabledItems:function(t){return s.getItems(t).filter(o);},getCheckedItems:function(t){return s.getItems(t).filter(n);},getItems:function(t){return c('DOM').scry(t,'li.uiMenuItem');},getItemLabel:function(t){return t.getAttribute('data-label',2)||'';},isItemChecked:function(t){return c('CSS').hasClass(t,'checked');},autoregister:function(t,u,v){t.subscribe('show',function(){s.register(u,v);});t.subscribe('hide',function(){s.unregister(u);});},register:function(t,u){t=j(t);r();if(!c('DataStore').get(t,h))c('DataStore').set(t,h,c('Event').listen(t,'mouseover',p));if(u!==false)i=t;},setItemEnabled:function(t,u){if(!u&&!c('DOM').scry(t,'span.disabledAnchor')[0])c('DOM').appendContent(t,c('DOM').create('span',{className:c('DOM').find(t,'a').className+' disabledAnchor'},c('HTML')(m(t).innerHTML)));c('CSS').conditionClass(t,'disabled',!u);},toggleItem:function(t){var u=!s.isItemChecked(t);s.setItemChecked(t,u);},setItemChecked:function(t,u){c('CSS').conditionClass(t,'checked',u);m(t).setAttribute('aria-checked',u);},unregister:function(t){t=j(t);var u=c('DataStore').remove(t,h);u&&u.remove();i=null;this._removeSelected(t);},_removeSelected:function(t){s.getItems(t).filter(function(u){return c('CSS').hasClass(u,'selected');}).forEach(function(u){c('CSS').removeClass(u,'selected');});}});f.exports=s;},null);
__d("XPhotosWaterfallBatchLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/logging\/waterfall\/batch\/",{});},null);
__d('PhotosUploadWaterfall',['AsyncRequest','AsyncSignal','Banzai','PhotosUploadWaterfallXConfig','XPhotosWaterfallBatchLoggingController','emptyFunction','randomInt','throttle'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i={APP_SIMPLE:'simple',APP_ARCHIVE:'archive',APP_COMPOSER:'composer',APP_MESSENGER:'messenger',APP_HTML5:'html5',APP_CHAT:'chat',INSTALL_CANCEL:1,INSTALL_INSTALL:2,INSTALL_UPDATE:3,INSTALL_REINSTALL:4,INSTALL_PERMA_CANCEL:5,INSTALL_SILENT_SKIP:6,INSTALL_DOWNLOAD:7,CERROR_RESIZING_FAILED:6,CERROR_MARKER_EXTRACTION_FAILED:9,BEGIN:1,UPLOAD_START:4,ALL_UPLOADS_DONE:6,CLIENT_ERROR:7,RECOVERABLE_CLIENT_ERROR:12,IMAGES_SELECTED:9,UPGRADE_REQUIRED:11,VERSION:15,SELECT_START:18,SELECT_CANCELED:19,CANCEL:22,CANCEL_DURING_UPLOAD:83,ONE_RESIZING_START:2,ONE_UPLOAD_START:10,ONE_UPLOAD_DONE:29,ONE_RESIZING_DONE:34,PROGRESS_BAR_STOPPED:44,MISSED_BEAT:45,HEART_ATTACK:46,PUBLISH_SENT:99,PUBLISH_START:100,PUBLISH_SUCCESS:101,PUBLISH_FAILURE:102,CLUSTERING_START:103,CLUSTERING_SUCCESS:104,CLUSTERING_FAILURE:105,POST_BUTTON_CLICKED:110,POST_BUTTON_ERROR:111,PHOTO_DELETED:114,PUBLISH_CLIENT_SUCCESS:115,PHOTO_ROTATED:117,SAVE_DRAFT_BUTTON_CLICKED:123,RECOVERY_START_ON_CLIENT:124,CHANGE_PHOTO_QUALITY_SETTING:126,TAG_ADDED:127,TAG_REMOVED:128,TAB_BUTTON_CLICKED:129,EDITABLE_PHOTO_FETCH_START:106,EDITABLE_PHOTO_FETCH_SUCCESS:107,EDITABLE_PHOTO_FETCH_FAILURE:108,EDITABLE_PHOTO_FETCH_DELAY:116,CANCEL_INDIVIDUAL_UPLOAD:109,MISSING_OVERLAY_NODE:118,PUBLISH_RETRY_FAILURE:119,MISSING_UPLOAD_STATE:120,SESSION_POSTED:72,POST_PUBLISHED:80,ONE_UPLOAD_CANCELED:81,ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,RESIZER_AVAILABLE:20,OVERLAY_FIRST:61,ASYNC_AVAILABLE:63,FALLBACK_TO_HTML5:130,RETRY_UPLOAD:17,TAGGED_ALL_FACES:14,VAULT_IMAGES_SELECTED:62,VAULT_CREATE_POST_CANCEL:65,VAULT_SEND_IN_MESSAGE_CLICKED:66,VAULT_DELETE_CANCEL:68,VAULT_ADD_TO_ALBUM_CANCEL:74,VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,VAULT_SHARE_OWN_TIMELINE_CLICKED:77,VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,VAULT_SHARE_IN_A_GROUP_CLICKED:79,VAULT_SYNCED_PAGED_LINK_CLICKED:84,VAULTBOX:'vaultbox',GRID:'grid',SPOTLIGHT_VAULT_VIEWER:'spotlight_vault_viewer',REF_VAULT_NOTIFICATION:'vault_notification',_checkRequiredFields:function(k){},sendBanzai:function(k,l){this._checkRequiredFields(k);var m={};k.scuba_ints=k.scuba_ints||{};k.scuba_ints.client_time=Math.round(Date.now()/1000);if(c('PhotosUploadWaterfallXConfig').retryBanzai){m.retry=true;k.scuba_ints.nonce=c('randomInt')(4294967296);}c('Banzai').post(c('PhotosUploadWaterfallXConfig').deprecatedBanzaiRoute,k,m);if(l)setTimeout(l,0);},sendSignal:function(k,l){this._checkRequiredFields(k);if(c('PhotosUploadWaterfallXConfig').useBanzai){this.sendBanzai(k,l);}else if(c('PhotosUploadWaterfallXConfig').reduceLoggingRequests){this.queueLog(k,l);}else{var m=new (c('AsyncSignal'))('/ajax/photos/waterfall.php',{data:JSON.stringify(k)}).setHandler(l);if(c('PhotosUploadWaterfallXConfig').timeout)m.setTimeout(10*1000);m.send();}},queueLog:function(k,l){h.push(k);if(!!l){this.flushQueue(l);}else j();},flushQueue:function(k){var l=JSON.stringify(h);h=[];var m=c('XPhotosWaterfallBatchLoggingController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(m).setData({logs:l}).setFinallyHandler(k||c('emptyFunction')).setTimeoutHandler(10*1000,k||c('emptyFunction')).send();}},j=c('throttle')(i.flushQueue,c('PhotosUploadWaterfallXConfig').batchInterval*1000);f.exports=i;},null);
__d('LikeConfirmer',['AsyncDialog','AsyncRequest'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i=false,j={likeContent:function(){},like:function(k,l){this.likeContent=k;if(i)return;if(h){this.likeContent();}else{var m=new (c('AsyncRequest'))().setURI('/like/confirm_like.php').setRelativeTo(l);c('AsyncDialog').send(m,function(n){i=true;n.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));n.setCausalElement(l);}.bind(this));}return false;},isShowingConfirmation:function(){return i;},onCloseLikeConfirmDialog:function(){i=false;},likeSkipConfirmation:function(k){h=k;this.likeContent();}};f.exports=j;},null);
__d("UIPageletContentCache",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={cache:{},getContent:function(i){if(i in this.cache)return this.cache[i];return null;},setContent:function(i,j){this.cache[i]=j;}};f.exports=h;},null);
__d('UIPagelet',['ActorURI','AjaxPipeRequest','AsyncRequest','DOM','HTML','ScriptPathState','UIPageletContentCache','URI','emptyFunction','ge','isElementNode'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';var l=i&&c('isElementNode')(i)?i.id:i;this._id=l||null;this._element=c('ge')(i||c('DOM').create('div'));this._src=j||null;this._context_data=k||{};this._data={};this._handler=c('emptyFunction');this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}h.prototype.getElement=function(){'use strict';return this._element;};h.prototype.setHandler=function(i){'use strict';this._handler=i;return this;};h.prototype.go=function(i,j){'use strict';if(arguments.length>=2||typeof i=='string'){this._src=i;this._data=j||{};}else if(arguments.length==1)this._data=i;this.refresh();return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this._allow_cross_page_transition=i;return this;};h.prototype.setBundleOption=function(i){'use strict';this._is_bundle=i;return this;};h.prototype.setErrorHandler=function(i){'use strict';this._errorHandler=i;return this;};h.prototype.setTransportErrorHandler=function(i){'use strict';this.transportErrorHandler=i;return this;};h.prototype.refresh=function(){'use strict';if(this._use_ajaxpipe){c('ScriptPathState').setIsUIPageletRequest(true);this._request=new (c('AjaxPipeRequest'))();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}else{if(this._cache_content){var i=c('UIPageletContentCache').getContent(this._content_cache_key);if(i!==null){this.handleContent(i);return this;}}var j=function(n){this._request=null;var o=c('HTML')(n.getPayload());this.handleContent(o);if(this._cache_content)c('UIPageletContentCache').setContent(this._content_cache_key,o);}.bind(this),k=this._displayCallback,l=this._finallyHandler;this._request=new (c('AsyncRequest'))().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(n){if(k){k(j.bind(null,n));}else j(n);l&&l();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var m=babelHelpers['extends']({},this._context_data,this._data);if(this._actorID)m[c('ActorURI').PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(m)}).send();return this;};h.prototype.handleContent=function(i){'use strict';if(this._append){c('DOM').appendContent(this._element,i);}else c('DOM').setContent(this._element,i);this._handler();};h.prototype.cancel=function(){'use strict';if(this._request)this._request.abort();};h.prototype.setUseAjaxPipe=function(i){'use strict';this._use_ajaxpipe=!!i;return this;};h.prototype.setUsePostRequest=function(i){'use strict';this._use_post_request=!!i;return this;};h.prototype.setAppend=function(i){'use strict';this._append=!!i;return this;};h.prototype.setJSNonBlock=function(i){'use strict';this._jsNonblock=!!i;return this;};h.prototype.setAutomatic=function(i){'use strict';this._automatic=!!i;return this;};h.prototype.setDisplayCallback=function(i){'use strict';this._displayCallback=i;return this;};h.prototype.setConstHeight=function(i){'use strict';this._constHeight=!!i;return this;};h.prototype.setFinallyHandler=function(i){'use strict';this._finallyHandler=i;return this;};h.prototype.setAllowIrrelevantRequests=function(i){'use strict';this._allowIrrelevantRequests=i;return this;};h.prototype.setActorID=function(i){'use strict';this._actorID=i;return this;};h.prototype.setCacheContent=function(i){'use strict';this._cache_content=i;return this;};h.prototype.setContentCacheKey=function(i){'use strict';this._content_cache_key=i;return this;};h.appendToInline=function(i,j){'use strict';var k=c('ge')(i),l=c('ge')(j);if(k&&l){while(l.firstChild)c('DOM').appendContent(k,l.firstChild);c('DOM').remove(l);}};h.loadFromEndpoint=function(i,j,k,l){'use strict';l=l||{};var m='/ajax/pagelet/generic.php/'+i;if(l.intern)m='/intern'+m;var n=new (c('URI'))(m.replace(/\/+/g,'/'));if(l.subdomain)n.setSubdomain(l.subdomain);var o=false,p='';if(l.contentCacheKey){o=true;p=i+','+String(l.contentCacheKey);}var q=new h(j,n,k).setUseAjaxPipe(l.usePipe).setBundleOption(l.bundle!==false).setAppend(l.append).setJSNonBlock(l.jsNonblock).setAutomatic(l.automatic).setDisplayCallback(l.displayCallback).setConstHeight(l.constHeight).setAllowCrossPageTransition(l.crossPage).setFinallyHandler(l.finallyHandler||c('emptyFunction')).setErrorHandler(l.errorHandler).setTransportErrorHandler(l.transportErrorHandler).setAllowIrrelevantRequests(l.allowIrrelevantRequests).setActorID(l.actorID).setCacheContent(o).setContentCacheKey(p).setUsePostRequest(l.usePostRequest);l.handler&&q.setHandler(l.handler);q.go();return q;};h.loadFromEndpointBatched=function(i,j,k){'use strict';var l=i.slice(0,k),m=i.slice(k);if(m.length>0){var n=l[l.length-1],o=c('emptyFunction');if(n.options&&n.options.finallyHandler)o=n.options.finallyHandler;n.options=babelHelpers['extends']({},n.options,{finallyHandler:function(){o();window.setTimeout(function(){h.loadFromEndpointBatched(m,j,k);},1);}});}l.forEach(function(p){h.loadFromEndpoint(p.controller,p.target_element,p.data,babelHelpers['extends']({},p.options,j,{bundle:true}));});};f.exports=h;},null);