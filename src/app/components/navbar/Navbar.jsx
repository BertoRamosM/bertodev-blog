import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLink/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/portfolio.svg" alt="portfolio" width={24} height={24} />
        <Image src="/linkedin.svg" alt="portfolio" width={24} height={24} />
        <Image src="/github.svg" alt="portfolio" width={24} height={24} />
      </div>
      <div className={style.logo}>Berto|<span className={style.logo2}>Blog</span></div>
      <div className={style.links}>
        <ThemeToggle />

        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
