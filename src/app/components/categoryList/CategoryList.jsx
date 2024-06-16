import React from 'react'
import style from "./categoryList.module.css";
import Link from 'next/link';
import Image from 'next/image';



const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.categories;
};

const CategoryList = async () => {

  const data = await getData()
  console.log(data)


  return (
    <div className={style.container}>
      <h1 className={style.title}>Categories</h1>
      <div className={style.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=personal"
            className={`${style.category} ${style[item.slug]}`}
            key={item._id}
          >
            { item.img && <Image
              src={item.img}
              alt="personal"
              width={32}
              height={32}
              className={style.image}
            />}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;