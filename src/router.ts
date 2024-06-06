import { Router } from "express";
// import { createUserController } from "./useCases/CreateUser";
import { authGoogleController } from "./useCases/AuthGoogle";

const router = Router()

// router.post("/user/Create", (req, res) => createUserController.handle(req, res))
router.get("/oauth/google", (req, res) => authGoogleController.handle(req, res))


export { router }