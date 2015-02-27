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
 * All routes used by the server
 */

'use strict';

/**
 * routes singleton definition
 * @typedef {{}} Routes
 */
var routes = {};
/**
 * Initializes routes used by the server
 * @param {Hapi.Server} server A Hapi.js Server
 */
routes.setup = function setupRoutes (server) {
    // Test route
    server.route({
        method: 'GET',
        path: '/test',
        handler: handlers.test
    });
};

/**
 * All handlers used by the requests router
 * @type {object}
 */
var handlers = {};
/**
 * The test request handler
 */
handlers.testHandler = function testHandler (request, reply) {
    var output = {
        message: "This is a test of Hapi.js server."
    };
    reply(output);
};


module.exports = routes;
