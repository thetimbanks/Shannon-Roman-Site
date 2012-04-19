
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , stylus = require('stylus')
  , nib = require('nib')
  , email = require('mailer')
  , config = require('./config');

var app = module.exports = express.createServer();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib())
    .import('nib');
}

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  
  app.use(stylus.middleware({
        src: __dirname + "/public"
        , compile: compile
    }));
    
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

app.helpers({
  renderScriptTags: function (all) {
    if (all != undefined) {
      return all.map(function(script) {
        return '<script src="/javascripts/' + script + '"></script>';
      }).join('\n ');
    }
    else {
      return '';
    }
  }
});

app.dynamicHelpers({
  scripts: function(req, res) {
    return ['jquery-1.7.1.min.js'];
  }
});

// Routes
app.get('/', routes.index);

app.get('/photography', routes.photography);
app.get('/photography/engagement', routes.engagement);
app.get('/photography/family', routes.family);
app.get('/photography/portrait', routes.portrait);

app.get('/painting', routes.painting);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.post('/contact', routes.contact);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
