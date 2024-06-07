import { ObjectId } from "mongodb";

export class Profile {
    public readonly id?: ObjectId;

    public picture?: string;
    public name: string;
    public resume: string;
    public category: {
        type: string;
        categories?: ObjectId[];
    };
    public informations: string; // Ajuste o tipo conforme necessário
    public telephones: {
        whatsapp: string;
        telephone: string;
    };
    public local: {
        cep: string;
        uf: string;
        city: string;
        neighborhood: string;
        street: string;
        number: string;
        complement?: string;
        lat: number;
        lng: number;
    };
    public movie: string;
    public promotion: {
        title: string;
        description: string;
    };
    public readonly createdAt?: Date;

    constructor(data: Omit<Profile, 'createdAt'>) {
        Object.assign(this, data);

        if (!this.createdAt) this.createdAt = new Date()
    }
}