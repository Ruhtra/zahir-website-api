// import { uuid } from "uuidv4";

import { ObjectId } from "mongodb";

export class User {
    public readonly id?: ObjectId;

    public username: string;
    public password: string;

    constructor(props: User) {
        Object.assign(this, props);

        // if (!id) {
        //     this._id = uuid();
        // }
    }
}