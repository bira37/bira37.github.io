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
      <p>Hello, my name is Ubiratan, and I love programming.</p>
      <p>
        The first time I wrote a line of code was at college. Up to that point I didn't have much
        contact with programming andtechnology, aside from playing online games and sometimes
        opening my router settings following some crazy tutorial to play something. I was fascinated
        and couldn't wait to learn more about that.
      </p>
      <p>
        I started with Pascal and C, to learn the fundamentals about algorithms and logic. After
        that I changed to C++ and joined the competitive programming community. I spent my whole
        graduation participating on programming contests, improving my problem solving skills and my
        data structures and algorithms knowledge. In parallel, I started to share this knowledge
        with my classmates and as a volunteer instructor of programming classes for elementary and
        high school students. Near the end of my graduation I learned Python and made a project on
        Computer Vision and Machine Learning.
      </p>
      <p>
        Currently, I hold a Bachelor's degree in Computer Science and started to discover the web
        development ecosystem. I am a Backend Developer, working with Node, TypeScript, Postgres,
        GitLab and Docker. I am looking to improve my skills on the field, and also pursuing more
        advanced knowledge on Frontend technologies. My goal is to always improve myself and write
        even better code.
      </p>
    </div>
  );
};

export default About;
