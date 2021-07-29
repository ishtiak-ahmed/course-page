import Course from "./Course";
import data from "../../course-data";

export default function Main() {
  return (
    <div className="main">
      <div className="main__nav">
        <div>
          <h1>Courses</h1>
        </div>
        <div>
          <span className="main__nav__item active">Popular</span>
          <span className="main__nav__item">Favorite</span>
          <span className="main__nav__item">New</span>
        </div>
      </div>
      <div className="main__body">
        {data.map((item) => (
          <Course item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
