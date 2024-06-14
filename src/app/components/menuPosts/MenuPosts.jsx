import React from 'react'
import style from './menuPosts.module.css'
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({withImage}) => {
  return (
    <div className={style.items}>
      <Link href="/" className={style.item}>
        {withImage && (<div className={style.imageContainer}>
          <Image src="/code.jpg" alt="" fill className={style.image} />
        </div>
        )}
        <div className={style.textContainer}>
          <span className={`${style.category} ${style.personal}`}>
            Personal
          </span>
          <h3 className={style.titleDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            earum?
          </h3>
          <div className={style.detail}>
            <span className={style.username}>John Doe</span>
            <span className={style.date}> - 13.06.2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={style.item}>
        {withImage && (<div className={style.imageContainer}>
          <Image src="/code.jpg" alt="" fill className={style.image} />
        </div>
        )}
        <div className={style.textContainer}>
          <span className={`${style.category} ${style.dev}`}>Dev</span>
          <h3 className={style.titleDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            earum?
          </h3>
          <div className={style.detail}>
            <span className={style.username}>John Doe</span>
            <span className={style.date}> - 13.06.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={style.item}>
        {withImage && (
          <div className={style.imageContainer}>
            <Image src="/code.jpg" alt="" fill className={style.image} />
          </div>
        )}
        <div className={style.textContainer}>
          <span className={`${style.category} ${style.projects}`}>
            Projects
          </span>
          <h3 className={style.titleDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            earum?
          </h3>
          <div className={style.detail}>
            <span className={style.username}>John Doe</span>
            <span className={style.date}> - 13.06.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={style.item}>
        {withImage && (<div className={style.imageContainer}>
          <Image src="/code.jpg" alt="" fill className={style.image} />
        </div>
        )}
        <div className={style.textContainer}>
          <span className={`${style.category} ${style.hacks}`}>Hacks</span>
          <h3 className={style.titleDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            earum?
          </h3>
          <div className={style.detail}>
            <span className={style.username}>John Doe</span>
            <span className={style.date}> - 13.06.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts