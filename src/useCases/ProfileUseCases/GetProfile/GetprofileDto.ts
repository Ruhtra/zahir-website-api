import { Profile } from "@prisma/client";
import { Mapper } from "../../../utils/Mapper";

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
    const targetTemplate: IGetProfileResponseDto = {
        picture: "",
        id: "",
        createdAt: undefined,
        name: "",
        informations: "",
        telephones: {
            telephone: [],
            whatsapp: []
        },
        local: {
            cep: "",
            city: "",
            complement: "",
            lat: 0,
            lng: 0,
            neighborhood: "",
            number: "",
            street: "",
            uf: ""
        },
        movie: "",
        resume: "",
        categoryType: "restaurante",
        categorieId: [],
        promotion: {
            description: "",
            title: ""
        }
    }

    return Mapper<Profile, IGetProfileResponseDto>(profile, targetTemplate)
}