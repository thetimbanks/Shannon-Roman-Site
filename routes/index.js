
/*
 * GET home page.
 */
 
var albums = {
	"BrandonandTina": "Brandon and Tina",
	"RebeccaRoman": "Rebecca Roman",
	"WesleyCastle": "Wesley Castle",
	"SaraandGrant": "Sara and Grant",
	"LaurenandAaron": "Lauren and Aaron"
};

var config = require('../config')
	, email = require('mailer');

exports.index = function(req, res){
  res.render('index', { title: 'Title' })
};

exports.photography = function(req, res){
  res.render('photography', { title: 'Photography' })
};

	exports.engagement = function(req, res){
	  res.render('engagement', { title: 'Engagement' })
	};
	exports.family = function(req, res){
	  res.render('family', { title: 'Family' })
	};
	exports.senior = function(req, res){
	  res.render('senior', { title: 'Senior Pictures' })
	};

exports.painting = function(req, res){
  res.render('painting', { title: 'Painting' })
};

exports.about = function(req, res){
  res.render('about', { title: 'About' })
};

exports.contact = function(req, res){
	if (req.route.method === "post") {
		if (req.body.name != "" && req.body.email != "" && req.body.comments != "") {
			body = "A user has filled out the contact form with the following information.";
			body += "Name: " + req.body.name;
			body += "Email: " + req.body.email;
			body += "Comment: " + req.body.comments;
			
			email.send(merge_options(config.sendgrid,
				{
			  		subject : "Message from WeeAcorn!",
			  		body : body
			  	}),
			  function(err, result){
			    if(err){ console.log(err); }
			  });
		} else {
			console.log("Errors on form");
		}
	}
  res.render('contact', { title: 'Contact' })
};

function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}