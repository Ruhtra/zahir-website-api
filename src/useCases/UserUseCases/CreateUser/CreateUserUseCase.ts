import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDto } from "./CreateUserDto";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, name, picture, role }: ICreateUserRequestDto) {
        const userExist = await this.usersRepository.findByEmail(email)
        if (userExist) throw new Error("Usuário ja existe");

        await this.usersRepository.save(new User({
            email,
            name,
            picture,
            role
        }))
    }
}