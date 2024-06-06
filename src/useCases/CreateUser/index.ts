import { MongoUsersRepository } from "../../repositories/implemetations/MongoUsersRepository";
// import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const repsository = new MongoUsersRepository()
const createUserUseCase = new CreateUserUseCase(repsository)


// const createUserController = new CreateUserController(createUserUseCase)

export {
    // createUserController
    createUserUseCase
}