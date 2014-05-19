if (!global.dblog) {
    global.dblog = {};
}
var node_env = {
	port: process.env.PORT || 5000,
	name: process.env.NODE_ENV || 'development'
};

dblog.settings = require('config/settings.js')(node_env);
dblog.lodash = require('lodash');
dblog.Hapi = require('hapi');
dblog.Joi = require('joi');

var routes = require('./routes');
var options = {};
options.views = {
    engines: {
                 html: 'ejs'
            },
    path: __dirname + '/templates'
};

var server = new dblog.Hapi.Server(dblog.settings.host, dblog.settings.port, options);
server.route(
    [
    	routes.Site.public,
    	routes.Site.main,
    	routes.Site.api_about,
    ]
);
server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});
