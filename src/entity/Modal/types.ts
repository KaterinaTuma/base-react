import { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  type?: 'success' | 'error';
  onClose: () => void;
  children: ReactNode;
};
