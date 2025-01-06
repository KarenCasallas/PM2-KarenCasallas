require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
    //realizar la conexion a la base de datos
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.z1ijm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}.`)
};


module.exports = dbCon;