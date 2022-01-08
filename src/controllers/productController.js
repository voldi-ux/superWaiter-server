import Product from '../models/product.js'


export const getProducts = async (req, res) => {
     return res.json(await Product.getProducts());
}

export const search = async (req, res) => {
     const { term } = req.query
     console.log(term)
     return res.json(await Product.searchProducts(term));
}