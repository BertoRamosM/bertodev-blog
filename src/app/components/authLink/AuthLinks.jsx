"use client";
import Link from "next/link";
import style from "./authLinks.module.css";
import { useState } from "react";
import { signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "yes"; // Example status value, should be dynamic in a real application

  const handleResponsive = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {status === "no" ? (
        <Link href="/login" className={style.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="#" className={style.link}>
            Write
          </Link>
          <span className={style.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}

      <div className={style.burger} onClick={handleResponsive}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>

      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/" className={style.link} onClick={handleResponsive}>
            Home
          </Link>
          <Link href="/about" className={style.link} onClick={handleResponsive}>
            About
          </Link>
          <Link
            href="/contact"
            className={style.link}
            onClick={handleResponsive}
          >
            Contact
          </Link>
          {status === "no" ? (
            <Link
              href="/login"
              className={style.link}
              onClick={handleResponsive}
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/write"
                className={style.link}
                onClick={handleResponsive}
              >
                Write
              </Link>
              <span className={style.link} onClick={signOut}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
