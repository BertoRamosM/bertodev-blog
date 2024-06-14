import React from 'react'
import style from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image'

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
      <div className={style.comments}>
        <div className={style.comment}>
          <div className={style.user}>
            <Image
              className={style.image}
              src="/code.jpg"
              alt="avatar"
              width={50}
              height={50}
            />
            <div className={style.userInfo}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>01.01.2024</span>
            </div>
          </div>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus iste nam ipsam eius eos voluptas deserunt tempora labore
            totam.
          </p>
        </div>

        <div className={style.comment}>
          <div className={style.user}>
            <Image
              className={style.image}
              src="/code.jpg"
              alt="avatar"
              width={50}
              height={50}
            />
            <div className={style.userInfo}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>01.01.2024</span>
            </div>
          </div>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus iste nam ipsam eius eos voluptas deserunt tempora labore
            totam.
          </p>
        </div>
        <div className={style.comment}>
          <div className={style.user}>
            <Image
              className={style.image}
              src="/code.jpg"
              alt="avatar"
              width={50}
              height={50}
            />
            <div className={style.userInfo}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>01.01.2024</span>
            </div>
          </div>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus iste nam ipsam eius eos voluptas deserunt tempora labore
            totam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments