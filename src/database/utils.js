import productSchema from "../schemas/product.js";
import userSchema from "../schemas/user.js";

//the schema's property name should/must correspond with a colection name;
const schemas = {
  users: userSchema,
  products:productSchema
};
const myCollections = ["users",'products'];

export const collectionsExist = async (db) => {
    try {
      //geting collections infor from the database.
      const dbCollections = await db.collections();

      myCollections.forEach(myColl => {
          //check to see if my collection  exist in the db;
          const collExist = dbCollections.some(({ collectionName }) => collectionName === myColl)
          if (!collExist) {
            db.createCollection(myColl, schemas[myColl])
          }
      })
  } catch (error) {
    console.log(error.message);
  }
};
