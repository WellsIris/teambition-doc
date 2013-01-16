
/*
 * GET home page.
 */

exports.index = function(req,res){
	res.render('index',{
		title:'Adways-node-demo'
	});
};