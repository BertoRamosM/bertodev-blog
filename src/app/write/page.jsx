"use client";
import React, { useEffect, useState } from "react";
import style from "./write.module.css";
import PlusIcon from "../icons/PlusIcon";
import ImageIcon from "../icons/ImageIcon";
import VideoIcon from "../icons/VideoIcon";
import ExternalIcon from "../icons/ExternalIcon";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import MinusIcon from "../icons/MinusIcon";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import Image from "next/image";
import Loader from "../components/loader/Loader";
import SmallLoader from "../components/loader/SmallLoader";
import DOMPurify from "dompurify";

const WritePage = () => {
  const router = useRouter();
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const storage = getStorage(app);

    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploadProgress(100);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loader />;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "personal", //if not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Title"
        className={style.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={style.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="personal">personal</option>
        <option value="projects">projects</option>
        <option value="webdev">webdev</option>
        <option value="hacks">hacks</option>
      </select>
      <div className={style.editor}>
        <input
          type="file"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <button className={style.button}>
          <label htmlFor="image">
            <ImageIcon className={style.icon} strokeColor="var(--text)" />
          </label>
        </button>

        {uploadProgress > 0 && uploadProgress < 100 && <SmallLoader />}
        {media && uploadProgress === 100 && (
          <div className={style.imagePreview}>
            <Image
              src={media}
              alt="Uploaded media"
              className={style.uploadedImg}
              height={100}
              width={100}
            />
          </div>
        )}

        <ReactQuill
          className={style.textArea}
          theme="bubble"
          value={value}
          onChange={(html) => setValue(DOMPurify.sanitize(html))}
          placeholder="Tell your story..."
        />
      </div>

      <button className={style.publishButton} onClick={handleSubmit}>
        Publish
      </button>

      <div className={style.preview}>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
};

export default WritePage;
