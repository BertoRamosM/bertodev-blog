import React from 'react'
import style from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';

const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"What's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={style.subtitle}>Discover by topic</h2>
      <h1 className={style.title}>Categories</h1>
      <div className={style.categoryList}>
        <Link
          href="/blog?cat=personal"
          className={`${style.category} ${style.personal}`}
        >
          Personal
        </Link>
        <Link href="/blog?cat=dev" className={`${style.category} ${style.dev}`}>
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
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;