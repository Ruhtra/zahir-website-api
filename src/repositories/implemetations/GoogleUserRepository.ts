import { ObjectId } from "mongodb";
import { IGoogleUserRepository } from "../IGoogleUserRepository";
import { prismaClient } from "../../prisma";
import { GoogleUser } from "../../entities/User";

export class GoogleUserRepository implements IGoogleUserRepository {
    async findByEmail(email: string): Promise<GoogleUser> {
        const googleUser = await prismaClient.googleUser.findFirst({
            where: {
                email: email
            }
        })

        return googleUser
    }
    async findById(id: ObjectId): Promise<GoogleUser> {
        const googleUser = await prismaClient.googleUser.findFirst({
            where: {
                id: id.toString()
            }
        })

        return googleUser
    }
    async update(id: ObjectId, newUser: GoogleUser): Promise<void> {
        const googleUser = await prismaClient.googleUser.update({
            data: {
                email: newUser.email,
                name: newUser.name,
                picture: newUser.picture,
                role: newUser.role
            },
            where: {
                id: id.toString()
            }
        })

        console.log(googleUser);


    }
    async save(user: GoogleUser): Promise<void> {
        const googleUser = await prismaClient.googleUser.create({
            data: user
        })

        console.log(googleUser);

    }
    async upsert(email: string, user: Omit<GoogleUser, "id">): Promise<void> {
        const googleuser = await prismaClient.googleUser.upsert({
            create: user,
            update: user,
            where: {
                email: email
            }
        })

        console.log(googleuser);
        
    }

}