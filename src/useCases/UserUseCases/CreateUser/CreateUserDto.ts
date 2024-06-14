import { GoogleUser } from "../../../entities/User";

export interface ICreateUserRequestDto extends Pick<
    GoogleUser,
    'name' |
    'email' |
    'picture' |
    'role'
> {}