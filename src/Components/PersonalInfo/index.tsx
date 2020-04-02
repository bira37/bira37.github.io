import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import diplomaIcon from "../../assets/images/diploma-icon.png";
import profileImage from "../../assets/images/profile.jpeg";
import InfoContainer from "../InfoContainer/index";
import s from "./styles.scss";

const PersonalInfo = (): JSX.Element => {
  return (
    <ul className={s.contentStyle}>
      <li>
        <img className={s.imageStyle} src={profileImage} alt="Profile Image" />
      </li>
      <li>
        <p className={s.infoFormatter}>Ubiratan Neto</p>
      </li>
      <li>
        <InfoContainer
          link=""
          name="Bachelor of Computer Science"
          icon={null}
          fakeIcon={diplomaIcon}
          eraseUnderscore={true}
        />
      </li>
      <li>
        <InfoContainer
          link=""
          name="Backend Developer"
          icon={MdComputer}
          fakeIcon={null}
          eraseUnderscore={true}
        />
      </li>
      <li>
        <ul className={s.socialMedia}>
          <li>
            <InfoContainer
              link="mailto:ubiratanneto37@gmail.com"
              name="Email"
              icon={MdMailOutline}
              fakeIcon={null}
              eraseUnderscore={false}
            />
          </li>
          <li>
            <InfoContainer
              link="https://www.linkedin.com/in/bira37/?locale=en_US"
              name="LinkedIn"
              icon={FaLinkedin}
              fakeIcon={null}
              eraseUnderscore={false}
            />
          </li>
          <li>
            <InfoContainer
              link="https://github.com/bira37"
              name="GitHub"
              icon={GoMarkGithub}
              fakeIcon={null}
              eraseUnderscore={false}
            />
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default PersonalInfo;
