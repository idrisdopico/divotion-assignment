import './wishListCounter.scss';
import useWishlistCount from "../../hooks/useWishlistCount";

const WishListCounter = () => {
  const { count } = useWishlistCount(0);

  return (
    <span className='wishListCounter'>{count}</span>
  )
}

export default WishListCounter;
