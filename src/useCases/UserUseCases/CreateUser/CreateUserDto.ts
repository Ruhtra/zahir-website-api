import { Googleuser } from "@prisma/client"

export interface ICreateUserRequestDto extends Pick<
    Googleuser,
    'name' |
    'email' |
    'picture' |
    'role'
> {}