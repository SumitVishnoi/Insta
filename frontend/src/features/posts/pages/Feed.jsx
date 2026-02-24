import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";

const Feed = () => {
  const {feed, handleGetFeed, loading} = usePost()

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
      <div className="posts">
        {feed.map((post, idx)=> (
          <div key={idx}>
            <Post user={post.user} post={post}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
