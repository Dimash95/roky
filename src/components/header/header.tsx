import Link from "next/link";
import style from "./header.module.scss";

export function Header() {
  return (
    <div className={style.header}>
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
    </div>
  );
}
