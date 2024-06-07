import { MongoUsersRepository } from "../../repositories/implemetations/MongoUsersRepository";
// import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const repository = new MongoUsersRepository()
const createUserUseCase = new CreateUserUseCase(repository)


// const createUserController = new CreateUserController(createUserUseCase)

export {
    // createUserController
    createUserUseCase
}