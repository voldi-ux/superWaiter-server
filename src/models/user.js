/** @format */

import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

import { getCollections } from "../database/db.js";

const hashR = 5;

export default class User {
  // prettier-ignore

  static async _findUserByEmail(email) {
    const { users } = getCollections();
    const user = await users.findOne({ email });
     return user
  }

  static async loginUser(email, password) {
    const msg = "incorrect email or password";

    const user = await this._findUserByEmail(email);
    //note: the if !user and !match if statements are returning an error object and the curly braces do NOT signify a block of code but an object literal
    if (!user) return { msg };

    const match = await bcrypt.compare(password, user.password);

    if (!match) return { msg };

    const { name, surname, phone, orderCount, favorites,  _id } = user;

    return {
      info: {
        _id,
        name,
        surname,
        email,
        phone,
        orderCount
      },
      favorites,
    };
  }

  //registers/inserts a user to the datdabase
  static async addUser(user) {
    try {
    const { users } = getCollections();
      
      const userExist = await this._findUserByEmail(user.email);
      //note: the if (user) statement is returning an error object and the curly braces do NOT signify a block of code but an object literal
      if (userExist) return { msg: "oops, a user with that email already exist" };

      const hashedPassword = await bcrypt.hash(user.password, hashR);

      user.password = hashedPassword;
      
      
      const result = await users.insertOne(user);

      const { name, surname, email, phone, favorites} = user;

      return {
        info: {
          _id: result.insertedId,
          name,
          surname,
          email,
          phone,
        },
        favorites,
      };
    } catch (error) {
      console.log('error',error.message,user);

      return {
        msg: "could not register user, please try again latter"
      };
    }
  }

  static async getUserOrders(id) {
    try {
       const { orders } = getCollections();
       const ORDERS = await orders
         .find({ $and: [{ userId: id }, { userDeleted: false }] })
         .sort({ date: -1 })
         .toArray();
       return ORDERS;
    } catch (error) {
      console.log(console.log(error.message))
    }
  }

  static async userDeleteOrder(userId, orderId) {
    try {
      const { orders } = getCollections();
      const res = await orders.findOneAndUpdate({ $and: [{ _id: ObjectId(orderId) }, { userId }] }, { $set: { userDeleted: true } })
      return {msg:'success'}
    } catch (error) {
      
    }
  }
 
  static async RemoveItemFromFav(itemId, userId) {
    try {
      const { users } = getCollections();

      const {
        value: { favorites }
      } = await users.findOneAndUpdate(
        { _id: ObjectId(userId) },
        {
          $pull: {
            favorites: { _id: itemId }
          }
        },
        {
          returnDocument: "after",
          projection: {
            favorites: 1
          },
        }
        );
      return favorites;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async addItemToFav(item, userId) {
    try {
      const { users } = getCollections();

      const {value: { favorites }} = await users.findOneAndUpdate(
          { _id: ObjectId(userId) },
          {
            $push: {
              favorites: item
            }
          },
          {
            returnDocument: "after",
            projection: {
              favorites: 1
            },
          }
        )

      return favorites;
    } catch (error) {
      console.log(error.message);
    }
  }


  static async clearUserFavs(id) {
     
    try {
      const { users } = getCollections();
      
            
      const user = await users.findOneAndUpdate({ _id: ObjectId(id) }, { $set: { favorites: [] } }, { returnDocument: "after" });
      console.log(user)
      return {success:'cleared successfully'}
    } catch (error) {
      console.log(error.message)
      return {msg:' oops could not clear your favorites items'}
    }
       
  }


}
