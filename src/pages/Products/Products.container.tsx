import React from 'react';
import Products from "./Products";
import data from '../../data/products/allTheProducts.json';

const ProductsContainer = () => {
  return (
    <Products products={data.products} />
  );
};

export default ProductsContainer;
