import React from "react";
import { IconType } from "react-icons/lib/cjs";
import s from "./styles.scss";

interface InfoContainerProps {
  link: string;
  name: string;
  eraseUnderscore: boolean;
  icon: IconType | null;
  fakeIcon: any;
}

const InfoContainer = (props: InfoContainerProps): JSX.Element => {
  return (
    <div className={s.contentStyle}>
      <div className={s.linkWrapper}>
        <div>
          {props.icon ? (
            <props.icon size="2em" />
          ) : (
            <img className={s.fakeIconStyle} src={props.fakeIcon} alt="icon"></img>
          )}
        </div>
        <a
          className={`${s.linkStyle} ${props.eraseUnderscore ? s.noUnderscore : null}`}
          href={props.eraseUnderscore ? void 0 : props.link}
          target="_blank"
          rel="noopener noreferrer"
          id={props.name}
        >
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default InfoContainer;
