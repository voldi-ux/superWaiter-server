import Order from "../models/order.js"



export const placeOrder =async (req, res) => {
       res.send(await Order.setOrder(req.body))    
}