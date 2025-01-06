const { Router } = require("express");
const { getMoviesController, createMovieController } = require("../controllers/moviesController");
const { validationMovieData } = require("../middlewares/index");

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.post("/", validationMovieData,createMovieController);

module.exports = moviesRouter;