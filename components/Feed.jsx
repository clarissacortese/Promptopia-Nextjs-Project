"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick}) => (
  <div className="mt-16 prompt_layout">
    {data.map((post) => (
      <PromptCard
        key={post._id}
        post={post}
      />
    ))}
  </div>
);

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
     }
     fetchPosts();
  }, []);

  return (
    <section className="feed">
      <PromptCardList
        data={posts}
      />
    </section>
  )
}

export default Feed