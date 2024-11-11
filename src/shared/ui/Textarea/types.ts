import { ReactEventHandler } from 'react';

export type TextareaProps = {
  className?: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onChange: ReactEventHandler;
};
