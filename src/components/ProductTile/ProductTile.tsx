import React from "react";
import { ProductProps } from "../../pages/Products/Products";
import './productTile.scss';
import ImageComponent from "../ImageComponent/ImageComponent";
import ButtonComponent from "../ButtonComponent";

const ProductTile = ({ id, title, image }: ProductProps) => {
  return (
    <div className='productTile'>
      <h3>{title}</h3>
      <ImageComponent source={image} />
      <ButtonComponent title='Add to wishlist' />
    </div>
  )
}

export default ProductTile;
