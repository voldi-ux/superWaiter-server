/** @format */

import express from "express";
import { placeOrder } from "../controllers/OrdersControllers.js";

const router = express.Router();

router.post("/place-order", placeOrder);

export default router;
