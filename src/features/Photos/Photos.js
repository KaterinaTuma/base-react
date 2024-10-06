import './Photos.css';
import { Card } from 'entity';

/**
 * @typedef {import('./types').PhotosProps} PhotosProps
 */

/**
 * @function Photos
 * @param {PhotosProps} props
 * @returns {JSX.Element}
 */

export const Photos = (props) => {
  return (
    <ul className={'photos'}>
      {props.photos.map((photo) =>
        <Card key={photo.id}
          id={photo.id}
          name={photo.title}
          image={photo.thumbnailUrl}
        />)
      }
    </ul>
  );
};
