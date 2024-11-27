import classes from './IconRocketFilled.module.scss';
import { RocketFilled as External } from '@ant-design/icons';
import { ICON_DEFAULT_PROPS } from '../config';

/**
 * @typedef {import('../types').IconProps} Props
 */

/**
 * @function IconRocketFilled
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const IconRocketFilled = (props) => {
  const width = props?.width || ICON_DEFAULT_PROPS.width;
  const height = props?.height || ICON_DEFAULT_PROPS.height;
  const color = props?.color || ICON_DEFAULT_PROPS.color;

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    color,
  };

  return (
    <span className={classes.icon}
      style={style}
    >
      <External />
    </span>
  );
};

