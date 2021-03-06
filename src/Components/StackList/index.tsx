import React from "react";
import { IconType } from "react-icons/lib/cjs";
import s from "./styles.scss";

interface StackListProps {
  stackList: {
    name: string;
    icon: IconType | null;
    fakeIcon: any;
    invertColor: boolean;
    link?: string;
  }[];
}

const StackList = ({ stackList }: StackListProps): JSX.Element => {
  return (
    <div className={s.itemList}>
      {stackList.map((stack) => {
        return (
          <span className={`${s.itemStyle} ${s.linkWrapper}`} key={stack.name}>
            {stack.icon ? (
              <span className={s.localIconAlign}>
                <stack.icon />
              </span>
            ) : (
              <img
                className={`${s.localFakeIconAlign} ${stack.invertColor ? s.invertColor : ""}`}
                src={stack.fakeIcon}
                alt={stack.name}
              />
            )}
            <a href={stack.link ?? void 0} className={`${s.linkStyle} ${s.noUnderscore}`}>
              {stack.name}
            </a>
          </span>
        );
      })}
    </div>
  );
};

export default StackList;
