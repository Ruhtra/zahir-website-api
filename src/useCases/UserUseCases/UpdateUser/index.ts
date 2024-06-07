import { MongoUsersRepository } from "../../../repositories/implemetations/MongoUsersRepository"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

const mongoUsersRepository = new MongoUsersRepository()

const updateUserUseCase = new UpdateUserUseCase(mongoUsersRepository)

export {
    updateUserUseCase
}