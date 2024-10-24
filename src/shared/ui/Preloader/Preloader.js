import classes from './Preloader.module.scss';
import { IconPreloader } from 'shared/icons';

/**
 * @typedef {import('./types').PreloaderProps} Props
 */

/**
 * @function Preloader
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const Preloader = (props) => {
  if (!props.isActive) return null;

  return (
    <div className={classes.preloader}>
      <div className={classes.preloader__wrapper}>
        <IconPreloader />
      </div>
    </div>
  );
};
