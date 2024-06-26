import { Router } from "express";
import { create } from "../controllers/user.controllers.js";
import { check } from "../controllers/user.controllers.js";

const router = Router();

router.post("/client", create);
router.get("/check", check);

export default router; 