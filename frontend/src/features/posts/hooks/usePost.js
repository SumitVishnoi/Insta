import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";
import { createPost, getFeed, likePost, unLikePost } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);

    const response = await getFeed();

    console.log(response.posts);
    setFeed(response.posts.reverse());

    setLoading(false);
  };

  const handleCreatePost = async(imageFile, caption)=> {
    setLoading(true)

    const response = await createPost(imageFile, caption)
    setFeed([response.post, ...feed])

    setLoading(false)
  }

  const handleLikePost = async (postId)=> {
    const response = await likePost(postId)
    await handleGetFeed()
  }

  const handleUnLikePost = async (postId)=> {
    const response = await unLikePost(postId)
    await handleGetFeed()
  }

  useEffect(()=> {
    handleGetFeed()
  }, [])

  return {
    loading,
    post,
    feed,
    handleGetFeed,
    handleCreatePost,
    handleLikePost,
    handleUnLikePost
  };
};
