import { MongoUsersRepository } from "../../repositories/implemetations/MongoUsersRepository";
import { upsertUserDto } from "../UpsertUserUseCase";
import { AuthGoogleController } from "./AuthGoogleController";

const repository = new MongoUsersRepository()
const authGoogleController = new AuthGoogleController(upsertUserDto)

export {
    authGoogleController
}