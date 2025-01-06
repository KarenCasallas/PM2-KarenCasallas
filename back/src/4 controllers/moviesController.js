const { getMoviesService , createMovieService } = require("../services/moviesService")

const getMoviesController = async (req,res,next) => {
    try {
        const result = await getMoviesService();
        res.status(200).json({
            message: "aqui estan todas las peliculas",
            data:(result)
        })
    } catch(error){
        res.status(500).json({
            message: "hubo un error en la aplicacion",
            error: error.message
        })
    }
}

const createMovieController = async (req,res,next) => {

    try {
        const {title, year, director, duration, genre, rate, poster} = req.body;

        const newMovie = await createMovieService({title, year, director, duration, genre, rate, poster});
            res.status(201).json({
            message: "se creo la movie con exito"
        })

    } catch (error){
    
        res.status(400).json({
             message: "hubo un error en los datos proporcionados para crear la pelicula",
             error: error.message
        }) 
    }
}
 
module.exports = {
    getMoviesController,
    createMovieController,
};