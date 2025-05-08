"use client";

import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<{ id: string; title: string }[] | null>(
    null
  );

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://api.vercel.app/blog");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
