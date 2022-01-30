/** @format */

import User from "../models/user.js";

// the email address should also be verified e.g by sending an email to the user
export const signUpController = async (req, resp) => {
  const { password, name, surname, email, phone } = req.body;
  const {confirmPassword, ...user } = req.body;
  

  //checking to see if the user information are valid information
  if (name.length < 3 || surname.name < 3) return resp.json({ msg: "ensure that all fields are at least 3 characters long" });
  if (phone[0] != "0" || phone.length !== 10) return resp.json({ msg: "enter a valid phone number" });
  if (password.length < 4) return resp.json({ msg: "password must at least be 5 characters long" });
  if (password !== confirmPassword) return resp.json({ msg: "passwords do not match" });
 
    //adduser func/method returns a user object e.g {name:'some name',etc.}
  return resp.json(await User.addUser({...user, favorites:[]}));
};





export const signInController = async (req, resp) => {

  const { password, email } = req.body;
  console.log(await User.loginUser(email, password));
  if (password.length < 4)return resp.json({ msg: "password must at least be 5 characters long" });
  return resp.json(await User.loginUser(email, password));
};
