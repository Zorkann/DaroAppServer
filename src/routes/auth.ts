import User from "../entity/User";
import { getRepository } from "typeorm";
import { Router } from "express";

const router = Router();

router.post("/login", async (request, response) => {
  const UserRepository = getRepository(User);
  const login: string = request.body.login;
  const password: string = request.body.password;

  const user = await UserRepository.findOne({
    login,
    password,
  });

  if (user) {
    return response.sendStatus(200);
  } else {
    return response.status(400).send({
      error: "Wrong credentials",
    });
  }
});

router.get("/logout", async (request, response) => {
  return response.sendStatus(200);
});

router.get("/users", async (request, response) => {
  const UserRepository = getRepository(User);
  const users = await UserRepository.find();
  if (users) {
    return response.status(200).send({
      users: users.map((user) => user.login),
    });
  }
});

export default router;
