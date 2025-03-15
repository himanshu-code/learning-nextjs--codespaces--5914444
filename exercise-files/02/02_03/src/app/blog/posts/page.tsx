import React from "react";
import Component from "@/app/ui/components/posts/Post";
import { posts } from "@/app/lib/placeholder-data";
const page = () => {
  return (
    <div>
      {posts.map((post) => (
        <Component
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default page;
