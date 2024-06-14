import { Router } from "express";
import { authGoogleController } from "./useCases/AuthGoogle";
import { getProfileController } from "./useCases/ProfileUseCases/GetProfile";
import { getAllprofileController } from "./useCases/ProfileUseCases/GetAllProfile";
import { getAllHomePageController } from "./useCases/HomePageUseCases/GetAllHomePage";
import { getRecentProfileController } from "./useCases/ProfileUseCases/GetRecentProfile";
import { getAllCategorieController } from "./useCases/CategorieUseCases/GetAllCategorie";

const router = Router()

router.get("/oauth/google", (req, res) => authGoogleController.handle(req, res))

router.get('/profile/getbyid', (req, res) => getProfileController.handle(req, res))
router.get('/profile/all', (req, res) => getAllprofileController.handle(req, res))
router.get('/profile/recent', (req, res) => getRecentProfileController.handle(req, res))


router.get('/homePage/all', (req, res) => getAllHomePageController.handle(req, res))


router.get('/categorie/all', (req, res) => getAllCategorieController.handle(req, res))


export { router }