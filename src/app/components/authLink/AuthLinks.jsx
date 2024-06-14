'use client'
import Link from "next/link";
import style from "./authLinks.module.css";
import { useState } from "react";
const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  const status = "no"

  const handleResponsive = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      {status === "no" ? (
        <Link href="/login" className={style.link}>
          Login
        </Link>
      ) : (
        <>
          (
          <Link href="#" className={style.link}>
            Write
          </Link>
          )<span className={style.link}>Logout</span>
        </>
      )}

      <div className={style.burger} onClick={handleResponsive}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>

      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "no" ? (
            <Link href="#">Login</Link>
          ) : (
            <>
              (<Link href="#">Write</Link>)
              <span className={style.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;