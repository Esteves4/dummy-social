if (self.CavalryLogger) { CavalryLogger.start_js(["l1evU"]); }

__d('MessengerTokenizerToken.react',['cx','Keys','React','SearchableEntry','joinClasses'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=100,k=c('React').createClass({displayName:'MessengerTokenizerToken',propTypes:{className:i.string,entry:i.instanceOf(c('SearchableEntry')),index:i.number,label:i.string.isRequired,onRemove:i.func},render:function(){return (c('React').createElement('span',{className:c('joinClasses')(this.props.className,"_14-8"),label:null,onClick:this._handleClick,onKeyDown:this._handleKeyDown,tabIndex:this.props.index+j},c('React').createElement('span',{'aria-label':this.props.label,title:this.props.label,className:"_14-9"},this.props.label)));},_handleClick:function(event){event.stopPropagation();},_handleKeyDown:function(event){if(event.keyCode===c('Keys').BACKSPACE){event.preventDefault();this.props.onRemove&&this.props.onRemove(this.props.entry);}}});f.exports=k;},null);