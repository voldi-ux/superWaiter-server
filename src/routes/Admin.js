/** @format */

import express from "express";
import { signInController } from "../controllers/admin.js";

const router = express.Router();

router.post("/sign-in", signInController);

export default router;
