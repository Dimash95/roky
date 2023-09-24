import style from "./filter.module.scss";
import { ChangeEvent, useState, Dispatch, SetStateAction } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

interface Props {
  searchValue: string;
  onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
  cleanInputValue: () => void;
  pageSize: string;
  setPageSize: Dispatch<SetStateAction<string>>;
}

export default function Filter({
  searchValue,
  onChangeSearchInput,
  cleanInputValue,
  pageSize,
  setPageSize,
}: Props) {
  const [isActive, setIsActive] = useState(false);
  const options = ["4", "8", "12"];

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
        <div className={style.pageWrapper}>
          <div className={style.page} onClick={() => setIsActive(!isActive)}>
            {pageSize ? "Items on page " + pageSize : "Items on page 4"}
            {isActive ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
            {isActive && (
              <ul className={style.pageList}>
                {options.map((option) => (
                  <li
                    className={style.pageItem}
                    onClick={() => {
                      setPageSize(option), setIsActive(!isActive);
                    }}
                  >
                    {"Items on page " + option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
