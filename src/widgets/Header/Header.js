import classes from './Header.module.scss';
import { IconRocketFilled } from 'shared/icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

/**
 * @typedef {import('./types').HeaderProps} Props
 */

/**
 * @function Header
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Link to={'/'}>
          <h1 className={classes.logo}>
            <IconRocketFilled />
            {props.title}
          </h1>
        </Link>
        <nav>
          <ul className={classes.nav}>
            <li className={classes.item}>
              <NavLink to={'/photos'}
                className={({ isActive }) => isActive ? classes.active : ''}
              >
                Gallery
              </NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to={'/todos'}
                className={({ isActive }) => isActive ? classes.active : ''}
              >
                Tasks
              </NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to={'/posts'}
                className={({ isActive }) => isActive ? classes.active : ''}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
