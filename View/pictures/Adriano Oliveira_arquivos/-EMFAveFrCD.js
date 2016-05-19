if (self.CavalryLogger) { CavalryLogger.start_js(["ebpUB"]); }

__d('UFIOrderingModeSelector.react',['cx','ix','BanzaiLogger','InlineBlock.react','Link.react','React','Image.react','Random','ReactXUIMenu','PopoverMenu.react','UFIConfig'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('ReactXUIMenu').SelectableMenu,l=c('ReactXUIMenu').SelectableItem,m=c('React').createClass({displayName:'UFIOrderingModeSelector',propTypes:{onOrderChanged:j.func,feedback:j.shape({orderingmodes:j.array.isRequired,commentstargetfbid:j.string.isRequired,ownerid:j.string.isRequired}).isRequired},getInitialState:function(){var n=null;this.props.feedback.orderingmodes.map(function(o){if(o.selected)n=o;});return {selectedMode:n};},onMenuItemClick:function(n,o){var p=o.item.getValue();if(this.props.feedback.orderingmodes&&c('UFIConfig').logChangeOrderingModeUsageSampleRate>c('Random').random())c('BanzaiLogger').log('CommentsOrderingModeSelectorUsageLoggerConfig',{start_order:this.state.selectedMode.value,end_order:p,post_fbid:this.props.feedback.commentstargetfbid,post_owner_fbid:this.props.feedback.ownerid,available_orders:this.props.feedback.orderingmodes.map(function(q){return q.value;})});this.props.feedback.orderingmodes.map(function(q){if(q.value===p)this.setState({selectedMode:q});}.bind(this));this.props.onOrderChanged(p);},render:function(){var n=c('React').createElement(k,{className:"_4tju",onItemClick:this.onMenuItemClick},this.props.feedback.orderingmodes.map(function(o){return (c('React').createElement(l,{key:o.value,value:o.value,label:o.name,selected:o.value===this.state.selectedMode.value},c('React').createElement('div',{className:"_3scm"},c('React').createElement('div',{className:"_3scn"},o.name),c('React').createElement('div',{className:"_3sco"},o.description))));}.bind(this)));return (c('React').createElement('div',{className:"_3scp"},c('React').createElement(c('InlineBlock.react'),null,c('React').createElement(c('PopoverMenu.react'),{className:"_3scs",menu:n,alignh:'right'},c('React').createElement(c('Link.react'),null,this.state.selectedMode.name,c('React').createElement(c('Image.react'),{className:"_3sct",src:i('/images/ui/xhp/link/more/down_caret.gif')}))))));}});f.exports=m;},null);
__d('PageLikeButtonLazy',['Arbiter','Bootloader','Event','PageLikeConstants','SubscriptionsHandler','ifRequired','setImmediate'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new (c('SubscriptionsHandler'))(),i=[],j=false,k=false,l=c('PageLikeConstants').LIKED,m=c('PageLikeConstants').UNLIKED,n=c('PageLikeConstants').SPM_CALLOUT,o=c('PageLikeConstants').LAZY_CLICK,p={init:function(){for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];c('ifRequired')('PageLikeButton',function(t){return t.init.apply(t,r);},function(){r[11]=babelHelpers['extends']({},r[11],{isLazy:true});this._startListening(r[1]);i.push(r);}.bind(this));},_startListening:function(q){if(!j){j=true;h.addSubscriptions(c('Arbiter').subscribe([l,m,n],function(event,r){c('Arbiter').inform(event+'.lazy',r,c('Arbiter').BEHAVIOR_PERSISTENT);this._bootload();}.bind(this)));}h.addSubscriptions(c('Event').listen(q,'click',function(event){c('Arbiter').inform(o,{event:event,node:q},c('Arbiter').BEHAVIOR_PERSISTENT);c('setImmediate')(function(){return this._bootload();}.bind(this));}.bind(this)));},_bootload:function(){if(k)return;k=true;c('Bootloader').loadModules(["PageLikeButton"],function(q){h.release();i.forEach(function(r){return q.init.apply(q,r);});},'PageLikeButtonLazy');}};f.exports=p;},null);
__d('SwapButton',['DOM','Event','Focus'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k,l){c('DOM').insertAfter(k,j);c('DOM').remove(k);l&&c('Focus').setWithoutOutline(j);}function i(j,k,l){'use strict';this._swapperButton=j;this._swappeeButton=k;c('Event').listen(j,'click',h.bind(null,k,j,true));if(l)c('Event').listen(k,'click',h.bind(null,j,k,true));}i.prototype.swap=function(j){'use strict';if(this._swapperButton.parentNode)h(this._swappeeButton,this._swapperButton,j);};i.prototype.unswap=function(j){'use strict';if(!this._swapperButton.parentNode)h(this._swapperButton,this._swappeeButton,j);};i.prototype.toggle=function(j){'use strict';if(this._swapperButton.parentNode){this.swap(j);}else this.unswap(j);};i.prototype.getCurrentButton=function(){'use strict';return this._swapperButton.parentNode?this._swapperButton:this._swappeeButton;};Object.assign(i.prototype,{_swapperButton:null,_swappeeButton:null});f.exports=i;},null);
__d('HoverButton',['csx','cx','AsyncRequest','CSS','DOM','URI'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m,n){'use strict';this._button=k;this._flyout=l;this._flyoutAjaxify=n;this._flyoutContent=m;l.subscribe('show',this._onShow.bind(this));l.subscribe('hide',this._onHide.bind(this));}j.prototype.showFlyoutBriefly=function(){'use strict';this.showFlyout();this._flyout.hideFlyoutDelayed(5000);};j.prototype.showFlyout=function(){'use strict';this._flyout.showFlyout(this._button,true);this._flyout.inform('show',this._button);};j.prototype.hideFlyout=function(){'use strict';this._flyout.hideFlyout(true);this._flyout.inform('hide',this._button);};j.prototype.enableButton=function(){'use strict';this._flyout.initNode(this._button);};j.prototype.disableButton=function(){'use strict';this.hideFlyout();this._flyout.deactivateNode(this._button);};j.prototype._onShow=function(k,l){'use strict';c('CSS').addClass(l,"_52nd");if(c('CSS').hasClass(l,'uiButton')||c('CSS').matchesSelector(l,"._42fu"))c('CSS').addClass(l,'selected');if(this._flyoutAjaxify){c('CSS').addClass(this._flyoutContent,'async_saving');new (c('AsyncRequest'))().setURI(new (c('URI'))(this._flyoutAjaxify)).setHandler(function(m){c('CSS').removeClass(this._flyoutContent,'async_saving');c('DOM').setContent(this._flyoutContent,m.payload);}.bind(this)).send();this._flyoutAjaxify=null;}};j.prototype._onHide=function(k,l){'use strict';c('CSS').removeClass(l,"_52nd");if(c('CSS').hasClass(l,'uiButton')||c('CSS').matchesSelector(l,"._42fu"))c('CSS').removeClass(l,'selected');};j.prototype.destroy=function(){'use strict';this.hideFlyout();this._flyout.destroy();};j.prototype.suppressNextMouseEnter=function(){'use strict';this._flyout.setActiveNode(this._button);};Object.assign(j.prototype,{_button:null,_flyout:null,_flyoutAjaxify:null,_flyoutContent:null});f.exports=j;},null);
__d('HoverFlyout',['Arbiter','ArbiterMixin','DataStore','Event','Keys','arrayContains','mixin','removeFromArray','shield'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l,m,n){'use strict';i.constructor.call(this);if(k){this._showDelay=m;this._hideDelay=n;this.init(k);if(l)this.initNode(l);}c('Arbiter').subscribe('SwapButtonDEPRECATED/focusOnJoinButton',c('shield')(this.hideFlyout,this),c('Arbiter').SUBSCRIBE_ALL);}j.prototype.init=function(k){'use strict';this._flyout=k;this._showDelay=this._showDelay||0;this._hideDelay=this._hideDelay||100;this._showTimeout=null;this._hideTimeout=null;this._flyoutSubscriptions=[this._flyout.subscribe('mouseenter',this._onFlyoutMouseEnter.bind(this)),this._flyout.subscribe('mouseleave',c('shield')(this.hideFlyout,this))];this._nodes=[];this._dataStoreUnique='HoverFlyout_'+Date.now()+'_listeners';return this;};j.prototype.initNode=function(k){'use strict';if(c('arrayContains')(this._nodes,k))return this;this._nodes.push(k);c('DataStore').set(k,this._dataStoreUnique,[c('Event').listen(k,'mouseenter',this._onNodeMouseEnter.bind(this,k)),c('Event').listen(k,'mouseleave',c('shield')(this.hideFlyout,this)),c('Event').listen(k,'click',this._onNodeMouseEnter.bind(this,k)),c('Event').listen(k,'keydown',this._onNodeKeyEscape.bind(this))]);return this;};j.prototype.deactivateNode=function(k){'use strict';var l=c('DataStore').get(k,this._dataStoreUnique);if(l)while(l.length)l.pop().remove();c('removeFromArray')(this._nodes,k);};j.prototype.setShowDelay=function(k){'use strict';this._showDelay=k;return this;};j.prototype.setHideDelay=function(k){'use strict';this._hideDelay=k;return this;};j.prototype.showFlyout=function(k,l){'use strict';this.setActiveNode(k);if(l){this._flyout.setContext(k).show();this.inform('show',k);}else this._showTimeout=setTimeout(this.showFlyout.bind(this,k,true),this._showDelay);return this;};j.prototype.hideFlyout=function(k){'use strict';clearTimeout(this._showTimeout);if(k){this._flyout.hide();this._activeNode&&this.inform('hide',this._activeNode);this._activeNode=null;}else this._hideTimeout=setTimeout(this.hideFlyout.bind(this,true),this._hideDelay);};j.prototype.hideFlyoutDelayed=function(k){'use strict';clearTimeout(this._showTimeout);clearTimeout(this._hideTimeout);this._hideTimeout=setTimeout(this.hideFlyout.bind(this,true),k);};j.prototype.getActiveNode=function(){'use strict';return this._activeNode;};j.prototype.setActiveNode=function(k){'use strict';clearTimeout(this._hideTimeout);if(this._activeNode&&this._activeNode!==k)this.hideFlyout(true);this._activeNode=k;return this;};j.prototype.clearNodes=function(){'use strict';for(var k=this._nodes.length;k>0;k--)this.deactivateNode(this._nodes[k-1]);};j.prototype.destroy=function(){'use strict';while(this._flyoutSubscriptions.length)this._flyout.unsubscribe(this._flyoutSubscriptions.pop());this.clearNodes();};j.prototype._onNodeMouseEnter=function(k){'use strict';if(this._activeNode===k){clearTimeout(this._hideTimeout);}else this.showFlyout(k);};j.prototype._onFlyoutMouseEnter=function(){'use strict';clearTimeout(this._hideTimeout);};j.prototype._onNodeKeyEscape=function(event){'use strict';if(c('Event').getKeyCode(event)===c('Keys').ESC){this._activeNode&&this.inform('hide',this._activeNode);this._activeNode=null;}};f.exports=b.HoverFlyout||j;},null);