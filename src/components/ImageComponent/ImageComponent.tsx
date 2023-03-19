import './imageComponent.scss';

interface Props {
  source: string;
  title?: string;
}

const ImageComponent = ({ source, title = '' }: Props) => {
  return <img src={source} alt={title} className='image' />
}

export default ImageComponent;
