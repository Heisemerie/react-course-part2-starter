import usePosts from "./hooks/usePosts3";
import { Fragment } from "react";

const PostList3 = () => {
  const pageSize = 10;
  const {
    data,
    error,
    isLoading,
    fetchNextPage, //calls queryFn with pageParam
    isFetchingNextPage,
  } = usePosts({ pageSize });

  console.log(data?.pages);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </>
  );
};

export default PostList3;
