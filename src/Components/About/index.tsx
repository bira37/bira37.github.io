import React from "react";
import { TiPencil } from "react-icons/ti";
import s from "./styles.scss";

const About = (): JSX.Element => {
  return (
    <div className={s.contentStyle}>
      <h2>
        <span className={s.reactIconAlign}>
          <TiPencil />
        </span>
        About Me
      </h2>
    </div>
  );
};

export default About;
