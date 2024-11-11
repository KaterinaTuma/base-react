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
  const buttonClassNames = `
    ${classes.button}
    ${props.mode ? classes[props.mode] : ''}
    ${props.className || ''}
    `.trim();

  return (
    <button className={buttonClassNames}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
