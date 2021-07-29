import React from "react";

export default function SidebarItem({ className, name }) {
  return (
    <div className={"sidebar__item " + className}>
      {/* <img src={"../../img/" + name + "-icon.svg"} alt="" /> */}
      {/* <img src={eval(name + "Icon")} alt="" /> */}
      {name}
    </div>
  );
}
