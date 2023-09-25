import axios from "axios";
import style from "./post.module.scss";
import { format } from "date-fns";
import { PostResponse } from "../entities/post-response";

const getItem = async (id: string) => {
  const apiKey = "703bf184-c4d8-4f55-a8ea-6a1d23f487e3";

  const decodeId = decodeURIComponent(id);

  const response = await axios.get(
    `https://content.guardianapis.com/${decodeId}?api-key=${apiKey}`
    // `https://content.guardianapis.com/search/${decodeId}?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=${apiKey}`
  );

  return response.data;
};

interface Props {
  params: {
    id: string;
  };
}

export default async function Post({ params: { id } }: Props) {
  const fetchedPost = (await getItem(id)) as PostResponse;
  const date = new Date(fetchedPost.response.content.webPublicationDate);
  const formattedDate = format(date, "d MMMM yyyy, hh:mm:ss a");

  return (
    <div className={style.post}>
      <h1 className={style.title}>{fetchedPost.response.content.webTitle}</h1>
      {/* <img src={fetchedPost.response.content.fields.thumbnail} alt="" /> */}
      <p className={style.date}>{formattedDate}</p>
      <a className={style.link} href={fetchedPost.response.content.webUrl}>
        read on Guardian
      </a>
    </div>
  );
}
