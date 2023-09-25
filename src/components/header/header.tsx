import Link from "next/link";
import style from "./header.module.scss";

export function Header() {
  return (
    <div className={style.header}>
      <Link href="/" className={style.link}>
        Home
      </Link>
      <Link href="/about" className={style.link}>
        About
      </Link>
    </div>
  );
}
