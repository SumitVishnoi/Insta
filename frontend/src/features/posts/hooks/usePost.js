import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";
import { createPost, getFeed } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);

    const response = await getFeed();

    console.log(response.posts);
    setFeed(response.posts);

    setLoading(false);
  };

  const handleCreatePost = async(imageFile, caption)=> {
    setLoading(true)

    const response = await createPost(imageFile, caption)
    setFeed([response.post, ...feed])

    setLoading(false)
  }

  useEffect(()=> {
    handleGetFeed()
  }, [])

  return {
    loading,
    post,
    feed,
    handleGetFeed,
    handleCreatePost
  };
};
