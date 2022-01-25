import React,{useContext,useState,useRef,useEffect,createRef} from 'react';
import { AppContext } from '../../context/appContext';
import Edit from '../edit/edit';
import Product from '../product/products';
import ProductsNav from '../ProductsNav/productsNav';
import './products.css';
import { getFilteredProducts } from './util';



const Products = () => {
  const { products } = useContext(AppContext)
  const [category,setCategory] = useState('starters')
  const [term, setTerm] = useState('')
  const [editItem,setEditItem] = useState(null)
  const filteredProducts = getFilteredProducts(products, category, term);
  
  const renderProducts = filteredProducts.map((product) => <Product setEditItem={setEditItem} key={product._id} item={product} />);

  const productsContainer = useRef()

  useEffect(() => {
   productsContainer.current.style.gridTemplateRows = `repeat(${Math.ceil(filteredProducts.length/4)},350px)`;
  }, [filteredProducts]);

    return (
      <main className="products-container">
        <Edit
          item={editItem}
          style={{
            transform: editItem ? "translateY(0)" : "translateY(-100%)"
          }}
          updateItem={setEditItem}
        />

        <ProductsNav setCategory={setCategory} setTerm={setTerm} category={category} />

        <div className="products-container-inner" ref={productsContainer}>
          {renderProducts}
        </div>
      </main>
    );
};


export default Products;