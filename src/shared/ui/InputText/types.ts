import { ReactEventHandler } from 'react';

export type InputTextProps = {
  className?: string;
  mode?: 'primary' | 'error';
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onChange: ReactEventHandler;
};
