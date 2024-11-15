import classes from './Checkbox.module.scss';

/**
 * @typedef {import('./types').CheckboxProps} Props
 */

/**
 * @function Checkbox
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Checkbox = (props) => {
  const checkboxClassNames = `
  ${classes.checkbox}
  ${props.className || ''}
  `.trim();

  return (
    <label className={checkboxClassNames}>
      <input className={classes.input}
        type='checkbox'
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <span className={classes.custom}></span>
      {props.label && <span className={classes.label}>{props.label}</span>}
    </label>
  );
};
