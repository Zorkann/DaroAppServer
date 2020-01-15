import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { createConnection } from "typeorm";
import routes from "./routes";
import createDefaultUser from "./createDefaultUser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

createConnection()
  .then(async connection => {
    await connection.runMigrations();
    createDefaultUser();
    app.use("/auth", routes.auth);

    app.listen(PORT, () => {
      console.log(`server on port ${PORT}`);
    });
  })
  .catch(error => console.log(error));
