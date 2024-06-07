import { Request, Response } from "express";
import { ProfileRepository } from "../../../repositories/implemetations/ProfileRepository";

export class GetAllprofileController {
    constructor (
        private profileRepository: ProfileRepository
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const profiles = await this.profileRepository.all()
    
            return response.json(profiles)
        } catch (error) {
            return response.status(500).send("Erro ao buscar profiles")
        }
    }
}