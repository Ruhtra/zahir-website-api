import { Googleuser } from "@prisma/client"

export interface IUpsertUserRequestDto extends Pick<
    Googleuser,
    'name' |
    'email' |
    'picture' |
    'role'
> { }