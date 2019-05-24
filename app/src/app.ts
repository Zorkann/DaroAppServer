import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";

createConnection().then(async connection => {
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./routes'); //importing route
routes(app)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
});
}).catch(error => console.log(error));
