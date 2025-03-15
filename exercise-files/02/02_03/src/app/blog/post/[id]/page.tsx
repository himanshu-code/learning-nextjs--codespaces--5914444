import React from "react";
import Post from "@/app/ui/components/posts/Post";
import { posts } from "@/app/lib/placeholder-data";
const page = ({ params }: { params: { slug: string } }) => {
  const post = posts.find((post) => post.id === params.id);
  return (
    <>
      <h1>Posts</h1>
      <Post {...post} />
    </>
  );
};

export default page;
