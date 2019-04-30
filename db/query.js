import {getConnection} from "typeorm";
import {User} from "./db/entity";

await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        { firstName: "Timber", lastName: "Saw" },
        { firstName: "Phantom", lastName: "Lancer" }
     ])
    .execute();