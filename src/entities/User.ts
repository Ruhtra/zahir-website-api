// import { uuid } from "uuidv4";
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
}