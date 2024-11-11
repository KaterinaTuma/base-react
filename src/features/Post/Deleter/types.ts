import { FormEvent } from 'react';

export type SubmitFormEvent = FormEvent<HTMLFormElement>;

export type DeleterProps = {
  isOpen: boolean;
  onClose: () => void;
};
