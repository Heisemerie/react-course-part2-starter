import { useState } from "react";
import usePosts from "./hooks/usePosts2";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(0);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize }); //encapsulate values in a query object

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 0}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        disabled={posts.length == 0}
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
