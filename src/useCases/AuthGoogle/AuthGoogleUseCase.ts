import { Googleuser } from "@prisma/client"
import { IGoogleAuthApiProvider } from "../../providers/IGoogleAuthApiProvider"
import { UpsertUserUseCase } from "../UserUseCases/UpsertUser/UpsertUserUseCase"
import { GoogleUserNotEmailVerified } from "./AuthGoogleErrors"

export class AuthGoogleUseCase {
    constructor(
        private upsertUserUseCase: UpsertUserUseCase,
        private googleAuthApi: IGoogleAuthApiProvider
    ) { }

    async execute(code: string): Promise<Googleuser> {
        // Obtém informações do usuario com o token
        // const googleUser = jwt.decode(id_token)
        const { id_token, access_token } = await this.googleAuthApi.getGoogleOauthToken(code)

        // Obtém informações do usuario com o token
        // const googleUser = jwt.decode(id_token)
        const googleUserResponse = await this.googleAuthApi.getGoogleUser(id_token, access_token)

        // filtra usuários que não tem email verificado
        if (!googleUserResponse.verified_email) throw new GoogleUserNotEmailVerified()

        // atualiza o usuário no banco de dados 
        const user = await this.upsertUserUseCase.execute({
            name: googleUserResponse.name,
            email: googleUserResponse.email,
            picture: googleUserResponse.picture
        })
        return user;
    }
}