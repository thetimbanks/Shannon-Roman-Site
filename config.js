var config = {};

config.sendgrid = {};

config.sendgrid.host = "smtp.sendgrid.net";
config.sendgrid.port = "587";
config.sendgrid.domain = "weeacorn.com";
config.sendgrid.authentication = "login";
config.sendgrid.username = "thetimbanks";
config.sendgrid.password = "sendgridpw";
config.sendgrid.from = "thetimbanks@gmail.com";

module.exports = config;