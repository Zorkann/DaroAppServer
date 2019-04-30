import "reflect-metadata";
import * as express from "express";
import {Request, Response} from "express";
// import db from './db/db';
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {User} from "./db/entity";

createConnection().then(async connection => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  var routes = require('./routes'); //importing route
  routes(app, connection)

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });

}).catch(error => console.log(error));

// Set up the express app

function addUser() {
  let user = new User();
  user.firstName = "Me and Bears";
  user.lastName = "I am near polar bears";
  user.hall = "user-with-bears.jpg";
  user.table = '1';
  user.cash = 'true';
  user.couples = 'true';
}
