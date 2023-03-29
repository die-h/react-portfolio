import React, { useState, useEffect } from "react";
import style from "./Wall.module.scss";
import wallPosts from "utils/Projects.json";
import { Post } from "components/Home";

const Wall = () => {
  const [posts, setPosts] = useState<WallPostType[]>([]);

  useEffect(() => {
    setPosts(wallPosts);
  }, []);

  return (
    <div className={style.wall}>
      <h2 className={style.projectsTitle}>Projects</h2>
      <article className={style.projectsContainer}>
        {posts.map((post) => (
          <li key={post.title}>
            <Post post={post} />
          </li>
        ))}
      </article>
    </div>
  );
};

export { Wall };
