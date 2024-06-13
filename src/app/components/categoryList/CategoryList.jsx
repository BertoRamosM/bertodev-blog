import React from 'react'
import style from "./categoryList.module.css";
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Categories</h1>
      <div className={style.categories}>
        <Link
          href="/blog?cat=personal"
          className={`${style.category} ${style.personal}`}
        >
          <Image
            src="/logo.webp"
            alt="personal"
            width={32}
            height={32}
            className={style.image}
          />
          Personal
        </Link>

        <Link href="/blog?cat=dev" className={`${style.category} ${style.dev}`}>
          <Image
            src="/webdev.jpg"
            alt="dev"
            width={32}
            height={32}
            className={style.image}
          />
          Web dev
        </Link>

        <Link
          href="/blog?cat=projects"
          className={`${style.category} ${style.projects}`}
        >
          <Image
            src="/projects.jpg"
            alt="projects"
            width={32}
            height={32}
            className={style.image}
          />
          Projects
        </Link>

        <Link
          href="/blog?cat=hacks"
          className={`${style.category} ${style.hacks}`}
        >
          <Image
            src="/hacks.jpg"
            alt="hacks"
            width={32}
            height={32}
            className={style.image}
          />
          Hacks
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;