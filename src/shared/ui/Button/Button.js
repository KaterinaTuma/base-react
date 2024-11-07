import classes from './Button.module.scss';

/**
 * @typedef {import('./types').ButtonProps} Props
 */

/**
 * @function Button
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Button = (props) => {
  return (
    <button className={classes.button}
      type={props.type}
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
