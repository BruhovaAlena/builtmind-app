import React from "react";
import { Post } from "../types/state";
import Loading from "./Loading";
import PostCard from "./PostCard";

const NO_POSTS_MESSAGE = "There are no posts."

type PostsListProps = {
  posts: Post[];
  isLoading: boolean;
};

const PostsList = ({ isLoading, posts }: PostsListProps) => {
  if (isLoading) {
    return <Loading />;
  }

  if (posts.length === 0) {
    return (
      <div className="flex justify-center font-bold text-xl mt-10">
       {NO_POSTS_MESSAGE}
      </div>
    );
  }

  return (
    <>
      {posts.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default PostsList;
