import { Request, Response } from "express";
import { ProfileRepository } from "../../../repositories/implemetations/ProfileRepository";
import { ObjectId } from "mongodb";

export class GetProfileController {
    constructor (
        private profileRepository : ProfileRepository
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const id = request.query.id as string
            if (!id)  throw new Error("Id parameter is Required")
    
            const profile = await this.profileRepository.findById(new ObjectId(id))
            return response.json(profile)
        } catch (error) {
            return response.status(500).send("Erro ao procurar pelo profile")
        }
    }
}