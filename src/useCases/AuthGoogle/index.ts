import { GoogleAuthApiProvider } from "../../providers/implementations/GoogleAuthApiProvider";
import { upsertUserUseCase } from "../UserUseCases/UpsertUser";
import { AuthGoogleController } from "./AuthGoogleController";
import { AuthGoogleUseCase } from "./AuthGoogleUseCase";

const googleAuthApi = new GoogleAuthApiProvider()

const authGoogleUseCase = new AuthGoogleUseCase(upsertUserUseCase, googleAuthApi)
const authGoogleController = new AuthGoogleController(authGoogleUseCase)

export {
    authGoogleUseCase,
    authGoogleController
}