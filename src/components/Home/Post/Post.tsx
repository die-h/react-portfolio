import React from "react";
import style from "./Post.module.scss";

const Post = ({ post }: { post: WallPostType }) => {
  return (
    <article className={style.post}>
      <h3 className={style.title}>{post.title}</h3>
      <a href={post.url}>
        <p className={style.description}>{post.description}</p>
        <img
          src={post.img}
          className={style.img}
          alt={`preview of ${post.title}`}
        />
      </a>
    </article>
  );
};

export { Post };
