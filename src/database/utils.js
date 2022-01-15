import orderSchema from "../schemas/order.js";
import productSchema from "../schemas/product.js";
import userSchema from "../schemas/user.js";

//the schema's property name should/must correspond with a colection name;
const schemas = {
  users: userSchema,
  products: productSchema,
  orders:orderSchema
};
const myCollections = ["users",'products','orders'];

export const collectionsExist = async (db) => {
    try {
      //geting collections infor from the database.
      const dbCollections = await db.collections();

      myCollections.forEach(async myColl => {
          //check to see if my collection  exist in the db;
          const collExist = dbCollections.some(({ collectionName }) => collectionName === myColl)
          if (!collExist) {
            await  db.createCollection(myColl, schemas[myColl])

            if (myColl === 'products') {
               db.collection(myColl).createIndex({name:'text', description:'text'})
             }
          }
      })
  } catch (error) {
    console.log(error.message);
  }
};
