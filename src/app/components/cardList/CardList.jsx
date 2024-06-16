import React from 'react'
import style from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';


const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log(data)
  return data.posts; 
};

const CardList = async ({page}) => {

  const data = await getData(page)

  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>

      {data?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
      <Pagination page={page} />
    </div>
  );
};

export default CardList;