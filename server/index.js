/*
 * Server's main file
 */

'use strict';

var fs = require('fs'),
    path = require('path'),

    Hapi = require('hapi'),
    config = require('./config'),
    routes = require('./routes');

var server = new Hapi.Server();
server.connection({
    host: config.server.host,
    port: config.server.port
});

var loggerOptions = {
    opsInterval: 1000,
    reporters: [{
        reporter: require('good-console'),
        args:[{ log: '*', response: '*' }]
    }, {
        reporter: require('good-file'),
        args: [config.server.logsPath, { ops: '*' }]
    }]
};

var mongoOptions = {
    url: config.mongodb.url,
    settings: {
        db: {
            native_parser: false
        }
    }
};

// Setup logger
// Precreate logs directory
try {
    fs.mkdirSync(
        path.dirname(config.server.logsPath)
    );
} catch (err) {
    if (err.code !== 'EEXIST') {
        throw err;
    }
}
server.register({
    register: require('good'),
    options: loggerOptions
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

// Setup MongoDB
server.register({
    register: require('hapi-mongodb'),
    options: mongoOptions
}, function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
});

routes.setup(server);
server.start();