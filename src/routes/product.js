/** @format */

import express from "express";
import { getProducts,search } from "../controllers/productController.js";

const router = express.Router();

router.get("/get-products", getProducts);
router.get("/search-products", search);

export default router;
