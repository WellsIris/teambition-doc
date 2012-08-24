define(['jquery','underscore','backbone','docModel'
	],function ($,_,Backbone,docModel){
	var DocCollection = Backbone.Collection.extend({
	    model:docModel,
		docsperpage:10,
		url:'/docs',		
	});
	return DocCollection;
});