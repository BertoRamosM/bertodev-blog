import React from 'react'
import style from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCat from '../menuCat/MenuCat';

const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"What's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={style.subtitle}>Discover by topic</h2>
      <h1 className={style.title}>Categories</h1>
      <MenuCat />

      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>{`Editor's pick`}</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;