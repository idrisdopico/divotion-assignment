import React from 'react';
import Header from "../../components/Header";
import ProductTile from "../../components/ProductTile";
import './products.scss';

export type ProductProps = {
  id?: number;
  title: string;
  image: string;
}

interface Props {
  products: ProductProps[]
}

const Products = ({ products }: Props) => {
  return (
    <>
      <Header title='Listing of the products' style={{ marginBottom: '30px' }} />
      <div className='products'>
        <ul>
          {products.map(product => (
            <ProductTile image={product.image} title={product.title} key={product.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
