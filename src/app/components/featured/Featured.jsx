import React from 'react'
import style from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <span className={style.boldTitle}>Alberto Ramos </span>here!
      </h1>
      <h2>Discover my story and ideas</h2>

      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image
            src="/code.jpg"
            alt="code picture"
            fill
            className={style.image}
          />
        </div>
        <div className={style.textContainer}>
          <h2 className={style.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={style.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            blanditiis velit est obcaecati, vitae nihil! Iure, harum dolorem.
            Et, cum sequi? Quas dolor reprehenderit quasi perspiciatis,
            quibusdam illum dolores aut.
          </p>

          <button className={style.postButton}>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;