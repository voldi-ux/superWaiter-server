import Admin from "../models/admin.js"
import { protectedRoute } from "./utils.js";


export const signInController = async (req, res) => {
    const { passcode, pin } = req.body;
    return res.send(await Admin.adminSignIn(passcode, pin));
}


export const getAdminData = async (req, res) => {
    const { token } = req.body;
    const authorized = await protectedRoute(token)
    if (!authorized) {
        return res.status(401).send({ err: "unauthorized" });
    }
  return res.send(await Admin.getData())
}