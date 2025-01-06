// configurar el servidor 

const express = require("express");
const router = require("./routes");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

module.exports = app;