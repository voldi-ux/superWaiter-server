/** @format */

const adminSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        type: {
          bsonType: "string",
          description: "the name must be a string"
        },
        pin: {
          bsonType: "number",
          description: "the number nunber must be a number"
        },
        passcode: {
          bsonType: "number",
          description: "the passcode must be a number"
        }
      }
    }
  }
};

export default adminSchema;
