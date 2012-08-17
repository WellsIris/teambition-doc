define([
    'jquery',
    'underscore',
    'backbone',
    'doc'
], function ($,_,Backbone,Doc){
	var initialize = function(){
		console.log('app.initialize start');
		var view = new Doc;
		console.log('app.initialize done')
	};
	return {
		initialize : initialize
	};
});