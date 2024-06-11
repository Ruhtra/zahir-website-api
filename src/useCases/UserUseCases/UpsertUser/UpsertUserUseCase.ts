import { ObjectId } from "mongodb";
import { IGoogleUserRepository } from "../../../repositories/IGoogleUserRepository";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { UpdateUserUseCase } from "../UpdateUser/UpdateUserUseCase";
import { IUpsertUserRequestDto } from "./UpsertUserDto";
import { Googleuser } from "@prisma/client";

export class UpsertUserUseCase {
    constructor(
        private repository: IGoogleUserRepository,
        private createUserUserCase: CreateUserUseCase,
        private updateUserUseCase: UpdateUserUseCase
    ) { }

    async execute({ email, name, picture, role }: IUpsertUserRequestDto): Promise<Googleuser> {
        const userFounded = await this.repository.findByEmail(email)

        if (userFounded) await this.createUserUserCase.execute({
            email: email,
            name: name,
            picture: picture,
            role: role
        })
        else await this.updateUserUseCase.execute({
            id: new ObjectId(userFounded.id),
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