"use client";
import React, { useState } from "react";
import style from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Loader from "../smallLoader/SmallLoader";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, error, mutate } = useSWR(
    `${apiUrl}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch(`${apiUrl}/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        desc,
        postSlug,
      }),
    });
    mutate();
  };

  if (error) return <div>Failed to load comments</div>;
  if (!data) return <Loader />;

  return (
    <div className={style.container}>
      <h1 className={style.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={style.write}>
          <textarea
            placeholder="Write a comment..."
            className={style.input}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className={style.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={style.comments}>
        {data.map((item) => (
          <div className={style.comment} key={item._id}>
            <div className={style.user}>
              {item.user?.image && (
                <Image
                  className={style.image}
                  src={item.user.image}
                  alt={`avatar of ${item.user.username}`}
                  width={50}
                  height={50}
                />
              )}
              <div className={style.userInfo}>
                <span className={style.username}>{item.user.username}</span>
                <span className={style.date}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <p className={style.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
