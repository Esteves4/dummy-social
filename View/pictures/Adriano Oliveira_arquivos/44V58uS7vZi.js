/*1462284927,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RFcMJ"]); }

__d('ChatAddToThreadButton.react',['cx','fbt','Link.react','ReactComponentWithPureRenderMixin','React','TrackingNodes'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ChatAddToThreadButton',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{isFBAtWork:j.bool,onClick:j.func,shown:j.bool},render:function(){if(!this.props.shown)return null;var l=this.props.isFBAtWork?i._("Adicione mais colegas de trabalho ao bate-papo"):i._("Adicione mais amigos para conversar"),m=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.ADD_TO_THREAD);return (c('React').createElement(c('Link.react'),{'aria-label':l,className:"_3olv _3jyj button",'data-ft':m,'data-hover':'tooltip','data-tooltip-alignv':'top','data-tooltip-content':l,onClick:this.props.onClick}));}});f.exports=k;},null);
__d("XVideoCallMissedCallDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/videocall\/dismiss_all_missed_call_dialog\/",{});},null);