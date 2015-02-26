/**
 * Config stuff
 */

'use strict';

/**
 * Main configuration object
 * @typedef {{server}} Config
 */
var config = {};

/**
 * Server configuration object
 * @typedef {{host, port, logsPath}} ConfigServer
 */
config.server = {};
/**
 * A address where the server should run,
 * by default uses environment variable 'HOST'
 * or if not set: '0.0.0.0'
 * @type {string} [host='0.0.0.0']
 */
config.server.host = process.env.HOST || '0.0.0.0';
/**
 * A port on which the server should be established,
 * by default uses environment varialbe 'PORT'
 * or if not set: 6000
 * @type {number} [port=6000]
 */
config.server.port = process.env.PORT || 6000;
/**
 * A path to the logs file
 * @type {string} [logsPath='./logs/server.log']
 */
config.server.logsPath = './logs/server.log';

/**
 * MongoDB configuration object
 * @typedef {{url}}
 */
config.mongodb = {};
/**
 * MongoDB address
 * The url can include user:password to authenticate
 * @type {string} [url='mongodb://0.0.0.0:27017']
 */
config.mongodb.url = 'mongodb://0.0.0.0:27017';


module.exports = config;