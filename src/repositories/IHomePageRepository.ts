import { HomePageWithProfile } from "../entities/HomePage";

export interface IHomePageRepository {
    all: () => Promise<HomePageWithProfile[]>
}