/** @format */

import express from "express";

import { signInController,getAdminData,updateProduct,updateOrder,sendMail } from "../controllers/admin.js";
const router = express.Router();

router.post("/sign-in", signInController);
router.post("/get-admin-data", getAdminData);
router.post("/edit-product", updateProduct);
router.post("/update-order-item", updateOrder);
router.post("/send-mail", sendMail);

export default router;
