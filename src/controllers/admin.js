import Admin from "../models/admin.js"


export const signInController = async (req, res) => {
    const { passcode, pin } = req.body;
    return res.send(await Admin.adminSignIn(passcode, pin));
}