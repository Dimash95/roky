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

  async function displayData(query: string, page: number, pageSize: string) {
    const newsResponses = (await getContent(
      query,
      page,
      pageSize
    )) as NewsResponse;
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

  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState("4");

  useEffect(() => {
    displayData(searchValue, page, pageSize);
  }, [searchValue, page, pageSize]);

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

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
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>

      {news?.length ? (
        <ul className={style.cards}>
          {news.map((card) => (
            <li key={card.id}>
              <Card card={card} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={style.nothingFound}>Nothing found!</h2>
      )}

      <ul className={style.pageList}>
        <li className={style.pageItem} onClick={prevPage}>
          {"<"}
        </li>
        <li className={style.pageItem} onClick={nextPage}>
          {">"}
        </li>
      </ul>
    </div>
  );
}
