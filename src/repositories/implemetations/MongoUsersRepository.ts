import { ObjectId } from "mongodb";
import { Database } from "../../config/DatabaseMongo";
import { User } from "../../entities/User";
import { IGoogleUserRepository } from "../IGoogleUserRepository";

const tableGoogleuser = 'googleUser'

export class MongoUsersRepository implements IGoogleUserRepository {
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
    
    async update(id: ObjectId, newUser: User): Promise<void> {
        const db = Database.getInstance().getDb()

        let response = await db.collection(tableGoogleuser).updateOne(
            { _id: id },
            { "$set": newUser }
        );
        
    }
    async save(user: User): Promise<void> {
        const db = Database.getInstance().getDb()
        await db.collection(tableGoogleuser).insertOne(user)
    }
}