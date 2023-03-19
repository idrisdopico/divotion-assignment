import './buttonComponent.scss';
import { CSSProperties, ReactElement } from "react";

interface Props {
  title: string;
  onClick?: () => void;
  style?: CSSProperties;
  counter?: ReactElement;
  className?: string;
}

const ButtonComponent = ({ title, onClick, style, className = '', counter }: Props) => {
  return (
    <button
      style={style}
      className={`buttonComponent ${className}`}
      onClick={onClick}>
      {title}
      {counter && counter}
    </button>
  );
}

export default ButtonComponent;
