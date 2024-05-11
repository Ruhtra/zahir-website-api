import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDto } from "./CreateUserDto";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async execute(data: ICreateUserRequestDto) {
        const userExist = await this.usersRepository.findByUsername(data.username)

        if (userExist) throw new Error("Usuário ja existe");

        await this.usersRepository.save(new User(data))
    }
}