import express from 'express';
import { updateUserFavs , clearUserFavs} from '../controllers/userControllers.js';


const router = express.Router()


router.post("/update-user-favorites", updateUserFavs);
router.post('/clear-user-favorites',clearUserFavs)



export default router