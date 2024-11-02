import { PhotoFromAPI as PhotoDetails } from 'shared/stores/photos/types';
import { TodoFromAPI as TodoDetails } from 'shared/stores/todos/types';

export type PhotoProps = {
  photo: PhotoDetails;
};

export type TodoProps = {
  todo: TodoDetails;
};

export type Card = {
  Photo: (props: PhotoProps) => JSX.Element | null;
  Todo: (props: TodoProps) => JSX.Element | null;
};
