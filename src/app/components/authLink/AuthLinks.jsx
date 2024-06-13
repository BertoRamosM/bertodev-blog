import Link from "next/link";
import style from "./authLinks.module.css";
const AuthLinks = () => {
  const status = "no"

  return <>{status === "no" ? <Link href="#">Log in</Link> :
    <>
      <Link href="#">Write</Link>
      <span className={style.link}>Logout</span>
    </>
  }</>;
};

export default AuthLinks;