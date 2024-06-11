import { ObjectId } from "mongodb";
import { IProfilesRepository } from "../IProfilesRepository";
import { Profile } from "@prisma/client";
import { prismaClient } from "../../prisma";

export class ProfileRepository implements IProfilesRepository {
    async findById (id: ObjectId): Promise<Profile> {
        const profile = await prismaClient.profile.findFirst({
            where: {
                id: id.toString()
            }
        })

        return profile
    }
    async all (): Promise<Profile[]> {
        const profiles = await prismaClient.profile.findMany({})

        console.log(profiles);
        
        
        return profiles
    }
    save: (profile: Profile) => Promise<void>;
    update: (id: ObjectId, Profile: Profile) => Promise<void>;
    delete: (id: ObjectId) => Promise<void>;
}