import { Router } from "express";
import { authGoogleController } from "./useCases/AuthGoogle";

const router = Router()

router.get("/oauth/google", (req, res) => authGoogleController.handle(req, res))


export { router }