define("#base/0.9.13/base",["class","events","./aspect","./attribute-debug"],function(a,b,c){var d=a("class"),e=a("events"),f=a("./aspect"),g=a("./attribute-debug"),h=d.create({Implements:[e,f,g],initialize:function(a){this.initAttrs(a),delete this.__changedAttrs,this.__ready=!0},destroy:function(){for(var a in this)this.hasOwnProperty(a)&&delete this[a]}});c.exports=h});