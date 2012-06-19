define("#widget/0.9.16/templatable-mobile",["#zepto/0.8.0/zepto","#handlebars/1.0.0/handlebars","#widget/0.9.16/ast-printer"],function(e,t,n){function o(e){var t=i.parse(e).statements,n="";for(var s=0,o=t.length;s<o;s++){var u=t[s];u.type==="content"?n+=u.string:n+="{{STAT "+s+"}}"}n=l(n);var a=r(n);return a.template=n,a.statements=t,a}function u(e,t){var n=e.find(t);if(n.length===0)throw new Error("Invalid template selector: "+t);var r=c(n.html()),s=e.statements;return r=r.replace(a,function(e,t,n){return i.print(s[n])}),r}function l(e){return e.replace(a,"<!--$1-->")}function c(e){return e.replace(f,"$1")}var r=e("#zepto/0.8.0/zepto"),i=e("#handlebars/1.0.0/handlebars");i.print=e("#widget/0.9.16/ast-printer").print;var s={templateHelpers:null,templateObject:null,parseElementFromTemplate:function(){this.templateObject=o(this.template),this.element=r(this.compile())},compile:function(e,t){e||(e=this.template),t||(t=this.model),t.toJSON&&(t=t.toJSON());var n=this.templateHelpers;if(n)for(var r in n)n.hasOwnProperty(r)&&i.registerHelper(r,n[r]);var s=i.compile(e)(t);if(n)for(r in n)n.hasOwnProperty(r)&&delete i.helpers[r];return s},renderPartial:function(e){var t=this._getTemplatePartial(e);return this.$(e).html(this.compile(t)),this},_getTemplatePartial:function(e){var t;return e?t=u(this.templateObject,e):t=this.template,t}};n.exports=s;var a=/({{STAT (\d+)}})/g,f=/(?:<|&lt;)!--({{STAT \d+}})--(?:>|&gt;)/g});