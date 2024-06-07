import { MongoUsersRepository } from "../../../repositories/implemetations/MongoUsersRepository";
import { createUserUseCase } from "../CreateUser";
import { updateUserUseCase } from "../UpdateUser";
import { UpsertUserUseCase } from "./UpsertUserUseCase";

const repository = new MongoUsersRepository()

const upsertUserUseCase = new UpsertUserUseCase(
    repository,
    createUserUseCase,
    updateUserUseCase
)

export {
    upsertUserUseCase
}