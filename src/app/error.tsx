"use client";
import style from "./home.module.scss";

export default function Error({ error }: { error: Error }) {
  return <h1 className={style.error}>Oops!!! {error.message}</h1>;
}
