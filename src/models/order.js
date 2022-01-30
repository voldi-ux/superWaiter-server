import { event } from "../../server.js";
import { getCollections } from "../database/db.js";


export default class Order {

    
    static async setOrder(order) {
        console.log(order)
      let  collection  = getCollections().orders
        try {
         const { insertedId } = await collection.insertOne(order);
           console.log({ ...order, _id: insertedId });
            event.emit("order-created", { ...order, _id: insertedId });

            return {success:'order placed succesfully'}
        } catch (error) {
                 console.log(JSON.stringify(error, null, 4));

            return {msg:'could not process your order successfully please contact support'}
        }
    }
}


