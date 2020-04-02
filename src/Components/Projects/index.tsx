import React from "react";
import { FaFolder } from "react-icons/fa";
import s from "./styles.scss";

const Projects = (): JSX.Element => {
  return (
    <div id="projects" className={s.contentStyle}>
      <h2>
        <span className={s.reactIconAlign}>
          <FaFolder />
        </span>
        Projects
      </h2>
      <ul>
        <li className={s.linkWrapper}>
          <a
            href="https://github.com/bira37/cp-solutions-library"
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.itemTitle} ${s.linkStyle}`}
          >
            Competitive Programming Solutions' Library
          </a>
          : A Github Repository containing solutions for more than 1000 problems on competitive
          programming that can be found at many contest websites.
        </li>
        <li className={s.linkWrapper}>
          <a
            href="https://bira37.github.io/cp-guide"
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.itemTitle} ${s.linkStyle}`}
          >
            Competitive Programming Study Guide For C++ Users
          </a>
          : Guide created in order to index a large amount of content related to competitive
          programming in one place. It has links to tutorials, sites to practice, other
          complementary guides and tools (Currently working to reformulate the layout).
        </li>
        <li className={s.linkWrapper}>
          <a
            href="https://github.com/bira37/TCC"
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.itemTitle} ${s.linkStyle}`}
          >
            Ear Detection Using Convolutional Neural Networks
          </a>
          : Project where I applied Machine Learning to solve the ear detection task on colored
          images. This work also presents a summary of other ear detection methods, studied and used
          in recent years, comparing them with the method proposed by the project.
        </li>
      </ul>
    </div>
  );
};

export default Projects;