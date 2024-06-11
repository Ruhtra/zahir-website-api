import { ObjectId } from "mongodb";
import { Profile } from "../../entities/Profile";
import { IProfilesRepository } from "../IProfilesRepository";
import { Database } from "../../config/DatabaseMongo";

const tableProfile = 'profile'

export class MongoProfileRepository implements IProfilesRepository {
    async findById(id: ObjectId): Promise<Profile> {
        const db = Database.getInstance().getDb()
        const profile = await db.collection<Profile>(tableProfile).findOne({
            _id: id
        })

        return profile
    }
    async all(): Promise<Profile[]> {
        const db = Database.getInstance().getDb()
        const profiles = await db.collection(tableProfile)
            .aggregate<Profile>([
                {
                    $lookup: {
                        from: "categories",
                        localField: "category.categories",
                        foreignField: "_id",
                        as: "categoryDocs",
                    }
                }, {
                    $project: {
                        _id: 1,
                        local: {
                            uf: "$local.uf",
                            city: "$local.city"
                        },
                        name: 1,
                        picture: "$picture.url",
                        category: {
                            type: 1,
                            categories: {
                                $cond: {
                                    if: {
                                        $gt: [{ $size: "$categoryDocs" }, 0],
                                    },
                                    then: "$categoryDocs.name",
                                    else: "$$REMOVE",
                                },
                            },
                        },
                        promotion: 1,
                    }
                }
            ])
            .sort({ "name": 1 })
            .toArray()

        return profiles
    }

    async save(profile: Profile): Promise<void> {

    }
    async update(id: ObjectId, Profile: Profile): Promise<void> {

    }
    async delete(id: ObjectId): Promise<void> {

    }

}