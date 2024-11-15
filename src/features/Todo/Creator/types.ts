import { ChangeEvent } from 'react';
import { FormEvent } from 'react';

export type ChangeInputEvent = ChangeEvent<HTMLInputElement>;
export type ChangeTextareaEvent = ChangeEvent<HTMLTextAreaElement>;
export type ChangeCheckboxEvent = ChangeEvent<HTMLTextAreaElement>;
export type SubmitFormEvent = FormEvent<HTMLFormElement>;

export type CreatorProps = {
  isOpen: boolean;
  onClose: () => void;
};
