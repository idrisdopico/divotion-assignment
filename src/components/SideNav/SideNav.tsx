import ButtonComponent from "../ButtonComponent";
import WishListCounter from "../WishListCounter";
import { useMenuState } from "../../context/MenuContext";

import './sideNav.scss';

const SideNav = () => {
  const { isOpen, toggleIsOpen } = useMenuState();

  return (
    <div className='sideNav'>
      <div className='sideNav__buttonContainer'>
        <ButtonComponent
          title='Open WishList'
          counter={<WishListCounter/>}
          onClick={() => toggleIsOpen(!isOpen)}
          className='sideNav__menuButton'
        />
      </div>

      <div className={`sideNav__container ${isOpen && 'is-active'}`}>
        <ButtonComponent
          title='Close WishList'
          onClick={() => toggleIsOpen(!isOpen)}
          className='sideNav__menuButton sideNav__menuButton--secondary'
        />
        <h4>sidenav</h4>
      </div>
    </div>
  )
}

export default SideNav;
