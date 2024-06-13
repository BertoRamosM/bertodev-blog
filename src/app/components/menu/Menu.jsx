import React from 'react'
import style from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"What's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <div className={style.items}>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/code.jpg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.personal}`}>
              Personal
            </span>
            <h3 className={style.titleDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, earum?
            </h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>13.06.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;