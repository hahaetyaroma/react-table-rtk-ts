import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (limit: number = 50) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
