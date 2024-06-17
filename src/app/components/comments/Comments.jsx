"use client"
import React from 'react'
import style from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async () => {
  const res = await fetch(url)
  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }
return data

}

const Comments = ({postSlug}) => {


  const { status } = useSession()

  const { data, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)
  
  return (
    <div className={style.container}>
      <h1 className={style.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={style.write}>
          <textarea
            placeholder="Write a comment..."
            className={style.input}
          ></textarea>
          <button className={style.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={style.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={style.comment} key={item._id}>
                <div className={style.user}>
                {item.user.image &&
                  <Image
                    className={style.image}
                    src={item.user.image}
                    alt={`avatar of ${item.user.username}`}
                    width={50}
                    height={50}
                  />
                }
                  <div className={style.userInfo}>
                    <span className={style.username}>{item.user.username}</span>
                    <span className={style.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={style.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Comments