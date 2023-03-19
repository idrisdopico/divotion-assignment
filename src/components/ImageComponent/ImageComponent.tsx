import './imageComponent.scss';

interface Props {
  source: string;
  alt?: string;
}

const ImageComponent = ({ source, alt = '' }: Props) => {
  return <img src={source} alt={alt} className='image' />
}

export default ImageComponent;
