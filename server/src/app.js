const express = require("express");
const cors = require("cors"); //porteiro da aplicação
const routes = require("../src/routes/routes");

//pegar config .env config
require("dotenv").config(); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

console.log('teste');


module.exports = app;