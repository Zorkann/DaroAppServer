import  User  from "./entity/User";
import { getManager } from "typeorm";

module.exports = function (app, connection) {
  // todoList Routes
  const userRepo = getManager().getRepository(User);
  app.route('/users').get((request, response) => {
    userRepo.find().then(
      data => response.status(201).send({
        success: 'true',
        message: 'xx',
        data
      })
    )

  })
};
