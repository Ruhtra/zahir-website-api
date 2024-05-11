import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createUserUseCase.execute({
                username: request.body.username,
                password: request.body.password,
            })
    
            return response.status(200).json("Usuário cadastrado com sucesso")
        } catch(err) {
            return response.status(400).send("Não foi possível inserir usuário")
        }

    }
}