define(['jquery','underscore','backbone'],function ($,_,Backbone){
	var siteView = Backbone.View.extend({
		el:$('body'),
		tagName : 'html',
		events:{
			'click #left_toggle'      : 'toggle',
		},
		toggle: function(){
            $('#left').animate({width:0},600);
        }
	});
	return siteView;
});