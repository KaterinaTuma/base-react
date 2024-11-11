import { MouseEventHandler } from 'react';
import { ReactNode } from 'react';

export type ButtonProps = {
  className?: string;
  mode?: 'primary' | 'link' | 'danger' | string;
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children: ReactNode;
};
