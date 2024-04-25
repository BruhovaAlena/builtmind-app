export type Post = {
  title: string;
  body: string;
  id: number;
  userId: number;
};

export type PostState = {
  loading: boolean;
  posts: Post[];
};

export type AddPostPayload = {
  title: string;
  body: string;
};

export type UpdateBodyPayload = {
  body: string;
  id: number;
};

export type UpdateTitlePayload = {
  title: string;
  id: number;
};

export type DeletePostPayload = {
  id: number;
};
