import { ObjectId } from "mongodb";
import { IGoogleUserRepository } from "../IGoogleUserRepository";
import { prismaClient } from "../../prisma";
import { Googleuser } from "@prisma/client";

export class GoogleUserRepository implements IGoogleUserRepository {
    async findByEmail(email: string): Promise<Googleuser> {
        const googleUser = await prismaClient.googleuser.findFirst({
            where: {
                email: email
            }
        })

        return googleUser
    }
    async findById(id: ObjectId): Promise<Googleuser> {
        const googleUser = await prismaClient.googleuser.findFirst({
            where: {
                id: id.toString()
            }
        })

        return googleUser
    }
    async update(id: ObjectId, newUser: Googleuser): Promise<void> {
        const googleUser = await prismaClient.googleuser.update({
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
    async save(user: Googleuser): Promise<void> {
        const googleUser = await prismaClient.googleuser.create({
            data: user
        })

        console.log(googleUser);
        
    }
}