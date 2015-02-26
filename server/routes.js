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
        handler: handlers.testHandler
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