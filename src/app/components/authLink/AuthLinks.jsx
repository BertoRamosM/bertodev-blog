'use client'
import Link from "next/link";
import style from "./authLinks.module.css";
import { useState } from "react";
const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  const status = "no"

  return (
    <>
      {status === "no" ? (
        <Link href="#">Login</Link>
      ) : (
        <>
          (<Link href="#">Write</Link>)
          <span className={style.link}>Logout</span>
        </>
      )}

      <div className={style.burger}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </>
  );
};

export default AuthLinks;