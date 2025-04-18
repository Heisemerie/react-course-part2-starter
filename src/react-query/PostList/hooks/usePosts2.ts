import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  useQuery<Post[], Error>({
    // behaves like deps in useEffect
    queryKey: ["posts", query], //start with top level object
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: query.page * query.pageSize, //number of pages to skip
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true, //prevent page from jumping around while reloading
  });

export default usePosts;
