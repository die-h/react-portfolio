import React from "react";
import Link from "next/link";
import style from "./Post.module.scss";

const Post = ({ post }: { post: WallPostType }) => {
  return (
    <article className={style.post}>
      <h3 className={style.title}>{post.title}</h3>
      <p className={style.description}>{post.description}</p>
      {post.link ? (
        <Link href={post.link} className={style.imgContainer}>
          <img
            src={post.img}
            className={style.img}
            alt={`preview of ${post.title}`}
          />
        </Link>
      ) : (
        <a href={post.url} className={style.imgContainer}>
          <img
            src={post.img}
            className={style.img}
            alt={`preview of ${post.title}`}
          />
        </a>
      )}
    </article>
  );
};

export { Post };
