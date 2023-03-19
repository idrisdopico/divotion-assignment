import React from "react";
import { ProductProps } from "../../pages/Products/Products";
import './productTile.scss';
import ImageComponent from "../ImageComponent/ImageComponent";
import ButtonComponent from "../ButtonComponent";
import useWishlistCount from "../../hooks/useWishlistCount";

const ProductTile = ({ title, image }: ProductProps) => {
  const { increment } = useWishlistCount(0);

  return (
    <div className='productTile'>
      <h3>{title}</h3>
      <ImageComponent source={image} alt={title} />
      <ButtonComponent title='Add to wishlist' onClick={increment} />
    </div>
  )
}

export default ProductTile;
