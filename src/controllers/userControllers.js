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
    return resp.send(await User.clearUserFavs(req.body.userId))
}


export const getUserOrders = async (req, res) => {
    const { userId } = req.body;
    res.send(await User.getUserOrders(userId))
};

export const deleteOrder = async (req, res) => {
    const { userId, orderId } = req.body;
    res.send(await User.userDeleteOrder(userId,orderId))
};