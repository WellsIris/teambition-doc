//config
require.config({
	paths:{
		//libs
		jquery 		: 'libs/jquery/jquery-min',
		underscore 	: 'libs/underscore/underscore-min',
		backbone 	: 'libs/backbone/backbone-optamd3-min',
		text 		: 'libs/require/text',
		//major
		app 		: 'src/app',
		//views
		doc 		: 'src/views/doc'
	}
});

require([
    'app'
], function( App ){
	console.log('main.app.initialize start');
	App.initialize();
	console.log('main.app.initialize done');
});