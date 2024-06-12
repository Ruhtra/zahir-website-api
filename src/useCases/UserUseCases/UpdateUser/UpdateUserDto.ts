import { Googleuser } from "@prisma/client";
import { ObjectId } from "mongodb";

export interface IUpdateUserDto {
    id: ObjectId
    user: Pick<
        Googleuser,
        'email' |
        'name' |
        'picture' |
        'role'
    >
}