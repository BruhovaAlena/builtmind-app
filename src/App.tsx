import { useEffect } from "react";
import "./App.css";
import { addPost, fetchPosts } from "./stores/postSlice";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./components/Button";
import {
  CreatePostSchema,
  CreatePostType,
} from "./validation/createPostSchema";
import { useAppDispatch, useAppSelector } from "./hooks/state";
import PostsList from "./components/PostsList";

function App() {
  const postsState = useAppSelector((state) => state.posts);
  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(fetchPosts());
  }, [disptach]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePostType>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const submitHandler = (formValues: CreatePostType) => {
    disptach(addPost({ title: formValues.title, body: formValues.body }));
    reset();
  };

  return (
    <div className="flex flex-col items-center p-10">
      <div className="xs:max-w-full max-w-[600px] w-full">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-4 mb-2"
        >
          <Input
            label="Title"
            {...register("title")}
            type="text"
            placeholder="Title"
            errorMessage={errors.title?.message}
          />
          <Input
            label="Body"
            {...register("body")}
            type="text"
            placeholder="Body"
            errorMessage={errors.body?.message}
          />
          <Button
            title="Add Post"
            type="submit"
            className="w-[200px] self-end"
          />
        </form>

        <div>
          <PostsList posts={postsState.posts} isLoading={postsState.loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
