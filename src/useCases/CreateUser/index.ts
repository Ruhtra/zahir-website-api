import { MongoUsersRepository } from "../../repositories/implemetations/MongoUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const repsositorey = new MongoUsersRepository()
const createUserUseCase = new CreateUserUseCase(repsositorey)


const createUserController = new CreateUserController(createUserUseCase)

export {
    createUserController
}