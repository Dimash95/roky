import style from "./card.module.scss";
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
      <img src={card.img} alt="IMG NEWS" width={200} height={100} />

      <p className={style.date}>{formattedDate}</p>
      <p className={style.title}>{card.title}</p>

      <a href={card.img} target="blank">
        {"Details"}
        <BsArrowRightShort />
      </a>
    </div>
  );
}
