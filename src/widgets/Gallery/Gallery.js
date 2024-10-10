import classes from './Gallery.module.scss';
import { Counter, Photos } from 'features';

/**
 * @typedef {import('./types').GalleryProps} GalleryProps
 */

/**
 * @function Gallery
 * @param {GalleryProps} props
 * @returns {JSX.Element}
 */

export const Gallery = (props) => {
  return (
    <div className={classes.gallery}>
      <Counter name={'Photo count'}
        count={props.count}
        setCount={props.setCount}
      />
      <Photos photos={props.photos}/>
    </div>
  );
};
