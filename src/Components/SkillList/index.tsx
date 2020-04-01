import React from "react";
import { MdCheck } from "react-icons/md";
import s from "./styles.scss";

interface SkillListProps {
  skillList: string[];
}
const SkillList = ({ skillList }: SkillListProps): JSX.Element => {
  return (
    <div className={s.itemList}>
      {skillList.map((skill) => {
        return (
          <span className={`${s.itemStyle} ${s.linkWrapper}`} key={skill}>
            <a href={void 0} className={s.linkStyle}>
              <span className={`${s.reactIconAlign} ${s.checkMarkPadding}`}>
                <MdCheck />
              </span>
              <span className={s.underline}>{skill}</span>
            </a>
          </span>
        );
      })}
    </div>
  );
};

export default SkillList;
