import { Request, Response } from "express";
import { AuthGoogleUseCase } from "./AuthGoogleUseCase";
import { GoogleUserNotEmailVerified } from "./AuthGoogleErrors";

export interface queryType {
    code: string
}

export class AuthGoogleController {
    constructor(
        private authGoogleUseCase: AuthGoogleUseCase
    ) { }

    async handle(request: Request, response: Response) {
        try {
            // Obtém o token de acesso com o google
            const code = request.query.code as string
            if (!code) throw new Error("Code parameter is required");

            const user = await this.authGoogleUseCase.execute(code)
            
            // Salva o usuário na sessão
            request.session.regenerate((err) => {
                if (err)throw new Error(err)
                    request.session.userId  = user.id.toString()
  
                    request.session.save(function (err) {
                        if (err) throw new Error(err)
            
                        return response.redirect(process.env.URL_FRONTEND)
                    })
            })
        } catch (error) {
            if (error instanceof GoogleUserNotEmailVerified) {
                return response.status(403).send("User not email verified.")
            }

            return response.status(500).send("Erro ao authenticar usuário")
        }

    }
}