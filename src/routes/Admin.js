/** @format */

import express from "express";

import { signInController,getAdminData } from "../controllers/admin.js";
const router = express.Router();

router.post("/sign-in", signInController);
router.post("/get-admin-data", getAdminData);

export default router;
