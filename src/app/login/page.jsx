'use client'
import React from 'react'
import style from "./login.module.css"
import GoogleIcon from '../icons/GoogleIcon';
import GithubIcon from '../icons/GithubIcon';
import FacebookIcon from '../icons/FacebookIcon';
import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {

  const {data, status} = useSession()
  console.log(data, status)

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.socialButton} onClick={()=> signIn("google")}>
          <GoogleIcon />
          Sign in with Google
        </div>
        <div className={style.socialButton}>
          <GithubIcon strokeColor='white' onClick={()=> signIn('github')} />
          Sign in with Github
        </div>
        <div className={style.socialButton}>
          <FacebookIcon />
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
}

export default LoginPage;