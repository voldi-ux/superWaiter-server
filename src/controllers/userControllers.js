import User from "../models/user.js";

export const updateUserFavs = async (req, res) => {
    const { type, item, userId } = req.body;
    if (type === 'remove') {
        console.log(req.body.item)
        return res.send(await User.RemoveItemFromFav(item, userId));
    } else if (type === 'add') {
         return res.send(await User.addItemToFav(item, userId));
    }
}