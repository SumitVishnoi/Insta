import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import Nav from "../../shared/components/Nav";

const Feed = () => {
  const {feed, handleGetFeed, loading, handleLikePost, handleUnLikePost} = usePost()

  useEffect(()=> {
    handleGetFeed()
  }, [])

  if(loading || !feed) {
    return (<main>
      <h1>Loading....</h1>
    </main>)
  }

  console.log(feed)
  return (
    <div className="post-page">
      <Nav />
      <div className="posts">
        {feed.map((post, idx)=> (
          <div key={idx}>
            <Post user={post.user} post={post} handleLike={handleLikePost} handleUnLike={handleUnLikePost}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
