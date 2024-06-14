import React from 'react'
import style from "./comments.module.css"
import Link from 'next/link'

const Comments = () => {
  const status = true
  return (
    <div className={style.container}>
      <h1 className={style.title}>Comments</h1>
      {status ? (
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
    </div>
  );
}

export default Comments