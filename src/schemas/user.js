const userSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        name: {
          bsonType: "string",
          description: "the name must be a string"
        },
        surname: {
          bsonType: "string",
          description: "surname must be a string"
        },
        email: {
          bsonType: "string",
          description: "email must be a string"
        },
        password: {
          bsonType: "string",
          description: "password must be a string"
        },
        phone: {
          bsonType: "string",
          description: "the phone nunber must be a number"
        },

        ordersCount: {
          bsonType: "number",
          description: "the count must be a number"
        },
        favorites: {
          bsonType:'array'
        }
      }
    }
  }
};

export default userSchema;
