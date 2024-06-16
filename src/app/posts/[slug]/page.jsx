import React from 'react'
import style from './singlePage.module.css'
import Image from 'next/image';
import Menu from '../../components/menu/Menu';
import Comments from '../../components/comments/Comments';

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};


const SinglePage = async ({params}) => {
  
  const {slug} = params

  const data = await getData(slug)

  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>{data?.title}</h1>
          <div className={style.user}>
            {data && (
              <div className={style.userImageContainer}>
                <Image
                  src={data?.user.image}
                  alt="user avatar"
                  fill
                  className={style.avatar}
                />
              </div>
            )}
            <div className={style.userTextContainer}>
              <span className={style.username}>{data?.user.name}</span>
              <span className={style.date}>14.06.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={style.imageContainer}>
            <Image
              src={data.img}
              alt={data.title}
              fill
              className={style.image}
            />
          </div>
        )}
      </div>
      <div className={style.content}>
        <div className={style.post}>
          <div
            className={style.desc}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={style.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;