"use client"
import Image from "next/image"
import style from "./themeToggle.module.css"
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
const ThemeToggle = () => {

  const { theme } = useContext(ThemeContext)
  
  console.log(theme)

  return (
    <div className={style.container}>
      <Image src="/moon.svg" alt="" width={14} height={14} />
      <div className={style.ball}></div>
      <Image src="/sun.svg" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle