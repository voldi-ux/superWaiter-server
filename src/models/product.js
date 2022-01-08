/** @format */

import { getCollections } from "../database/db.js";
import { products as prods } from "../../products.js";

export default class Product {
  
  static async addProduct(product) {
    const { products } = getCollections();
    try {
      await products.insertOne(product);
      return;
    } catch (error) {
      console.log(error);
      return { msg: "sorry could not save the product, make sure all the information entered are correct" };
    }
  }

  static async removeProduct() {}
  static async getProduct() {}

  static async getProducts() {
    //get a collection from a db
    const { products } = getCollections();
    try {
      const prods = await products.find({});
      //toArray converts the cursor to an actuall array
      return prods.toArray();
    } catch (error) {
      console.log(JSON.stringify(error, null, 4));

      return { msg: "sorry, something went wrong" };
    }
  }

  static async searchProducts(term) {
    try {
      const { products } = getCollections();
      const docs = await products
        .find({
          $text: {
            $search: term
          }
        })
        .toArray();
      
      return docs
    } catch (err) {
      return { msg: "sorry, something went wrong" };

    }
  }

  static async updateProduct() {}
  static async updateProducts() {}

  //for development purposses
  // static addProducts() {
  //   const { products } = getCollections();
  //  products.insertMany(prods)
  // }
}
