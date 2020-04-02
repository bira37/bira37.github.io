import React from "react";
import { DiJavascript1, DiPostgresql } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaSass
} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import cppIcon from "../../assets/images/cpp-icon.png";
import tsIcon from "../../assets/images/typescript-icon.svg";
import StackList from "../StackList/index";
import s from "./styles.scss";

const ProgrammingSkills = (): JSX.Element => {
  return (
    <div id="programming-skills" className={s.contentStyle}>
      <h2>
        <span className={s.reactIconAlign}>
          <FaLaptopCode />
        </span>
        Programming Skills
      </h2>
      <StackList
        stackList={[
          {
            name: "JavaScript",
            icon: DiJavascript1,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "Node",
            icon: FaNodeJs,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "TypeScript",
            icon: null,
            fakeIcon: tsIcon,
            invertColor: true
          },
          {
            name: "C++",
            icon: null,
            fakeIcon: cppIcon,
            invertColor: false
          },
          {
            name: "PostgreSQL",
            icon: DiPostgresql,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "Python",
            icon: FaPython,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "Git",
            icon: FaGitAlt,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "GitHub",
            icon: FaGithub,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "NPM",
            icon: FaNpm,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "HTML",
            icon: TiHtml5,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "CSS",
            icon: FaCss3Alt,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "SASS",
            icon: FaSass,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "React",
            icon: FaReact,
            fakeIcon: null,
            invertColor: false
          }
        ]}
      />
    </div>
  );
};

export default ProgrammingSkills;
