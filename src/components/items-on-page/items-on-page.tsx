import style from "./items-on-page.module.scss";
import { useState, Dispatch, SetStateAction } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

interface Props {
  pageSize: string;
  setPageSize: Dispatch<SetStateAction<string>>;
}

export default function ItemsOnPage({ pageSize, setPageSize }: Props) {
  const [isActive, setIsActive] = useState(false);
  const options = ["4", "8", "12"];

  return (
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
  );
}
