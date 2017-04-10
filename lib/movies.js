const fs = require('fs');

module.exports = function (dataFile){
  const contents = fs.readFileSync(dataFile);
  const data = JSON.parse(contents);

  let movies = {};

  data.forEach((movie) => {
    movies[movie.id] = movie;
  });

  const getAllMovies = function(){
    const allMovies = [];
    for (let movieID in movies){
      allMovies.push(movies[movieID]);
    }
    return allMovies;
  };

  const getMovie = function(id){
    return movies[id];
  };

  const updateMovie = function(movie){
    movies[movie.id] = movie;

  }



  return {
    getAllMovies: getAllMovies,
    getMovie: getMovie,
    updateMovie: updateMovie
  };
};
