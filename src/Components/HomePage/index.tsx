import React from "react";
import PageContent from "../PageContent/index";
import PersonalInfo from "../PersonalInfo/index";
import s from "./styles.scss";

const HomePage = (): JSX.Element => {
  return (
    <ul className={s.pageDivision}>
      <li>
        <PersonalInfo />
      </li>
      <li>
        <PageContent />
      </li>
    </ul>
  );
};

export default HomePage;
