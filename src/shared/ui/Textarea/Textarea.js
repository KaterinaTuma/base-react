import classes from './Textarea.module.scss';

/**
 * @typedef {import('./types').TextareaProps} Props
 */

/**
 * @function Textarea
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Textarea = (props) => {
  const textareaClassNames = `
  ${classes.textarea}
  ${props.className || ''}
  `.trim();

  return (
    <label className={classes.lable}>
      <textarea className={textareaClassNames}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </label>
  );
};
