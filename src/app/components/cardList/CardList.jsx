import React from "react";
import style from "./cardListNew.module.css"
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


const getData = async (page, cat) => {


  const res = await fetch(
    `${apiUrl}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

const CardList = async ({ page, cat }) => {
  const { posts, lastPage } = await getData(page, cat);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      

      {posts?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
      <Pagination page={page} lastPage={lastPage} />
    </div>
  );
};

export default CardList;
