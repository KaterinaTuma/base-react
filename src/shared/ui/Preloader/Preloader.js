import classes from './Preloader.module.scss';

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
      <div className={classes.wrapper}>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
      </div>
    </div>
  );
};

