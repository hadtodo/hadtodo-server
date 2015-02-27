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
 * An address where the server should run,
 * by default uses environment variable 'HOST'
 * or if not set: '0.0.0.0'
 * @type {string} [host='0.0.0.0']
 */
config.server.host = process.env.HOST || '0.0.0.0';
/**
 * A port on which the server should be established,
 * by default uses environment varialbe 'PORT'
 * or if not set: 3000
 * @type {number} [port=3000]
 */
config.server.port = process.env.PORT || 3000;
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
