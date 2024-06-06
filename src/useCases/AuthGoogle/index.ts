import { MongoUsersRepository } from "../../repositories/implemetations/MongoUsersRepository";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { AuthGoogleController } from "./AuthGoogleController";

const repository = new MongoUsersRepository()
const authGoogleController = new AuthGoogleController(repository)

export {
    authGoogleController
}