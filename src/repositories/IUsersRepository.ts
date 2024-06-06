import { ObjectId } from "mongodb";
import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>
    findById(id: ObjectId): Promise<User>

    updateUser(id: ObjectId, newUser: User): Promise<void>
    createUser(user: User): Promise<void>
    createOrUpdateUser(user: User): Promise<User>


    // findById: async function (id) {
    //     const db = await connect();
    //     return await db.collection("googleUser").findOne({ _id: new ObjectId(id) });
    // },
    // findByEmail: async function (email) {
    //     const db = await connect();
    //     return await db.collection("googleUser").findOne({ email: email });
    // },
    // updateUser: async function (id, user) {
    //     const db = await connect();
    //     let response = await db.collection('googleUser').updateOne(
    //         { _id: new ObjectId(id) },
    //         { "$set": this.model(user) }
    //     );
    //     return response;
    // },
    // createUser: async function (user) {
    //     if (!user) throw new Error("User undefined")
    //     const userFound = await this.findByEmail(user.email);
    //     if (userFound) throw new Error("Usuário já existe no banco");

    //     const db = await connect();
    //     return await db.collection('googleUser').insertOne(this.model(user));
    // },
    // createAndUpdateUser: async function (user) {
    //     const userFound = await this.findByEmail(user.email);
    //     user.role = userFound.role
    //     if (userFound) this.updateUser(userFound._id, user);
    //     else this.createUser(user);

    //     return await this.findByEmail(user.email);
    // }
}