import { HomePageWithProfile } from "../../entities/HomePage";
import { prismaClient } from "../../prisma";
import { IHomePageRepository } from "../IHomePageRepository";

export class HomePageRepository implements IHomePageRepository {
    async all(): Promise<HomePageWithProfile[]> {
        const homePage = await prismaClient.home_page_promotion.findMany({
            include: {
                profile: true
            }
        })

        return homePage

    }

}