import { Categorie, Prisma, Profile, ProfileLocal } from "@prisma/client"
import { Mapper } from "../../../utils/Mapper";


const profileWithCategorie = Prisma.validator<Prisma.ProfileDefaultArgs>()({
    include: { categorie: true },
})
export type ProfileWithCategorie = Prisma.ProfileGetPayload<typeof profileWithCategorie>

export interface IGetAllProfileResposeDto extends Pick<
    ProfileWithCategorie,
    'id' |
    'name' |
    'picture' |
    'categoryType' |
    'promotion' 
> {
    local: Pick<ProfileLocal, 'city' | 'uf'>
    categorie: Pick<Categorie, 'id' | 'name'>[]
}

export function MappingListAllProfileResponseDto(profiles: ProfileWithCategorie[]): IGetAllProfileResposeDto[] {
    const targetTemplate: IGetAllProfileResposeDto = {
        id: null,
        local: {
            city: null,
            uf: null
        },
        name: null,
        picture: {
            key: null,
            name: null,
            size: null,
            url: null
        },
        categoryType: null,
        promotion: {
            description: null,
            title: null
        },
        categorie: [
            {
                id: null,
                name: null
            }
        ]
    };

    const response = profiles.map(profile => {
        return Mapper<ProfileWithCategorie, IGetAllProfileResposeDto>(profile, targetTemplate);
    })

    return response
}
