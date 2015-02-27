/*
 * hadtodo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * hadtodo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with hadtodo.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Server main file
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
