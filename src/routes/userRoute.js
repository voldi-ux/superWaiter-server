import express from 'express';
import { updateUserFavs , clearUserFavs,getUserOrders,deleteOrder} from '../controllers/userControllers.js';


const router = express.Router()


router.post("/update-user-favorites", updateUserFavs);
router.post('/clear-user-favorites',clearUserFavs)
router.post("/get-user-orders", getUserOrders);
router.post("/delete-order", deleteOrder);



export default router