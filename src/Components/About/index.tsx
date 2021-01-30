import React from "react";
import { TiPencil } from "react-icons/ti";
import s from "./styles.scss";

const About = (): JSX.Element => {
  return (
    <div id="about" className={s.contentStyle}>
      <h2>
        <span className={s.reactIconAlign}>
          <TiPencil />
        </span>
        About Me
      </h2>
      <p>
        Bachelor of Computer Science, passionate about competitive programming and solving
        algorithmic challenges. Currently working and improving my skills as a Backend Developer.
      </p>
    </div>
  );
};

export default About;
