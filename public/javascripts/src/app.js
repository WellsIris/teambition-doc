define([
    'jquery',
    'underscore',
    'backbone',
    'docView',
    'docModel',
    'docs'
], function ($,_,Backbone,docView,dovModel,docs){
	var initialize = function(){
		console.log('app initialize start');
		window.doc 		= new Object();
		doc.docCache	= new Array();
		init();
		function init (){
			doc.docs=new docs;
		}
	};
	return {
		initialize : initialize
	};
});