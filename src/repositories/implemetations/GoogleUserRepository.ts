import { ObjectId } from "mongodb";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { prismaClient } from "../../prisma";

export class GoogleUserRepository implements IUsersRepository {
    findByEmail(email: string): Promise<User> {
        const googleUser = prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        return googleUser
    }
    findById(id: ObjectId): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: ObjectId, newUser: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
}