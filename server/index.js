/*
 * Server's main file
 */

'use strict';

var Hapi = require('hapi'),
    config = require('./config'),
    routes = require('./routes');

var server = new Hapi.Server();
server.connection({
    host: config.server.host,
    port: config.server.port
});

var options = {
    opsInterval: 1000,
    reporters: [{
        reporter: require('good-console'),
        args:[{ log: '*', response: '*' }]
    }, {
        reporter: require('good-file'),
        args: [config.server.logsPath, { ops: '*' }]
    }]
};

server.register({
    register: require('good'),
    options: options
}, function (err) {
    if (err) {
        console.error(err);
    }
    else {
        server.start(function () {
            console.info("Server started at %s", server.info.uri);
        })
    }
});

routes.setup(server);
server.start();