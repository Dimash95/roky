"use client";
import style from "./home.module.scss";
import { useEffect, useState } from "react";
import { getContent } from "./api/get-content/get-content";
import Card from "../components/card/card";
import { NewsResponse } from "./entities/news-response";
import { News } from "./entities/news";

export default function Home() {
  const [news, setNews] = useState<News[]>();

  async function displayData() {
    const newsResponses = (await getContent()) as NewsResponse;
    const fetchedNews = mapNewsResponse(newsResponses);
    if (fetchedNews) setNews(fetchedNews);
  }

  const mapNewsResponse = (payload: NewsResponse): News[] =>
    payload.response.results.map((result) => ({
      id: result.id,
      img: result.webUrl,
      date: result.webPublicationDate,
      title: result.webTitle,
    }));

  useEffect(() => {
    displayData();
  }, []);

  return (
    <div className={style.home}>
      <h1 className={style.title}>Home</h1>
      <ul className={style.cards}>
        {news?.map((card) => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
