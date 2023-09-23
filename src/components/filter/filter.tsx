import style from "./filter.module.scss";
import { ChangeEvent } from 'react';

interface Props {
  searchValue: string;
  onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
  cleanInputValue: () => void;
}

export default function Filter({
  searchValue,
  onChangeSearchInput,
  cleanInputValue,
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
        <div className={style.sort}>sort by newest</div>
        <div className={style.page}>items on page</div>
      </div>
    </div>
  );
}
