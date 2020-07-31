import React from "react";
import icon from "./components/Icon"; // Tell webpack this JS file uses this image

function Icon() {
  return <img src={icon} alt="icon" />;
}
export default Icon;
