import { SiCsharp } from "@react-icons/all-files/si/SiCsharp";
import { SiDotNet } from "@react-icons/all-files/si/SiDotNet";
import { SiGo } from "@react-icons/all-files/si/SiGo";
import { SiKubernetes } from "@react-icons/all-files/si/SiKubernetes";
import React from "react";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FaDocker, FaGithub, FaLaptopCode, FaNodeJs, FaPython } from "react-icons/fa";
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
        Tech Skills
      </h2>
      <StackList
        stackList={[
          {
            name: "NodeJS",
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
            name: "GitHub",
            icon: FaGithub,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "C#",
            icon: SiCsharp,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: ".NET",
            icon: SiDotNet,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "Go",
            icon: SiGo,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "Kubernetes",
            icon: SiKubernetes,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "Docker",
            icon: FaDocker,
            fakeIcon: null,
            invertColor: false
          },
          {
            name: "MongoDB",
            icon: DiMongodb,
            fakeIcon: null,
            invertColor: false
          }
        ]}
      />
    </div>
  );
};

export default ProgrammingSkills;
