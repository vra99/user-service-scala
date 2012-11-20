/*
 AngularJS v1.1.0
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A,f,u){'use strict';f.module("ngResource",["ng"]).factory("$resource",["$http","$parse",function(v,w){function g(b,c){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(c?null:/%20/g,"+")}function l(b,c){this.template=b+="#";this.defaults=c||{};var a=this.urlParams={};j(b.split(/\W/),function(c){c&&b.match(RegExp("[^\\\\]:"+c+"\\W"))&&(a[c]=!0)});this.template=b.replace(/\\:/g,":")}function s(b,c,a){function f(d){var b=
{};j(c||{},function(a,x){var m;a.charAt&&a.charAt(0)=="@"?(m=a.substr(1),m=w(m)(d)):m=a;b[x]=m});return b}function e(a){t(a||{},this)}var y=new l(b),a=r({},z,a);j(a,function(d,g){var l=d.method=="POST"||d.method=="PUT"||d.method=="PATCH";e[g]=function(a,b,c,g){var i={},h,k=o,p=null;switch(arguments.length){case 4:p=g,k=c;case 3:case 2:if(q(b)){if(q(a)){k=a;p=b;break}k=b;p=c}else{i=a;h=b;k=c;break}case 1:q(a)?k=a:l?h=a:i=a;break;case 0:break;default:throw"Expected between 0-4 arguments [params, data, success, error], got "+
arguments.length+" arguments.";}var n=this instanceof e?this:d.isArray?[]:new e(h);v({method:d.method,url:y.url(r({},f(h),d.params||{},i)),data:h}).then(function(a){var b=a.data;if(b)d.isArray?(n.length=0,j(b,function(a){n.push(new e(a))})):t(b,n);(k||o)(n,a.headers)},p);return n};e.bind=function(d){return s(b,r({},c,d),a)};e.prototype["$"+g]=function(a,b,d){var c=f(this),i=o,h;switch(arguments.length){case 3:c=a;i=b;h=d;break;case 2:case 1:q(a)?(i=a,h=b):(c=a,i=b||o);case 0:break;default:throw"Expected between 1-3 arguments [params, success, error], got "+
arguments.length+" arguments.";}e[g].call(this,c,l?this:u,i,h)}});return e}var z={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},o=f.noop,j=f.forEach,r=f.extend,t=f.copy,q=f.isFunction;l.prototype={url:function(b){var c=this,a=this.template,f,b=b||{};j(this.urlParams,function(e,d){f=g(b[d]||c.defaults[d]||"",!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+");a=a.replace(RegExp(":"+d+"(\\W)"),f+"$1")});var a=
a.replace(/\/?#$/,""),e=[];j(b,function(a,b){c.urlParams[b]||e.push(g(b)+"="+g(a))});e.sort();a=a.replace(/\/*$/,"");return a+(e.length?"?"+e.join("&"):"")}};return s}])})(window,window.angular);
