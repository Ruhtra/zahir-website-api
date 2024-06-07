import { ObjectId } from "mongodb"
import { Profile } from "../entities/Profile"

export interface IProfilesRepository {
    findById: (id: ObjectId) => Promise<Profile>
    all: () => Promise<Profile[]>

    save: (profile: Profile) => Promise<void>
    update: (id: ObjectId, Profile: Profile) => Promise<void>
    delete: (id: ObjectId) => Promise<void>
}