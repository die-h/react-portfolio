import React, { useState, useEffect } from "react";
import style from "./WallPost.module.scss";
import wallPosts from "utils/WallPosts.json";
import { Post } from "components/Home";

const WallPost = () => {
  const [posts, setPosts] = useState<WallPostType[]>([]);

  useEffect(() => {
    setPosts(wallPosts);
  }, []);

  return (
    <article className={style.wallPost}>
      {posts.map((post) => (
        <li key={post.title}>
          <Post post={post} />
        </li>
      ))}
    </article>
  );
};

export { WallPost };
