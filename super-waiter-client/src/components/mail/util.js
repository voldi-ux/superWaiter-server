export const getFilteredUsers = (term, users) => {
    
    return users.filter((user) => user.email.toLowerCase().includes(term) || user.name.toLowerCase().includes(term) || user.surname.toLowerCase().includes(term));
}

export const userSelected = (id, users) => {
    const indx = users.findIndex(user => user._id === id)
    if (indx >= 0) return true;
    return false;
}