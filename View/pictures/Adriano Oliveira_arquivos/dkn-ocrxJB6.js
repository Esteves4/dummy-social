/*!CK:3130322293!*//*1459161941,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["HicDU"]); }

__d('AccessibilityWebAssistiveTechTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$AccessibilityWebAssistiveTechTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers['extends']({},this.$AccessibilityWebAssistiveTechTypedLogger1,j);return this;};h.prototype.setIndicatedBrowsers=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.indicated_browsers=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setVC=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers['extends']({},this.$AccessibilityWebAssistiveTechTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={indicated_browsers:true,vc:true};f.exports=h;},null);