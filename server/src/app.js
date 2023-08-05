const express = require("express");
const cors = require("cors");

//puxar config .env config
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

module.exports = app;