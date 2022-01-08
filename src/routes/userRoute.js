import express from 'express';
import { updateUserFavs } from '../controllers/userControllers.js';


const router = express.Router()


router.post("/update-user-favorites", updateUserFavs);




export default router