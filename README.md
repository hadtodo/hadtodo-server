# hadtodo-server
The API server for __hadtodo__ service

## Installation
__hadtodo__ server uses [MongoDB](//mongodb.org) database, so you need to install it first,
[please follow this simple guide](http://docs.mongodb.org/manual/administration/install-on-linux/).

Then run:
```
npm install
```

By default the server is running on port __6000__ or uses environment variable __PORT__
and looks for MongoDB server at __mongodb://0.0.0.0:27017__. To change this, check __server/config.js__ file.

## License
hadtodo is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

hadtodo is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with hadtodo.  If not, see <http://www.gnu.org/licenses/>.
