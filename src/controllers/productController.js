import Product from '../models/product.js'


export const getProducts = async (req, res) => {
     return res.json(await Product.getProducts());
}