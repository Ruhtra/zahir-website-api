import { Categorie, Profile, ProfileLocal } from "@prisma/client"



export interface IGetAllProfileResposeDto extends Pick<
    Profile,
    'id' |
    'name' |
    'picture' |
    'categoryType' |
    'promotion' |
    'categorieId'
> {
    local: Pick<ProfileLocal, 'city' | 'uf'>
}

export function MappingAllProfileResponseDto(profile: Profile): IGetAllProfileResposeDto {
    const response: IGetAllProfileResposeDto = {
        id: profile.id,
        name: profile.name,
        local: {
            city: profile.local.city,
            uf: profile.local.uf
        },
        categoryType: profile.categoryType,
        categorieId: profile.categorieId,
        picture: profile.picture ?? null,
        promotion: profile.promotion ?? null
    }
    return response
}

export function MappingListAllProfileResponseDto(profile: Profile[]): IGetAllProfileResposeDto[] {
    return profile.map(e => MappingAllProfileResponseDto(e))
}