/** @format */
import jwt from "jsonwebtoken";

export const protectedRoute = async (token) => {
  try {
    await jwt.verify(token, process.env.JWT_KEY);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
