import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  AddPostPayload,
  DeletePostPayload,
  PostState,
  UpdateBodyPayload,
  UpdateTitlePayload,
} from "../types/state";

const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";
const SLICE_NAME = "post"
const THUNK_TYPE_PREFIX = "post/fetchPosts"

const initialState: PostState = {
  loading: false,
  posts: [],
};

export const fetchPosts = createAsyncThunk(THUNK_TYPE_PREFIX, async () => {
  const response = await axios.get(POSTS_API_URL);
  return response.data;
});

const postSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<AddPostPayload>) => {
      state.posts.push({
        id: state.posts.length + 1,
        userId: 1,
        ...action.payload,
      });
    },
    deletePost: (state, action: PayloadAction<DeletePostPayload>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    updateBody: (state, action: PayloadAction<UpdateBodyPayload>) => {
      state.posts.forEach((post) => {
        if (post.id === action.payload.id) {
          post.body = action.payload.body;
        }
      });
    },
    updateTitle: (state, action: PayloadAction<UpdateTitlePayload>) => {
      state.posts.forEach((post) => {
        if (post.id === action.payload.id) {
          post.title = action.payload.title;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.posts = [];
    });
  },
});
export const { addPost, deletePost, updateBody, updateTitle } =
  postSlice.actions;
export default postSlice.reducer;
