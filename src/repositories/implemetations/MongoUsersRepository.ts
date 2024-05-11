
import { WithId } from "mongodb";
import { Database } from "../../config/DatabaseMongo";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MongoUsersRepository implements IUsersRepository {
    async findByUsername(username: string): Promise<User> {
        const db = Database.getInstance().getDb()

        const user = await db.collection<User>("login").findOne({
            username: username
        }, { projection: { _id: 0 } })

        return user;
    }
    async save(user: User): Promise<void> {
        const db = Database.getInstance().getDb()
        await db.collection('login').insertOne(user)
    }
}