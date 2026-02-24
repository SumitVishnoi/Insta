import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  console.log("usePost")
  const handleGetFeed = async () => {
    setLoading(true);

    const response = await getFeed();

    console.log(response.posts);
    setFeed(response.posts);

    setLoading(false);
  };

  return {
    loading,
    post,
    feed,
    handleGetFeed,
  };
};
