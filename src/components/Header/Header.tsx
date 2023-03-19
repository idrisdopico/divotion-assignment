import { CSSProperties } from "react";

import './header.scss'

interface Props {
  title: string;
  style?: CSSProperties;
}

const Header = ({ title, style }: Props) => (
  <header className='header' style={style}>
    <div className='header__container'>
      <h1>{title}</h1>
    </div>
  </header>
)

export default Header;
