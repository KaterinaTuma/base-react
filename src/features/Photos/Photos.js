import classes from './Photos.module.scss';
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
    <ul className={classes.photos}>
      {props.photos.map((photo) => (
        <Card.Photo key={photo.id}
          photo={photo}
        />
      ))}
    </ul>
  );
};
