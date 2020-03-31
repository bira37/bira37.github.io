import React, { useState } from "react";
import globeImage from "../../assets/images/globe-icon.png";
import s from "./styles.scss";

interface ToggleButtonProps {
  message: string;
}

const ToggleButton = (props: ToggleButtonProps): JSX.Element => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = (): void => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <div className={s.centered}>
        <button className={s.button} onClick={handleClick}>
          {props.message}
        </button>
      </div>
      <div className={s.centered}>
        {visibility ? (
          <h3 className={s.toggleMessage}>
            Hello World! <img className={s.imgStyle} src={globeImage} alt="World globe" />
          </h3>
        ) : null}
      </div>
    </div>
  );
};

export default ToggleButton;
