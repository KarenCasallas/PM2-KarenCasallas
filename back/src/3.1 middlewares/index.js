const validationMovieData = (req, res, next) =>{
    
    const result = { title,year,director,duration,genre,rate,poster } = req.body

    if (!title || !year || !director || !duration || !genre || !rate || !poster){
        res.status(400).json({
            message: "falta informacion para poder crear la movie",
        })
        
    } else {
        next()
    }
}

module.exports = {
    validationMovieData
}