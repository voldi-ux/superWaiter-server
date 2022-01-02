import express from "express";
import dotEnv from 'dotenv'
import path from 'path'
import { URL } from "url"; // in Browser, the URL in native accessible on window

import connectToDb from "./src/database/db.js";
import AuthRoutes from './src/routes/auth.js'
import ProductRoutes from './src/routes/product.js'
import cors from 'cors'


dotEnv.config()

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
const app = express();
const port = process.env.PORT || 4000;


//registering the routes
app.use(cors())
app.use(express.json())
app.use(express.static('images'))
app.use(ProductRoutes);
app.use(AuthRoutes)



connectToDb(async (err) => {
  if (err) throw new Error(err.message);
  try {
    await app.listen(port);
    console.log('server has started')
  } catch (error) {
    console.log(error.message);
  }
});
