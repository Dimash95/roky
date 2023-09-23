import style from "./card.module.scss";
import { News } from "@/app/entities/news";

interface Props {
  card: News;
}

export default function Card({ card }: Props) {
  return (
    <div className={style.card}>
      <img src={card.img} alt="IMG NEWS" width={200} height={100} />

      <p className={style.date}>{card.date}</p>
      <p>{card.title}</p>
      <button>Details</button>
    </div>
  );
}
