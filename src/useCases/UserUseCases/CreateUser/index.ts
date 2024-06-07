import { MongoUsersRepository } from "../../../repositories/implemetations/MongoUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";



const repository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(repository)

export {
    createUserUseCase
}