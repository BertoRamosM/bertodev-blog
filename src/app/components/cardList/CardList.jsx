import React from 'react'
import style from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';

const CardList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  );
};

export default CardList;