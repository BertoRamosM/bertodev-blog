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
          <div className={style.imageContainer}></div>
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
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={style.item}>
          <div className={style.imageContainer}></div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.dev}`}>Dev</span>
            <h3 className={style.titleDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, earum?
            </h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}></div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.projects}`}>
              Projects
            </span>
            <h3 className={style.titleDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, earum?
            </h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}></div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.hacks}`}>Hacks</span>
            <h3 className={style.titleDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, earum?
            </h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
      </div>

      <h2 className={style.subtitle}>Discover by topics</h2>
      <h1 className={style.title}>Categories</h1>
      <div className={style.categoryList}>
        <Link
          href="/blog?cat=personal"
          className={`${style.category} ${style.personal}`}
        >
          Personal
        </Link>
        <Link
          href="/blog?cat=dev"
          className={`${style.category} ${style.dev}`}
        >
          Dev
        </Link>
        <Link
          href="/blog?cat=projects"
          className={`${style.category} ${style.projects}`}
        >
          Projects
        </Link>
        <Link
          href="/blog?cat=hacks"
          className={`${style.category} ${style.hacks}`}
        >
          Hacks
        </Link>
      </div>

      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>{`Editor's pick`}</h1>
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
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/code.jpg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.dev}`}>Dev</span>
            <h3 className={style.titleDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, earum?
            </h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/code.jpg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.projects}`}>
              Projects
            </span>
            <h3 className={style.titleDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, earum?
            </h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/code.jpg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.hacks}`}>Hacks</span>
            <h3 className={style.titleDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, earum?
            </h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;