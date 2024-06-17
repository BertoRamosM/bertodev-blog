import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

const Card = ({ key, item }) => {
  const sanitizedDesc = DOMPurify.sanitize(item.desc);

  return (
    <div className={style.container} key={key}>
      {item.img && (
        <Link className={style.imageContainer} href={`/posts/${item.slug}`}>
          <Image className={style.image} src={item.img} alt="" fill />
        </Link>
      )}
      <div className={style.textContainer}>
        <div className={style.detail}>
          <span className={style.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={style.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className={style.desc}
          dangerouslySetInnerHTML={{ __html: sanitizedDesc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className={style.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
