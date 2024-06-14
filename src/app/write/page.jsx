"use client";
import React, { useState } from "react";
import style from "./write.module.css";
import PlusIcon from "../icons/PlusIcon";
import ImageIcon from "../icons/ImageIcon";
import VideoIcon from "../icons/VideoIcon";
import ExternalIcon from "../icons/ExternalIcon";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={style.container}>
      <input type="text" placeholder="Title" />
      <div className={style.editor}>
        <button className={style.button} onClick={() => setOpen(!open)}>
          <PlusIcon className={style.icon} strokeColor="var(--text)" />
        </button>
        {open && (
          <div className={style.add}>
            <button className={style.button}>
              <ImageIcon className={style.icon} strokeColor="var(--text)" />
            </button>
            <button className={style.button}>
              <ExternalIcon className={style.icon} strokeColor="var(--text)" />
            </button>
            <button className={style.button}>
              <VideoIcon className={style.icon} strokeColor="var(--text)" />
            </button>
          </div>
        )}
        <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..."/>
      </div>
    </div>
  );
};

export default WritePage;
