
const http = require('http'),
    express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    server = http.createServer(app),
    mongoClient = require('mongodb').MongoClient,
    mongoURL = 'mongodb://basin.cs.middlebury.edu:5000',
    ObjectID = require('mongodb').ObjectID;
 let db;
  //  movies = require('./lib/movies')('movies.json');

  const corsOptions = {
    methods: ['GET', 'PUT', 'POST'],
    origin: '*',
    allowedHeaders: ['Content-Type']
  };

  app.use(cors(corsOptions));
  app.use(express.static(__dirname +'/site'));
  app.use(bodyParser.json());

  app.get('/api/movies', (request, response) =>{
    db.collection('movies').find().toArray((err, documents)=>{
      response.send(documents);
    });
  });

  app.get('/api/movies/:id', (request, response) =>{
    const movieId = request.params.id;

    db.collection('movies').find({id:movieId}).next((err, document)=>{
      response.send(document);
    });
  });

  app.put('/api/movies/:id', (request, response) =>{

    let movie = request.body;
    movie._id = ObjectID.createFromHexString(movies._id);

    db.collection('movies').update({id:movieId}, {$set:movie},(err, result)=>{
      response.sendStatus(200);
    });


  });

mongoClient.connect(mongoURL, (err, database)=>{
  console.log(err);
  db = database;
  server.listen(4242);
  console.log('Listening on port %d', server.address().port);
})
