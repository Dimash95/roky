import style from "./filter.module.scss";
import { ChangeEvent, useState, Dispatch, SetStateAction } from "react";
import ItemsOnPage from "../items-on-page/items-on-page";
import Sort from "../sort/sort";

interface Props {
  searchValue: string;
  onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
  cleanInputValue: () => void;
  pageSize: string;
  setPageSize: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}

export default function Filter({
  searchValue,
  onChangeSearchInput,
  cleanInputValue,
  pageSize,
  setPageSize,
  sortBy,
  setSortBy,
}: Props) {
  return (
    <div className={style.filter}>
      <div className={style.search}>
        <img
          className={style.svg}
          src="/search.svg"
          alt="search"
          width={22}
          height={22}
        />

        <input
          className={style.input}
          onChange={onChangeSearchInput}
          value={searchValue}
          type="text"
          placeholder="Search..."
        />
        {searchValue ? (
          <button className={style.searchCleanButton} onClick={cleanInputValue}>
            x
          </button>
        ) : (
          ""
        )}
      </div>
      <div className={style.sortPage}>
        <Sort sortBy={sortBy} setSortBy={setSortBy} />

        <ItemsOnPage pageSize={pageSize} setPageSize={setPageSize} />
      </div>
    </div>
  );
}
