import { getCollections } from "../database/db.js";


export default class Order {

    
    static async setOrder(order) {
        console.log(order)
      let  collection  = getCollections().orders
        try {
            await collection.insertOne(order);
            return {success:'order placed succesfully'}
        } catch (error) {
                 console.log(JSON.stringify(error, null, 4));

            return {msg:'could not process your order successfully please contact support'}
        }
    }
}


