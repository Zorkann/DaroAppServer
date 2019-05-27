import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { createConnection } from "typeorm";
var app = express();

createConnection().then(async connection => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  const routes = require('./routes/routes'); //importing route
  routes(app)

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
  });
}).catch(error => console.log(error));
