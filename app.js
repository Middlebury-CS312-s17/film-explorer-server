
const http = require('http'),
    express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    server = http.createServer(app),

    movies = require('./lib/movies')('movies.json');

  const corsOptions = {
    methods: ['GET', 'PUT', 'POST'],
    origin: '*',
    allowedHeaders: ['Content-Type']
  };

  app.use(cors(corsOptions));
  app.use(express.static(__dirname +'/site'));
  app.use(bodyParser.json());

  app.get('/api/movies', (request, response) =>{
    response.send(movies.getAllMovies());
  });

  app.get('/api/movies/:id', (request, response) =>{
    response.send(movies.getMovie(request.params.id));
  });

  app.put('/api/movies/:id', (request, response) =>{

    movies.updateMovie(request.body);
    response.send(movies.getMovie(request.params.id));
    
  });


server.listen(4242);
console.log('Listening on port %d', server.address().port);
