import classes from './Header.module.scss';
import { Link } from 'react-router-dom';

/**
 * @typedef {import('./types').HeaderProps} Props
 */

/**
 * @function Header
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Header = (props) => (
  <header className={classes.header}>
    <div className={classes.wrapper}>
      <h1 className={classes.logo}>
        <Link to={'/'}>{props.title}</Link>
      </h1>
      <nav>
        <ul className={classes.nav}>
          <Link className={classes.item} to="/photos">Gallery</Link>
          <Link className={classes.item} to="/todos">Tasks</Link>
          <Link className={classes.item} to="/users">Profiles</Link>
        </ul>
      </nav>
    </div>
  </header>
);
