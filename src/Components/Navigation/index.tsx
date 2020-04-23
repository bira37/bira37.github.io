import React, { useEffect, useState } from "react";
import { FaFolder, FaLaptopCode, FaRegCheckSquare } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { TiPencil } from "react-icons/ti";
import s from "./styles.scss";

const Navigation = (): JSX.Element | null => {
  const [displayElement, setDisplayElement] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = (): void => {
      setDisplayElement(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
  });

  return displayElement ? (
    <div className={s.contentStyle}>
      <span className={s.linkWrapper}>
        <a href="#about">
          <TiPencil className={`${s.iconLink} ${s.linkStyle}`} />
        </a>
      </span>
      <span className={s.linkWrapper}>
        <a href="#programming-skills">
          <FaLaptopCode className={`${s.iconLink} ${s.linkStyle}`} />
        </a>
      </span>
      <span className={s.linkWrapper}>
        <a href="#general-skills">
          <FaRegCheckSquare className={`${s.iconLink} ${s.linkStyle}`} />
        </a>
      </span>
      <span className={s.linkWrapper}>
        <a href="#projects">
          <FaFolder className={`${s.iconLink} ${s.linkStyle}`} />
        </a>
      </span>
      <span className={s.linkWrapper}>
        <a href="#app">
          <IoIosArrowUp className={`${s.iconLink} ${s.linkStyle}`} />
        </a>
      </span>
    </div>
  ) : null;
};

export default Navigation;
