import { ObjectId } from "mongodb";
import { IProfilesRepository } from "../IProfilesRepository";
import { prismaClient } from "../../prisma";
import { Profile, ProfileWithCategorie } from "../../entities/Profile";

export class ProfileRepository implements IProfilesRepository {
    async findById(id: ObjectId): Promise<Profile> {
        const profile = await prismaClient.profile.findFirst({
            where: {
                id: id.toString()
            }
        })

        return profile
    }
    async all(): Promise<ProfileWithCategorie[]> {
        const profiles = await prismaClient.profile.findMany({
            include: {
                categorie: true,
            }
        })

        return profiles
    }
    save: (profile: Profile) => Promise<void>;
    update: (id: ObjectId, Profile: Profile) => Promise<void>;
    delete: (id: ObjectId) => Promise<void>;
}