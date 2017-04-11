# film-explorer-server
This is the server for our film explorer.

## Setup

When you download this, make sure to call `npm install`. This will install express (for easier specification of our routes), body-parser (so we can handle JSON in the messages
),  cors (to handle cross origin setup), and mongodb.


You will also need to create a data directory (`mkdir data`) for mongo to use


## Running

Start the database server. This will start the server running on port 5000

`mongod --config mongo.conf`

If this is the first time you have run the database server, the database will be empty. You can open it with

`mongoimport --db film-explorer --collection movies --jsonArray movies.json --port 5000`


Now start the server

`node app.js`
