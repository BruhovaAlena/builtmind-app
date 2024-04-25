import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { deletePost, updateBody, updateTitle } from "../stores/postSlice";
import { Post } from "../types/state";

type PostCardProps = {
  item: Post;
};

const PostCard = ({ item }: PostCardProps) => {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const disptach = useDispatch();

  return (
    <div className="border bg-gray-100 mb-[10px] rounded-xl p-4 xs:max-w-full w-full max-w-[600px] ">
      <div className="font-bold text-xl mb-4 text-left">{item.title}</div>
      <div className="text-left">{item.body}</div>
      <div>
        <Input
          label="Title"
          value={newTitle}
          type="text"
          placeholder="Title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Input
          label="Body"
          value={newBody}
          type="text"
          placeholder="Body"
          onChange={(e) => setNewBody(e.target.value)}
        />
      </div>
      <div className="flex justify-center gap-10 mt-8">
        <Button
          title="Update"
          onClick={() => {
            if (newBody) {
              disptach(updateBody({ body: newBody, id: item.id }));
              setNewBody("");
            }
            if (newTitle) {
              disptach(updateTitle({ title: newTitle, id: item.id }));
              setNewTitle("");
            }
          }}
        />
        <Button
          title="Delete"
          onClick={() => disptach(deletePost({ id: item.id }))}
          className="bg-red-400 hover:bg-red-200 "
        />
      </div>
    </div>
  );
};

export default PostCard;
