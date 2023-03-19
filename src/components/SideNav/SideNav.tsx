import ButtonComponent from "../ButtonComponent";
import WishListCounter from "../WishListCounter";
import { useMenuState } from "../../context/MenuContext";

import './sideNav.scss';
import useWishlistCount from "../../hooks/useWishlistCount";

const SideNav = () => {
  const { isOpen, toggleIsOpen } = useMenuState();
  const { count, increment, decrement } = useWishlistCount(0);

  return (
    <nav className='sideNav'>
      <div className='sideNav__buttonContainer'>
        <ButtonComponent
          title='Open WishList'
          counter={<WishListCounter/>}
          onClick={() => toggleIsOpen(!isOpen)}
          className='sideNav__menuButton'
        />
      </div>

      <section className={`sideNav__container ${isOpen && 'is-active'}`}>
        <ButtonComponent
          title='Close WishList'
          onClick={() => toggleIsOpen(!isOpen)}
          className='sideNav__menuButton sideNav__menuButton--secondary'
        />
        <header>
          <h4>Side navigation</h4>
          <p>
            We have {count === 0 ? 'no more' : count} {count === 1 ? 'item' : count === 0 ? '' : 'items'} in the wishlist
          </p>
        </header>
      </section>
    </nav>
  )
}

export default SideNav;
