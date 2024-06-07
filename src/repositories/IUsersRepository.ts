import { ObjectId } from "mongodb";
import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>
    findById(id: ObjectId): Promise<User>

    update(id: ObjectId, newUser: User): Promise<void>
    save(user: User): Promise<void>

}