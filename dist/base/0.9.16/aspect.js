define("#base/0.9.16/aspect",[],function(e,t){function r(e,t,r,o){var u=t.split(n),a,f;while(a=u.shift())f=i(this,a),f.__isAspected||s.call(this,a),this.on(e+":"+a,r,o);return this}function i(e,t){var n=e[t];if(!n)throw new Error("Invalid method name: "+t);return n}function s(e){var t=this[e];this[e]=function(){var n=Array.prototype.slice.call(arguments),r=["before:"+e].concat(n);this.trigger.apply(this,r);var i=t.apply(this,arguments);return this.trigger("after:"+e,i),i},this[e].__isAspected=!0}t.before=function(e,t,n){return r.call(this,"before",e,t,n)},t.after=function(e,t,n){return r.call(this,"after",e,t,n)};var n=/\s+/});