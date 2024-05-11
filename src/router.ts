import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post("/user/Create", (req, res) => createUserController.handle(req, res))

export { router }