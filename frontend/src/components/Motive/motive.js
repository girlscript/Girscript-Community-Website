import React from "react";
import style from "./motive.module.css";

const Motive = () => {
  const arrayCards = [
    [
       "AWARENESS ABOUT TECH",
       "Help us reach tier-two and tier-three cities",
    ],
    [
        "AWARENESS ABOUT TECH",
        "Help us reach tier-two and tier-three cities",
    ],
    [
        "AWARENESS ABOUT TECH",
        "Help us reach tier-two and tier-three cities",
    ],
    [
        "AWARENESS ABOUT TECH",
        "Help us reach tier-two and tier-three cities",
    ],
    [
        "AWARENESS ABOUT TECH",
        "Help us reach tier-two and tier-three cities",
    ],
    [
        "AWARENESS ABOUT TECH",
        "Help us reach tier-two and tier-three cities",
    ],
  ];
  return (
    <main>
      <div id={style["hero"]}>
        <div id={style["heading"]}>
          <div id={style["title"]}>MISSION AND VISION</div>
        </div>
      </div>
      <div id={style["all-cards"]}>
        {arrayCards.map((element, i) => {
          return (
            <div
              className={`${style["card-item"]} ${style["card-item2"]} key={${i}}`}
            >
            <div className={style["clickable-card"]}>
                <div className={style["card-title"]}><i class="fas fa-grin-stars"></i>{element[0]}</div>
                <div className={style["card-content"]}>{element[1]}</div>
            </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Motive;
