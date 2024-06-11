import { ObjectId } from "mongodb";
import { Googleuser } from "@prisma/client";

export interface IGoogleUserRepository {
    findByEmail(email: string): Promise<Googleuser>
    findById(id: ObjectId): Promise<Googleuser>

    update(id: ObjectId, newUser: Omit<Googleuser, 'id'>): Promise<void>
    save(user: Omit<Googleuser, 'id'>): Promise<void>

}