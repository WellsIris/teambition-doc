define([
    'jquery',
    'underscore',
    'backbone',
    'siteView',
    'docView',
    'docModel',
    'docs'
], function ($,_,Backbone,siteView,docView,dovModel,docs){
	var initialize = function(){
		console.log('app initialize start');
		window.doc 		= new Object();
		doc.docCache	= new Array();
		init();
		function init (){
			// doc.siteView = new siteView;
			doc.docView = new docView;
			doc.docs	= new docs;
		}
	};
	return {
		initialize : initialize
	};
});