import User from "../entity/User";
import { getManager } from "typeorm";
import { getConnection } from "typeorm";

module.exports = async function (app) {
  // // todoList Routes
  app.route('/users').get((request, response) => {
    const userRepo = getManager().getRepository(User);
    userRepo.find().then(
      data => response.status(201).send({
        success: 'true',
        message: 'xx',
        data
      })
    )
  });

  // app.route('/addUser').post(async (request, response) => {
  //   const { name, surname, hallNumber, tableNumber, cost, couples } = request.body.newUser
  //   const newUser = {
  //     title: <string>name,
  //     text: <string>surname,
  //     textY: <string>hallNumber,
  //     textX: <string>tableNumber,
  //     textXY: <string>cost,
  //     // textXY: <string>'',
  //   }
  //   try {
  //     await getConnection()
  //       .createQueryBuilder()
  //       .insert()
  //       .into(User)
  //       .values(newUser)
  //       .execute();
  //     response.status(201).send('sucess')
  //   } catch (err) {
  //     console.log(err)
  //     response.status(401).send('error')
  //   }
  // })

};
