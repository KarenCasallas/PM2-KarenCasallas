const Movie = require("../models/Movie");

const getMoviesService = async() => {
   const movies = await Movie.find();
   return movies;
}

const createMovieService = async(movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
}

module.exports = {
    getMoviesService, createMovieService,
}