import React from "react";
import About from "../About/index";
import GeneralSkills from "../GeneralSkills/index";
import ProgrammingSkills from "../ProgrammingSkills/index";
import Projects from "../Projects/index";
import s from "./styles.scss";

const PageContent = (): JSX.Element => {
  return (
    <div className={s.contentStyle}>
      <About />
      <ProgrammingSkills />
      <GeneralSkills />
      <Projects />
    </div>
  );
};

export default PageContent;
