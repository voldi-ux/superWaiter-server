/** @format */

import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

import { getCollections } from "../database/db.js";

export default class Admin {
  static async adminSignIn(passcode, pin) {
    try {
      const { admins } = getCollections();

      const admin = await admins.findOne({ $and: [{ passcode }, { pin }] });
      if (admin) {
        return admin;
      }

      return { msg: `can not sign you in, check your credentials and try again` };
    } catch (error) {
      console.log(error.message);
      return { msg: error.message };
    }
  }
}
