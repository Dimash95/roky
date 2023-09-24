import style from "./sort.module.scss";
import { useState, Dispatch, SetStateAction } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

interface Props {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}

export default function Sort({ sortBy, setSortBy }: Props) {
  const [isActive, setIsActive] = useState(false);
  const options = ["newest", "oldest", "relevance"];

  return (
    <div className={style.pageWrapper}>
      <div className={style.page} onClick={() => setIsActive(!isActive)}>
        {sortBy ? sortBy : "newest"}
        {isActive ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
        {isActive && (
          <ul className={style.pageList}>
            {options.map((option) => (
              <li
                className={style.pageItem}
                onClick={() => {
                  setSortBy(option), setIsActive(!isActive);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
