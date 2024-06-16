import React from 'react'
import style from "./card.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Card = ({key, item}) => {
  return (
    <div className={style.container} key={key}>
      <div className={style.imageContainer}>
        <Image className={style.image} src={item.img} alt="" fill />
      </div>
      <div className={style.textContainer}>
        <div className={style.detail}>
          <span className={style.date}>{item.createdAt} - </span>
          <span className={style.category}>{item.catSlug}</span>
        </div>
        <Link href="/">
        <h1>{item.title}</h1>
        </Link>
        <p className={style.desc}>
          {item.desc}
        </p>
        <Link href="/" className={style.link}>Read More</Link>
      </div>
    </div>
  );
}

export default Card