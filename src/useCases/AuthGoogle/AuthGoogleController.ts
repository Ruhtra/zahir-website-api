import axios from "axios";

import { Request, Response } from "express";
import { stringify } from "qs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { UpsertUserUseCase } from "../UpsertUserUseCase/UpsertUserUseCase";

interface GoogleAuthResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
    id_token: string;
}
async function getGoogleOauthToken(code: string): Promise<GoogleAuthResponse> {
    const url = "https://oauth2.googleapis.com/token"

    const values = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URL,
        grant_type: "authorization_code"
    };


    try {
        const res = await axios.post(url, stringify(values), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })


        return res.data
    } catch (err) {
        console.log("error in fetch Google oauth tokens ")
        throw new Error(err)
    }

}


// googleuser
interface GoogleUserInfo {
    email: string;
    family_name: string;
    given_name: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
}
async function getGoogleuser(id_token: string, access_token: string): Promise<GoogleUserInfo> {
    try {
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`, {
            headers: {
                Authorization: `Bearer ${id_token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error, "Error ftchig Google user");
        throw new Error(error);
    }

}



export interface queryType {
    code: string
}

export class AuthGoogleController {
    constructor(
        private upsertUserUseCase: UpsertUserUseCase
    ){}

    async handle(request: Request, response: Response) {
        try {
            // Obtém o token de acesso com o google
            const code = request.query.code as string
            if (!code) throw new Error("Code parameter is required");

            // Obtém informações do usuario com o token
            // const googleUser = jwt.decode(id_token)
            const { id_token, access_token } = await getGoogleOauthToken(code)

            // Obtém informações do usuario com o token
            // const googleUser = jwt.decode(id_token)
            const googleUserResponse = await getGoogleuser(id_token, access_token)

            // filtra usuários que não tem email verificado
            if (!googleUserResponse.verified_email) return response.status(403).send("Google account is not verified")

            // atualiza o usuário no banco de dados 
            const user = await this.upsertUserUseCase.execute({
                name: googleUserResponse.name,
                email: googleUserResponse.email,
                picture: googleUserResponse.picture
            })

            request.session.regenerate((err) => {
                if (err)throw new Error(err)
                    request.session.userId  = user.id.toString()

                    request.session.save(function (err) {
                        if (err) throw new Error(err)
            
                        return response.redirect(process.env.URL_FRONTEND)
                    })
            })


        } catch (error) {
            response.status(500).send("Erro ao authenticar usuário")
        }

    }
}