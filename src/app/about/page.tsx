import style from "./about.module.scss";

export default function About() {
  return (
    <div className={style.about}>
      <h1>Stack:</h1>
      <ul>
        <li>Next.js</li>
        <li>Sas/Css.module</li>
        <li>Axios</li>
        <li>React-icons</li>
        <li>date-fns</li>
        <li>Vercel</li>
      </ul>
    </div>
  );
}
