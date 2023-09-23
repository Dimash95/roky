"use client";
import style from "./home.module.scss";
import { useEffect, useState, ChangeEvent } from "react";
import { getContent } from "./api/get-content/get-content";
import Card from "../components/card/card";
import { NewsResponse } from "./entities/news-response";
import { News } from "./entities/news";
import Filter from "@/components/filter/filter";

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

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const cleanInputValue = () => {
    setSearchValue("");
  };

  return (
    <div className={style.home}>
      <div className={style.titleFilterWrapper}>
        <h1 className={style.title}>
          {searchValue ? `Search: "${searchValue}"` : "Home"}
        </h1>
        <Filter
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          cleanInputValue={cleanInputValue}
        />
      </div>

      {news?.length ? (
        <ul className={style.cards}>
          {news
            ?.filter((item) =>
              item.title
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((card) => (
              <li key={card.id}>
                <Card card={card} />
              </li>
            ))}
        </ul>
      ) : (
        "Nothing found!"
      )}
    </div>
  );
}
