
/*
 * GET home page.
 */

exports.index = function(req, res){
	var lastPage = req.session.lastPage || 'none';
	req.session.lastPage = 'index';
  res.render('index', { title: 'Index Page', lastPage: lastPage });
};

exports.another = function(req, res){
	var lastPage = req.session.lastPage || 'none';
	req.session.lastPage = 'another page';
	res.render('index', { title: 'Another Page', lastPage: lastPage });
};

exports.index2 = function(req, res){
	var lastPage = req.session.lastPage || 'none';
	req.session.lastPage = 'index 2';
  res.render('index2', { title: 'Index Page 2', lastPage: lastPage });
};