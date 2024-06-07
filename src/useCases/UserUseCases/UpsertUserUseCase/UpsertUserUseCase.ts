import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { UpdateUserUseCase } from "../UpdateUser/UpdateUserUseCase";
import { IUpsertUserRequestDto } from "./UpsertUserDto";

export class UpsertUserUseCase {
    constructor(
        private repository: IUsersRepository,
        private createUserUserCase: CreateUserUseCase,
        private updateUserUseCase: UpdateUserUseCase
    ) { }

    async execute({ email, name, picture, role }: IUpsertUserRequestDto): Promise<User> {
        const userFounded = await this.repository.findByEmail(email)

        if (userFounded) await this.createUserUserCase.execute({
            email: email,
            name: name,
            picture: picture,
            role: role
        })
        else await this.updateUserUseCase.execute({
            id: userFounded.id,
            user: {
                email: email,
                name: name,
                picture: picture,
                role: role
            }
        })


        return await this.repository.findByEmail(email)
    }
}