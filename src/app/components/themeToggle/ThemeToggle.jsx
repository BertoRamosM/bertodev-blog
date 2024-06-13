"use client"
import Image from "next/image"
import style from "./themeToggle.module.css"
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
const ThemeToggle = () => {

  const { theme, toggle } = useContext(ThemeContext)
  

  return (
    <div
      className={style.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { right: 1, backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.svg" alt="" width={14} height={14} />
      <div
        className={style.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.svg" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle