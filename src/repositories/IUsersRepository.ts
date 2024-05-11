import { User } from "../entities/User";

export interface IUsersRepository {
    findByUsername(username: string): Promise<User>
    save(user: User): Promise<void>
}