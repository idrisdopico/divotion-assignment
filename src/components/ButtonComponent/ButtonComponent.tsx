import './buttonComponent.scss';

interface Props {
  title: string;
  handleClick?: () => void;
}

const ButtonComponent = ({ title, handleClick }: Props) => {
  return (
    <button className='buttonComponent' onClick={handleClick}>{title}</button>
  )
}

export default ButtonComponent;
