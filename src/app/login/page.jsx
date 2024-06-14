import React from 'react'
import style from "./login.module.css"
import GoogleIcon from '../icons/GoogleIcon';
import GithubIcon from '../icons/GithubIcon';
import FacebookIcon from '../icons/FacebookIcon';

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.socialButton}>
          <GoogleIcon />
          Sign in with Google
        </div>
        <div className={style.socialButton}>
          <GithubIcon strokeColor='white'/>
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

export default page