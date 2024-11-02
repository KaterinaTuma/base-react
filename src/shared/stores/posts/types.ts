/**********************************************
  Response types
**********************************************/

export type PostFromAPI = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

/**********************************************
  Posts types
**********************************************/

export type PostsStore = {
  /* state for post count */
  postCount: number;
  setPostCount: (PostsCount: number) => void;

  /* state for posts store */
  isPostsLoading: boolean;
  posts: PostFromAPI[] | [];
  postsErrorMessage: string;
  getPosts: (count: number) => void;
  resetPosts: () => void;

  /* state for post store */
  isPostLoading: boolean;
  post: PostFromAPI | null;
  postErrorMessage: string;
  getPostById: (postId: string | number) => void;
  resetPost: () => void;
};

export type SetterCallback = (store: PostsStore) => PostsStore;
export type StoreCreator = (set: Function) => PostsStore;

/**********************************************/
