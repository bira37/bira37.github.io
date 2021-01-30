import React from "react";
import { GiBalloons } from "react-icons/gi";
import AtCoderIcon from "../../assets/images/ac-icon.svg";
import CodechefIcon from "../../assets/images/cc-icon.svg";
import CodeforcesIcon from "../../assets/images/cf-icon.png";
import s from "./styles.scss";

const CompetitiveProgramming = (): JSX.Element => {
  return (
    <div id="competitive-programming" className={s.contentStyle}>
      <h2>
        <span className={s.reactIconAlign}>
          <GiBalloons />
        </span>
        Competitive Programming
      </h2>
      <p>
        Since 2016, I've been an active member of the competitive programming community, taking part
        on a large number of contests, regionally and globally. Even though I can no longer
        participate on most of the competitions, due to several factors, I'm still active on some of
        the largest online contest platforms and communities. You can check my profile on each of
        them clicking on the links below:
      </p>
      <div className={s.itemList}>
        <span className={`${s.itemStyle} ${s.linkWrapper} ${s.itemColumn}`} key="cf">
          <img
            className={`${s.invertColor} ${s.biggerIcon}`}
            src={CodeforcesIcon}
            alt="Codeforces Icon"
          />
          <div>
            <a
              href="https://codeforces.com/profile/bira37"
              className={`${s.linkStyle} ${s.noUnderscore}`}
            >
              Codeforces
            </a>
          </div>
        </span>
        <span className={`${s.itemStyle} ${s.linkWrapper} ${s.itemColumn}`} key="cc">
          <img
            className={`${s.invertColor} ${s.biggerIcon}`}
            src={CodechefIcon.toString()}
            alt="Codechef Icon"
          />
          <div>
            <a
              href="https://www.codechef.com/users/bira37"
              className={`${s.linkStyle} ${s.noUnderscore}`}
            >
              Codechef
            </a>
          </div>
        </span>
        <span className={`${s.itemStyle} ${s.linkWrapper} ${s.itemColumn}`} key="ac">
          <img
            className={`${s.invertColor} ${s.biggerIcon}`}
            src={AtCoderIcon.toString()}
            alt="AtCoder Icon"
          />
          <div>
            <a
              href="https://atcoder.jp/users/bira37"
              className={`${s.linkStyle} ${s.noUnderscore}`}
            >
              AtCoder
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
