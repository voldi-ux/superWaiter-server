/** @format */

import express from "express";
import { paymentItent} from "../controllers/paymentsControllers.js";

const router = express.Router();

router.post("/payment-intent", paymentItent);

export default router;
