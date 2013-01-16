//config
require.config({
	paths:{
		//libs
		jquery 		: 'libs/jquery/jquery-min',
		underscore 	: 'libs/underscore/underscore-min',
		backbone 	: 'libs/backbone/backbone-optamd3-min',
		text 		: 'libs/require/text',
		doT			: 'libs/doT/doT',
		//major
		app 		: 'src/app',
		//model
		docModel	: 'src/models/doc',
		//views
		siteView	: 'src/views/site',
		docView		: 'src/views/doc',
		//Collection
		docs		: 'src/collections/docs'
	}
});

require([
    'app'
], function( App ){
	console.log('main.app.initialize start');
	App.initialize();
	console.log('main.app.initialize done');
});