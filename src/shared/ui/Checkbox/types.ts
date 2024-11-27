import { ReactEventHandler } from 'react';

export type CheckboxProps = {
  className?: string;
  disabled?: boolean;
  checked: boolean;
  label?: string;
  onChange: ReactEventHandler;
};
