import { $Enums, Profile } from "@prisma/client";

export interface IGetProfileResponseDto extends Pick<
    Profile,
    'id' |
    'createdAt' |
    'name' |
    'informations' |
    'telephones' |
    'local' |
    'movie' |
    'resume' |
    'categoryType' |
    'categorieId' |
    'promotion'
> {
    picture: string
}

export function MappingProfileResponseDto(profile: Profile): IGetProfileResponseDto {
    const response: IGetProfileResponseDto = {
        picture: profile.picture?.url,
        id: profile.id,
        createdAt: profile.createdAt,
        name: profile.name,
        informations: profile.informations,
        telephones: profile.telephones,
        local: profile.local,
        movie: profile.movie,
        resume: profile.resume,
        categoryType: profile.categoryType,
        categorieId: profile.categorieId,
        promotion: profile.promotion
    }

    return response
}