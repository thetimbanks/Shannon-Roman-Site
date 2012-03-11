
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Title' })
};

exports.photography = function(req, res){
  res.render('photography', { title: 'Photography' })
};

	exports.album = function(req, res){
	  res.render('album', { title: 'Album' })
	};

exports.painting = function(req, res){
  res.render('painting', { title: 'Painting' })
};

exports.about = function(req, res){
  res.render('about', { title: 'About' })
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact' })
};