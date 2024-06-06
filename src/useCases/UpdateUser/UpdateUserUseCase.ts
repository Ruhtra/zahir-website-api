import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) {}
}