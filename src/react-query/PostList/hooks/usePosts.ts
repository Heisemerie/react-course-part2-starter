import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    // /users/1/posts
    queryKey: userId ? ["users", userId, "posts"] : ["posts"], //hierachical structure that represents relatioships between backend resources starting from the top level resource
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: { userId },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
  });
export default usePosts;
