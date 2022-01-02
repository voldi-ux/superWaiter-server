/** @format */

const productSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        name: {
          bsonType: "string",
          description: "the name must be a string"
        },
        category: {
          bsonType: "string",
          description: "catergory must be a string"
        },
        price: {
          bsonType: "number",
          description: "price must be a number"
        },
        imagePath: {
          bsonType: "string",
          description: "imagePath must be a string"
        },

        hot: {
          bsonType: "bool",
        },
        description: {
          bsonType: "string",
          description: "description must be a string"
        },
        addOns: {
            bsonType:['array','null'],
        }
      }
    }
  }
};

export default productSchema;
