import React from 'react'
import style from './singlePage.module.css'
import Image from 'next/image';
import Menu from '../components/menu/Menu';

const SinglePage = () => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              <Image
                src="/code.jpg"
                alt="post image"
                fill
                className={style.image}
              />
            </div>
            <div className={style.userTextContainer}>
              <span className={style.username}>Joe Doe</span>
              <span className={style.date}>14.06.2024</span>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image
            src="/code.jpg"
            alt="post image"
            fill
            className={style.image}
          />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.post}></div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;