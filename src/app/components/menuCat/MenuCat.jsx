import React from 'react'
import style from "./menuCat.module.css"
import Link from 'next/link';

const MenuCat = () => {
  return (
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
  );
}

export default MenuCat