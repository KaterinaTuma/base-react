import classes from './InputText.module.scss';

/**
 * @typedef {import('./types').InputTextProps} Props
 */

/**
 * @function InputText
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const InputText = (props) => {
  const inputClassNames = `
  ${classes.input}
  ${props.mode ? classes[props.mode] : ''}
  ${props.className || ''}
  `.trim();

  return (
    <label className={classes.lable}>
      <input className={inputClassNames}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </label>
  );
};
