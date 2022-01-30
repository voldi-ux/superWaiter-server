/** @format */

const orderSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        userId: {
          bsonType: "string",
          description: "the userId must be a string"
        },
        orderNo: {
          bsonType: "number",
          description: "orderNo must be a string"
        },

        instruction: {
          bsonType: "string",
          description: "instruction must be a string"
        },
        status: {
          bsonType: "string",
          description: "status must be a string"
        },
        new: {
          bsonType: "bool",
          description: "new must be a boolean"
        },
        userDeleted: {
          bsonType: "bool",
          description: "userDeleted must be a boolean"
        },
        total: {
          bsonType: "number",
          description: "total must be a number"
        },
        date: {
          bsonType: "number",
          description: "date must be a number"
        },
        customerInfo: {
          bsonType: "object"
        },
        items: {
          bsonType: "array"
        }
      }
    }
  }
};

export default orderSchema;
