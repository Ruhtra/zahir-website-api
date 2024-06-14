import { Prisma } from "@prisma/client"

const homePage = Prisma.validator<Prisma.Home_page_promotionDefaultArgs>()({})
export type HomePage = Prisma.Home_page_promotionGetPayload<typeof homePage>

const homePageWithProfile = Prisma.validator<Prisma.Home_page_promotionDefaultArgs>()({
    include: {
        profile: true
    }
})
export type HomePageWithProfile = Prisma.Home_page_promotionGetPayload<typeof homePageWithProfile>


