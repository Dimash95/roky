import style from "./card.module.scss";
import Link from "next/link";
import { News } from "@/app/entities/news";
import { format } from "date-fns";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  card: News;
}

export default function Card({ card }: Props) {
  const date = new Date(card.date);
  const formattedDate = format(date, "d MMMM yyyy, hh:mm:ss a");

  return (
    <div className={style.card}>
      <img src={card.img} alt="IMG NEWS" />

      <p className={style.date}>{formattedDate}</p>
      <p className={style.title}>{card.title}</p>

      <Link
        className={style.details}
        key={card.id}
        href={`${encodeURIComponent(card.id)}`}
      >
        {"Details"}
        <BsArrowRightShort />
      </Link>
    </div>
  );
}
