import React from 'react'
import style from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link';
import LinkedinIcon from '@/app/icons/LinkedinIcon';
import GithubIcon from '@/app/icons/GithubIcon';
import PortfolioIcon from '@/app/icons/PortfolioIcon';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.logo}>
          <Image
            src="/logo.webp"
            alt="personal logo"
            width={50}
            height={50}
            className={style.logoImg}
          />
          <h1>
            <div className={style.logo}>
              Berto<span className={style.logo2}>Blog</span>
            </div>
          </h1>
        </div>
        <p className={style.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus quis distinctio modi molestiae id nobis temporibus,
          rerum accusamus debitis voluptatibus!
        </p>

        <div className={style.icons}>
          <Link href="https://albertoramos.dev/" passHref target="_blank">
            <PortfolioIcon strokeColor="var(--text)" width={18} height={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alberto-ramos-munoz-372000105/"
            passHref
            target="_blank"
          >
            <LinkedinIcon strokeColor="var(--text)" width={18} height={18} />
          </Link>

          <Link href="https://github.com/BertoRamosM" passHref target="_blank">
            <GithubIcon strokeColor="var(--text)" width={18} height={18} />
          </Link>
        </div>
      </div>

      <div className={style.links}>
        <div className={style.list}>
          <span className={style.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link href="/">Personal</Link>
          <Link href="/">Web Dev</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Hacks</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Social</span>
          <Link
            href="https://www.linkedin.com/in/alberto-ramos-munoz-372000105/"
            passHref
            target="_blank"
          >
            Portfolio
          </Link>
          <Link
            href="https://www.linkedin.com/in/alberto-ramos-munoz-372000105/"
            passHref
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://github.com/BertoRamosM" passHref target="_blank">
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer