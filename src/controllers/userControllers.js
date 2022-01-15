import User from "../models/user.js";

export const updateUserFavs = async (req, res) => {
    const { type, item, userId,itemId } = req.body;
    if (type === 'remove') {
        return res.send(await User.RemoveItemFromFav(itemId, userId));
    } else if (type === 'add') {
         return res.send(await User.addItemToFav(item, userId));
    }
}


export const clearUserFavs = async (req, resp) => {
    console.log(req.body)
    return resp.send(await User.clearUserFavs(req.body.userId))
}