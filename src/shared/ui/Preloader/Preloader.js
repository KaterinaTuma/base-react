import classes from './Preloader.module.scss';
import { IconPreloader } from 'shared/icons';

/**
 * @function Preloader
 * @returns {JSX.Element | null}
 */

export const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes.preloader__wrapper}>
        <IconPreloader />
      </div>
    </div>
  );
};
