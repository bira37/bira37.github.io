import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import s from "./styles.scss";

const ProgrammingSkills = (): JSX.Element => {
  return (
    <div className={s.contentStyle}>
      <h2>
        <span className={s.reactIconAlign}>
          <FaLaptopCode />
        </span>
        Coding Skills
      </h2>
    </div>
  );
};

export default ProgrammingSkills;
