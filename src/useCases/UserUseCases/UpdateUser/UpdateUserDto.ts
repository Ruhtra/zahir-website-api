import { ObjectId } from "mongodb";
import { GoogleUser } from "../../../entities/User";

export interface IUpdateUserDto {
    id: ObjectId
    user: Pick<
        GoogleUser,
        'email' |
        'name' |
        'picture' |
        'role'
    >
}