if (self.CavalryLogger) { CavalryLogger.start_js(["mU0HL"]); }

__d("FollowRequestResultEnum",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={REVERT:"revert"};},null);
__d("SeeFirstNuxEvents",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"};},null);
__d('PhotosMimeType',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isImage:function(j){return i(j)[0]==='image';},isJpeg:function(j){var k=i(j);return (h.isImage(j)&&(k[1]==='jpeg'||k[1]==='pjpeg'));}};function i(j){return j.split('/');}f.exports=h;},null);
__d('DataTransfer',['PhotosMimeType','createArrayFromMixed','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new RegExp('\u000D\u000A','g'),i='\u000A',j={'text/rtf':1,'text/html':1};function k(m){if(m.kind=='file')return m.getAsFile();}function l(m){'use strict';this.data=m;this.types=m.types?c('createArrayFromMixed')(m.types):[];}l.prototype.isRichText=function(){'use strict';if(this.getHTML()&&this.getText())return true;if(this.isImage())return false;return this.types.some(function(m){return j[m];});};l.prototype.getText=function(){'use strict';var m;if(this.data.getData)if(!this.types.length){m=this.data.getData('Text');}else if(this.types.indexOf('text/plain')!=-1)m=this.data.getData('text/plain');return m?m.replace(h,i):null;};l.prototype.getHTML=function(){'use strict';if(this.data.getData)if(!this.types.length){return this.data.getData('Text');}else if(this.types.indexOf('text/html')!=-1)return this.data.getData('text/html');};l.prototype.isLink=function(){'use strict';return this.types.some(function(m){return m.indexOf('Url')!=-1||m.indexOf('text/uri-list')!=-1||m.indexOf('text/x-moz-url');});};l.prototype.getLink=function(){'use strict';if(this.data.getData){if(this.types.indexOf('text/x-moz-url')!=-1){var m=this.data.getData('text/x-moz-url').split('\n');return m[0];}return this.types.indexOf('text/uri-list')!=-1?this.data.getData('text/uri-list'):this.data.getData('url');}return null;};l.prototype.isImage=function(){'use strict';var m=this.types.some(function(q){return q.indexOf('application/x-moz-file')!=-1;});if(m)return true;var n=this.getFiles();for(var o=0;o<n.length;o++){var p=n[o].type;if(!c('PhotosMimeType').isImage(p))return false;}return true;};l.prototype.getCount=function(){'use strict';if(this.data.hasOwnProperty('items')){return this.data.items.length;}else if(this.data.hasOwnProperty('mozItemCount')){return this.data.mozItemCount;}else if(this.data.files)return this.data.files.length;return null;};l.prototype.getFiles=function(){'use strict';if(this.data.items){return Array.prototype.slice.call(this.data.items).map(k).filter(c('emptyFunction').thatReturnsArgument);}else if(this.data.files){return Array.prototype.slice.call(this.data.files);}else return [];};l.prototype.hasFiles=function(){'use strict';return this.getFiles().length>0;};f.exports=l;},null);
__d("DragDropFileUpload",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.isSupported=function(){return typeof FileList!=="undefined";};},null);
__d('DocumentDragDrop',['Arbiter','CSS','DOMQuery','DragDropFileUpload','Event','emptyFunction','getObjectValues','getOrCreateDOMID'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=0;function j(){i=0;c('getObjectValues')(h).forEach(function(o){c('CSS').removeClass(o.element,o.className);c('Arbiter').inform('dragleave',{element:o.element});});}var k=null;function l(){k&&clearTimeout(k);k=setTimeout(function(){j();},500);}var m=function(){if(!c('DragDropFileUpload').isSupported())return;c('Event').listen(document,'dragenter',function(o){if(i===0)c('getObjectValues')(h).forEach(function(p){c('CSS').addClass(p.element,p.className);c('Arbiter').inform('dragenter',{element:p.element,event:o});});i++;l();});c('Event').listen(document,'dragleave',function(o){i--;if(i===0)j();l();});c('Event').listen(document,'drop',function(o){j();var p=o.getTarget();if(c('DOMQuery').isNodeOfType(o.getTarget(),'input'))if(p.type==='file')return;o.prevent();});c('Event').listen(document,'dragover',c('Event').prevent);document.addEventListener('dragover',l,true);m=c('emptyFunction');},n={init:function(){m();},registerStatusElement:function(o,p){m();h[c('getOrCreateDOMID')(o)]={element:o,className:p};if(i>0)c('CSS').addClass(o,p);},removeStatusElement:function(o){var p=c('getOrCreateDOMID')(o),q=h[p];if(q){c('CSS').removeClass(q.element,q.className);delete h[p];}}};f.exports=n;},null);
__d('DragDropTarget',['Arbiter','Event','SubscriptionsHandler','CSS','DataTransfer','DocumentDragDrop','DragDropFileUpload','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){this._element=i;this._listeners=new (c('SubscriptionsHandler'))();this._statusElem=i;this._dragEnterCount=0;this._enabled=false;}Object.assign(h.prototype,{_onFilesDropCallback:c('emptyFunction'),_onURLDropCallback:c('emptyFunction'),_onPlainTextDropCallback:c('emptyFunction'),_onDropCallback:c('emptyFunction'),_fileFilterFn:c('emptyFunction').thatReturnsArgument,setOnDocumentDragEnterCallback:function(i){this._onDocumentDragEnterCallback=i;return this;},setOnDocumentDragLeaveCallback:function(i){this._onDocumentDragLeaveCallback=i;return this;},setOnDragEnterCallback:function(i){this._onDragEnterCallback=i;return this;},setOnDragLeaveCallback:function(i){this._onDragLeaveCallback=i;return this;},setOnFilesDropCallback:function(i){this._onFilesDropCallback=i;return this;},setOnURLDropCallback:function(i){this._onURLDropCallback=i;return this;},setOnPlainTextDropCallback:function(i){this._onPlainTextDropCallback=i;return this;},setOnDropCallback:function(i){this._onDropCallback=i;return this;},enable:function(){if(!c('DragDropFileUpload').isSupported())return this;this._listeners.engage();c('DocumentDragDrop').registerStatusElement(this._statusElem,'fbWantsDragDrop');this._listeners.addSubscriptions(c('Event').listen(this._element,'dragenter',this._onDragEnter.bind(this)),c('Event').listen(this._element,'dragleave',this._onDragLeave.bind(this)),c('Event').listen(this._element,'dragover',this._onDragOver.bind(this)),c('Event').listen(this._element,'drop',function(i){this._dragEnterCount=0;c('CSS').removeClass(this._statusElem,'fbDropReady');c('CSS').removeClass(this._statusElem,'fbDropReadyPhoto');c('CSS').removeClass(this._statusElem,'fbDropReadyPhotos');c('CSS').removeClass(this._statusElem,'fbDropReadyLink');var j=new (c('DataTransfer'))(i.dataTransfer),k={},l=false,m=this._fileFilterFn(i.dataTransfer.files);if(m.length){this._onFilesDropCallback(m,i);k.files=m;l=true;}var n=j.getLink();if(n){this._onURLDropCallback(n,i);k.url=n;l=true;}var o=j.getText();if(o){this._onPlainTextDropCallback(o,i);k.plainText=o;l=true;}if(l)this._onDropCallback(k,i);i.kill();}.bind(this)));this._listeners.addSubscriptions(c('Arbiter').subscribe('dragenter',this._onDocumentDragEnter.bind(this)),c('Arbiter').subscribe('dragleave',this._onDocumentDragLeave.bind(this)));this._enabled=true;return this;},disable:function(){if(!this._enabled)return this;c('DocumentDragDrop').removeStatusElement(this._statusElem,'fbWantsDragDrop');c('CSS').removeClass(this._statusElem,'fbDropReady');c('CSS').removeClass(this._statusElem,'fbDropReadyPhoto');c('CSS').removeClass(this._statusElem,'fbDropReadyPhotos');c('CSS').removeClass(this._statusElem,'fbDropReadyLink');this._listeners.release();this._enabled=false;return this;},setFileFilter:function(i){this._fileFilterFn=i;return this;},setStatusElement:function(i){this._statusElem=i;return this;},_onDragEnter:function(i){if(this._dragEnterCount===0){var j=new (c('DataTransfer'))(i.dataTransfer);c('CSS').addClass(this._statusElem,'fbDropReady');if(j.isLink()||!j.isImage()){c('CSS').addClass(this._statusElem,'fbDropReadyLink');}else if(j.getCount()>1){c('CSS').addClass(this._statusElem,'fbDropReadyPhotos');}else c('CSS').addClass(this._statusElem,'fbDropReadyPhoto');this._onDragEnterCallback&&this._onDragEnterCallback();}this._dragEnterCount++;i.preventDefault();},_onDragLeave:function(i){this._dragEnterCount=Math.max(this._dragEnterCount-1,0);if(this._dragEnterCount===0){c('CSS').removeClass(this._statusElem,'fbDropReady');c('CSS').removeClass(this._statusElem,'fbDropReadyPhoto');c('CSS').removeClass(this._statusElem,'fbDropReadyPhotos');c('CSS').removeClass(this._statusElem,'fbDropReadyLink');this._onDragLeaveCallback&&this._onDragLeaveCallback();}},_onDragOver:function(i){if(!i.dataTransfer){c('Event').kill(i);return;}try{var k=i.dataTransfer.effectAllowed;i.dataTransfer.dropEffect=k=='move'||k=='linkMove'?'move':'copy';}catch(j){}c('Event').kill(i);},_onDocumentDragEnter:function(event,i){if(this._onDocumentDragEnterCallback&&i.element==this._element)this._onDocumentDragEnterCallback();},_onDocumentDragLeave:function(event,i){this._dragEnterCount=0;this._onDragLeave(event);if(this._onDocumentDragLeaveCallback&&i.element==this._element)this._onDocumentDragLeaveCallback();}});f.exports=h;},null);
__d('FeedBlacklistButton',['Arbiter','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={BLACKLIST:'feed_blacklist',UNBLACKLIST:'feed_unblacklist',init:function(i,j,k,l){c('Event').listen(j,'click',function(){var m={profile_id:l};c('Arbiter').inform(h.BLACKLIST,m);c('Arbiter').inform('UnfollowingUser',m);});c('Event').listen(k,'click',function(){var m={profile_id:l};c('Arbiter').inform(h.UNBLACKLIST,m);c('Arbiter').inform('FollowingUser',m);});c('Arbiter').subscribe(h.BLACKLIST,function(m,n){if(l==n.profile_id)i.swap();});c('Arbiter').subscribe(h.UNBLACKLIST,function(m,n){if(l==n.profile_id)i.unswap();});}};f.exports=b.FeedBlacklistButton||h;},null);
__d("XPubcontentChainedSuggestionsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:false},friendid:{type:"Int"}});},null);
__d('SubscribeButton',['Arbiter','AsyncRequest','Button','CSS','Event','TooltipData','XPubcontentChainedSuggestionsController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SUBSCRIBED:'FollowingUser',UNSUBSCRIBED:'UnfollowingUser',_enable:function(i){c('Button').setEnabled(i,true);c('TooltipData').remove(i);},_disable:function(i,j){c('Button').setEnabled(i,false);if(j)c('TooltipData').set(i,j);},init:function(i,j,k,l,m,n,o,p,q){p=typeof p!=='undefined'?p:false;var r=typeof q!=='undefined';if(r&&!o&&!p)h._disable(j,q);c('Event').listen(j,'click',function(){c('Arbiter').inform(h.SUBSCRIBED,{profile_id:l,suppress:true});});c('Arbiter').subscribe(h.SUBSCRIBED,function(s,t){if(l==t.profile_id){if(!m)k.suppressNextMouseEnter&&k.suppressNextMouseEnter();if(r){if(typeof t.connected!=='undefined')o=t.connected;if(o||p)h._enable(j);}i.swap();if(n===true&&t.chaining!==false){var u=c('XPubcontentChainedSuggestionsController').getURIBuilder().setInt('profileid',l).getURI();new (c('AsyncRequest'))().setURI(u).send();}}});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(s,t){if(l==t.profile_id){i.unswap();k.hideFlyout&&k.hideFlyout();if(r){if(typeof t.connected!=='undefined')o=t.connected;if(!o&&!p)h._disable(j,q);}c('Arbiter').inform('SubMenu/Reset');}});},initSubscribe:function(i,j){c('Event').listen(i,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.SUBSCRIBED,{profile_id:j}),0);});},initUnsubscribe:function(i,j){c('Event').listen(i,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.UNSUBSCRIBED,{profile_id:j}),0);});},initSubscribeMenuItem:function(i,j,k){c('CSS').hide(j);this._initMenuItem(i,j,k);},initUnsubscribeMenuItem:function(i,j,k){c('CSS').hide(i);this._initMenuItem(i,j,k);},_initMenuItem:function(i,j,k){this.initSubscribe(i,k);this.initUnsubscribe(j,k);c('Arbiter').subscribe(h.SUBSCRIBED,function(l,m){c('CSS').hide(i);c('CSS').show(j);});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(l,m){c('CSS').hide(j);c('CSS').show(i);});}};f.exports=h;},null);
__d("XFeedSeeFirstNuxController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/control\/see_first\/nux\/",{});},null);
__d('ProfileHoverButton',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','DOMQuery','Event','FeedBlacklistButton','FollowRequestResultEnum','MenuStaticItem','ProfileSubFollowStatus','Run','SeeFirstNuxEvents','SubscribeButton','SubscriptionsHandler','XFeedSeeFirstNuxController'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=1;function k(l,m,n,o){'use strict';this.$ProfileHoverButton1=l;this.$ProfileHoverButton2=m;this.$ProfileHoverButton3=o;this.$ProfileHoverButton4=n;this.$ProfileHoverButton5=null;this.$ProfileHoverButton6=new (c('SubscriptionsHandler'))();this.$ProfileHoverButton2.subscribe('itemclick',function(p,q){if(q.item instanceof c('MenuStaticItem'))return;var r=q.item.getValue(),s=c('DOMQuery').scry(this.$ProfileHoverButton2.getRoot(),"._usu");if(s&&s.length>0)s=s[0];var t=c('DOMQuery').scry(this.$ProfileHoverButton2.getRoot(),"._usv");if(t)t=t[0];if(r==='unfollow'){c('Arbiter').inform(c('SubscribeButton').UNSUBSCRIBED,{profile_id:this.$ProfileHoverButton3.id});c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,{profile_id:this.$ProfileHoverButton3.id});if(this.$ProfileHoverButton4)this.$ProfileHoverButton4.hide();if(s){c('CSS').addClass(s,'hidden_elem');c('CSS').addClass(t,'hidden_elem');}}else{if(r===c('ProfileSubFollowStatus').SEE_FIRST){s&&c('CSS').removeClass(s,'hidden_elem');t&&c('CSS').removeClass(t,'hidden_elem');}else{s&&c('CSS').addClass(s,'hidden_elem');t&&c('CSS').addClass(t,'hidden_elem');}this.setSelected(r);if(r===c('ProfileSubFollowStatus').SEE_FIRST&&this.$ProfileHoverButton4){this.$ProfileHoverButton4.hide();this.logNux(c('SeeFirstNuxEvents').SEE_FIRST_SELECTED);}}}.bind(this));this.$ProfileHoverButton6.addSubscriptions(c('Arbiter').subscribe(c('SubscribeButton').SUBSCRIBED,this.setSelected.bind(this,c('ProfileSubFollowStatus').REGULAR_FOLLOW)));this.$ProfileHoverButton6.addSubscriptions(c('Arbiter').subscribe(c('FollowRequestResultEnum').REVERT,this.handleResponse.bind(this)));if(this.$ProfileHoverButton4){this.$ProfileHoverButton4.show();this.logNux(c('SeeFirstNuxEvents').IMP);this.$ProfileHoverButton6.addSubscriptions(c('Event').listen(c('DOM').find(this.$ProfileHoverButton4.getRoot(),"._50zy"),'click',this.logNux.bind(this,c('SeeFirstNuxEvents').XOUT)));}c('Run').onLeave(this.cleanUp.bind(this));}k.prototype.logNux=function(event){'use strict';var l=c('XFeedSeeFirstNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))(l).setData({event:event,id:this.$ProfileHoverButton3.id}).send();};k.prototype.getButtons=function(){'use strict';return c('DOM').scry(this.$ProfileHoverButton1,"._3oz-");};k.prototype.getSelected=function(){'use strict';var l=this.getButtons(),m=null;l.forEach(function(n){var o=n.getAttribute('data-status');if(c('CSS').matchesSelector(n,"._52-0"))m=o;});return m;};k.prototype.setSelected=function(l){'use strict';this.$ProfileHoverButton5=this.getSelected();var m=this.getButtons();m.forEach(function(n){var o=n.getAttribute('data-status');if(o===l){c('CSS').addClass(n,"_52-0");}else c('CSS').removeClass(n,"_52-0");});this.$ProfileHoverButton2.forEachItem(function(n){if(!n.getValue)return;var o=n.getValue();if(o==='unfollow')return;var p=n.getRoot();if(o===l){c('CSS').addClass(p,"_52-0");}else c('CSS').removeClass(p,"_52-0");});};k.prototype.handleResponse=function(event,l){'use strict';if(l.id!==this.$ProfileHoverButton3.id||l.location!==j)return;if(event===c('FollowRequestResultEnum').REVERT)this.revert();};k.prototype.revert=function(){'use strict';if(this.$ProfileHoverButton5===null)return;this.setSelected(this.$ProfileHoverButton5);};k.prototype.cleanUp=function(){'use strict';this.$ProfileHoverButton6&&this.$ProfileHoverButton6.release();this.$ProfileHoverButton6=null;this.$ProfileHoverButton1=null;this.$ProfileHoverButton2=null;this.$ProfileHoverButton3=null;};f.exports=k;},null);
__d('TidyArbiter',['TidyArbiterMixin'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=babelHelpers['extends']({},c('TidyArbiterMixin'));f.exports=h;},null);
__d('getInlineBoundingRect',['Rect'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=i.getClientRects();if(!j||k.length===0)return c('Rect').getElementBounds(i);var l,m=false;for(var n=0;n<k.length;n++){var o=new (c('Rect'))(Math.round(k[n].top),Math.round(k[n].right),Math.round(k[n].bottom),Math.round(k[n].left),'viewport').convertTo('document'),p=o.getPositionVector(),q=p.add(o.getDimensionVector());if(!l||p.x<=l.l&&p.y>l.t){if(m)break;l=new (c('Rect'))(p.y,q.x,q.y,p.x,'document');}else{l.t=Math.min(l.t,p.y);l.b=Math.max(l.b,q.y);l.r=q.x;}if(o.contains(j))m=true;}if(!l)l=c('Rect').getElementBounds(i);return l;}f.exports=h;},null);
__d('Tooltip',['fbt','AsyncRequest','ContextualLayer','ContextualLayerAutoFlip','CSS','DOM','Event','Style','TooltipData','Vector','emptyFunction','getElementText','getInlineBoundingRect','getOrCreateDOMID','nl2br','setImmediate'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=null,k=null,l=null,m=null,n=null,o=[],p=[];function q(){if(!l){m=c('DOM').create('div',{className:'tooltipContent','data-testid':'tooltip_testid'});n=c('getOrCreateDOMID')(m);var u=c('DOM').create('i',{className:'arrow'}),v=c('DOM').create('div',{className:'uiTooltipX'},[m,u]);l=new (c('ContextualLayer'))({},v);l.shouldSetARIAProperties(false);l.enableBehavior(c('ContextualLayerAutoFlip'));}}function r(u,v){t._show(u,h._("Carregando..."));new (c('AsyncRequest'))(v).setHandler(function(w){t._show(u,w.getPayload());}).setErrorHandler(c('emptyFunction')).send();}var s;c('Event').listen(document.documentElement,'mouseover',function(event){s=event;c('setImmediate')(function(){s=null;});});var t=babelHelpers['extends']({},c('TooltipData'),{isActive:function(u){return u===i;},process:function(u,v){if(!c('DOM').contains(u,v))return;if(u!==i){t.fetchIfNecessary(u);var w=t._get(u);if(w.suppress)return;if(w.delay){t._showWithDelay(u,w.delay);}else t.show(u);}},fetchIfNecessary:function(u){var v=u.getAttribute('data-tooltip-uri');if(v){u.removeAttribute('data-tooltip-uri');r(u,v);}},hide:function(){if(i){l.hide();i=null;while(o.length)o.pop().remove();}},_show:function(u,v){t._store({context:u,content:v});t.isActive(u)&&t.show(u);},show:function(u){var v=function(){u.setAttribute('aria-describedby',n);l.show();},w=function(){u.removeAttribute('aria-describedby');t.hide();},x=function(ga){if(!c('DOM').contains(i,ga.getTarget()))w();};q();w();var y=t._get(u);if(y.suppress)return;var z=y.content;if(y.overflowDisplay){if(u.offsetWidth>=u.scrollWidth)return;if(!z)z=c('getElementText')(u);}if(!z)return;var aa=0,ba=0;if(y.position==='left'||y.position==='right'){ba=(u.offsetHeight-28)/2;}else if(y.alignH!=='center'){var ca=u.offsetWidth;if(ca<32)aa=(ca-32)/2*(y.alignH==='right'?-1:1);}l.setContextWithBounds(u,c('getInlineBoundingRect')(u,s&&c('Vector').getEventPosition(s))).setOffsetX(aa).setOffsetY(ba).setPosition(y.position).setAlignment(y.alignH);if(typeof z==='string'){c('CSS').addClass(l.getRoot(),'invisible_elem');var da=c('DOM').create('span',{},c('nl2br')(z));if(y.textDirection)da=c('DOM').create('bdo',{dir:y.textDirection},da);var ea=c('DOM').create('div',{className:'tooltipText'},da);c('DOM').setContent(m,ea);v();c('CSS').removeClass(l.getRoot(),'invisible_elem');}else{c('DOM').setContent(m,z);v();}o.push(c('Event').listen(document.documentElement,'mouseover',x),c('Event').listen(document.documentElement,'focusin',x));var fa=c('Style').getScrollParent(u);if(fa!==window)o.push(c('Event').listen(fa,'scroll',w));if(!y.persistOnClick)o.push(c('Event').listen(u,'click',w));i=u;},_showWithDelay:function(u,v){if(u!==j)t._clearDelay();if(!k){var w=function(x){if(!c('DOM').contains(j,x.getTarget()))t._clearDelay();};p.push(c('Event').listen(document.documentElement,'mouseover',w),c('Event').listen(document.documentElement,'focusin',w));j=u;k=setTimeout(function(){t._clearDelay();t.show(u);},v);}},_clearDelay:function(){clearTimeout(k);j=null;k=null;while(p.length)p.pop().remove();}});c('Event').listen(window,'scroll',t.hide);f.exports=t;},null);
__d('TimelineCoverCollapse',['$','Arbiter','DOMDimensions','Style','TidyArbiter','getViewportDimensions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.collapse=function(h,i){i--;var j=c('getViewportDimensions')().height,k=c('DOMDimensions').getDocumentDimensions().height,l=j+i;if(k<=l)c('Style').set(c('$')('globalContainer'),'min-height',l+'px');window.scrollBy(0,i);c('TidyArbiter').inform('TimelineCover/coverCollapsed',i,c('Arbiter').BEHAVIOR_STATE);};},null);
__d('FacebarPlaceholderShortcut',['KeyEventController','Run','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._input=i;this._listener=null;}h.prototype.enable=function(){'use strict';this._registerListener();};h.prototype._registerListener=function(){'use strict';this._listener&&this._listener.remove();this._listener=c('KeyEventController').registerKey('SLASH',this._handleKeydown.bind(this));c('Run').onLeave(function(){c('setTimeoutAcrossTransitions')(this._registerListener.bind(this),0);}.bind(this));};h.prototype.disable=function(){'use strict';this._listener&&this._listener.remove();this._listener=null;};h.prototype._handleKeydown=function(i){'use strict';this._input.focus();return false;};f.exports=h;},null);
__d("XFacebarBootloadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/typeahead\/search\/facebar\/bootload\/",{placeholder_id:{type:"String"}});},null);
__d('FacebarBootloader',['AsyncRequest','CSS','Event','$','Run','BanzaiODS','SubscriptionsHandler','getActiveElement','XFacebarBootloadController','FacebarPlaceholderShortcut'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='facebar_bootloader',i=h+'_',j={isRequested:false,isFocused:false,isInitialized:false,init:function(k,l,m,n){this.reset();this.subscriptions=new (c('SubscriptionsHandler'))();this.placeholderID=m;this.searchInput=k;this.shortcutHandler=new (c('FacebarPlaceholderShortcut'))(k);this.loadingIndicator=l;this.shortcutHandler.enable();this.subscriptions.addSubscriptions(c('Event').listen(k,'focus',function(){this.requestSearch();this.showLoadingIndicator();}.bind(this)),c('Event').listen(c('$')(m),'mouseover',this.requestSearch.bind(this)));if(n)this.subscriptions.addSubscriptions(c('Event').listen(window,'load',this.requestSearch.bind(this)));c('Run').onUnload(this.reset.bind(this));this.isInitialized=true;if(k.value||c('getActiveElement')()==k){this.requestSearch();this.showLoadingIndicator();}},showLoadingIndicator:function(){if(this.loadingIndicator)c('CSS').show(this.loadingIndicator);},reset:function(){this.subscriptions&&this.subscriptions.release();this.shortcutHandler&&this.shortcutHandler.disable();this.searchInput=this.subscriptions=this.shortcutHandler=null;this.loadingIndicator=null;this.isRequested=false;this.isFocused=false;this.isInitialized=false;},requestSearch:function(){if(c('getActiveElement')()==this.searchInput&&!this.isFocused){this.isFocused=true;this.focusTime=Date.now();}if(this.isRequested||!this.isInitialized)return;this.isRequested=true;var k=c('XFacebarBootloadController').getURIBuilder().setString('placeholder_id',this.placeholderID).getURI(),l=new (c('AsyncRequest'))();l.setURI(k).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setErrorHandler(function(m){c('BanzaiODS').bumpEntityKey(h,i+'request_failed');if(m&&m.errorSummary){c('BanzaiODS').bumpEntityKey(h,i+'request_failed_'+m.errorSummary);}else c('BanzaiODS').bumpEntityKey(h,i+'request_failed_no_error_summary');this.isRequested=false;}).send();},setFocus:function(k,l,m){if(!this.searchInput)return;c('BanzaiODS').bumpEntityKey(h,i+'response_arrived');if(this.searchInput.value||this.isFocused){k.getCore().isFocused=true;k.getCore().input.setValue(m.fromString(this.searchInput.value),true);k.getCore().setStartTime(this.focusTime);l.focus();l.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart});l.togglePlaceholder();}this.reset();}};f.exports=j;},null);
__d('FacebarStructuredFragment',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(k,l){if(k&&l){return k.toLowerCase()==l.toLowerCase();}else return !k&&!l;}var i=new RegExp('['+'\\u0590-\\u07bf'+'\\u08a0-\\u08ff'+'\\ufb1d-\\ufb4f'+'\\ufb50-\\ufefc'+'\\u200e-\\u200f\\u202a-\\u202e'+']');function j(k){'use strict';this._text=String(k.text);this._uid=k.uid?String(k.uid):null;this._type=k.type?String(k.type):null;this._typeParts=null;this._isLocal=Boolean(k.isLocal);this._categoryName=k.categoryName?k.categoryName:null;this._is_person_serp=Boolean(k.isPersonSERP);}j.prototype.getText=function(){'use strict';return this._text;};j.prototype.getUID=function(){'use strict';return this._uid;};j.prototype.getType=function(){'use strict';return this._type;};j.prototype.getTypePart=function(k){'use strict';return this._getTypeParts()[k];};j.prototype.getLength=function(){'use strict';return this._text.length;};j.prototype.isType=function(k){'use strict';for(var l=0;l<arguments.length;l++)if(!h(arguments[l],this.getTypePart(l)))return false;return true;};j.prototype.isPersonSERP=function(){'use strict';return this._is_person_serp;};j.prototype.isLocal=function(){'use strict';return this._isLocal;};j.prototype.getCategoryName=function(){'use strict';return this._categoryName;};j.prototype.isWhitespace=function(){'use strict';return (/^\s*$/.test(this._text));};j.prototype.hasRTL=function(){'use strict';return i.test(this._text);};j.prototype.toStruct=function(){'use strict';return {text:this._text,type:this._type,uid:this._uid,isLocal:this._isLocal,categoryName:this._categoryName,isPersonSERP:this._is_person_serp};};j.prototype.getHash=function(k){'use strict';var l=k!=null?this._getTypeParts().slice(0,k).join(':'):this._type;return l+'::'+this._text;};j.prototype._getTypeParts=function(){'use strict';if(this._typeParts===null)this._typeParts=this._type?this._type.split(':'):[];return this._typeParts;};f.exports=j;},null);
__d('FacebarStructuredText',['createArrayFromMixed','FacebarStructuredFragment'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=/\s+$/;function i(m){if(!m){return [];}else if(m instanceof l){return m.toArray();}else return c('createArrayFromMixed')(m).map(function(n){return new (c('FacebarStructuredFragment'))(n);});}function j(m){return new (c('FacebarStructuredFragment'))({text:m,type:'text'});}function k(m,n,o){var p=m.getText(),q=p.replace(n,o);if(p!=q){return new (c('FacebarStructuredFragment'))({text:q,type:m.getType(),uid:m.getUID()});}else return m;}function l(m){'use strict';this._fragments=m||[];this._hash=null;}l.prototype.matches=function(m,n){'use strict';if(m){var o=this._fragments,p=m._fragments;return o.length==p.length&&!o.some(function(q,r){var s=void 0;if(!n&&q.getUID()){s=q.getUID()!=p[r].getUID();}else s=q.getText()!=p[r].getText()||q.getType()!=p[r].getType();return s||q.isLocal()!=p[r].isLocal()||q.isPersonSERP()!=p[r].isPersonSERP();});}return false;};l.prototype.trim=function(){'use strict';var m=null,n=null;this.forEach(function(p,q){if(!p.isWhitespace()){if(m===null)m=q;n=q;}});if(n!==null){var o=this._fragments.slice(m,n+1);o.push(k(o.pop(),h,''));return new l(o);}else return new l([]);};l.prototype.pad=function(){'use strict';var m=this.getFragment(-1);if(m&&!h.test(m.getText())&&m.getText()!==''){return new l(this._fragments.concat(j(' ')));}else return this;};l.prototype.forEach=function(m){'use strict';this._fragments.forEach(m);return this;};l.prototype.matchType=function(m){'use strict';var n=null;for(var o=0;o<this._fragments.length;o++){var p=this._fragments[o],q=p.isType.apply(p,arguments);if(q&&!n){n=p;}else if(q||!p.isWhitespace())return null;}return n;};l.prototype.hasType=function(m){'use strict';var n=arguments;return this._fragments.some(function(o){return !o.isWhitespace()&&o.isType.apply(o,n);});};l.prototype.isPersonSERP=function(){'use strict';return this._fragments.some(function(m){return m.isPersonSERP();});};l.prototype.isLocal=function(){'use strict';return this._fragments.some(function(m){return m.isLocal();});};l.prototype.getCategoryName=function(){'use strict';var m=this._fragments.filter(function(n){return n.getCategoryName();});if(m.length>0)return m[0].getCategoryName();return null;};l.prototype.endsOnType=function(m){'use strict';var n=arguments,o=this._fragments[this._fragments.length-1];return !!o&&!o.isWhitespace()&&o.isType.apply(o,n);};l.prototype.isEmptyOrWhitespace=function(){'use strict';return !this._fragments.some(function(m){return !m.isWhitespace();});};l.prototype.hasRTL=function(){'use strict';return this._fragments.some(function(m){return m.hasRTL();});};l.prototype.isEmpty=function(){'use strict';return this.getLength()===0;};l.prototype.getFragment=function(m){'use strict';return this._fragments[m>=0?m:this._fragments.length+m];};l.prototype.getCount=function(){'use strict';return this._fragments.length;};l.prototype.getLength=function(){'use strict';return this._fragments.reduce(function(m,n){return m+n.getLength();},0);};l.prototype.toStruct=function(){'use strict';return this._fragments.map(function(m){return m.toStruct();});};l.prototype.toArray=function(){'use strict';return this._fragments.slice();};l.prototype.toString=function(){'use strict';return this._fragments.map(function(m){return m.getText();}).join('');};l.prototype.getHash=function(){'use strict';if(this._hash===null)this._hash=this._fragments.map(function(m){if(m.getUID()){return '[['+m.getHash(1)+']]';}else return m.getText();}).join('');return this._hash;};l.fromStruct=function(m){'use strict';return new l(i(m));};l.fromString=function(m){'use strict';return new l([j(m)]);};f.exports=l;},null);
__d('FacebarNavigation',['csx','Arbiter','DOMQuery','FacebarBootloader','FacebarStructuredText','Input','QueryHistory','URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=null,k=null,l=false,m=true,n=false;function o(r,s){if(!n)k=r;n=false;l=s;m=false;p();}function p(){if(m){return;}else if(j){l&&j.pageTransition();j.setPageQuery(k);m=true;}else if(i&&k&&!c('Input').getValue(i))c('Input').setValue(i,k.structure.toString()+' ');i&&i.blur();}c('Arbiter').subscribe('page_transition',function(r,s){if(!q.isTopControlTransition(s.uri)&&!q.isTimelineAbout(s.uri))o(c('QueryHistory').get(s.uri),true);});c('Arbiter').subscribe('save_facebar_query',function(r,s){n=true;});var q={registerInput:function(r){i=c('DOMQuery').scry(r,"._586f")[0];p();},registerBehavior:function(r){j=r;p();},setPageQuery:function(r){c('QueryHistory').set(c('URI').getNextURI(),r);if(!(r.structure instanceof c('FacebarStructuredText')))r.structure=c('FacebarStructuredText').fromStruct(r.structure);o(r,false);c('FacebarBootloader').requestSearch();},isTopControlTransition:function(r){return String(r.getPath()).startsWith('/search/')&&r.getQueryData().ref==='top_filter'&&!r.getQueryData().hard_refresh;},isTimelineAbout:function(r){return (/\/about$/.test(r.getPath())&&!r.getQueryData().hard_refresh);}};f.exports=q;},null);