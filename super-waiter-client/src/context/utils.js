/** @format */

export const replaceItem = (items, item) => {
   const newArr = [...items]
  const indx = items.findIndex((prod) => prod._id === item._id);
  if (indx >= 0) {
    newArr[indx] = item;
  }
  return newArr;
};


export const toggleSelect = (user, selectedUsers) => {
  const indx = selectedUsers.findIndex((USER) => USER._id ===
    user._id);
  if (indx >= 0) {
    return selectedUsers.filter((USER) => USER._id !== user._id);
  } else {
    //do not perfom the push method on selectedUsers because this value is from the state and in doing so you would be mutating the state.
    const newArr = [...selectedUsers]
    newArr.push(user);
    return newArr;
  };
};
export const toggleSelectAll = (users, selectedUsers) => {
  //if the arrays do not have the same number of users then we know that not all users are not selected, therefore select them all. else if they are equal then we want to deselect all by returning an empty array.
  
  if (users.length === selectedUsers.length) {
   return []
  } else {
    return users
 }
};


export const addUserOrder = (orders, order) => {
  const newOrders = [...orders]
  newOrders.unshift(order)

  return newOrders
}


