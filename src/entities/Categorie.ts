import { Prisma } from "@prisma/client"

const categorie = Prisma.validator<Prisma.CategorieDefaultArgs>()({})
export type Categorie = Prisma.CategorieGetPayload<typeof categorie>
