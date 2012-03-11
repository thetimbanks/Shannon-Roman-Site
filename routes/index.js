
/*
 * GET home page.
 */
 
var albums = {
	"BrandonandTina": "Brandon and Tina",
	"Rebecca Roman": "Rebecca Roman",
	"WesleyCastle": "Wesley Castle",
	"SaraandGrant": "Sara and Grant",
	"LaurenandAaron": "Lauren and Aaron"
}

exports.index = function(req, res){
  res.render('index', { title: 'Title' })
};

exports.photography = function(req, res){
  res.render('photography', { title: 'Photography' })
};

	exports.album = function(req, res){
	  res.render('album', { title: albums[req.params.title] })
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