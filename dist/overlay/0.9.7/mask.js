define("#overlay/0.9.7/mask",["#jquery/1.7.2/jquery","#overlay/0.9.7/overlay","#position/0.9.2/position","#iframe-shim/0.9.2/iframe-shim","#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser","#widget/0.9.16/auto-render"],function(e,t,n){var r=e("#jquery/1.7.2/jquery"),i=e("#overlay/0.9.7/overlay"),s=(r.browser||0).msie&&r.browser.version==6,o=r(document.body),u=r(document),a=i.extend({attrs:{width:s?u.outerWidth(!0):"100%",height:s?u.outerHeight(!0):"100%",className:"ui-mask",style:{opacity:.2,backgroundColor:"#000",position:s?"absolute":"fixed"},align:{baseElement:s?o:undefined}},show:function(){return s&&(this.set("width",u.outerWidth(!0)),this.set("height",u.outerHeight(!0))),a.superclass.show.call(this)},_onRenderBackgroundColor:function(e){this.element.css("backgroundColor",e)},_onRenderOpacity:function(e){this.element.css("opacity",e)}});n.exports=new a});