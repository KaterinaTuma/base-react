import { PostForCreate } from 'shared/stores/posts/types';
import { PostForUpdate } from 'shared/stores/posts/types';

export type Method = 'POST' | 'PUT' | 'DELETE' | String;
export type Content = PostForCreate | PostForUpdate | null;

export type QueryOptsData = {
  method: Method,
  body?: string,
  headers?: { [key: string]: string },
};
