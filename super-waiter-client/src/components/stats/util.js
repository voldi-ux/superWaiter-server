export const getStats = (orders) => {

    let totlaOrders = orders.length;
    let newOrders = 0;
    let ordersInProgress = 0;

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i]

        if (order.new) {
            newOrders += 1
        }

        if (order.status !== 'delivered') {
            ordersInProgress += 1 
        } 
    }


    return {totlaOrders,newOrders,ordersInProgress}

}