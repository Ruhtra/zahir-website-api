import { GoogleUserRepository } from "../../../repositories/implemetations/GoogleUserRepository";
import { createUserUseCase } from "../CreateUser";
import { updateUserUseCase } from "../UpdateUser";
import { UpsertUserUseCase } from "./UpsertUserUseCase";

const googleUserRepository = new GoogleUserRepository()

const upsertUserUseCase = new UpsertUserUseCase(
    googleUserRepository,
    createUserUseCase,
    updateUserUseCase
)

export {
    upsertUserUseCase
}