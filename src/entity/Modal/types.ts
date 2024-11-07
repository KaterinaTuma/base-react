import { MouseEventHandler } from 'react';
import { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  type?: 'success' | 'error';
  onClose: MouseEventHandler;
  children: ReactNode;
};
