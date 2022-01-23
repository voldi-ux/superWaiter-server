/** @format */
import { getCollections } from "../database/db.js";
import jwt from 'jsonwebtoken';


export default class Admin {
  static async adminSignIn(passcode, pin) {
    try {
      const { admins } = getCollections();

      const admin = await admins.findOne({ $and: [{ passcode }, { pin }] }, { projection: { type: 1, _id: 0 } })
      
      if (admin) {
       const token = jwt.sign(admin,process.env.JWT_KEY)
        return {type:admin.type, token};
      }

      return { msg: `can not sign you in, check your credentials and try again` };
    } catch (error) {
      console.log(error.message);
      return { msg: error.message };
    }
  }

  static async getData() {
    //this method should retrieve the users,logs,issues,orders, and products from the database;

       try {
             const { users, products, orders } = getCollections();
             const USERS = await users.find({}).toArray();
             const PRODUCTS = await products.find({}).toArray();
             const ORDERS = await orders.find({}).sort({ date: -1 }).toArray();

             return {
               users: USERS,
               products: PRODUCTS,
               orders: ORDERS
             };
       } catch (error) {
      console.log(error.message);
         return {msg:'sorry could not load data, try again in a few minutes or report this to the developers if the message persist.'}
       }
  }
}
