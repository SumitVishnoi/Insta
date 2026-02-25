import React, { useContext, useRef, useState } from "react";
import "../style/createPost.scss";
import { usePost } from "../hooks/usePost";
import {useNavigate} from "react-router"

const CreatePost = () => {
  const [caption, setCaption] = useState("");

  const postImageInputFieldRef = useRef(null);

  const {loading, handleCreatePost} = usePost()
  const navigate = useNavigate()

  const handleSubmit =async (e)=> {
    e.preventDefault()

    const file = postImageInputFieldRef.current.files[0]

    await handleCreatePost(file, caption)

    navigate("/")
  }

  if(loading) {
    return (<main>
      <h1>create post</h1>
    </main>)
  }
  return (
    <div className="create-post-page">
      <div className="form-container">
        <h1>Create</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="postImage">Select image</label>
          <input
            hidden
            ref={postImageInputFieldRef}
            type="file"
            name="postImage"
            id="postImage"
          />
          <input
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            value={caption}
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter caption"
          />
          <button className="button primary-button">create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
