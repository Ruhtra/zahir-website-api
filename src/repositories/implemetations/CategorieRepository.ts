import { Categorie } from "../../entities/Categorie";
import { prismaClient } from "../../prisma";
import { ICategorieRepository } from "../ICategorieRepository";

export class CategorieRepository implements ICategorieRepository {
    async all (): Promise<Categorie[]> {
        const categories = await prismaClient.categorie.findMany()
        return categories
    }
    
}