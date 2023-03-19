import './header.scss'
import { CSSProperties } from "react";

interface Props {
  title: string;
  style?: CSSProperties;
}

const Header = ({ title, style }: Props) => (
  <div className='header' style={style}>
    <h1>{title}</h1>
  </div>
)

export default Header;
