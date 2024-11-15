/**********************************************
  Response types
**********************************************/

export type PostFromAPI = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

/**********************************************
  Post types
**********************************************/

export type PostForCreate = {
  userId: string;
  title: string;
  body: string;
  timestamp: number;
};

export type PostForUpdate = {
  userId: string;
  id: string;
  title: string;
  body: string;
  timestamp: number;
};

/**********************************************
  Store types
**********************************************/

export type PostsStore = {
  /* state for post count */
  postCount: number;
  setPostCount: (postsCount: number) => void;

  /* state for getting posts */
  isPostsLoading: boolean;
  posts: PostFromAPI[];
  postsLoadErrorMessage: string;
  getPosts: (count: number) => void;
  resetPosts: () => void;

  /* state for getting post */
  isPostLoading: boolean;
  post: null | PostFromAPI;
  postLoadErrorMessage: string;
  getPost: (postId: string ) => void;
  resetPost: () => void;

  /* state for create post */
  isPostCreating: boolean;
  isPostCreated: boolean;
  postCreateErrorMessage: string;
  createPost: (postForCreate: PostForCreate) => void;
  resetPostCreation: () => void;

  /* state for update post */
  isPostUpdating: boolean;
  isPostUpdated: boolean;
  postUpdateErrorMessage: string;
  updatePost: (postForUpdate: PostForUpdate) => void;
  resetPostUpdate: () => void;

  /* state for delete post */
  isPostDeleting: boolean;
  isPostDeleted: boolean;
  postDeleteErrorMessage: string;
  deletePost: (postId: string) => void;
  resetPostDeletion: () => void;
};

export type SetterCallback = (store: PostsStore) => PostsStore;
export type StoreCreator = (set: Function) => PostsStore;

/**********************************************/
