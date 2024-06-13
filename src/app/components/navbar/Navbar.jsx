import React from 'react'
import style from "./navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/portfolio.svg" alt="portfolio" width={24} height={24} />
        <Image src="/linkedin.svg" alt="portfolio" width={24} height={24} />
        <Image src="/github.svg" alt="portfolio" width={24} height={24} />
      </div>
      <div className={style.logos}>Berto|Blog</div>
      <div className={style.links}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar