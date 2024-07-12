import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', rapidApiKey);
      headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => {
        const { articleUrl, language = 'en' } = params; // Default to English if language is not provided
        return `/summarize?url=${encodeURIComponent(articleUrl)}&length=3&lang=${language}`;
      }
    })
  })
});

export const { useLazyGetSummaryQuery } = articleApi;
