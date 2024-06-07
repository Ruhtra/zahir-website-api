import { ObjectId } from "mongodb";
import { ICreateUserRequestDto } from "../CreateUser/CreateUserDto";

export interface IUpdateUserDto {
    id: ObjectId
    user: {
        name: string
        email: string
        picture?: string
        role?: "admin" | "user"
    }
}