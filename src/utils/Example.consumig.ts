import { Mapper } from "./Mapper"

interface local {
    city: string,
    uf: string
}

interface nicknames {
    name: string,
    id: string
}

interface oldobj {
    name: string,
    email: string
    local: local
    nicknames: nicknames[]
}

interface newobj {
    name: string
    local: Pick<local, 'uf'>
    nicknames: Pick<nicknames, 'name'>[]
}

// Exemplo de uso
export function MappingListAllProfileResponseDto(old: oldobj[]): newobj[] {
    const targetTemplate: newobj = {
        name: null,
        local: {
            uf: null
        },
        nicknames: [{
            name: null
        }]
    };

    const response = old.map(profile => {
        return Mapper<oldobj, newobj>(profile, targetTemplate);
    })

    return response
}
