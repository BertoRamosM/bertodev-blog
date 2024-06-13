import React from 'react'
import style from "./card.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image className={style.image} src="/code.jpg" alt="" fill />
      </div>
      <div className={style.textContainer}>
        <div className={style.detail}>
          <span className={style.date}>13.06.2024 - </span>
          <span className={style.category}>Personal</span>
        </div>
        <Link href="/">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
        </Link>
        <p className={style.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem sed a praesentium? Quisquam nihil consequuntur, neque
          sint eum nulla ipsum voluptatum est similique dolor dolorum!
        </p>
        <Link href="/" className={style.link}>Read More</Link>
      </div>
    </div>
  );
}

export default Card