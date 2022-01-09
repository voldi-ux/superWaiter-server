import dotEnv from 'dotenv'
dotEnv.config()
import express from "express";

import connectToDb from "./src/database/db.js";
import AuthRoutes from './src/routes/auth.js'
import ProductRoutes from './src/routes/product.js'
import UserRoutes from './src/routes/userRoute.js'
import PaymentsRoutes from './src/routes/paymentRoutes.js'
import cors from 'cors';



const app = express();
const port = process.env.PORT || 4000;


//registering the routes
app.use(cors())
app.use(express.json())
app.use(express.static('images'))
app.use(ProductRoutes);
app.use(AuthRoutes)
app.use(UserRoutes)
app.use(PaymentsRoutes)

//payments routes



connectToDb(async (err) => {
  if (err) throw new Error(err.message);
  try {
    await app.listen(port);
    console.log('server has started')
  } catch (error) {
    console.log(error.message);
  }
});
