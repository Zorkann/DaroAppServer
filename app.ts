import "reflect-metadata";
import * as express from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import PP from "./src/entity/PP";
import User from "./src/entity/User";


createConnection(
  {
    type: "postgres",
    host: "localhost",
    port: 8081,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [User, PP], // NEED TO INCLUDE ALL ENTITIES
    synchronize: true,
    logging: false
  }
).then(async connection => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  const user = new User();
  user.title = 'TEST';
  user.text = 'TESTX';
  const savedPhoto = await connection.manager.save(user);
  console.log("Photo has been saved", savedPhoto.id);
  let photoRepository = connection.getRepository(User);
  let allPhotos = await photoRepository.find();
    console.log("All photos from the db: ", allPhotos);

  const test = new PP();
  test.number = '1';
  test.descr = 'desc';
  const t = await connection.manager.save(test);
  console.log("Photo has been saved", t.id);
  let tRepo = connection.getRepository(PP);
  let allT = await tRepo.find();
    console.log("All photos from the db: ", allT);

  // var routes = require('./routes'); //importing route
  // routes(app, connection)

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });
}).catch(error => console.log(error));
