import React from "react";
import dashboardIcon from "../../img/dashboard-icon.svg";
import peopleIcon from "../../img/people-icon.svg";
import shoppingIcon from "../../img/shopping-icon.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className={"sidebar__item active"}>
        <img className="sidebar__item__icon" src={dashboardIcon} alt="" />
      </div>
      <div className="sidebar__item">
        <img src={shoppingIcon} alt="" />
      </div>
      <div className="sidebar__item">
        <img src={peopleIcon} alt="" />
      </div>
    </div>
  );
}
