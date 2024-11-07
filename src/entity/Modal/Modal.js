import classes from './Modal.module.scss';
import { IconError } from 'shared/icons';
import { IconSuccess } from 'shared/icons';
import { IconClose } from 'shared/icons';

/**
 * @typedef {import('./types').ModalProps} Props
 */

/**
 * @function Modal
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const Modal = (props) => {
  if (!props.isOpen) return null;

  const isSuccess = props.type === 'success';
  const isError = props.type === 'error';

  const handleOverlayClick = (/** @type {React.MouseEvent} */ event) =>
    event.target === event.currentTarget
      ? props.onClose()
      : null;

  return (
    <div className={classes.modal}
      onClick={handleOverlayClick}
    >
      <div className={classes.wrapper}>
        {/* Close */}
        <button className={classes.close}
          type={'button'}
          onClick={props.onClose}
        >
          <IconClose />
        </button>
        {/* Icon type */}
        {isSuccess  && <IconSuccess />}
        {isError  && <IconError />}
        {/* Children */}
        {props.children}
      </div>
    </div>
  );
};
