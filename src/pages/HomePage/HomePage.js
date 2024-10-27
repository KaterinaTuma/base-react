import classes from './HomePage.module.scss';

/**
 * @function HomePage
 * @returns {JSX.Element}
 */

export const HomePage = () => {
  const defaultPhotoUrl = 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTgxNjh8MHwxfHNlYXJjaHwyfHxKYXZhU2NyaXB0fGVufDB8MHx8fDE3MzAwMjYzMTd8MA&ixlib=rb-4.0.3&q=80&w=1080';

  return (
    <div className={classes.banner}>
      <img src={defaultPhotoUrl} />
    </div>
  );
};
