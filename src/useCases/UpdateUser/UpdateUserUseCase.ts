import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserDto } from "./UpdateUserDto";

export class UpdateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) {}

    async execute({ id, user }: IUpdateUserDto) {
        const userExist = await this.userRepository.findById(id)
        if (!userExist) throw new Error("Usuário não existe");

        await this.userRepository.updateUser(id, new User({
            email: user.email,
            name: user.name,
            picture: user.picture,
            role: user.role
        }))
    }
}