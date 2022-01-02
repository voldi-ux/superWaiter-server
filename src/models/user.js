/** @format */

import bcrypt from "bcrypt";

import { getCollections } from "../database/db.js";

const hashR = 5;

export default class User {
  // prettier-ignore
  constructor(user) {
          (this.name = user.name),
          (this.surname = user.surname),
          (this._id = user._id || null),
          (this.email = user.email),
          (this.phone = user.phone),
          (this.orderCount = user.orderCount || 0),
          (this.verified = user.verified || false),
          (this.password = user.password);
          this.favorites = user.favorites || []
  }

  //this method log in the user
  static async loginUser(email, password) {
    const { users } = getCollections();
    const msg = "incorrect email or password";

    const user = await users.findOne({ email });
    //note: the if !user and !match if statements are returning an error object and the curly braces do NOT signify a block of code but an object literal
    if (!user) return { msg };

    const match = await bcrypt.compare(password, user.password);
    if (!match) return { msg };

    return user;
  }

  //registers/inserts a user to the datdabase
  async addUser() {
    try {
      console.log(this);
    //users collection
      const { users } = getCollections();
      const user = await users.findOne({ email: this.email });
      //note: the if (user) statement is returning an error object and the curly braces do NOT signify a block of code but an object literal
      if (user) return { msg: "oops, a user with that email already exist" };

      const hashedPassword = await bcrypt.hash(this.password, hashR);

      this.password = hashedPassword;

      const reuslt = await users.insertOne(this);

      this._id = reuslt.insertedId;

      return this;
    } catch (error) {
      console.log(JSON.stringify(error, null, 4));

      return {
        msg: "could not register user, please try again latter"
      };
    }
  }

  static getOrders(id) {
    //geting
  }
}
