/*!CK:3837967871!*//*1461073273,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Bj7GA"]); }

__d('ComposerCitySharer',['Arbiter','ArbiterMixin','AsyncRequest','CSS','DOM','Event','Parent','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j={};h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function k(l){'use strict';i.constructor.call(this);this.root=l;}k.prototype.init=function(l,m,n,o,p){'use strict';this.cityLink=l;this.closeButton=m;this.input=n;this.disableShareInput=o;this._options=p;this.cityName=c('DOM').find(this.cityLink,'.cityName');this.data={};c('Event').listen(this.closeButton,'click',function(){this.clearCity();this.disableShareInput.value='true';}.bind(this));j[this.root]=this;this.inform('init',null,c('Arbiter').BEHAVIOR_PERSISTENT);};k.prototype.changeCity=function(l,m,n){'use strict';this.setCityId(l,m,n);this.toggleLocationSharing(l,m,n,false);};k.prototype.setCityId=function(l,m,n){'use strict';if(m){this.data={city_name:l,city_page_id:m,city_id:n};this.input.value=m;var o=l.lastIndexOf(',');if(o!=-1)l=l.substring(0,o);var p=l;c('DOM').setContent(this.cityName,p);c('CSS').addClass(this.root,'ComposerCitySharerCitySelected');c('CSS').conditionShow(this.closeButton,!this._placeSelected);this.inform('change',this.data,c('Arbiter').BEHAVIOR_PERSISTENT);}};k.prototype.toggleLocationSharing=function(l,m,n,o){'use strict';if(m)new (c('AsyncRequest'))().setURI('/ajax/places/toggle_location_sharing').setData({city_id:n,city_page_id:m,city_name:l,is_default:o,session_id:this._options.session_id}).send();};k.prototype.setDefaultCity=function(l,m,n){'use strict';this._defaultCityData=[l,m,n];};k.prototype.useDefaultCity=function(){'use strict';if(this._defaultCityData){var l=this._defaultCityData[0],m=this._defaultCityData[1],n=this._defaultCityData[2];this.setCityId(l,m,n);this.toggleLocationSharing(l,m,n,true);}};k.prototype.addPlace=function(l){'use strict';if(l.city_id){this.changeCity(l.city_name,l.city_page_id,l.city_id);}else this.clearCity();this._placeSelected=true;c('CSS').addClass(this.cityLink,'placeIconSelected');c('CSS').hide(this.closeButton);};k.prototype.clearPlace=function(l){'use strict';this._placeSelected=false;c('CSS').removeClass(this.cityLink,'placeIconSelected');c('CSS').conditionShow(this.closeButton,this.getValue());};k.prototype.clearCity=function(){'use strict';this.data={};this.input.value='';c('DOM').setContent(this.cityName,'');c('CSS').removeClass(this.root,'ComposerCitySharerCitySelected');c('CSS').hide(this.closeButton);this.inform('change',null,c('Arbiter').BEHAVIOR_PERSISTENT);};k.prototype.getIcon=function(){'use strict';return this.root;};k.prototype.getValue=function(){'use strict';return this.input.value;};k.getInstance=function(l){'use strict';var m=c('Parent').byClass(l,'ComposerCitySharer');return m&&j[m];};f.exports=k;},null);
__d('ContextualBlind',['cx','Event','Animation','Arbiter','DOM','Rect','Vector','$','shield'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=0,j=1,k=.8,l=500;m.prototype.$ContextualBlind6=function(){'use strict';this.$ContextualBlind1&&c('Arbiter').unsubscribe(this.$ContextualBlind1);this.$ContextualBlind1=null;this.$ContextualBlind2=[];this.$ContextualBlind3&&this.$ContextualBlind3.remove();this.$ContextualBlind3=null;this.$ContextualBlind4&&c('DOM').remove(this.$ContextualBlind4);this.$ContextualBlind5=false;};m.prototype.show=function(n,o,p,q,r,s,t,u){'use strict';if(t==null)t=k;u=u||i;this.hide();var v=u===i?"_2xgb":"_2xgc";for(var w=0;w<4;w++)this.$ContextualBlind2.push(c('DOM').create('div',{className:v,style:'opacity:'+t}));c('DOM').appendContent(document.body,this.$ContextualBlind2);if(s!==false){v=u===i?"_2xgd":"_2xge";this.$ContextualBlind4=c('DOM').create('div',{className:v});c('DOM').appendContent(document.body,this.$ContextualBlind4);}var x=c('shield')(this.updatePosition,this,n,o,p,q,r);x();this.$ContextualBlind1=c('Arbiter').subscribe('reflow',x);this.$ContextualBlind3=c('Event').listen(window,'resize',x);this.$ContextualBlind5=true;};m.prototype.fadeIn=function(n,o,p,q,r,s,t,u,v){'use strict';u=u||l;if(t==null)t=k;this.show(n,o,p,q,r,s,0,v==null?i:v);for(var w=0;w<this.$ContextualBlind2.length;w++){var x=this.$ContextualBlind2[w];new (c('Animation'))(x).duration(u).from('opacity',0).to('opacity',t).go();}};m.prototype.hide=function(){'use strict';this.$ContextualBlind2&&this.$ContextualBlind2.forEach(c('DOM').remove);this.$ContextualBlind6();};m.prototype.fadeOut=function(n){var o=arguments.length<=1||arguments[1]===undefined?l:arguments[1];'use strict';if(!this.$ContextualBlind2)return;if(n==null)n=k;for(var p=0;p<this.$ContextualBlind2.length;p++){var q=this.$ContextualBlind2[p];new (c('Animation'))(q).duration(o).from('opacity',n).to('opacity',0).ondone(c('DOM').remove.bind(null,q)).go();}this.$ContextualBlind6();};m.prototype.$ContextualBlind7=function(n,o){'use strict';o.getPositionVector().setElementPosition(n);o.getDimensionVector().setElementDimensions(n);};m.prototype.updatePosition=function(n,o,p,q,r){'use strict';var s=c('Vector').getDocumentDimensions().y,t=c('Rect').getElementBounds(c('$')(n));t=new (c('Rect'))(t.t-(o||0),t.r+(p||0),t.b+(q||0),t.l-(r||0),t.domain);var u=document,v=u&&u.documentElement&&u.documentElement.scrollWidth||u&&u.body&&u.body.scrollWidth||0;this.$ContextualBlind7(this.$ContextualBlind2[0],new (c('Rect'))(0,v,t.t,0,'document'));this.$ContextualBlind7(this.$ContextualBlind2[1],new (c('Rect'))(t.t,v,t.b,t.r,'document'));this.$ContextualBlind7(this.$ContextualBlind2[2],new (c('Rect'))(t.b,v,s,0,'document'));this.$ContextualBlind7(this.$ContextualBlind2[3],new (c('Rect'))(t.t,t.l,t.b,0,'document'));if(this.$ContextualBlind4)this.$ContextualBlind7(this.$ContextualBlind4,t);};function m(){'use strict';}m.STYLE_LIGHT=i;m.STYLE_DARK=j;f.exports=m;},null);
__d('ContextualBlindSingleton',['ContextualBlind'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=new (c('ContextualBlind'))();},null);
__d('ContextualLayerBlind',['cx','ContextualBlind','CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={isModal:false,opacity:.3,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,style:c('ContextualBlind').STYLE_DARK,fadeDuration:0},j=250;function k(l,m){'use strict';m=babelHelpers['extends']({},i,m);this.$ContextualLayerBlind4=m.isModal;this.$ContextualLayerBlind2=l;this.$ContextualLayerBlind5=m.opacity;this.$ContextualLayerBlind6=m.paddingTop;this.$ContextualLayerBlind7=m.paddingRight;this.$ContextualLayerBlind8=m.paddingBottom;this.$ContextualLayerBlind9=m.paddingLeft;this.$ContextualLayerBlind10=m.style;this.$ContextualLayerBlind11=m.fadeDuration;}k.prototype.enable=function(){'use strict';this.$ContextualLayerBlind3=[this.$ContextualLayerBlind2.subscribe(['show','reposition'],this.$ContextualLayerBlind12.bind(this)),this.$ContextualLayerBlind2.subscribe('hide',this.$ContextualLayerBlind13.bind(this))];c('CSS').addClass(this.$ContextualLayerBlind2.getRoot(),"_4746");this.$ContextualLayerBlind1=new (c('ContextualBlind'))();};k.prototype.disable=function(){'use strict';this.$ContextualLayerBlind13();c('CSS').removeClass(this.$ContextualLayerBlind2.getRoot(),"_4746");while(this.$ContextualLayerBlind3.length)this.$ContextualLayerBlind3.pop().unsubscribe();this.$ContextualLayerBlind3=null;this.$ContextualLayerBlind1=null;};k.prototype.$ContextualLayerBlind12=function(){'use strict';if(this.$ContextualLayerBlind2.isShown()){var l=this.$ContextualLayerBlind2.getContext();if(this.$ContextualLayerBlind11>0){this.$ContextualLayerBlind1.fadeIn(l,this.$ContextualLayerBlind6,this.$ContextualLayerBlind7,this.$ContextualLayerBlind8,this.$ContextualLayerBlind9,this.$ContextualLayerBlind4,this.$ContextualLayerBlind5,this.$ContextualLayerBlind11,this.$ContextualLayerBlind10);}else this.$ContextualLayerBlind1.show(l,this.$ContextualLayerBlind6,this.$ContextualLayerBlind7,this.$ContextualLayerBlind8,this.$ContextualLayerBlind9,this.$ContextualLayerBlind4,this.$ContextualLayerBlind5,this.$ContextualLayerBlind10);}};k.prototype.$ContextualLayerBlind13=function(){'use strict';if(this.$ContextualLayerBlind11>0){this.$ContextualLayerBlind1.fadeOut(this.$ContextualLayerBlind5,this.$ContextualLayerBlind11);}else this.$ContextualLayerBlind1.hide();};k.withFade=function(){var l=arguments.length<=0||arguments[0]===undefined?j:arguments[0],m=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];'use strict';return function(){var n,o;n=babelHelpers.inherits(p,k);o=n&&n.prototype;function p(q,r){'use strict';o.constructor.call(this,q,babelHelpers['extends']({},r,{fadeDuration:l},m));}return p;}();};f.exports=k;},null);
__d('OnlyMeSharerSaveNux.react',['cx','fbt','AsyncRequest','Banzai','ContextualLayer.react','ContextualLayerBlind','CSS','DataStore','DOM','DOMScroll','Keys','Link.react','Parent','React','ShareModeConst','URI','XSavedForLaterNUXSeenController','XUIContextualDialog.react','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react','XUIDialogButton.react','guid'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=null,l=null,m='OnlyMeSharerSaveNux_instance',n='OnlyMeSharerSaveNux_caretMenuLoaded',o="_5jmm",p="_54ne",q='impression',r='saved_for_later:click',s='only_me_sharer_nux',t='learn_more_link',u='only_me_sharer_nux',v='caret',w='dismiss_button',x='esc_button',y={paddingTop:0,paddingRight:0,paddingBottom:5,paddingLeft:7},z=c('React').createClass({displayName:'OnlyMeSharerSaveNux',propTypes:{caretId:j.string.isRequired,storyContainerId:j.string.isRequired,wrapper:j.any,collectionId:j.number.isRequired,objectId:j.number,shareType:j.string.isRequired},statics:{saveOptionLoaded:function(aa){var ba=document.getElementById(aa);if(ba!=null){var ca=c('Parent').byClass(ba,o);c('DataStore').set(ca,n,true);var da=c('DataStore').get(ca,m);if(da&&da.state.isShown)da._onCaretMenuClick();}}},getInitialState:function(){return {isShown:true};},_createCustomContextualLayerBlind:function(aa){var ba,ca;ba=babelHelpers.inherits(da,c('ContextualLayerBlind'));ca=ba&&ba.prototype;function da(ea){'use strict';ca.constructor.call(this,ea,aa);}return da;},_getTitle:function(){if(this.props.shareType===c('ShareModeConst').SELF_POST||this.props.shareType==='own'){return i._("Compartilhamento bem-sucedido");}else return i._("Mensagem enviada");},_onCaretMenuClick:function(event){var aa=document.getElementById(this.props.storyContainerId),ba=c('Parent').byClass(aa,o);if(c('DataStore').get(ba,n)===true)setTimeout(function(){var ca=c('DOM').scry(document,'li.save_caret_menu_item');for(var da=0;da<ca.length;da++){var ea=ca[da],fa=c('Parent').byClass(ea,'uiLayer');if(fa&&c('CSS').shown(fa)){c('CSS').addClass(ea,p);var ga=c('DataStore').get(ba,m);ga._logDismissal(v);var ha=c('DataStore').get(l,'Popover');ha&&ha.subscribeOnce('hide',function(){c('CSS').removeClass(ea,p);});break;}}},0);},_onKeyUp:function(event){if(event.keyCode===c('Keys').ESC&&this.state.isShown){document.removeEventListener('keyup',this._onKeyUp);this._logDismissal(x);}},_onButtonClick:function(){this._logDismissal(w);},_onLearnMoreLinkClick:function(){c('Banzai').post(r,{og_object_id:this.props.objectId,collection_id:this.props.collectionId,surface:s,mechanism:t,event_id:c('guid')()},{retry:true,delay:0});},_logDismissal:function(aa){this.setState({isShown:false});c('Banzai').post(r,{og_object_id:this.props.objectId,collection_id:this.props.collectionId,surface:s,mechanism:aa,event_id:c('guid')()},{retry:true,delay:0});},_onToggle:function(aa){if(l!==null&&!aa)l.removeEventListener('click',this._onCaretMenuClick);if(this.props.wrapper!=null){var ba=c('Parent').byClass(this.props.wrapper,'uiLayer');c('CSS').hide(ba);}},componentWillMount:function(){k=this._createCustomContextualLayerBlind(babelHelpers['extends']({},y));l=document.getElementById(this.props.caretId);},componentDidMount:function(){var aa=document.getElementById(this.props.storyContainerId),ba=c('Parent').byClass(aa,o);c('DataStore').set(ba,m,this);l&&l.addEventListener('click',this._onCaretMenuClick);document.addEventListener('keyup',this._onKeyUp);setTimeout(function(){c('DOMScroll').ensureVisible(l);},500);var ca=c('XSavedForLaterNUXSeenController').getURIBuilder().setEnum('surface','story').setEnum('mechanism',u).setInt('collection_id',this.props.collectionId).setInt('object_id',this.props.objectId).setEnum('action',q).getURI(),da=new (c('AsyncRequest'))(ca);da.send();},render:function(){return (c('React').createElement(c('XUIContextualDialog.react'),{shown:this.state.isShown,contextRef:function(){return l;},position:'below',alignment:'right',behaviors:{grayedOutLayer:k},width:400,offsetX:-3,onToggle:this._onToggle},c('React').createElement(c('XUIContextualDialogTitle.react'),null,this._getTitle()),c('React').createElement(c('XUIContextualDialogBody.react'),null,i._("Quer um jeito mais r\u00e1pido de salvar publica\u00e7\u00f5es de forma privada? Abra este menu suspenso e clique em Salvar.")),c('React').createElement(c('XUIContextualDialogFooter.react'),null,c('React').createElement(c('Link.react'),{className:"_222f",href:new (c('URI'))('/help/516581611792218'),target:'_blank',onClick:this._onLearnMoreLinkClick},i._("Saiba mais")),c('React').createElement(c('XUIDialogButton.react'),{label:i._("Entendi"),use:'confirm',action:'cancel',onClick:this._onButtonClick}))));}});f.exports=z;},null);
__d('SaveCaretMenuItem',['cx','Banzai','CSS','DOM','EntstreamFeedObject','EntstreamFeedObjectFollowup','Event','MenuItem','SaveState','SaveStateHandler','ge'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k='saved_for_later:caret_action',l='imp';i=babelHelpers.inherits(m,c('MenuItem'));j=i&&i.prototype;function m(n){'use strict';j.constructor.call(this,n);this._data=this._updateData();this.getRoot();c('Event').listen(this._anchor,'error',this.handleError.bind(this));c('SaveStateHandler').listen(n.primarysaveid,function(o){this._data=this._updateData();this._doRender(o);}.bind(this));}m.prototype.handleClick=function(){'use strict';var n=j.handleClick.call(this),o=c('EntstreamFeedObject').getRoot(c('ge')(this._data.storydomid));if(this._data.isSaveAction){c('SaveStateHandler').saving(this._data.allsaveids);o&&c('EntstreamFeedObjectFollowup').addFollowup(o,this._data.savefollowupmarkup,["_521o","_4-u3","_3yll"]);}else{c('SaveStateHandler').unsaving(this._data.allsaveids);var p=c('EntstreamFeedObjectFollowup').getFollowup(o);p&&c('EntstreamFeedObjectFollowup').removeFollowup(o);}return n;};m.prototype.handleError=function(){'use strict';if(this._data.isSaveAction){c('SaveStateHandler').saved(this._data.allsaveids);}else c('SaveStateHandler').unsaved(this._data.allsaveids);};m.prototype._updateData=function(){'use strict';var n=babelHelpers['extends']({},this._data);n.isSaveAction=c('SaveStateHandler').isSaveAction(n.primarysaveid);if(n.isSaveAction){n.markup=n.savemarkup;n.ajaxify=n.saveajaxify;n.title=n.savetitle;}else{n.markup=n.unsavemarkup;n.ajaxify=n.unsaveajaxify;n.title=n.unsavetitle;}return n;};m.prototype._doRender=function(n){'use strict';if(!this._root)return;switch(n){case c('SaveState').SAVING:case c('SaveState').UNSAVING:c('CSS').addClass(this._root,"_5arm");setTimeout(this.disable.bind(this),10);break;case c('SaveState').SAVED:case c('SaveState').UNSAVED:c('CSS').removeClass(this._root,"_5arm");setTimeout(this.enable.bind(this),10);break;}c('DOM').replace(this._anchor,this._renderItemContent());c('Event').listen(this._anchor,'error',this.handleError.bind(this));};m.prototype.onShow=function(){'use strict';var n=this._data.logdata;c('Banzai').post(k,{action:l,surface:n.surface,story_id:n.story_id,is_save:this._data.isSaveAction});};f.exports=m;},null);
__d('FbFeedOptionsExpander',['BanzaiLogger','CSS','DOMQuery','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={expand:function(i){var j=i.expander,k=i.menu,l=i.foldedClass,m=i.unfoldedClass,n=i.foldedItemClass,o=i.data;c('Event').listen(j,'click',function(){c('CSS').toggleClass(k.getRoot(),l);c('CSS').toggleClass(k.getRoot(),m);var p=c('DOMQuery').scry(k.getRoot(),'li.'+n);p.forEach(function(q){var r=q.getAttribute('data-feed-option-name');if(r)c('BanzaiLogger').log('FeedStoryOptionMenuLoggerConfig',{option_name:r,is_secondary:1,event_type:'imp',feed_location:o.location,session_id:o.session_id,is_sponsored:o.is_sponsored,is_self_story:o.is_self_story});},this);});}};f.exports=h;},null);
__d('TourAutoPilot',['ContextualBlindSingleton','DOMScroll','Tour'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('Tour'));i=h&&h.prototype;j.prototype.registerStep=function(k,l){'use strict';k.subscribe('tour-dialog-show',this.handleShowDialog.bind(this,k,l));i.registerStep.call(this,k,l);};j.prototype.handleLeavePage=function(){'use strict';this.openDialog&&this.openDialog.destroy();this.hideContextualBlind();i.handleLeavePage.call(this);};j.prototype.handleShowDialog=function(k,l){'use strict';var m=k.getContext();this.showContextualBlind(m,true);c('DOMScroll').scrollTo(m,true,true,0);};j.prototype.handleTourStop=function(){'use strict';this.hideContextualBlind(true);i.handleTourStop.call(this);};j.prototype.showContextualBlind=function(k,l){'use strict';if(this.blindShowing){c('ContextualBlindSingleton').show(k,0,0,0,0,l,this.opacity);}else c('ContextualBlindSingleton').fadeIn(k,0,0,0,0,l,this.opacity);this.blindShowing=true;};j.prototype.hideContextualBlind=function(k){'use strict';if(k){c('ContextualBlindSingleton').fadeOut();}else c('ContextualBlindSingleton').hide();this.blindShowing=false;};function j(){'use strict';h.apply(this,arguments);}Object.assign(j.prototype,{blindShowing:false,opacity:null});g.TourAutoPilot=j;},null);
__d('ComposerTour',['Arbiter','AsyncRequest','ComposerCitySharer','CSS','DOM','Parent','Tour','URI','$','TourAutoPilot'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('TourAutoPilot').TourAutoPilot;h=babelHelpers.inherits(k,j);i=h&&h.prototype;k.prototype.handleShowDialog=function(l,m){'use strict';var n=c('Parent').byClass(c('$')('composerTourStart'),'uiComposer');if(m!='start'){i.handleShowDialog.call(this,l,m);this.showContextualBlind(n);}};k.prototype.showContextualBlind=function(l){'use strict';c('CSS').addClass(document.body,'composerTourInProgress');i.showContextualBlind.call(this,l);};k.prototype.hideContextualBlind=function(l){'use strict';i.hideContextualBlind.call(this,l);c('CSS').removeClass(document.body,'composerTourInProgress');};k.openComposer=function(){'use strict';var l=c('Parent').byClass(c('$')('composerTourStart'),'uiComposerAttachment'),m=c('Parent').byTag(l,'form');m.action=l.getAttribute('data-endpoint');m.xhpc.value=l.id;m.xhpc.click();};k.closeOnComposerReset=function(){'use strict';c('Arbiter').subscribe('composer/reset',function(){c('Tour').getInstance().setTourStop();});};k.sendLocationOption=function(l,m){'use strict';var n=new (c('URI'))(m).addQueryData({use_location:l});new (c('AsyncRequest'))(n.toString()).send();};k.addCity=function(){'use strict';var l=c('Parent').byClass(c('$')('composerTourLocation'),'uiComposer'),m=c('ComposerCitySharer').getInstance(c('DOM').scry(l,'span.ComposerCitySharer')[0]);m&&m.useDefaultCity();};k.clearCity=function(){'use strict';var l=c('Parent').byClass(c('$')('composerTourLocation'),'uiComposer'),m=c('ComposerCitySharer').getInstance(c('DOM').scry(l,'span.ComposerCitySharer')[0]);m&&m.clearCity();};k.hideStartDialog=function(){'use strict';var l=c('Tour').getInstance().steps.start;l&&l.hide();};function k(){'use strict';h.apply(this,arguments);}f.exports=k;},null);
__d('legacy:composer-tour-js',['ComposerTour'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.ComposerTour=c('ComposerTour');},3);