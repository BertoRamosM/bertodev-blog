import React from 'react'
import style from "./menuCat.module.css"
import Link from 'next/link';

const MenuCat = () => {
  return (
    <div className={style.categoryList}>
      <Link
        href="/blog?cat=personal"
        className={`${style.categoryItem} ${style.personal}`}
      >
        Personal
      </Link>
      <Link
        href="/blog?cat=dev"
        className={`${style.categoryItem} ${style.dev}`}
      >
        Dev
      </Link>
      <Link
        href="/blog?cat=projects"
        className={`${style.categoryItem} ${style.projects}`}
      >
        Projects
      </Link>
      <Link
        href="/blog?cat=hacks"
        className={`${style.categoryItem} ${style.hacks}`}
      >
        Hacks
      </Link>
    </div>
  );
}

export default MenuCat