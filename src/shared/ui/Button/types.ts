import { MouseEventHandler } from 'react';
import { ReactNode } from 'react';

export type ButtonProps = {
  type: 'button' | 'submit';
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
  children: ReactNode;
};
