import React from "react";
import Course from "./Course";
import data from "../../course-data";
import illustration from "../../img/illustration-course.png";

export default function Main() {
  return (
    <div className="main">
      <div className="main__nav">
        <div>
          <h1>Courses</h1>
          <img src={"https://postimg.cc/K4zV4mGj"} alt="" />
        </div>
        <div>
          <span className="main__nav__item active">Popular</span>
          <span className="main__nav__item">Favorite</span>
          <span className="main__nav__item">New</span>
        </div>
      </div>
      <div className="main__body">
        <div className="main__body__inner">
          {data.map((item) => (
            <Course item={item} key={item.id} img={illustration} />
          ))}
        </div>
      </div>
    </div>
  );
}
