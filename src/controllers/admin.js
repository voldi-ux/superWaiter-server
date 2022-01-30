/** @format */



import Admin from "../models/admin.js";
import { protectedRoute } from "./utils.js";
import mail from 'nodemailer';

const transporter = mail.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "alexandra.lubowitz74@ethereal.email",
    pass: "ynpseV8WCJ7ye1gw6B"
  }
});



export const signInController = async (req, res) => {
  const { passcode, pin } = req.body;
  return res.send(await Admin.adminSignIn(passcode, pin));
};

export const getAdminData = async (req, res) => {
  const { token } = req.body;
  const authorized = await protectedRoute(token);
  if (!authorized) {
    return res.status(401).send({ err: "unauthorized" });
  }
  return res.send(await Admin.getData());
};

export const updateProduct = async (req, res) => {
  const { token, item } = req.body;
  const authorized = await protectedRoute(token);
  if (!authorized) {
    return res.status(401).send({ err: "unauthorized" });
  }

  return res.send(await Admin.updateProudct(item));
};

export const updateOrder = async (req, res) => {
  const { token, order,type } = req.body;
  const authorized = await protectedRoute(token);
  if (!authorized) {
    return res.status(401).send({ err: "unauthorized" });
  }

  return res.send(await Admin.updateOrderItem(order,type));
};


export const sendMail = async (req, res) => {
  const {subject,emails, mailBody } = req.body;
 try {
   
   await transporter.sendMail({
     from: "superwaiter@gmail.com",
     to: emails,
     subject,
     text: "Hello world?",
     html: `<pre>${mailBody}</pre>`
   });

     return res.send({ msg: "success" });
 } catch (error) {
   console.log(error)
   return res.send({ msg: error.message });
 }
}