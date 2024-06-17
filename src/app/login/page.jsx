'use client'
import React, { useEffect } from 'react'
import style from "./login.module.css"
import GoogleIcon from '../icons/GoogleIcon';
import GithubIcon from '../icons/GithubIcon';
import FacebookIcon from '../icons/FacebookIcon';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '../components/loader/Loader';

const LoginPage = () => {

  const router = useRouter()

  const { data, status } = useSession()

    useEffect(() => {
      if (status === "authenticated") {
        router.push("/");
      }
    }, [status, router]);
  
  if (status === "loading") {
  return <Loader />
  }

  

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {status === "loading" ? (
          <Loader />
        ) : (
          <>
            <div
              className={style.socialButton}
              onClick={() => signIn("google")}
            >
              <GoogleIcon />
              Sign in with Google
            </div>
            <div className={style.socialButton}>
              <GithubIcon
                strokeColor="white"
                onClick={() => signIn("github")}
              />
              Sign in with Github
            </div>
            <div className={style.socialButton}>
              <FacebookIcon />
              Sign in with Facebook
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;