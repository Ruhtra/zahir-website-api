/*// import { uuid } from "uuidv4";
import { ObjectId } from "mongodb";

export class User {
    public readonly id?: ObjectId;

    public name: string
    public email: string
    public picture?: string
    public role?: "admin" | "user"

    constructor(props: User) {
        Object.assign(this, props);

        // if (!id) this._id = uuid();
        if (!this.role) this.role = 'user'
    }
}*/

import { $Enums, Prisma } from "@prisma/client"

// GoogleUser
const GoogleUser = Prisma.validator<Prisma.GoogleUserDefaultArgs>()({})
export type GoogleUser = Prisma.GoogleUserGetPayload<typeof GoogleUser>


// const GoogleuserUpsert = Prisma.validator
// Create a new function and pass the parameters onto the validator
export const GoogleUserCreate = (
    name: string,
    email: string,
    picture?: string,
    role?: $Enums.Role
) => {
    return Prisma.validator<Prisma.GoogleUserCreateInput>()({
        name,
        email,
        picture,
        role
    })
}