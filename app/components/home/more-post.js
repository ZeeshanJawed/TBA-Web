// components/home/more-post.tsx
"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostPreview from "../shared/post-preview";
import { PostPreviewSkeleton } from "../skeleton/index";

const EndMessage = () => {
  return <span className="italic">Nothing more to show</span>;
};

export default function MorePost({ initialPosts, initialMeta }) {
  const [posts, setPosts] = useState(initialPosts);
  const [meta, setMeta] = useState(initialMeta);

  const getPostFromAPI = async (page = 1) => {
    const res = await fetch(`/api/v1/post?page=${page}`);
    return await res.json();
  };

  const getMorePost = async () => {
    const result = await getPostFromAPI(meta.pagination.next);
    // set new post and new meta
    setPosts((post) => post.concat(result.posts.posts));
    setMeta(result.meta);
  };

  return (
    <section>
      <div className="mb-16">
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={meta.pagination.next}
          loader={<PostPreviewSkeleton />}
          endMessage={<EndMessage />}
        >
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
}
