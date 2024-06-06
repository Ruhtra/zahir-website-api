import { ObjectId } from "mongodb";
import { Database } from "../../config/DatabaseMongo";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

const tableGoogleuser = 'googleUser'

export class MongoUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const db = Database.getInstance().getDb()

        const user = await db.collection<User>(tableGoogleuser).findOne({
            email: email
        }/*, { projection: { _id: 0 } }*/)

        return user;
    }
    async findById(id: ObjectId): Promise<User> {
        const db = Database.getInstance().getDb()

        const user = await db.collection<User>(tableGoogleuser).findOne({
            _id: id
        }/*, { projection: { _id: 0 } }*/)

        return user;
    }
    async updateUser(id: ObjectId, newUser: User): Promise<void> {
        const db = Database.getInstance().getDb()

        let response = await db.collection(tableGoogleuser).updateOne(
            { _id: id },
            { "$set": newUser }
        );
        
    }
    async createUser(user: User): Promise<void> {
        const db = Database.getInstance().getDb()
        await db.collection(tableGoogleuser).insertOne(user)
    }

    async createOrUpdateUser(user: User): Promise<User> {
        const userFounded = await this.findByEmail(user.email)

        if (!userFounded) this.updateUser(userFounded.id, user)
        else this.createUser(user)

        return await this.findByEmail(user.email)
    }
}