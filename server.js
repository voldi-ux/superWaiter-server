import dotEnv from 'dotenv'
dotEnv.config()
import express from "express";
import EventEmitter from "events";


import connectToDb from "./src/database/db.js";
import AuthRoutes from './src/routes/auth.js'
import ProductRoutes from './src/routes/product.js'
import UserRoutes from './src/routes/userRoute.js'
import PaymentsRoutes from './src/routes/paymentRoutes.js'
import OrdersRoutes from './src/routes/Orders.js'
import AdminRoutes from './src/routes/Admin.js'
import cors from 'cors';

import { Server} from 'socket.io'
import {createServer} from 'http'


const app = express();
const port = process.env.PORT || 4000;
const appServer = createServer(app)
const io = new Server(appServer, {
  cors: ['/']
});
export const event = new EventEmitter();


//registering the routes
app.use(cors())
app.use(express.json())
app.use(express.static('images'))
app.use(ProductRoutes);
app.use(AuthRoutes)
app.use(UserRoutes)
app.use(PaymentsRoutes)
app.use(OrdersRoutes)


//admins routes
app.use('/dashboard', AdminRoutes)





//socket io
  
const ordersNsp = io.of("/orders")
  
ordersNsp.on("connection", (socket) => {
  console.log('a socket has connected')
  
  socket.on("join-room", ({ room }) => {
      console.log(room)
      socket.join(room);
    });

    socket.on("disconnect", () => console.log("disconnecting user", io.rooms));
  });

event.on("order-update", (order) => {
 ordersNsp.to(order.userId).emit("order-status-change");
});

event.on('order-created', (order) => {
  ordersNsp.to('admin').emit('order-created', order)
})



connectToDb(async (err) => {
  if (err) throw new Error(err.message);
  try {
    await appServer.listen(port);
    console.log('server has started')
  } catch (error) {
    console.log(error.message);
  }
});
