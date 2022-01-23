export const getFilteredProducts = (products, category, term) => {
    const newArr = products.filter((prod) => prod.name.toLowerCase().includes(term) || prod.description.toLowerCase().includes(term));
    if (category === 'all') return newArr;
   return newArr.filter((prod) => prod.category.toLowerCase() === category.toLowerCase());
}