import classes from './Header.module.scss';
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
        <h1 className={classes.logo}>
          <Link to={'/'}>{props.title}</Link>
        </h1>
        <nav>
          <ul className={classes.nav}>
            <li>
              <NavLink to="/photos"
                className={({ isActive }) =>
                  `${classes.item} ${isActive ? classes.active : ''}`
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/todos"
                className={({ isActive }) =>
                  `${classes.item} ${isActive ? classes.active : ''}`
                }
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts"
                className={({ isActive }) =>
                  `${classes.item} ${isActive ? classes.active : ''}`
                }
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
