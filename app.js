
// set the port for the server
const PORT = 4200

// load the required modules
const http = require('http'),
	express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser');

// create the server
const app = express();
const server = http.createServer(app);

// configure the server
const corsOptions = {
	methods: ['GET', 'PUT', 'POST'],
	origin: '*',
	allowedHeaders: ['Content-Type', 'Accept', 'X-Requested-With', 'Origin']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


// setup the routes
app.get('/', (req, res)=>{
	res.send ("<h1>Don't Panic</h1>");
});



// start the server
server.listen(PORT);
console.log('Listening on port %d', server.address().port);



