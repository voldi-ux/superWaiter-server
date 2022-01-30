export const countNewOrders = (orders) => {
    let count = 0
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i]

        if (order.new) {
            count += 1
        }
    }

    return count;
};