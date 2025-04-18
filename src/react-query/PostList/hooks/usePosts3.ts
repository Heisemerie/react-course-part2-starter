import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  //cannot keep track of page number with state variable as pagination is handled automatically by useInfiniteQuery
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: (
      { pageParam = 0 } //query function context. Output of getNextPageParam. Initialize pageParam to 1 to get first page
    ) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: pageParam * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
    //returns next page number (pageParam) or undefined for the useInfiniteQueries hook
    getNextPageParam: (lastPage, allPages) => {
      //called by fetchNextPage
      return lastPage.length > 0 ? allPages.length + 1 : undefined; //specifically for jsonplaceholder.typicode.com as it returns empty array for last page when no more data
    },
  });

export default usePosts;
