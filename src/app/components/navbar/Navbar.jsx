
import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLink/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import PortfolioIcon from "@/app/icons/PortfolioIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import GithubIcon from "@/app/icons/GithubIcon";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        {/*  <Image src="/logo.webp" width={48} height={48} alt="user logo" class={style.avatar} /> */}
        <Link href="https://albertoramos.dev/" passHref target="_blank">
          <PortfolioIcon
            strokeColor="var(--text)"
            width={24}
            height={24}
            className="icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alberto-ramos-munoz-372000105/"
          passHref
          target="_blank"
          className="icon"
        >
          <LinkedinIcon strokeColor="var(--text)" width={24} height={24}
          className="icon"/>
        </Link>

        <Link href="https://github.com/BertoRamosM" passHref target="_blank">
          <GithubIcon strokeColor="var(--text)" width={24} height={24} />
        </Link>
      </div>
      <div className={style.logo}>
        Berto<span className={style.logo2}>Blog</span>
      </div>
      <div className={style.links}>
        <ThemeToggle />

        <Link href="/" className={style.link}>
          Home
        </Link>
        <Link href="/contact" className={style.link}>
          Contact
        </Link>
        <Link href="/about" className={style.link}>
          About
        </Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
