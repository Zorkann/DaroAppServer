import User from "./entity/User";
import { getRepository } from "typeorm";

const defaultUser = {
  login: "darek",
  password: "siara"
};

const createDefaultUser = async () => {
  const UserRepository = getRepository(User);

  const user = await UserRepository.findOne(defaultUser);

  if (!user) {
    const newDefaultUser = UserRepository.create(defaultUser);
    await UserRepository.save(newDefaultUser);
    return;
  }
  return;
};

export default createDefaultUser;
