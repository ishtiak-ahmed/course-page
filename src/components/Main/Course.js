import React from "react";
import playBtn from "../../img/play-btn.svg";

export default function Course({ item, img }) {
  return (
    <div
      className="course__item"
      style={{
        backgroundImage: `url(${item.url})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="course__item__info">
        <div>
          <h2>{item.name}</h2>
          <p>{item.lesson} lesson</p>
        </div>
        <div>
          <img className="play-btn" src={playBtn} alt="" />
        </div>
      </div>
      <div>{item.duration} min</div>
    </div>
  );
}
