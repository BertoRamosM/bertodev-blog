'use client'
import React, { useState } from 'react'
import style from './write.module.css'
import Image from 'next/image';
import PlusIcon from '../icons/PlusIcon';
import ImageIcon from '../icons/ImageIcon';
import VideoIcon from '../icons/VideoIcon';
import ExternalIcon from '../icons/ExternalIcon';

const WritePage = () => {

  const [open, setOpen] = useState(false)
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
      </div>
    </div>
  );
}

export default WritePage;