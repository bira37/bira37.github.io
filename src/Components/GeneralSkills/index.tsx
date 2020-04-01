import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import SkillList from "../SkillList/index";
import s from "./styles.scss";

const GeneralSkills = (): JSX.Element => {
  return (
    <div className={s.contentStyle}>
      <h2>
        <span className={s.reactIconAlign}>
          <FaRegCheckSquare />
        </span>
        General Skills
      </h2>
      <SkillList
        skillList={[
          "Teamwork",
          "Problem Solving",
          "Algorithms",
          "Data Structures",
          "Adaptability",
          "Curiosity",
          "Persistence"
        ]}
      />
    </div>
  );
};

export default GeneralSkills;
