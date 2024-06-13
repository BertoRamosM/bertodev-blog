
import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLink/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import PortfolioIcon from "@/app/icons/PortfolioIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import GithubIcon from "@/app/icons/GithubIcon";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Link href="https://portfolio.example.com" passHref>
          
            <PortfolioIcon strokeColor="var(--text)" width={24} height={24} />
          
        </Link>
        <Link href="https://linkedin.com/in/yourprofile" passHref>
          
            <LinkedinIcon strokeColor="var(--text)" width={24} height={24} />
         
        </Link>
        
        <Link href="https://github.com/yourprofile" passHref>
        
            <GithubIcon strokeColor="var(--text)" width={24} height={24} />
        
        </Link>
      </div>
      <div className={style.logo}>
        Berto<span className={style.logo2}>Blog</span>
      </div>
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
