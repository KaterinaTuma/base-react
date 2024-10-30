import classes from './HomePage.module.scss';
import { defaultBannerURL } from 'shared/assets';

/**
 * @function HomePage
 * @returns {JSX.Element}
 */

export const HomePage = () => {
  return (
    <div className={classes.banner}>
      <img src={defaultBannerURL} />
    </div>
  );
};
