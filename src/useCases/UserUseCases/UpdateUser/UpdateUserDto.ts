import { ObjectId } from "mongodb";

export interface IUpdateUserDto {
    id: ObjectId
    user: {
        name: string
        email: string
        picture?: string
        role?: "admin" | "user"
    }
}